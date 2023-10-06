import React, { useEffect, useState } from 'react';
import data from "../../data/index.json";

export default function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Function to update the current index for the carousel
    const updateIndex = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.portfolio.length);
    };

    // Set an interval to automatically update the index every few seconds
    const intervalId = setInterval(updateIndex, 3000); // Change the interval time as needed

    return () => {
      clearInterval(intervalId); // Clear the interval when the component unmounts
    };
  }, []);
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
          <div key={index} className={`portfolio--section--card ${index === currentIndex ? 'active' : ''}`}>
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
