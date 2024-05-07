import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-gray-900 text-gray-300 py-8"
      style={{ border: "1px solid transparent" }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              venenatis consectetur blandit.
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>

              <li>
                <Link to="/contact-us">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1 flex flex-col items-center">
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-white" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="text-white" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-white" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-white" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p style={{ fontSize: "0.9rem" }}>Email: ebmbarkatha@gmail.com</p>
            <p>Phone: 🇮🇳 +917992280550</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
