
import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="w-full py-4 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="juice-container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-full bg-juice-green flex items-center justify-center">
            <span className="text-white font-bold">J</span>
          </span>
          <h1 className="text-2xl font-bold text-juice-green">Juicy</h1>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-juice-green font-medium">Home</a>
          <a href="#about" className="text-foreground hover:text-juice-green font-medium">About</a>
          <a href="#menu" className="text-foreground hover:text-juice-green font-medium">Menu</a>
          <a href="#testimonials" className="text-foreground hover:text-juice-green font-medium">Testimonials</a>
          <a href="#contact" className="text-foreground hover:text-juice-green font-medium">Contact</a>
        </div>
        
        <Button className="bg-juice-green hover:bg-juice-green/90">Order Online</Button>
      </div>
    </nav>
  );
};

export default Navbar;
