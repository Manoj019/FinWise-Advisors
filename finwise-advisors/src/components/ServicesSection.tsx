import React from 'react';
import { PiggyBank, TrendingUp, ShieldCheck, BarChart } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: <PiggyBank className="h-10 w-10 text-teal-600" />,
    title: 'Retirement Planning',
    description: 'Develop a comprehensive strategy to ensure financial security during your retirement years.',
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-teal-600" />,
    title: 'Investment Management',
    description: 'Optimize your investment portfolio with strategies tailored to your risk tolerance and goals.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-teal-600" />,
    title: 'Risk Management',
    description: 'Protect your assets and loved ones with appropriate insurance and estate planning solutions.',
  },
  {
    icon: <BarChart className="h-10 w-10 text-teal-600" />,
    title: 'Tax Planning',
    description: 'Minimize your tax burden through strategic planning and implementation of tax-efficient strategies.',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Financial Solutions Tailored for You
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Our comprehensive suite of services addresses every aspect of your financial life,
            helping you build, protect, and transfer wealth efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium transition-colors">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;