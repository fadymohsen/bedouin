import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../../utils/Breadcrumbs';
import './scss/style.scss';

export default function CamelTrek() {
  return (
    <div className="guide-page">
      <Breadcrumbs items={[
        { name: 'Home', url: 'https://bedouintrails.com/' },
        { name: 'Camel Trek', url: 'https://bedouintrails.com/camel-trek' }
      ]} />
      <Helmet>
        <title>Camel Trek Egypt | Multi-Day Desert Trekking in the Western Desert</title>
        <meta name="description" content="Experience an authentic camel trek in Egypt's Western Desert. Multi-day desert treks through the White Desert, Black Desert, and Sahara with Bedouin guides. Book your camel trekking adventure from Cairo with Bedouin Trails." />
        <meta name="keywords" content="Camel Trek Egypt, Multi Day Desert Trek, desert trekking Egypt, camel trekking Western Desert, Sahara Hiking Tour, camel safari Egypt, desert camel ride, White Desert camel trek, Bahariya Oasis camel tour, Egypt Desert Tour, desert adventure Egypt" />
        <link rel="canonical" href="https://bedouintrails.com/camel-trek" />
        <link rel="alternate" hreflang="en" href="https://bedouintrails.com/camel-trek" />
        <link rel="alternate" hreflang="ar" href="https://bedouintrails.com/camel-trek" />
        <link rel="alternate" hreflang="x-default" href="https://bedouintrails.com/camel-trek" />
        <meta property="og:title" content="Camel Trek Egypt | Multi-Day Desert Trekking" />
        <meta property="og:description" content="Multi-day camel treks through Egypt's White Desert and Western Desert with experienced Bedouin guides." />
        <meta property="og:url" content="https://bedouintrails.com/camel-trek" />
        <meta property="og:image" content="https://bedouintrails.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Camel Trek Egypt | Desert Trekking Adventures" />
        <meta name="twitter:description" content="Multi-day camel treks through Egypt's Western Desert with Bedouin Trails." />
        <meta name="twitter:image" content="https://bedouintrails.com/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            "name": "Camel Trek in Egypt's Western Desert",
            "description": "Multi-day camel trekking adventure through the White Desert, Black Desert, and Sahara landscapes with experienced Bedouin guides and traditional camping.",
            "touristType": ["Adventure seekers", "Nature lovers", "Culture enthusiasts"],
            "url": "https://bedouintrails.com/camel-trek",
            "provider": {
              "@type": "TravelAgency",
              "name": "Bedouin Trails",
              "url": "https://bedouintrails.com"
            }
          })}
        </script>
      </Helmet>

      <div className="guide-hero" style={{ backgroundImage: "url('/img/camel-ride.webp')" }}>
        <h1>Camel Trekking in Egypt's Western Desert</h1>
      </div>

      <div className="guide-content">
        <p>
          A camel trek through Egypt's Western Desert is the most authentic way to experience the Sahara. Travelling at the pace of a camel — the same way Bedouin tribes have crossed these deserts for thousands of years — you discover landscapes that no vehicle can reach and experience a silence that modern life has forgotten.
        </p>

        <h2>Why a Camel Trek in the Western Desert?</h2>
        <p>
          Most Egypt camel experiences are short rides around the Giza Pyramids. A multi-day desert trek with Bedouin Trails is something entirely different. You travel deep into the desert with experienced Bedouin guides, camp under the stars, eat traditional food cooked over open fire, and navigate through some of the most stunning terrain in the Sahara — including the White Desert, Black Desert, and sand dune fields.
        </p>

        <div className="highlight-box">
          <p>On a camel trek, the journey is the destination. There is no rushing, no schedule pressure — just the rhythm of the camel's walk, the shifting light across the sand, and the sound of wind.</p>
        </div>

        <h2>Camel Trek Options</h2>

        <h3>2-Day Camel Trek (Beginner-Friendly)</h3>
        <p>
          Perfect for first-time riders. Depart from Bahariya Oasis, trek through the Black Desert to the White Desert, camp overnight, and return by camel the following day. No previous riding experience needed — our camels are gentle and well-trained.
        </p>

        <h3>3-Day Camel Trek (Moderate)</h3>
        <p>
          A deeper exploration covering the Black Desert, Crystal Mountain, Agabat Valley, and the heart of the White Desert. Three days of riding with two nights of desert camping, traditional Bedouin meals, and stargazing.
        </p>

        <h3>5-Day Sahara Hiking & Camel Trek (Advanced)</h3>
        <p>
          Our most immersive multi-day desert trek. Combines camel riding with desert hiking (Sahara hiking tour) through varied terrain. Includes visits to Djara Cave, sand dunes, the Great Sand Sea edge, and remote desert areas rarely visited by tourists. Suitable for fit travellers with some riding or hiking experience.
        </p>

        <h2>What to Expect on Your Camel Trek</h2>
        <ul>
          <li><strong>The camels</strong> — our dromedary camels are well-cared-for, experienced desert travellers. You'll be matched with a camel suited to your size and experience</li>
          <li><strong>Riding comfort</strong> — traditional saddles with blankets. Riding takes some getting used to, but most people find their rhythm within the first hour</li>
          <li><strong>Daily distance</strong> — typically 15–25 km per day at a walking pace, with regular stops</li>
          <li><strong>Meals</strong> — fresh bread baked in desert sand, grilled meats, rice, vegetables, tea, and Egyptian coffee</li>
          <li><strong>Camping</strong> — sleeping bags on sand mats under open sky, or with simple shelters in windy weather</li>
          <li><strong>Guides</strong> — experienced Bedouin guides who grew up in the desert and know every dune and rock formation</li>
        </ul>

        <h2>What to Pack for a Desert Camel Trek</h2>
        <ul>
          <li>Long, loose-fitting clothing for sun protection</li>
          <li>Sturdy closed-toe shoes or boots</li>
          <li>Sun hat, sunglasses, and high-SPF sunscreen</li>
          <li>Warm layers for cold desert nights (October–March)</li>
          <li>Headscarf or buff for wind and sand</li>
          <li>Personal water bottle (we provide bulk water)</li>
          <li>Camera — the desert light is extraordinary</li>
        </ul>

        <h2>Best Season for Camel Trekking in Egypt</h2>
        <p>
          The ideal season for camel trekking is October through April. November and March offer the best balance of warm days and comfortable nights. Summer months are extremely hot and not suitable for extended camel treks.
        </p>

        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>

          <div className="faq-item">
            <h3>Do I need camel riding experience?</h3>
            <p>No experience is needed for our 2-day and 3-day treks. Our guides teach you the basics before departure, and the camels are calm and well-trained. The 5-day trek is better suited for those with some riding or hiking experience.</p>
          </div>

          <div className="faq-item">
            <h3>How do we carry our gear?</h3>
            <p>Support camels carry all camping equipment, food, and water. You only need a small daypack for personal items during the ride.</p>
          </div>

          <div className="faq-item">
            <h3>Is the camel trek combined with 4x4 transport?</h3>
            <p>Yes. We drive from Cairo to Bahariya Oasis by 4x4 (approximately 4 hours). The camel trek portion begins from Bahariya or the Black Desert, depending on the itinerary.</p>
          </div>
        </div>

        <div className="cta-section">
          <p>Ready to trek the Sahara the way it was meant to be explored?</p>
          <Link to="/journeys" className="cta-button">Browse Camel Trek Tours</Link>
        </div>
      </div>
    </div>
  );
}
