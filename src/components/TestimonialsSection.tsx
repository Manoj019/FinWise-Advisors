import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Small Business Owner',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600',
    quote: 'FinWise helped me develop a solid retirement plan while also creating a strategy to grow my business. I feel confident about my financial future for the first time.',
    stars: 5,
  },
  {
    name: 'Michael Rodriguez',
    role: 'Medical Professional',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
    quote: 'With their guidance, I was able to navigate complex tax situations while maximizing my retirement contributions. Their personalized approach makes all the difference.',
    stars: 5,
  },
  {
    name: 'Emily Chen',
    role: 'Tech Executive',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    quote: 'Their investment strategies have consistently outperformed my expectations. But what I value most is how they take the time to explain everything in terms I can understand.',
    stars: 4,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-950 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="max-w-2xl mx-auto text-blue-200">
            We measure our success by the financial confidence and security we bring to our clients.
            Here are some of their stories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/15 transition-colors"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18}
                    className={i < testimonial.stars ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}
                  />
                ))}
              </div>
              <p className="mb-6 text-blue-100 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-blue-200">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;