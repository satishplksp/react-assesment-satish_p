import React from "react";
import "./SectionEight.css";

export const SectionEight=()=> {
  return (
    <section className="dubai-map-section">
        <div className="Eighth-container">
      <div className="content">
        <h2>Serving Businesses Across Dubai</h2>
        <p>
          As a leading SEO company in Dubai, we understand the unique digital landscape of the city’s diverse
          business hubs. Whether you’re a luxury retailer in Downtown Dubai, a tech startup in Business Bay, or a
          restaurant in Dubai Marina, our Dubai-focused SEO strategies ensure you stand out in local search results.
        </p>
      </div>

      <div className="map-wrapper">
        <h3>Our Key Service Areas in Dubai</h3>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d62217.94066963232!2d77.5532491235476!3d12.93204466903966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d12.890931199999999!2d77.6208384!4m5!1s0x3bae1611e769cde7%3A0x894619e9bd80d061!2sMajestic%20Bus%20Stand%2C%2032%2F7%2C%207th%20Main%2C%20near%20Railway%20Station%2C%20Majestic%2C%20Bengaluru%2C%20Karnataka%20560053!3m2!1d12.9729938!2d77.57066619999999!5e0!3m2!1sen!2sin!4v1752594564950!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
      </div>
    </section>
  );
}
