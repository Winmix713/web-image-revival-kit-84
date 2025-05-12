
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, ChevronRight, Search, Keyboard, Settings, Bell, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import NavLink from "@/components/ui/nav-link";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Separator } from "@/components/ui/separator";

interface NavItemProps {
  to: string;
  children: React.ReactNode;
  isActive?: boolean;
  hasNotification?: boolean;
}

const NavItem = ({ to, children, isActive = false, hasNotification }: NavItemProps) => {
  return (
    <li className="relative">
      <NavLink href={to} isActive={isActive}>
        {children}
        {hasNotification && (
          <span className="absolute -top-1 -right-2 flex h-2 w-2">
            <span className="absolute h-full w-full rounded-full bg-[#ff4a4a] opacity-75 animate-ping" />
            <span className="rounded-full h-2 w-2 bg-[#ff4a4a]" />
          </span>
        )}
      </NavLink>
    </li>
  );
};

export const NewHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

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
          <nav className="hidden lg:flex gap-1">
            <ul className="flex gap-1">
              <NavItem to="/">Dashboard</NavItem>
              <NavItem to="/leagues" isActive={true}>Leagues</NavItem>
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

            <Button
              variant="ghost"
              size="icon"
              className="text-white/90 bg-white/10 hover:bg-white/20 rounded-full"
            >
              <Keyboard className="h-4 w-4" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="text-white/90 bg-white/10 hover:bg-white/20 rounded-full"
            >
              <Settings className="h-4 w-4" />
            </Button>

            <Button
              variant="ghost" 
              size="icon" 
              className="h-9 w-9 rounded-full text-white hover:bg-white/10 hover:text-white relative transition-all duration-200 active:scale-95"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1.5 w-2 h-2 bg-[#ff4a4a] rounded-full border-2 border-[#0066FF] animate-pulse"></span>
            </Button>
            
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
                <NavLink href="/">Dashboard</NavLink>
                <NavLink href="/leagues" isActive={true}>Leagues</NavLink>
                <NavLink href="/matches">Matches</NavLink>
                <NavLink href="/analysis">Analysis</NavLink>
                <NavLink href="/patterns">
                  Patterns
                  <span className="absolute -top-1 -right-2 flex h-3 w-3">
                    <span className="animate-ping absolute h-full w-full rounded-full bg-[#ff4a4a] opacity-75"></span>
                    <span className="rounded-full h-3 w-3 bg-[#ff4a4a]"></span>
                  </span>
                </NavLink>
                <Separator className="my-2 bg-white/10" />
                <NavLink href="/settings">Settings</NavLink>
                <NavLink href="/profile">Profile</NavLink>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default NewHeader;
