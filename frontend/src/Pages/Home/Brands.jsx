import React from "react";
import data from "../../data/index.json";
import { useEffect, useState } from "react";
export default function Brands() {
    // const brandImages = data?.brands;
    console.log(data.brands);

    useEffect(() => {
        // Replace 'your-api-endpoint' with the actual URL of your backend API
        fetch("http://localhost:4000/api/getbrands")
          .then((response) => response.json())
          .then((data) => {
            // Assuming your API returns an array of services data
            setServicesData(data);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }, []);
  return (
    <section className="portfolio--section" id="Brands">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <div className="section-bullet"></div>
          <h2 className="section--heading">You will be in good company</h2>
        </div>
        <p className="services--section--overall-description">
          We offer a complete range of bespoke design and development services
          to help you turn your ideas into digital masterpieces
        </p>
      </div>
      
      {/* Grid for brand images */}
      <div className="brand-grid">
        {data?.brands?.map((image, index) => (
          <div key={index} className="brand-item">
            <img src={image.src} alt={`Brand ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
