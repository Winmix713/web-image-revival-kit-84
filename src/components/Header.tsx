
import React from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-background w-full border-b border-border">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-md bg-blue-500 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm2.009-6.188a.733.733 0 00.42-.642v-4.34a.733.733 0 00-.42-.642.751.751 0 00-.752.027l-3.5 2.17a.75.75 0 000 1.27l3.5 2.17a.751.751 0 00.752.027z" clipRule="evenodd" />
          </svg>
        </div>
        <div>
          <p className="font-bold text-sm text-white">WINMIX</p>
        </div>
      </div>
      <nav className="hidden md:flex items-center gap-8">
        <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Store</a>
        <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Pro</a>
        <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">AI</a>
        <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">iOS</a>
        <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Teams</a>
        <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Developers</a>
        <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Changelog</a>
        <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Blog</a>
        <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Pricing</a>
      </nav>
      <div className="flex items-center gap-4">
        <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Log in</a>
        <Button variant="outline" className="bg-secondary/50 hover:bg-secondary text-white border-0">
          <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
          </svg>
          Download
        </Button>
      </div>
    </header>
  );
};

export default Header;
