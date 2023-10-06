/**
 * Renders a hero section on a webpage.
 *
 * @returns {JSX.Element} The hero section component.
 */
export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Live with Confidence</span>
            </h1>
            <p className="hero--section-description">
                José Mourinho brings confidence to pan-African Sanlam campaign..
            </p>
          </div>
          <button className="btn btn-primary">View Project</button>
        </div>
        <div className="hero--section--img">
          <img src="./kjd-assets/confidence.jpeg" alt="Hero Section" />
        </div>
      </section>
    );
  }