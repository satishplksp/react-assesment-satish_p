// import React from "react";
import React, { useState } from "react";
import "./SectionFive.css";

const steps = [
  {
    title: "Understanding Your Business",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique lobortis est non consequat. Pellentesque porttitor sem sit amet quam efficitur eleifend. Cras imperdiet pellentesque convallis. Phasellus aliquet eros sit amet justo dictum, tincidunt bibendum metus fringilla. Vivamus vel elementum massa, ut sodales leo. Ut eget mi et nisi rhoncus pellentesque. Vivamus elementum magna eget leo sodales, sit amet volutpat tellus egestas. Sed pellentesque sit amet ",
    image: "/images/headersection.png",
  },
  {
    title: "Website Architecture Planning",
    content:
      "Ut eget mi et nisi rhoncus pellentesque. Vivamus elementum magna eget leo sodales, sit amet volutpat tellus egestas. Sed pellentesque sit amet nibh vel sollicitudin. Cras arcu arcu, dapibus in volutpat nec, interdum vitae ante. Sed gravida tellus eu nulla faucibus, vitae hendrerit felis pulvinar. Phasellus interdum ultrices egestas. Nam in porta leo. Sed id dui risus. Nulla placerat ante vitae lorem scelerisque, sit amet ultricies augue aliquam. ",
    image: "/images/headersection.png",
  },
  {
    title: "Competitor Audit",
    content:
      "Nullam non cursus ex. Sed massa quam, vehicula a suscipit eget, venenatis nec lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent non feugiat leo. Quisque non purus efficitur, dapibus elit a, facilisis mi. Nam eu nulla eu magna pellentesque semper. Morbi et ligula quis quam porttitor sodales vel sed libero. Duis ac iaculis mauris, eget porttitor mi. Ut aliquet venenatis massa vitae semper. Duis ut felis quis neque imperdiet bibe",
    image: "/images/headersection.png",
  },
  {
    title: "Keyword Research",
    content:
      "eugiat leo. Quisque non purus efficitur, dapibus elit a, facilisis mi. Nam eu nulla eu magna pellentesque semper. Morbi et ligula quis quam porttitor sodales vel sed libero. Duis ac iaculis mauris, eget porttitor mi. Ut aliquet venenatis massa vitae semper. Duis ut felis quis neque imperdiet bibendum varius in magna. Aenean in leo a ipsum varius iaculis ac vel magna. Quisque vitae leo nec eros dictum pulvinar id i ",
    image: "/images/headersection.png",
  },
  {
    title: "On Page Optimization",
    content:
      "Aenean sagittis augue in egestas posuere. Praesent vulputate enim leo, pellentesque mattis sapien elementum sagittis. Duis ultricies vestibulum sem vitae rhoncus. Quisque porta tristique tortor sed auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean gravida tortor eget nisi facilisis, id lacinia turpis dictum. Vestibulum tempor nec ex et lobortis. Nulla facilisi. Curabitur neque nunc, sodales at felis in, dignissim pellentesque sem. Mauris interdum, arcu non euismod euismod, nibh dui ultricies lacus, ac gravida libero libero ac massa.  ",
    image: "/images/headersection.png",
  },
  {
    title: "Content Optimization",
    content:
      " non feugiat leo. Quisque non purus efficitur, dapibus elit a, facilisis mi. Nam eu nulla eu magna pellentesque semper. Morbi et ligula quis quam porttitor sodales vel sed libero. Duis ac iaculis mauris, eget porttitor mi. Ut aliquet venenatis massa vitae semper. Duis ut felis quis neque imperdiet bibendum varius in magna. Aenean in leo a ipsum varius iaculis ac vel magna. Quisque vitae leo nec eros dictum pulvinar id id nibh. ",
    image: "/images/headersection.png",
  },
  {
    title: "Topical Authority Optimization",
    content:
      " Quisque dictum lorem nec turpis congue feugiat. Phasellus feugiat enim dignissim sagittis viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a facilisis odio. Nullam quis mauris felis. Donec fringilla mollis metus quis vestibulum. Ut porttitor convallis lectus sit amet aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam feugiat luctus pharetra.",
    image: "/images/headersection.png",
  },
  {
    title: "UI UX Optimization",
    content:
      "Aliquam at lorem lorem. Aliquam eu arcu id tortor elementum lacinia convallis in velit. Cras massa ante, eleifend at urna vel, rutrum molestie ex. Phasellus quis euismod ligula. Aenean finibus lacinia mi, eu imperdiet tellus iaculis vitae. Nam volutpat vel ipsum quis vestibulum. Vestibulum pulvinar ",
    image: "/images/headersection.png",
  },
  {
    title: "Conversion Rate Optimization - CRO",
    content:
      "nec turpis congue feugiat. Phasellus feugiat enim dignissim sagittis viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a facilisis odio. Nullam quis mauris felis. Donec fringilla mollis metus quis vestibulum. Ut porttitor convallis lectus sit amet aliquam. Interdum et malesuada fames ac ant",
    image: "/images/headersection.png",
  },
  {
    title: "Technical Optimization",
    content:
      " Phasellus quis euismod ligula. Aenean finibus lacinia mi, eu imperdiet tellus iaculis vitae. Nam volutpat vel ipsum quis vestibulum. Vestibulum pulvinar neque eget aliquam ultrices. Ut fermentum eleifend metus, pretium condimentum urna fermentum ut. Quisque ut orci sem. Pellentesque sit  ",
    image: "/images/headersection.png",
  },
  {
    title: "Off Page Management",
    content:
      "Ut vel malesuada nunc. Nullam egestas magna et malesuada suscipit. Aliquam id ullamcorper ligula. Nullam nisl orci, mattis dictum venenatis imperdiet, vulputate ut elit. Suspendisse viverra augue vitae nisl pellentesque finibus vitae eu lacus. Ut sed diam vel mauris rutrum semper sed ut nisl. Quisque ac mollis enim, eu blandit lorem. Maecenas ullamcorper tellus libero. Fusce id tempus dolor, nec hendrerit est. Nunc convallis ligula augue, fi",
    image: "/images/headersection.png",
  },
  {
    title: "Off Page Management",
    content:
      "rhoncus leo at pulvinar. In eget velit in ante fringilla vulputate nec vel nisi. Suspendisse varius iaculis consequat. Maecenas nisi sapien, sagittis eu placerat et, finibus et dolor. Mauris volutpat euismod velit, at tempor nisl ullamcorper aliquam. Cras interdum lorem sodales, tristique quam ac, convallis nisi. Aenean viverra dolor eget nulla suscipit, eu luctus massa mattis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce vulputate laoreet fringilla. Vestibulum vestibulum tincidunt dolor, a accumsan orci  ",
    image: "/images/headersection.png",
  },
  // Add more items as needed...
];
 export const SectionFive=()=>
 {
   const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section5">
         <div className="fifth-container">
      <h2>Our Comprehensive SEO Process</h2>
      <div className="process-container">
        <ul className="step-list">
          {steps.map((step, index) => (
            <li
              key={index}
              className={activeIndex === index ? "active" : ""}
              onClick={() => setActiveIndex(index)}
            >
              {step.title}
            </li>
          ))}
        </ul>
        <div className="step-content">
          <div className="step-card">
            <h3>{steps[activeIndex].title}</h3>
            <img src={steps[activeIndex].image} alt={steps[activeIndex].title} />
            <p>{steps[activeIndex].content}</p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
 }