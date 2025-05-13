
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="juice-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Juicy Story</h2>
          <div className="w-20 h-1 bg-juice-green mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              Founded in 2015, <span className="font-semibold text-juice-green">Juicy</span> was born from a passion for healthy living and delicious flavors.
            </p>
            
            <p className="text-lg">
              We believe that what you put in your body matters. That's why we source only the freshest organic fruits and vegetables from local farms to create our nutrient-packed juices and smoothies.
            </p>
            
            <p className="text-lg">
              Every drink we serve is handcrafted with care, without any added sugars, preservatives, or artificial ingredients - just pure, natural goodness in every sip.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-juice-green/20 rounded-2xl flex items-center justify-center p-8">
              <div className="h-20 w-20 bg-juice-green rounded-full flex items-center justify-center">
                <span className="text-white text-3xl">🌱</span>
              </div>
            </div>
            <div className="aspect-square bg-juice-orange/20 rounded-2xl flex items-center justify-center p-8">
              <div className="h-20 w-20 bg-juice-orange rounded-full flex items-center justify-center">
                <span className="text-white text-3xl">🥕</span>
              </div>
            </div>
            <div className="aspect-square bg-juice-yellow/20 rounded-2xl flex items-center justify-center p-8">
              <div className="h-20 w-20 bg-juice-yellow rounded-full flex items-center justify-center">
                <span className="text-white text-3xl">🍋</span>
              </div>
            </div>
            <div className="aspect-square bg-juice-pink/20 rounded-2xl flex items-center justify-center p-8">
              <div className="h-20 w-20 bg-juice-pink rounded-full flex items-center justify-center">
                <span className="text-white text-3xl">🍓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
