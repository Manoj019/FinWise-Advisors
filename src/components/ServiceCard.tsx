import React from 'react';

interface ServiceProps {
  service: {
    icon: React.ReactNode;
    title: string;
    description: string;
  };
}

const ServiceCard: React.FC<ServiceProps> = ({ service }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="mb-5">{service.icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
      <p className="text-gray-600 flex-grow">{service.description}</p>
      <button className="mt-6 text-teal-600 font-medium flex items-center hover:text-teal-700 transition-colors">
        Learn more
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default ServiceCard;