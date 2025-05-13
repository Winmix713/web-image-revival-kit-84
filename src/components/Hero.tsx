
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative pt-20 pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-juice-yellow/20 to-white -z-10"></div>
      
      {/* Floating fruits */}
      <div className="absolute top-20 right-10 h-24 w-24 rounded-full bg-juice-orange/20 animate-float"></div>
      <div className="absolute bottom-20 left-10 h-16 w-16 rounded-full bg-juice-green/20 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-40 left-20 h-12 w-12 rounded-full bg-juice-pink/20 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="juice-container">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Fresh <span className="text-juice-green">Juices</span> & Smoothies for a <span className="text-juice-orange">Healthier</span> You
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              Discover our handcrafted, nutrient-rich juices made from locally sourced, organic ingredients.
            </p>
            <div className="flex gap-4 pt-4">
              <Button className="bg-juice-green hover:bg-juice-green/90 text-white px-6 py-6">View Menu</Button>
              <Button variant="outline" className="border-juice-green text-juice-green hover:bg-juice-green/10 px-6 py-6">Find Location</Button>
            </div>
          </div>
          
          <div className="flex-1 relative mt-8 md:mt-0">
            <div className="relative h-[400px] w-[400px] bg-white rounded-full p-6 shadow-xl animate-bounce-slow">
              <div className="h-full w-full rounded-full overflow-hidden bg-gradient-to-b from-juice-green/20 to-juice-orange/20">
                {/* This would be an image of a juice in the actual implementation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-3/4 w-1/2 bg-gradient-to-b from-juice-orange to-juice-yellow rounded-3xl mx-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
