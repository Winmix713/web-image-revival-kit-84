
import React from "react";
import { Button } from "@/components/ui/button";
import { Bell, User, Menu } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-sm w-full border-b border-border sticky top-0 z-10">
      <div className="flex items-center gap-2 md:hidden">
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
      
      <nav className="hidden md:flex items-center gap-6">
        <a href="#" className="text-sm text-white hover:text-primary transition-colors">Store</a>
        <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Pro</a>
        <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">AI</a>
        <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">iOS</a>
        <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors relative group">
          Teams
          <span className="absolute -top-1 -right-2 flex h-3 w-3">
            <span className="animate-ping absolute h-full w-full rounded-full bg-[#ff4a4a] opacity-75"></span>
            <span className="rounded-full h-3 w-3 bg-[#ff4a4a]"></span>
          </span>
        </a>
        <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Changelog</a>
        <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Blog</a>
        <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Pricing</a>
      </nav>
      
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-muted-foreground hover:text-white relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1.5 w-2 h-2 bg-[#ff4a4a] rounded-full border-2 border-background"></span>
        </Button>
        
        <Button variant="ghost" className="gap-2 bg-secondary/50 hover:bg-secondary text-white border-0 px-3">
          <User className="h-4 w-4" />
          <span className="hidden sm:inline">Account</span>
        </Button>
        
        <Button className="bg-[#3a36e0] hover:bg-[#2a26d0] text-white gap-2 shadow-sm hover:shadow-lg transition-all hidden sm:flex">
          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
          </svg>
          Create New
        </Button>
      </div>
    </header>
  );
};

export default Header;
