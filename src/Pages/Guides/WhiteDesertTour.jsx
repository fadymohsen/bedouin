import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../../utils/Breadcrumbs';
import './scss/style.scss';

export default function WhiteDesertTour() {
  return (
    <div className="guide-page">
      <Breadcrumbs items={[
        { name: 'Home', url: 'https://bedouintrails.com/' },
        { name: 'White Desert Tour from Cairo', url: 'https://bedouintrails.com/white-desert-tour-from-cairo' }
      ]} />
      <Helmet>
        <title>White Desert Tour from Cairo | 2 Day White Desert Tour Egypt</title>
        <meta name="description" content="Book a White Desert tour from Cairo with Bedouin Trails. Our popular 2 day White Desert tour Egypt package includes 4x4 transport, Bahariya Oasis, Black Desert, Crystal Mountain, White Desert camping under the stars, and all meals. Departs daily from Cairo." />
        <meta name="keywords" content="White Desert tour from Cairo, 2 day White Desert tour Egypt, White Desert Egypt, White Desert Safari, White Desert Camping, overnight White Desert tour, Cairo to White Desert, Bahariya Oasis Tour, Egypt Desert Tour, Egypt Safari Tours, Western Desert Egypt, Black Desert Egypt tour" />
        <link rel="canonical" href="https://bedouintrails.com/white-desert-tour-from-cairo" />
        <link rel="alternate" hreflang="en" href="https://bedouintrails.com/white-desert-tour-from-cairo" />
        <link rel="alternate" hreflang="ar" href="https://bedouintrails.com/white-desert-tour-from-cairo" />
        <link rel="alternate" hreflang="x-default" href="https://bedouintrails.com/white-desert-tour-from-cairo" />
        <meta property="og:title" content="White Desert Tour from Cairo | 2 Day Tour with Camping" />
        <meta property="og:description" content="2 day White Desert tour from Cairo including Bahariya Oasis, Black Desert, Crystal Mountain, and overnight camping. Book with Bedouin Trails." />
        <meta property="og:url" content="https://bedouintrails.com/white-desert-tour-from-cairo" />
        <meta property="og:image" content="https://bedouintrails.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="White Desert Tour from Cairo | 2 Day Egypt Desert Tour" />
        <meta name="twitter:description" content="2 day White Desert tour from Cairo with Bahariya Oasis, camping, and all meals included." />
        <meta name="twitter:image" content="https://bedouintrails.com/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            "name": "2 Day White Desert Tour from Cairo",
            "description": "A 2-day White Desert safari tour from Cairo including Bahariya Oasis, Black Desert, Crystal Mountain, and overnight camping in the White Desert under the stars.",
            "touristType": ["Adventure seekers", "Nature lovers", "Photographers"],
            "url": "https://bedouintrails.com/white-desert-tour-from-cairo",
            "itinerary": {
              "@type": "ItemList",
              "numberOfItems": 2,
              "description": "2 days from Cairo to White Desert via Bahariya Oasis"
            },
            "provider": {
              "@type": "TravelAgency",
              "name": "Bedouin Trails",
              "url": "https://bedouintrails.com"
            }
          })}
        </script>
      </Helmet>

      <div className="guide-hero" style={{ backgroundImage: "url('/img/bg.webp')" }}>
        <h1>White Desert Tour from Cairo — 2 Day Egypt Desert Safari</h1>
      </div>

      <div className="guide-content">
        <p>
          The White Desert is Egypt's most spectacular natural wonder — a surreal landscape of chalk-white rock formations sculpted by wind over millions of years. Our 2 day White Desert tour from Cairo is the most popular way to experience this otherworldly destination, combining the White Desert with Bahariya Oasis, the Black Desert, and Crystal Mountain in one unforgettable trip.
        </p>

        <h2>2 Day White Desert Tour Itinerary</h2>

        <h3>Day 1: Cairo to White Desert</h3>
        <ol>
          <li><strong>Morning departure from Cairo</strong> — pickup from your hotel at 7:00 AM. Drive approximately 4 hours on the Western Desert highway to Bahariya Oasis</li>
          <li><strong>Bahariya Oasis</strong> — lunch in the oasis town and visit the local market</li>
          <li><strong>Black Desert</strong> — explore the volcanic black hills and dark dolerite-covered mountains</li>
          <li><strong>Crystal Mountain</strong> — stop at this unique quartz crystal ridge rising from the desert floor</li>
          <li><strong>White Desert arrival</strong> — enter the White Desert National Park and explore the iconic chalk formations (mushroom rocks, chicken rock, and more)</li>
          <li><strong>Desert camping</strong> — traditional Bedouin dinner cooked over open fire, stargazing under some of the darkest skies on Earth</li>
        </ol>

        <h3>Day 2: White Desert to Cairo</h3>
        <ol>
          <li><strong>Sunrise in the White Desert</strong> — watch the sunrise paint the white formations in gold, pink, and orange</li>
          <li><strong>Morning exploration</strong> — explore more White Desert formations and take photos in the morning light</li>
          <li><strong>Breakfast</strong> — fresh tea and traditional desert breakfast</li>
          <li><strong>Return via Bahariya Oasis</strong> — optional visit to Bahariya hot springs</li>
          <li><strong>Arrive Cairo</strong> — approximately 6:00 PM</li>
        </ol>

        <div className="highlight-box">
          <p>Our 2 day White Desert tour is perfect for travellers with limited time who want to experience the best of Egypt's Western Desert. It's our most booked tour — departing daily from Cairo year-round (October–April recommended).</p>
        </div>

        <h2>What's Included</h2>
        <ul>
          <li>Hotel pickup and drop-off in Cairo</li>
          <li>4x4 Toyota Land Cruiser with experienced Bedouin driver/guide</li>
          <li>All meals: 1 lunch, 1 dinner, 1 breakfast (vegetarian options available)</li>
          <li>Desert camping equipment: sleeping bags, mats, blankets</li>
          <li>White Desert National Park entry fees</li>
          <li>Unlimited water and hot beverages</li>
          <li>English-speaking guide</li>
        </ul>

        <h2>What's Not Included</h2>
        <ul>
          <li>Personal travel insurance</li>
          <li>Tipping (optional but appreciated)</li>
          <li>Alcoholic beverages</li>
        </ul>

        <h2>How to Get to the White Desert from Cairo</h2>
        <p>
          The White Desert is located approximately 450 km southwest of Cairo in the Western Desert. The drive takes about 4 hours via the Cairo-Bahariya highway. There is no public transport to the White Desert — it can only be reached by private 4x4 vehicle with an experienced guide. Bedouin Trails provides door-to-door transport from any Cairo hotel.
        </p>

        <h2>Best Time to Visit the White Desert</h2>
        <p>
          The best months for a White Desert tour are <strong>October through April</strong>. During these months, daytime temperatures range from 18–28°C, perfect for exploration and photography. Nights are cool (5–15°C) but comfortable with proper camping gear. Avoid June through August when temperatures can exceed 45°C.
        </p>

        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>

          <div className="faq-item">
            <h3>How much does a 2 day White Desert tour cost?</h3>
            <p>Pricing depends on group size. Solo travellers, couples, and private groups are all welcome. Contact us for current rates — all tours include transport, meals, camping, and guide.</p>
          </div>

          <div className="faq-item">
            <h3>Is the White Desert safe?</h3>
            <p>Yes. The White Desert is a well-visited national park. Our Bedouin guides have decades of desert experience, and we carry full safety and communication equipment on every trip.</p>
          </div>

          <div className="faq-item">
            <h3>Can I extend to a 3-day tour?</h3>
            <p>Absolutely. We offer 3-day, 4-day, and longer multi-day desert treks that include additional destinations like Djara Cave, the Great Sand Sea, and Agabat Valley.</p>
          </div>

          <div className="faq-item">
            <h3>Is it suitable for children?</h3>
            <p>Yes, families are welcome. The 2 day White Desert tour is suitable for children aged 5 and up. We adjust the pace and activities for families.</p>
          </div>
        </div>

        <div className="cta-section">
          <p>Ready to explore the White Desert?</p>
          <Link to="/journeys" className="cta-button">Book Your White Desert Tour</Link>
        </div>
      </div>
    </div>
  );
}
