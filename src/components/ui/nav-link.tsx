
import * as React from "react"
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils"

interface NavLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
  isActive?: boolean
  showIndicator?: boolean
  className?: string
  activeClassName?: string
  indicator?: "dot" | "bar"
}

export const NavLink = ({
  href,
  children,
  isActive = false,
  showIndicator = true,
  className,
  activeClassName,
  indicator = "bar",
  ...props
}: NavLinkProps) => {
  return (
    <Link
      to={href}
      className={cn(
        "relative text-sm px-4 py-2.5 block transition-colors",
        "hover:text-white group",
        isActive 
          ? cn("text-white font-medium", activeClassName) 
          : "text-muted-foreground",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {isActive && showIndicator && indicator === "bar" && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#3a36e0] opacity-70 rounded-sm" />
      )}
      {isActive && showIndicator && indicator === "dot" && (
        <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#3a36e0]" />
      )}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#3a36e0] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 opacity-0 group-hover:opacity-70" />
    </Link>
  );
};

export default NavLink;
