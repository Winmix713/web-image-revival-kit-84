
import React from 'react';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';
import HeroCard from './HeroCard';

const HeroSection = () => {
  return (
    <div className="relative min-h-[85vh] flex items-center pt-28 pb-20 overflow-hidden">
      <HeroBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <HeroContent />
          
          <div className="relative mx-auto lg:mx-0 animate-slide-in-right perspective-1000" 
               style={{animationDelay: '0.5s'}}>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-20 animate-pulse-subtle"></div>
            <HeroCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
