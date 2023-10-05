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