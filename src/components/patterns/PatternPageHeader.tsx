
import React from "react";
import { Grid, Diamond } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/common/PageHeader";
import { motion } from "framer-motion";

const PatternPageHeader = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHeader
        title="Play Patterns"
        description="Discover and analyze tactical patterns in your games"
        icon={Grid}
        actions={
          <Button className="bg-[#00F5FF] hover:bg-[#00F5FF]/80 text-[#0F1122] gap-2 shadow-glow-blue-md hover:shadow-glow-blue-lg transition-all">
            <Diamond className="h-4 w-4" />
            Create Pattern
          </Button>
        }
      />
    </motion.div>
  );
};

export default PatternPageHeader;
