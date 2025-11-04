import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-900 py-12 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
        <div>
          <h1 className="text-xl font-bold mb-2">Travel Co.</h1>
          <p className="text-gray-300">
            Your trusted partner in discover amazing places.
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Quick Links</h3>
          <ul className=" space-y-2 text-gray-400">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Contact Us</h4>
          <ul className="space-y-2 text-gray-400">
            <li>123 Travel Ave</li>
            <li>Los Angeles, CA 90001</li>
            <li>contact@travelco.com</li>
            <li>(047) 123-4567</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Follow Us</h3>
          <div className="flex space-x-4 ">
            <Link to="">
              <FaFacebook className="bg-[#1877F2] text-white p-2 rounded-full w-8 h-8 hover:opacity-80" />
            </Link>
            <Link to="">
              <FaInstagram className="bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white p-2 rounded-full w-8 h-8 hover:opacity-80" />
            </Link>
            <Link to="">
              <FaTwitter className="bg-[#1DA1F2] text-white p-2 rounded-full w-8 h-8 hover:opacity-80" />
            </Link>
            <Link to="">
              <FaLinkedin className="bg-[#0A66C2] text-white p-2 rounded-full w-8 h-8 hover:opacity-80" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
