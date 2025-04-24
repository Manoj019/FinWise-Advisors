import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Menu, X, BarChart2 } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="flex items-center">
            <BarChart2 className="h-8 w-8 text-blue-900 mr-2" />
            <span className="text-xl font-bold text-blue-900">FinWise Advisors</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {['Home', 'Services', 'About', 'Resources', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-blue-800 transition-colors font-medium"
              >
                {item}
              </a>
            ))}
            <button
              className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors"
              onClick={() => navigate("/signup")}
            >
              Get Started
            </button>
          </nav>

          {/* Mobile menu toggle button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3">
            {['Home', 'Services', 'About', 'Resources', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-2 py-3 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <button
              className="w-full bg-blue-900 text-white px-4 py-3 rounded-md hover:bg-blue-800 transition-colors"
              onClick={() => {
                setIsOpen(false);
                navigate("/signup");
              }}
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
