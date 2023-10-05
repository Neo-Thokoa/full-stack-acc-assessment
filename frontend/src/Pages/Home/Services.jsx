import data from "../../data/index.json";
import React, { useEffect, useState } from "react";
export default function Services() {


  return (
    <section className="services--section" id="Services">
      <div className="portfolio--container">
        <h1 className="section--title">
          <div className="section-bullet"></div>
          What we do
        </h1>
        <p className="services--section--overall-description">
          We offer a complete range of bespoke design and development services
          to help you turn your ideas into digital masterpieces
        </p>
        <div className="services--section--container">
          {data?.services?.map((item, index) => (
            <div key={index} className="services--section--card">
              <div className="services--section--img">
                <img src={item.src} alt="Product Chain" />
              </div>
              <div className="services--section--card--content">
                <h3 className="services--section--title">{item.title}</h3>
                <p className="services--section--description">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
