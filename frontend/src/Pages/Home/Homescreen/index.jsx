/**
 * Renders a home screen layout by rendering different components in a specific order.
 *
 * @returns {JSX.Element} The JSX fragment representing the home screen layout.
 *
 * @example
 * // Example usage:
 * <Homescreen />
 */
import Brands from "../Brands";
import CaseStudies from "../CaseStudies";
import ContactUs from "../ContactUs";
import HeroSection from "../HeroSection";
import Services from "../Services";

export default function Homescreen() {
    return(
        <>
            <HeroSection />
            <Services />
            <CaseStudies />
            <Brands />
            <ContactUs />
        </>
    );
}