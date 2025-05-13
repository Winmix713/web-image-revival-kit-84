
import React from 'react';
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="juice-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Us</h2>
          <div className="w-20 h-1 bg-juice-green mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Our Locations</h3>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg hover:border-juice-green transition-colors">
                  <h4 className="font-semibold">Downtown</h4>
                  <p className="text-muted-foreground">123 Main Street, City Center</p>
                  <p className="text-muted-foreground">Mon-Fri: 7am-7pm, Sat-Sun: 8am-6pm</p>
                </div>
                <div className="p-4 border rounded-lg hover:border-juice-green transition-colors">
                  <h4 className="font-semibold">Westside</h4>
                  <p className="text-muted-foreground">456 Beach Avenue, Oceanview</p>
                  <p className="text-muted-foreground">Mon-Sun: 8am-8pm</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2">Contact Us</h3>
              <p className="text-muted-foreground mb-2">Have questions or want to place a large order?</p>
              <p className="mb-2"><span className="font-semibold">Email:</span> hello@juicy.com</p>
              <p><span className="font-semibold">Phone:</span> (555) 123-4567</p>
            </div>
            
            <div className="pt-4">
              <Button className="bg-juice-green hover:bg-juice-green/90 w-full">Order Online</Button>
            </div>
          </div>
          
          <div className="h-96 bg-muted rounded-xl overflow-hidden">
            {/* This would be a map in a real implementation */}
            <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-juice-green/10 to-juice-yellow/10">
              <div className="text-center">
                <div className="mb-4 h-16 w-16 mx-auto bg-juice-green rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">📍</span>
                </div>
                <p className="font-medium">Find your nearest Juicy location</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
