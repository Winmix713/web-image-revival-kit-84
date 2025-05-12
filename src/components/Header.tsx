import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Link,
  Badge,
  Tooltip,
  Avatar
} from "@heroui/react";
import { Icon } from "@iconify/react";

interface NavLinkProps {
  href: string;
  isActive?: boolean;
  children: React.ReactNode;
  hasNotification?: boolean;
}

const NavLink = ({ href, isActive, children, hasNotification }: NavLinkProps) => {
  return (
    <NavbarItem isActive={isActive}>
      <Link
        href={href}
        color={isActive ? "primary" : "foreground"}
        className={`w-full text-sm font-medium transition-colors ${
          isActive ? "text-primary-500" : "text-foreground-500 hover:text-foreground-300"
        }`}
      >
        <span className="relative">
          {children}
          {hasNotification && (
            <span className="absolute -top-1 -right-2 flex h-2 w-2">
              <span className="absolute h-full w-full rounded-full bg-primary-500 opacity-75 animate-ping" />
              <span className="rounded-full h-2 w-2 bg-primary-500" />
            </span>
          )}
        </span>
      </Link>
    </NavbarItem>
  );
};

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      isBlurred
      isBordered={false}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-[#0066FF] dark"
      maxWidth="full"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-2 mr-8">
          <Icon icon="lucide:box" className="text-white h-6 w-6" />
          <p className="font-bold text-white text-lg">ACME</p>
        </NavbarBrand>

        <NavbarItem className="hidden lg:flex">
          <div className="flex items-center gap-2">
            <span className="text-white/60">Apps</span>
            <Icon icon="lucide:chevron-right" className="h-4 w-4 text-white/60" />
            <span className="text-white/60">iOS App</span>
            <Icon icon="lucide:chevron-right" className="h-4 w-4 text-white/60" />
            <span className="text-white font-medium">TestFlight</span>
          </div>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="basis-1/5 sm:basis-full gap-4">
        <NavbarItem className="hidden sm:flex flex-1 justify-center max-w-md">
          <div className="w-full flex relative items-center">
            <Icon 
              icon="lucide:search" 
              className="h-4 w-4 absolute left-3 text-white/40"
            />
            <input
              type="search"
              placeholder="Search..."
              className="w-full bg-white/10 rounded-full py-1.5 pl-10 pr-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
          </div>
        </NavbarItem>

        <NavbarItem>
          <Button
            isIconOnly
            variant="light"
            radius="full"
            className="text-white/90 bg-white/10"
          >
            <Icon icon="lucide:keyboard" className="h-4 w-4" />
          </Button>
        </NavbarItem>

        <NavbarItem>
          <Button
            isIconOnly
            variant="light"
            radius="full"
            className="text-white/90 bg-white/10"
          >
            <Icon icon="lucide:settings" className="h-4 w-4" />
          </Button>
        </NavbarItem>

        <NavbarItem>
          <Avatar
            src="https://img.heroui.chat/image/avatar?w=200&h=200&u=1"
            size="sm"
            className="cursor-pointer"
          />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="gap-2 bg-background/95 backdrop-blur-xl pt-6">
        <NavbarMenuItem>
          <Link href="/dashboard" size="lg" color="foreground">
            Dashboard
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/deployments" size="lg" color="foreground">
            Deployments
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/analytics" size="lg" color="foreground">
            Analytics
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/team" size="lg" color="foreground">
            Team
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/settings" size="lg" color="foreground">
            Settings
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
