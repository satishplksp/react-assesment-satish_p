import React from "react";
import "./SectionThree.css";


export const SectionThree = () => {
  const services = [
  {
    title: "Keyword Research & Strategy",
    points: [
      "Competitor analysis & market research",
      "Long-tail keyword strategy for high conversion rates",
      "Industry-specific keyword optimization (e.g., SEO for luxury brands in Dubai)",
    ],
    colorClass: "card-red",
  },
  {
    title: "On-Page Optimization",
    points: [
      "Optimized meta titles, descriptions, and headers",
      "SEO-friendly content enhancements",
      "Internal linking & URL structuring",
    ],
    colorClass: "card-orange",
  },
  {
    title: "Technical SEO",
    points: [
      "Website speed optimization & Core Web Vitals improvements",
      "Schema markup for better search visibility",
      "Mobile responsiveness & secure HTTPS implementation",
    ],
    colorClass: "card-blue",
  },
  {
    title: "Local SEO (Google My Business & Citations)",
    points: [
      "Google My Business optimization for Dubai-based businesses",
      "Local citations & NAP (Name, Address, Phone) consistency",
      "Customer review management & local backlink strategies",
    ],
    colorClass: "card-purple",
  },
  {
    title: "Content Marketing & SEO Copywriting",
    points: [
      "Blog writing with Dubai SEO best practices",
      "SEO-optimized landing pages & service pages",
      "Content tailored for real estate SEO in Dubai, healthcare, e-commerce, and more",
    ],
    colorClass: "card-teal",
  },
  {
    title: "Ethical Link Building",
    points: [
      "Guest posting & outreach campaigns",
      "Niche-specific backlinks for Dubai industries",
      "Brand mentions & PR-driven link acquisition",
    ],
    colorClass: "card-green",
  },
  {
    title: "Performance Tracking & Reporting",
    points: [
      "Google Analytics & Search Console monitoring",
      "Monthly SEO performance reports with actionable insights",
      "Ongoing strategy refinement based on data-driven decisions",
    ],
    colorClass: "card-pink",
  },
];
    return (


        <>
            <section className="section3">

                <div className="third-container">
                    <div className="section-three-header">
                        <h2>Our Comprehensive SEO Services In Dubai</h2>
                        <p>
                            At Brandstory, we offer a full suite of Dubai SEO services designed to help businesses rank higher,
                            attract quality traffic, and maximize ROI. Whether you're a restaurant in Dubai Marina or an
                            e-commerce store in Downtown Dubai, our customized strategies deliver real results.
                        </p>
                    </div>

                    <div className="services-grid">
                       {services.map((service, index) => (
  <div className={`service-card ${service.colorClass}`} key={index}>
    <h4>{service.title}</h4>
    <ul>
      {service.points.map((point, idx) => (
        <li key={idx}>• {point}</li>
      ))}
    </ul>
  </div>
))}
                        <div className="cta-card">
                            <h3>Ready to Elevate Your Online Presence?</h3>
                            <button>Get a Free SEO Audit</button>
                        </div>
                    </div>

                </div>

            </section>

        </>
    )
}