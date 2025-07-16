import React from "react";
import "./SectionTen.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export function SectionTen() {
  return (
    <section className="section-ten">
        <div className="tenth-container">
      <h2>Ready to Grow Your Business with SEO in Dubai?</h2>
      <p>
        Don’t let your competitors outrank you. Take the first step toward higher rankings,
        more traffic, and increased revenue with our expert SEO services.
      </p>

      <h3>Get a Free SEO Audit Today!</h3>
      <ul className="audit-points">
        <li>✔️ Personalized strategy for your business</li>
        <li>✔️ Competitor analysis & keyword opportunities</li>
        <li>✔️ No-obligation consultation with an SEO expert</li>
      </ul>

      <div className="contact-details">
        <div className="contact-box">
          <div className="contact-item">
            <FaPhoneAlt />
            <span>+971 52 283 1655</span>
          </div>
          <div className="contact-item">
            <FaEnvelope />
            <span>info@brandstory.ae</span>
          </div>
        </div>

        <div className="contact-box">
          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>
              G5, Al Meheri Plaza, opp DBC Building,<br />
              Al Khabaisi Area, Deira Dubai - 81577,<br />
              United Arab Emirates
            </span>
          </div>
        </div>
      </div>

      <div className="cta-wrapper">
        <button className="cta-button">Request a Free SEO Audit</button>
      </div>

      <p className="limited-offer">
        Limited-Time Offer: Get a FREE SEO strategy session when you sign up this month!
      </p>
      </div>
    </section>
  );
}
