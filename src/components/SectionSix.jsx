import React, { useState } from "react";
import "./SectionSix.css";

const testimonials = [
  {
    title: "E-Commerce SEO in Downtown Dubai",
    subtitle: "Result",
    client: "Client: Leading Fashion Retailer in Dubai",
    results: [
      "150% increase in organic traffic within 6 months",
      "85% boost in online sales through targeted SEO campaigns",
      "#1 ranking for high-competition keywords like “luxury fashion in Dubai”"
    ],
    quote: "Brandstory transformed our online visibility. Our sales skyrocketed thanks to their expert SEO strategies!",
    author: "Mighty Warner",
    image: "/images/headersection.png"
  },
  {
    title: "SEO for Tech Startup in Dubai Internet City",
    subtitle: "Result",
    client: "Client: SaaS Product Company",
    results: [
      "200% growth in sign-ups in 4 months",
      "Ranked #1 for 'B2B SaaS UAE'",
      "Cut paid ad budget by 40% through organic reach"
    ],
    quote: "They delivered ROI 3x faster than any agency we’ve used before. Phenomenal results.",
    author: "TechNest",
    image: "/images/headersection.png"
  }
];

export const SectionSix=()=> {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const { title, subtitle, client, results, quote, author, image } = testimonials[index];

  return (
    <section className="section6">
       <div className="sixth-container">

      <h2>What Our Clients Say</h2>
      <p className="subtitle">
        Real businesses. Real results. See how our Dubai SEO strategies have helped brands grow.
      </p>

      <div className="testimonial-slider">
        <button onClick={prev} className="nav-btn left">&#8249;</button>

        <div className="testimonial-card">
          <img src={image} alt={author} />
          <div className="testimonial-content">
            <h3>{title}</h3>
            <p className="client">{client}</p>
            <h3>{subtitle}</h3>
            <ul className="results">
              {results.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
            <blockquote>{quote}</blockquote>
            <strong>{author}</strong>
          </div>
        </div>

        <button onClick={next} className="nav-btn right">&#8250;</button>
      </div>

      <div className="cta">
        <p>Want to see similar results for your business?</p>
        <button>Get a Free SEO Audit</button>
      </div>
      </div>
    </section>
  );
}
