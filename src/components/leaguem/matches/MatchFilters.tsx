
import { useState } from "react";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MatchFiltersProps {
  onFilterChange: (filters: any) => void;
}

export const MatchFilters = ({ onFilterChange }: MatchFiltersProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFilterChange = () => {
    // Simple implementation for now
    onFilterChange({});
  };

  return (
    <div className="mb-4 flex justify-end">
      <Button 
        variant="outline" 
        size="sm" 
        className="bg-black/30 border-white/10 text-white hover:bg-white/10"
        onClick={() => {
          setIsOpen(!isOpen);
          handleFilterChange();
        }}
      >
        <Filter className="w-4 h-4 mr-2" />
        Filter
      </Button>
    </div>
  );
};
