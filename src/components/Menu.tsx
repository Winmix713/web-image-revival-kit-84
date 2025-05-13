
import React, { useState } from 'react';
import JuiceCard, { JuiceItem } from './JuiceCard';
import { Button } from "@/components/ui/button";

const juiceData: Record<string, JuiceItem[]> = {
  "Fruit Juices": [
    {
      id: 1,
      name: "Orange Sunrise",
      description: "Freshly squeezed oranges with a hint of ginger",
      price: 5.99,
      color: "orange",
      ingredients: ["Orange", "Ginger", "Honey"]
    },
    {
      id: 2,
      name: "Berry Blast",
      description: "A mix of strawberries, blueberries, and raspberries",
      price: 6.99,
      color: "pink",
      ingredients: ["Strawberry", "Blueberry", "Raspberry", "Apple"]
    },
    {
      id: 3,
      name: "Tropical Paradise",
      description: "Pineapple, mango, and passion fruit goodness",
      price: 7.49,
      color: "yellow",
      ingredients: ["Pineapple", "Mango", "Passion Fruit"]
    }
  ],
  "Green Juices": [
    {
      id: 4,
      name: "Green Detox",
      description: "Spinach, kale, cucumber, and green apple",
      price: 7.99,
      color: "green",
      ingredients: ["Spinach", "Kale", "Cucumber", "Green Apple"]
    },
    {
      id: 5,
      name: "Energizer",
      description: "Celery, apple, lemon, and parsley for pure energy",
      price: 6.99,
      color: "green",
      ingredients: ["Celery", "Apple", "Lemon", "Parsley"]
    },
    {
      id: 6,
      name: "Super Green",
      description: "Kale, mint, avocado, and coconut water",
      price: 8.49,
      color: "green",
      ingredients: ["Kale", "Mint", "Avocado", "Coconut Water"]
    }
  ],
  "Smoothies": [
    {
      id: 7,
      name: "Purple Power",
      description: "Açai, blueberry, banana, and almond milk",
      price: 8.99,
      color: "purple",
      ingredients: ["Açai", "Blueberry", "Banana", "Almond Milk"]
    },
    {
      id: 8,
      name: "Strawberry Dream",
      description: "Strawberries, banana, yogurt, and honey",
      price: 7.49,
      color: "pink",
      ingredients: ["Strawberry", "Banana", "Yogurt", "Honey"]
    },
    {
      id: 9,
      name: "Tropical Bliss",
      description: "Mango, pineapple, coconut milk, and chia seeds",
      price: 8.49,
      color: "yellow",
      ingredients: ["Mango", "Pineapple", "Coconut Milk", "Chia Seeds"]
    }
  ]
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Fruit Juices");
  const categories = Object.keys(juiceData);
  
  return (
    <section id="menu" className="py-20">
      <div className="juice-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Menu</h2>
          <div className="w-20 h-1 bg-juice-green mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            We craft each juice with care using only the freshest ingredients. Discover our range of delicious, nutritious options.
          </p>
        </div>
        
        <div className="flex justify-center gap-4 mb-12 overflow-x-auto py-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={activeCategory === category 
                ? "bg-juice-green hover:bg-juice-green/90"
                : "border-juice-green text-juice-green hover:bg-juice-green/10"}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {juiceData[activeCategory].map((juice) => (
            <JuiceCard key={juice.id} juice={juice} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
