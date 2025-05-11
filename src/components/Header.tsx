
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bell, User, Menu, X, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="flex items-center justify-between px-6 py-4 bg-background/70 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/5">
        {/* Logo & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden h-9 w-9 text-white hover:bg-white/10"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          
          <div className="hidden md:flex items-center gap-2">
            <span className="bg-[#3a36e0] p-1.5 rounded text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 7L13 15L9 11L3 17M21 7H15M21 7V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="text-lg font-bold text-white">LeagueSync</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className={cn(
          "fixed inset-x-0 top-[72px] p-4 border-b border-white/10 md:static md:p-0 md:border-0 md:flex md:items-center md:gap-1 transition-all duration-300 ease-in-out bg-background/95 backdrop-blur-md md:bg-transparent",
          isMenuOpen ? "block" : "hidden md:flex"
        )}>
          <NavLink href="#" isActive>Dashboard</NavLink>
          <NavLink href="/leagues">Leagues</NavLink>
          <NavLink href="/matches">Matches</NavLink>
          <NavLink href="/analysis">Analysis</NavLink>
          <NavLink href="/patterns">
            Patterns
            <span className="absolute -top-1 -right-2 flex h-3 w-3">
              <span className="animate-ping absolute h-full w-full rounded-full bg-[#ff4a4a] opacity-75"></span>
              <span className="rounded-full h-3 w-3 bg-[#ff4a4a]"></span>
            </span>
          </NavLink>
        </nav>
        
        {/* Right Side Actions */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-white hover:bg-white/10 hover:text-white relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1.5 w-2 h-2 bg-[#ff4a4a] rounded-full border-2 border-background animate-pulse"></span>
          </Button>
          
          <Button variant="ghost" className="gap-2 bg-secondary/50 hover:bg-secondary text-white border-0 px-3 text-sm">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Account</span>
          </Button>
          
          <Button className="bg-[#3a36e0] hover:bg-[#2a26d0] text-white gap-2 shadow-sm hover:shadow-[0_0_15px_rgba(58,54,224,0.5)] transition-all hidden sm:flex">
            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
            </svg>
            Create New
          </Button>
        </div>
      </div>
    </header>
  );
};

// NavLink component for consistent styling
const NavLink = ({ 
  children, 
  href = "#", 
  isActive = false 
}: { 
  children: React.ReactNode; 
  href?: string; 
  isActive?: boolean;
}) => {
  return (
    <a 
      href={href} 
      className={cn(
        "relative text-sm px-4 py-2.5 md:py-1.5 block md:inline-block transition-colors",
        "hover:text-white group",
        isActive 
          ? "text-white font-medium" 
          : "text-muted-foreground"
      )}
    >
      <span className="relative z-10">{children}</span>
      {isActive && (
        <span className="absolute inset-0 md:bottom-0 md:top-auto md:h-0.5 bg-[#3a36e0] opacity-100 md:opacity-70 rounded-sm md:rounded-none" />
      )}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#3a36e0] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 opacity-0 group-hover:opacity-70" />
    </a>
  );
};

export default Header;
