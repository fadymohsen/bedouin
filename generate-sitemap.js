import fs from 'fs';

const API_BASE_URL = 'https://api.bedouintrails.com/api';
const SITE_URL = 'https://bedouintrails.com';
const today = new Date().toISOString().split('T')[0];

async function fetchJSON(endpoint) {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: { 'Accept': 'application/json', 'lang': 'ar' }
  });
  const json = await res.json();
  const data = json.data;
  if (Array.isArray(data)) return data;
  if (data && typeof data === 'object') {
    const firstArray = Object.values(data).find(v => Array.isArray(v));
    return firstArray || [];
  }
  return [];
}

async function generateSitemap() {
  const [trips, articles] = await Promise.all([
    fetchJSON('/traps'),
    fetchJSON('/articles'),
  ]);

  const staticPages = [
    { loc: '/', changefreq: 'weekly', priority: '1.0' },
    { loc: '/journeys', changefreq: 'weekly', priority: '0.9' },
    { loc: '/about', changefreq: 'monthly', priority: '0.8' },
    { loc: '/blogs', changefreq: 'weekly', priority: '0.8' },
    { loc: '/faq', changefreq: 'monthly', priority: '0.7' },
    { loc: '/auth', changefreq: 'monthly', priority: '0.5' },
  ];

  const tripPages = trips.map(trip => ({
    loc: `/cardpage/${trip.id}`,
    changefreq: 'weekly',
    priority: '0.7',
  }));

  const articlePages = articles.map(article => ({
    loc: `/blogs?article=${article.id}`,
    changefreq: 'monthly',
    priority: '0.6',
  }));

  const allPages = [...staticPages, ...tripPages, ...articlePages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${SITE_URL}${page.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

  fs.writeFileSync('public/sitemap.xml', xml);
  console.log(`Sitemap generated with ${allPages.length} URLs:`);
  console.log(`  - ${staticPages.length} static pages`);
  console.log(`  - ${tripPages.length} trips`);
  console.log(`  - ${articlePages.length} articles`);
}

generateSitemap().catch(console.error);
