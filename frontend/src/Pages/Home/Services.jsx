import data from "../../data/index.json";
export default function Services() {
  return (
    <section className="services--section" id="Services">
      <div className="services--container">
        <h1 className="section--title">
          <div className="section-bullet"></div>
          What we do
        </h1>
        <p className="services--section--overall-description">
          We offer a complete range of bespoke design and development services
          to help you turn your ideas into digital masterpieces
        </p>
        <div className="services--section--container">
          {data.services.map((service) => {
            return (
              <div className="service--card" key={service.id}>
                <div className="service--card--img">
                  <img src={service.src} alt={service.title} />
                </div>
                <div className="services--section--card--content">
                  <h3 className="services--section--title">{service.title}</h3>
                  <p className="services--section--description">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
