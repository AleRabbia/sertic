import React from 'react';
import { Card } from '../ui/Card';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { testimonials } from '../../data/testimonials';

const StarRating = ({ rating }) => (
  <div className="flex mb-4">
    {[...Array(rating)].map((_, i) => (
      <span key={i} className="text-yellow-400 text-xl">★</span>
    ))}
  </div>
);

const TestimonialCard = ({ testimonial, index }) => {
  const { elementRef, hasBeenVisible } = useIntersectionObserver();

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ${
        hasBeenVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <Card className="h-full">
        <StarRating rating={testimonial.rating} />
        <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
        <div className="flex items-center gap-4">
          {testimonial.avatar && (
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                {testimonial.name.charAt(0)}
              </span>
            </div>
          )}
          <div>
            <div className="font-semibold text-white">{testimonial.name}</div>
            <div className="text-sm text-gray-400">{testimonial.company}</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

const Testimonials = () => {
  const { elementRef: titleRef, hasBeenVisible: titleVisible } = useIntersectionObserver();

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            La confianza de nuestros clientes es nuestro mayor logro
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;