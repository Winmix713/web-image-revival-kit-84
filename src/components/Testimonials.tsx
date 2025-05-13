
import React from 'react';
import TestimonialCard, { Testimonial } from './TestimonialCard';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    quote: "I start every morning with the Green Detox. It gives me the energy I need and has improved my skin significantly!",
    image: "sarah.jpg",
    stars: 5
  },
  {
    id: 2,
    name: "Michael Brown",
    quote: "As an athlete, I need proper nutrition. The protein smoothies here are perfectly balanced and taste amazing!",
    image: "michael.jpg",
    stars: 4
  },
  {
    id: 3,
    name: "Emma Williams",
    quote: "The Berry Blast is simply divine. I've tried to recreate it at home but nothing compares to how Juicy makes it.",
    image: "emma.jpg",
    stars: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-muted">
      <div className="juice-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <div className="w-20 h-1 bg-juice-green mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
