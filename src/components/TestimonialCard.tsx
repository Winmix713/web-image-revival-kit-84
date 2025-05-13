
import React from 'react';

export interface Testimonial {
  id: number;
  name: string;
  quote: string;
  image: string;
  stars: number;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="juice-card bg-white p-6">
      <div className="flex items-center gap-4 mb-6">
        <div className="h-14 w-14 rounded-full bg-gray-200"></div>
        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={index} className={`text-sm ${index < testimonial.stars ? 'text-juice-yellow' : 'text-gray-300'}`}>
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
    </div>
  );
};

export default TestimonialCard;
