import React from 'react';
import { BarChart2, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <BarChart2 className="h-8 w-8 text-teal-500 mr-2" />
              <span className="text-xl font-bold text-white">FinWise Advisors</span>
            </div>
            <p className="mb-4">
              Providing expert financial guidance to help you achieve your goals and secure your future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-teal-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-teal-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-teal-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-teal-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-teal-500 transition-colors">Retirement Planning</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Investment Management</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Risk Management</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Tax Planning</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Estate Planning</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-teal-500 transition-colors">Financial Calculators</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Market Insights</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Webinars</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-teal-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center sm:text-left sm:flex sm:justify-between">
          <p>&copy; 2025 FinWise Advisors. All rights reserved.</p>
          <div className="mt-4 sm:mt-0">
            <a href="#" className="ml-4 hover:text-teal-500 transition-colors">Terms of Service</a>
            <a href="#" className="ml-4 hover:text-teal-500 transition-colors">Privacy Policy</a>
            <a href="#" className="ml-4 hover:text-teal-500 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;