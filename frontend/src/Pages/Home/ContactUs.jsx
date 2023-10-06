/**
 * Renders a footer section with contact information and social media links.
 *
 * @returns {JSX.Element} The rendered footer section.
 */
import React from "react";
import { Link } from "react-scroll";

function ContactUs() {
  return (
    <footer className="footer--container" id="Contact">
      <div className="footer--header flex-item">
        <div className="section-bullet"></div>
        <h2 className="section--heading">Contact us</h2>
      </div>
      <div className="footer--headline footer-slogan-address">
        <p>Have a project in mind? Let's make it happen</p>
      </div>
      <div className="footer--address footer-slogan-address">
        <p>
          22 Street Name, Suburb, 8000, <br />
          Cape Town, <br />
          South Africa <br />
          +27 21 431 0001
          <br />
          enquirie@website.co.za
        </p>
      </div>
      <div className="footer--content--container flex-item">
        <div className="footer--social--icon">
          <ul className="footer-grid-terms-socials">
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Terms_of_Service"
                className="text-sm"
              >
                Terms of service
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Terms_of_Service"
                className="text-sm"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Terms_of_Service"
                className="text-sm"
              >
                Imperressum
              </Link>
            </li>
          </ul>
          <ul className="footer-grid-terms-socials">
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Privacy_Policy"
                className="text-sm"
              >
                Facebook
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Privacy_Policy"
                className="text-sm"
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Cookies_Settings"
                className="text-sm"
              >
                Linkedin
              </Link>
            </li>
          </ul>
          <ul className="footer-grid-terms-socials">
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Cookies_Settings"
                className="text-sm"
              >
                Github
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Privacy_Policy"
                className="text-sm"
              >
                Twitter
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Cookies_Settings"
                className="text-sm"
              >
                Teams
              </Link>
            </li>
          </ul>
          <ul className="footer-grid-terms-socials">
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Cookies_Settings"
                className="text-sm"
              >
                Youtube
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Privacy_Policy"
                className="text-sm"
              >
                Behance
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Cookies_Settings"
                className="text-sm"
              >
                Dribble
              </Link>
            </li>
          </ul>
          <ul className="footer-grid-terms-jobs">
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Cookies_Settings"
                className="text-sm"
              >
                Explore open jobs
              </Link>
            </li>

            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Cookies_Settings"
                className="text-sm"
              >
                ©2000—2023 Company Name
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default ContactUs;
