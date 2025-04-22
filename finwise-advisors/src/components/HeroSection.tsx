import React from 'react';
import { LineChart, ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: 'url("https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
      </div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center bg-blue-800/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <LineChart className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Trusted by over 10,000 clients</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Financial guidance that grows with you
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-100">
            We help you make smart financial decisions today for a more secure tomorrow.
            Our personalized approach puts your goals at the center of every strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Explore Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;