import React, { useState } from "react";
import "./SectionEleven.css";

const tabs = [
  "General FAQ",
  "Dubai-Specific SEO FAQs",
  "Pricing & Process FAQs",
  "Company & Expertise FAQs",
];

const content = {
  "General FAQ": [
    {
      question: "How long does it take to see results from SEO?",
      answer:
        "SEO is a long-term strategy... You may start seeing improvements within 3 to 6 months. For competitive industries, 6 to 12 months or longer.",
    },
    {
      question: "How do you measure the success of your SEO campaigns?",
      answer: (
        <>
          <p>We track SEO success using KPIs:</p>
          <ul>
            <li>Organic Traffic: Visitors from search engines</li>
            <li>Keyword Rankings</li>
            <li>Click-Through Rate (CTR)</li>
            <li>Backlinks & Domain Authority</li>
            <li>ROI: Leads, sales, goals</li>
          </ul>
        </>
      ),
    },
    {
      question: "What is the difference between on-page and off-page SEO?",
      answer: (
        <>
          <p>
            <strong>On-Page SEO:</strong> Website-based optimizations like content, speed, tags.
          </p>
          <p>
            <strong>Off-Page SEO:</strong> External factors like backlinks, social media, etc.
          </p>
        </>
      ),
    },
  ],

  // You can expand the other tabs similarly
  "Dubai-Specific SEO FAQs": [
    {
      question: "Is your SEO strategy tailored for Dubai businesses?",
      answer: "Yes. We target Dubai-centric keywords, competitors, and trends to align with the local market."
    },
  ],

  "Pricing & Process FAQs": [
    {
      question: "How is SEO pricing structured?",
      answer: "We offer flexible monthly packages based on your business goals and competition level."
    },
  ],

  "Company & Expertise FAQs": [
    {
      question: "What makes your SEO agency different?",
      answer: "We combine local market expertise with global best practices, plus transparent reporting."
    },
  ]
};

export const SectionEleven=()=> {
  const [activeTab, setActiveTab] = useState("General FAQ");

  return (
    <section className="faq-section">
        <div className="eleventh-container">
      <h2>Frequently Asked Questions</h2>

      <div className="faq-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`faq-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="faq-content">
        {content[activeTab].map((item, index) => (
          <div className="faq-card" key={index}>
            <h4>{item.question}</h4>
            <div className="faq-answer">{item.answer}</div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
