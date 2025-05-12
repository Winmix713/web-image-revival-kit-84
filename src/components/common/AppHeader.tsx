
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bell, User, Menu, X, Plus, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import NavLink from "@/components/ui/nav-link";

interface AppHeaderProps {
  toggleSidebar?: () => void;
  title?: string;
}

export const AppHeader = ({ toggleSidebar, title = "LeagueSync" }: AppHeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="flex items-center justify-between px-6 py-4 bg-background/60 backdrop-blur-xl border-b border-white/10 shadow-md shadow-black/10 transition-all duration-300">
        {/* Logo & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden h-9 w-9 text-white hover:bg-white/10 active:scale-95 transition-all"
            onClick={toggleSidebar || toggleMenu}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          
          <div className="flex items-center gap-3">
            <span className="bg-gradient-to-br from-[#3a36e0] to-[#6e59A5] p-1.5 rounded text-white shadow-md shadow-[#3a36e0]/20 animate-pulse" style={{ animationDuration: '4s' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 7L13 15L9 11L3 17M21 7H15M21 7V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80 hover-glow-blue cursor-pointer transition-all duration-300">{title}</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className={cn(
          "fixed inset-x-0 top-[72px] p-4 border-b border-white/10 md:static md:p-0 md:border-0 md:flex md:items-center md:gap-1 transition-all duration-300 ease-in-out bg-background/95 backdrop-blur-md md:bg-transparent",
          isMenuOpen ? "block" : "hidden md:flex"
        )}>
          <div className="relative md:ml-4 mb-4 md:mb-0 flex md:hidden">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full h-9 bg-background/30 rounded-lg pl-10 pr-4 text-sm border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#9b87f5] focus:border-[#9b87f5]"
            />
          </div>
          
          <NavLink href="/" isActive={false}>Dashboard</NavLink>
          <NavLink href="/leagues">Leagues</NavLink>
          <NavLink href="/matches" isActive={true}>Matches</NavLink>
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
          <div className="relative hidden md:flex mr-2">
            <input 
              type="text" 
              placeholder="Search..." 
              className="h-9 py-2 px-4 pl-9 bg-background/30 backdrop-blur-md border border-white/10 rounded-lg text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#3a36e0]/50 focus:border-[#3a36e0]/50 transition-all w-40 focus:w-60"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-9 w-9 rounded-full text-white hover:bg-white/10 hover:text-white relative transition-all duration-200 active:scale-95"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1.5 w-2 h-2 bg-[#ff4a4a] rounded-full border-2 border-background animate-pulse"></span>
          </Button>
          
          <Button 
            variant="ghost" 
            className="gap-2 bg-secondary/50 hover:bg-secondary text-white border-0 px-3 text-sm transition-all duration-200 active:scale-95"
          >
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Account</span>
          </Button>
          
          <Button 
            className="btn-primary-glow gap-2 shadow-md active:scale-95 hidden sm:flex"
          >
            <Plus className="h-4 w-4" />
            Create New
          </Button>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
