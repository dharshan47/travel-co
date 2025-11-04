import homePage from "@/assets/hero.png";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaEnvelope, FaPhone } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <div className="relative min-h-screen w-full">
        <img
          src={homePage}
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
        />
        <div className=" absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-black/50 " />
        <div className="relative min-h-screen flex flex-col justify-center items-center py-12 px-4 text-white">
          <h1 className="text-5xl sm:text-6xl md:text-7xl  bg-gradient-to-r from-white via-gray-100 to-blue-50 bg-clip-text text-transparent font-bold ">
            Contact
          </h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-md p-6 ">
            <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
            <div className="flex items-center gap-2 mb-4">
              <FaEnvelope className="text-blue-600" />
              <p>contact@travelco.com</p>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <FaPhone className="text-blue-600" />
              <p>(047) 123-4567</p>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <FaMapMarkedAlt className="text-blue-600" />
              <p>123 Travel Ave</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-4">Get in touch</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input type="text" id="name" placeholder="Enter your name" className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:outline-none focus:ring-blue-500"/>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-gray-700">Email</label>
                <input type="eamil" id="email" placeholder="Enter your email" className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:outline-none focus:ring-blue-500 "/>
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="mb-2 text-gray-700 block">Message</label>
                <textarea
                  id="message"
                  placeholder="Enter message here..." className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:outline-none focus:ring-blue-500 resize-none"
                ></textarea>
              </div>
              <button className="w-full p-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 cursor-pointer">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
