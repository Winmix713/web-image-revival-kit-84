
import React from "react";
import { motion } from "framer-motion";
import PatternCard from "./PatternCard";
import { LucideIcon } from "lucide-react";

interface PatternCategory {
  id: string;
  title: string;
  description: string;
  color: string;
  icon: React.ReactNode;
}

interface PatternCategoryGridProps {
  categories: PatternCategory[];
  filter?: string;
}

const PatternCategoryGrid = ({ categories, filter = "all" }: PatternCategoryGridProps) => {
  const filteredCategories = filter === "all" 
    ? categories 
    : categories.filter(cat => {
        switch (filter) {
          case "offensive":
            return cat.id === "offensive" || cat.id === "transition";
          case "defensive":
            return cat.id === "defensive";
          case "possession":
            return cat.id === "possession" || cat.id === "setpiece";
          default:
            return true;
        }
      });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredCategories.map((category, index) => (
        <PatternCard 
          key={category.id}
          title={category.title}
          description={category.description}
          color={category.color}
          icon={category.icon}
          index={index}
        />
      ))}
    </div>
  );
};

export default PatternCategoryGrid;
