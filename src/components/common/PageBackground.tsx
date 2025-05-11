
import React from "react";
import { cn } from "@/lib/utils";
import BackgroundEffects from "./BackgroundEffects";

interface PageBackgroundProps {
  variant?: "default" | "subtle" | "vibrant";
  className?: string;
  animated?: boolean;
}

export const PageBackground = ({ 
  variant = "default",
  className,
  animated = true
}: PageBackgroundProps) => {
  return (
    <div 
      className={cn("fixed top-0 right-0 w-full h-full pointer-events-none", className)}
      aria-hidden="true"
    >
      {variant === "default" && (
        <>
          <div className="absolute top-0 right-0 w-full h-64 bg-gradient-to-b from-[#3a36e0]/15 via-[#9b87f5]/10 to-transparent" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#ff4a4a]/8 blur-3xl" />
          <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-[#9b87f5]/10 blur-3xl" />
          <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-[#3a36e0]/10 blur-3xl" />
        </>
      )}
      
      {variant === "subtle" && (
        <>
          <div className="absolute top-0 right-0 w-full h-48 bg-gradient-to-b from-[#3a36e0]/10 via-[#9b87f5]/5 to-transparent" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#ff4a4a]/5 blur-3xl" />
          <div className="absolute top-40 right-40 w-56 h-56 rounded-full bg-[#9b87f5]/5 blur-3xl" />
        </>
      )}
      
      {variant === "vibrant" && (
        <>
          <div className="absolute top-0 right-0 w-full h-96 bg-gradient-to-b from-[#3a36e0]/20 via-[#9b87f5]/15 to-transparent" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#ff4a4a]/15 blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-[#9b87f5]/15 blur-3xl" />
          <div className="absolute bottom-20 right-20 w-[30rem] h-[30rem] rounded-full bg-[#3a36e0]/15 blur-3xl animate-pulse" style={{ animationDuration: '12s' }} />
          <div className="absolute -top-40 -left-20 w-[40rem] h-[40rem] rounded-full bg-[#6e59A5]/10 blur-3xl" />
        </>
      )}
      
      {animated && <BackgroundEffects variant={variant} />}
    </div>
  );
};

export default PageBackground;
