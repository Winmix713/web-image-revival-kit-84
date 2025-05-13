
import React from 'react';
import { Button } from "@/components/ui/button";

export interface JuiceItem {
  id: number;
  name: string;
  description: string;
  price: number;
  color: string;
  ingredients: string[];
}

const JuiceCard = ({ juice }: { juice: JuiceItem }) => {
  return (
    <div className="juice-card bg-white">
      <div className={`h-48 p-8 bg-juice-${juice.color}/20 flex items-center justify-center`}>
        <div className={`h-28 w-28 rounded-full bg-juice-${juice.color} animate-float`}></div>
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold">{juice.name}</h3>
        <p className="text-muted-foreground text-sm">{juice.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {juice.ingredients.map((ingredient, index) => (
            <span 
              key={index} 
              className={`text-xs px-2 py-1 rounded-full bg-juice-${juice.color}/10 text-juice-${juice.color}`}
            >
              {ingredient}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between pt-2">
          <span className="font-bold text-lg">${juice.price.toFixed(2)}</span>
          <Button 
            className={`bg-juice-${juice.color} hover:bg-juice-${juice.color}/90 text-white`}
            size="sm"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JuiceCard;
