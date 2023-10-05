import React from 'react'
import data from "../../data/index.json";

export default function CaseStudies() {
  return (
    <section className="portfolio--section" id="CaseStudies">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
            <div className="section-bullet"></div>
            <h2 className="section--heading">Case studies</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <div className="section-bullet"></div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
