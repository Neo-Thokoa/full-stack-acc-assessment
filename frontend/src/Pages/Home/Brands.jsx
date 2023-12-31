/**
 * Functional component that fetches data from an API and renders a section with brand images.
 *
 * @component
 * @example
 * <Brands />
 */
import React from "react";
import { useEffect, useState } from "react";

export default function Brands() {
  const [BrandsData, setBrandsData] = useState([]);

  /**
   * Fetches data from the specified API endpoint when the component mounts.
   * Converts the fetched data to JSON and sets it as the value of the BrandsData state variable.
   * Logs an error to the console if there is an error during the fetch request.
   */
  useEffect(() => {
    fetch("http://localhost:4000/api/getbrands")
      .then((response) => response.json())
      .then((data) => {
        setBrandsData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <section className="portfolio--section" id="Brands">
      <div className="portfolio--container-box">
        <div className="portfolio--container flex-item">
          <div className="section-bullet"></div>
          <h2 className="section--heading">You will be in good company</h2>
        </div>
      </div>
      <div className="brands-slogan">
        <p className="services--section--overall-description">
          Trusted by leading brands
        </p>
      </div>
      {/* Grid for brand images */}
      <div className="brands-container">
        <div className="brand-grid">
          {BrandsData?.map((image, index) => (
            <div key={index} className="brand-item">
              <img src={image.src} alt={`Brand ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
