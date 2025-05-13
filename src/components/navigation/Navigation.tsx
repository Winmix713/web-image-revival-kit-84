
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavItem } from '@/types/navigation';
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface NavigationProps {
  navLinks: NavItem[];
}

const Navigation: React.FC<NavigationProps> = ({ navLinks }) => {
  const location = useLocation();

  return (
    <div className="flex items-center gap-6">
      <NavigationMenu>
        <NavigationMenuList>
          {navLinks.map((link, index) => {
            const isActive = location.pathname === link.href;
            
            return (
              <NavigationMenuItem key={index}>
                <Link
                  to={link.href}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300
                    hover:bg-white/5
                    ${isActive 
                      ? 'bg-blue-600/20 text-blue-400' 
                      : 'text-gray-300 hover:text-white'
                    }
                  `}
                >
                  {link.icon}
                  <span className="text-sm font-medium">{link.text}</span>
                </Link>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
      
      <Button 
        variant="default" 
        className="bg-blue-600 hover:bg-blue-700 text-white"
      >
        Bejelentkezés
      </Button>
    </div>
  );
};

export default Navigation;
