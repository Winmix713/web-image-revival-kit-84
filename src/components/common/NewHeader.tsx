
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, ChevronRight, Search, Keyboard, Settings, Bell, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Separator } from "@/components/ui/separator";

interface NavItemProps {
  to: string;
  children: React.ReactNode;
  hasNotification?: boolean;
}

const NavItem = ({ to, children, hasNotification }: NavItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <li className="relative">
      <Link
        to={to}
        className={cn(
          "relative px-5 py-2.5 rounded-md transition-all duration-200 font-medium text-sm flex items-center",
          isActive 
            ? "text-white bg-white/15" 
            : "text-white/70 hover:text-white hover:bg-white/10"
        )}
      >
        {children}
        
        {hasNotification && (
          <span className="ml-1.5 flex h-2 w-2">
            <span className="animate-ping absolute h-2 w-2 rounded-full bg-[#ff4a4a] opacity-75" />
            <span className="relative h-2 w-2 rounded-full bg-[#ff4a4a]" />
          </span>
        )}
        
        {isActive && (
          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-t-sm" />
        )}
      </Link>
    </li>
  );
};

const HeaderIconButton = ({ children, className, ...props }: React.ComponentPropsWithoutRef<typeof Button>) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn(
        "z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small gap-2 rounded-full px-0 !gap-0 transition-transform-colors-opacity motion-reduce:transition-none bg-transparent text-white/90 hover:bg-white/10 min-w-10 w-10 h-10",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export const NewHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 w-full z-50">
      <div className="bg-[#0066FF] border-b border-white/10 shadow-md shadow-black/10">
        <div className="px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo & Breadcrumb */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 mr-8">
              <Box className="text-white h-6 w-6" />
              <p className="font-bold text-white text-lg">ACME</p>
            </div>

            <div className="hidden lg:flex items-center gap-2">
              <span className="text-white/60">Apps</span>
              <ChevronRight className="h-4 w-4 text-white/60" />
              <span className="text-white/60">iOS App</span>
              <ChevronRight className="h-4 w-4 text-white/60" />
              <span className="text-white font-medium">TestFlight</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-1 hover:bg-white/10 rounded-md"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center">
            <ul className="flex items-center gap-1">
              <NavItem to="/">Dashboard</NavItem>
              <NavItem to="/leagues">Leagues</NavItem>
              <NavItem to="/matches">Matches</NavItem>
              <NavItem to="/analysis">Analysis</NavItem>
              <NavItem to="/patterns" hasNotification={true}>Patterns</NavItem>
            </ul>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <div className="relative hidden md:flex">
              <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" />
              <input
                type="search"
                placeholder="Search..."
                className="w-60 bg-white/10 rounded-full py-1.5 pl-10 pr-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            </div>

            <HeaderIconButton>
              <Keyboard className="h-5 w-5 text-white/60" />
            </HeaderIconButton>

            <HeaderIconButton className={cn(
              location.pathname === "/settings" ? "bg-white/15" : "bg-transparent hover:bg-white/10"
            )}>
              <Settings className="h-5 w-5 text-white/60" />
            </HeaderIconButton>

            <HeaderIconButton className="relative">
              <Bell className="h-5 w-5 text-white/60" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#ff4a4a] rounded-full border-2 border-[#0066FF] animate-pulse"></span>
            </HeaderIconButton>
            
            <Avatar className="h-8 w-8 cursor-pointer border border-white/20">
              <AvatarImage src="https://img.heroui.chat/image/avatar?w=200&h=200&u=1" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-white/10">
            <div className="p-4">
              <div className="relative mb-4">
                <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-full bg-background/30 rounded-lg pl-10 pr-4 py-2 text-sm border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#9b87f5]"
                />
              </div>
              <nav className="flex flex-col gap-2">
                <Link to="/" className="px-4 py-2 text-foreground hover:bg-accent rounded-md">Dashboard</Link>
                <Link to="/leagues" className="px-4 py-2 text-foreground hover:bg-accent rounded-md">Leagues</Link>
                <Link to="/matches" className="px-4 py-2 text-foreground hover:bg-accent rounded-md">Matches</Link>
                <Link to="/analysis" className="px-4 py-2 text-foreground hover:bg-accent rounded-md">Analysis</Link>
                <Link to="/patterns" className="px-4 py-2 text-foreground hover:bg-accent rounded-md flex items-center">
                  Patterns
                  <span className="ml-2 flex h-2 w-2">
                    <span className="animate-ping absolute h-2 w-2 rounded-full bg-[#ff4a4a] opacity-75" />
                    <span className="relative h-2 w-2 rounded-full bg-[#ff4a4a]" />
                  </span>
                </Link>
                <Separator className="my-2 bg-white/10" />
                <Link to="/settings" className="px-4 py-2 text-foreground hover:bg-accent rounded-md">Settings</Link>
                <Link to="/profile" className="px-4 py-2 text-foreground hover:bg-accent rounded-md">Profile</Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default NewHeader;
