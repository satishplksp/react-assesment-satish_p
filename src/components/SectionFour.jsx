import React from 'react';
import './SectionFour.css';

const hexData = [
  {
    icon: 'icons/results.png',
    title: 'Local Expertise',
    description: 'Partner with us and dominate search rankings in Dubai!'
  },
  {
    icon: 'icons/results.png',
    title: 'Data-Driven SEO',
    description: 'Achieve results with our data-backed SEO strategies.'
  },
  {
    icon: 'icons/results.png',
    title: 'Transparent Reporting',
    description: 'Stay updated with clear and actionable reports.'
  },
  {
    icon: 'icons/results.png',
    title: 'Tailored Strategies',
    description: 'SEO plans crafted for your goals and audience.'
  },
  {
    icon: 'icons/results.png',
    title: 'SEO Experts',
    description: 'Work with a team that adapts to Google updates.'
  },
  {
    icon: 'icons/results.png',
    title: 'Free SEO Audit',
    description: 'Get insights and action plans tailored for you.'
  }
];

export const SectionFour = () => {
  const ctaClicked = () => {
    alert("Thanks! Our SEO team will contact you soon.");
  };

  return (
    <section className="section4">
       <div className="fourth-container">
    <div className="hex-grid">
      {hexData.map((item, index) => (
        <div className="hex-rectangle" key={index}>
          {/* Main Shape */}
          <svg
            viewBox="0 0 400 160"
            xmlns="http://www.w3.org/2000/svg"
            className="main-shape"
          >
            <path
              d="M 40,10 Q 30,10 25,20 L 5,70 Q 0,80 5,90 L 25,140 Q 30,150 40,150 L 360,150 Q 370,150 375,140 L 395,90 Q 400,80 395,70 L 375,20 Q 370,10 360,10 Z"
              fill="#FFFFFF"
              stroke="#A2D0F6"
              strokeWidth="1.5"
            />
          </svg>

          {/* Smaller hexagon */}
          <div className="mini-hex">
            <svg viewBox="15 4 170 170" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M 60,10 Q 50,10 45,20 L 20,80 Q 15,90 20,100 L 45,160 Q 50,170 60,170 L 140,170 Q 150,170 155,160 L 180,100 Q 185,90 180,80 L 155,20 Q 150,10 140,10 Z"
                fill="#FFFFFF"
                stroke="#A2D0F6"
                strokeWidth="1.5"
              />
            </svg>
            <div className="hex-inner">
              <img src={item.icon} alt="icon" />
              <p>{item.title}</p>
            </div>
          </div>

          {/* Center Content */}
          <div className="content-seo">
            <p>{item.description}</p>
            {index === 5 && (
              <a href="#seo-audit" className="cta-button" onClick={ctaClicked}>
                Get a Free SEO Audit
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
    </div>
    </section>
  );
};

