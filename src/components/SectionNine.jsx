import React from "react";
import "./SectionNine.css";

const cards = [
  {
    title: "Dubai Marina",
    description: "SEO for hospitality, real estate, and tourism businesses",
    image: "/images/authority.png"
  },
  {
    title: "Downtown Dubai",
    description: "E-commerce SEO for high-end brands and shopping outlets",
    image: "/images/authority.png"
  }
];

export function SectionNine() {
  return (
    <section className="section-nine">
      <div className="scroll-container">
        {[...cards, ...cards, ...cards, ...cards].map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={card.title} />
            <div className="card-text">
              <h4>{card.title}</h4>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <p className="strategy-line">
          We tailor our SEO strategies to the needs of Dubai’s dynamic market, helping businesses achieve top search rankings and drive local traffic.
        </p>
        <p className="cta-line">Want to dominate local search results in Dubai?</p>
        <button className="audit-btn">Get a Free SEO Audit</button>
      </div>
    </section>
  );
}
