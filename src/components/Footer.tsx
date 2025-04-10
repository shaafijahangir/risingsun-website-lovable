
import React from "react";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-heading font-bold text-thai-gold mb-4">
              Thai Travel Tales
            </h3>
            <p className="text-gray-400 mb-4">
              Creating authentic Thai adventures and lifelong memories for over 35 years.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-thai-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-thai-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-thai-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-thai-gold transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#packages" className="text-gray-400 hover:text-thai-gold transition-colors">Travel Packages</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-thai-gold transition-colors">About Us</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-thai-gold transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#book-call" className="text-gray-400 hover:text-thai-gold transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Top Destinations</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-thai-gold transition-colors">Bangkok</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-thai-gold transition-colors">Chiang Mai</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-thai-gold transition-colors">Phuket</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-thai-gold transition-colors">Krabi</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-thai-gold transition-colors">Koh Samui</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 text-thai-gold" />
                <span className="text-gray-400">+66 123 456 789</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 text-thai-gold" />
                <span className="text-gray-400">info@thaitraveltales.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-thai-gold" />
                <span className="text-gray-400">
                  123 Sukhumvit Road, Bangkok, Thailand 10110
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Thai Travel Tales. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-thai-gold text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-thai-gold text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
