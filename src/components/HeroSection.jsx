import React from "react";
import "./HeroSection.css";

export const Herosection=()=>
    {
        return(
        <>
        <section className="Section1">
            <div className="hero-container">
      <div className="hero-text">
        <h1>
          Top-Rated SEO Company in <br />
          <span>Dubai | Drive Organic Growth</span>
        </h1>
        <h3>Boost Your Online Presence with Data-Driven SEO Strategies</h3>
        <p>
          We help businesses in Dubai dominate search rankings with cutting-edge,
          ROI-focused SEO solutions. Increase visibility, attract qualified leads,
          and grow your revenue with our expert team.
        </p>
        <ul>
          <li>📍 Dubai-based experts | Proven results | Tailored strategies</li>
          <li>✅ 97% client retention rate | 🚀 50K+ keywords ranked</li>
        </ul>
        <button>Get a Free SEO Audit</button>
      </div>
      <div className="hero-image">
        <img src="/images/headersection.png" alt="Dubai SEO" />
      </div>
    </div>
    </section>
    </>
        )
    } 
