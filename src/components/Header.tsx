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
    <NavbarItem isActive={isActive} className="relative">
      <Link
        href={href}
        color={isActive ? "primary" : "foreground"}
        className="w-full text-sm font-medium"
        style={{ '--hover-opacity': '0.8' } as React.CSSProperties}
      >
        <span className="relative">
          {children}
          {hasNotification && (
            <span className="absolute -top-1 -right-2 flex h-3 w-3">
              <span className="animate-ping absolute h-full w-full rounded-full bg-danger-500 opacity-75" />
              <span className="rounded-full h-3 w-3 bg-danger-500" />
            </span>
          )}
        </span>
      </Link>
      {isActive && (
        <div className="absolute -bottom-[2px] left-0 h-[2px] w-full bg-primary-500" />
      )}
    </NavbarItem>
  );
};

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      isBlurred
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-background/70 backdrop-blur-xl border-white/10"
      maxWidth="2xl"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-foreground"
        />
        <NavbarBrand className="gap-2">
          <div className="bg-primary-500 p-1.5 rounded flex items-center justify-center">
            <Icon icon="lucide:trending-up" className="text-white h-5 w-5" />
          </div>
          <p className="font-bold text-inherit text-lg">LeagueSync</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavLink href="#" isActive>Dashboard</NavLink>
        <NavLink href="/leagues">Leagues</NavLink>
        <NavLink href="/matches">Matches</NavLink>
        <NavLink href="/analysis">Analysis</NavLink>
        <NavLink href="/patterns" hasNotification>Patterns</NavLink>
      </NavbarContent>

      <NavbarContent justify="end" className="basis-1/5 sm:basis-full">
        <NavbarItem>
          <Tooltip content="Notifications" placement="bottom">
            <Button
              isIconOnly
              variant="light"
              radius="full"
              className="relative text-foreground"
            >
              <Icon icon="lucide:bell" className="h-5 w-5" />
              <Badge
                content=""
                shape="circle"
                color="danger"
                size="sm"
                className="absolute -top-1 -right-1"
              />
            </Button>
          </Tooltip>
        </NavbarItem>
        <NavbarItem>
          <Button
            variant="flat"
            color="default"
            radius="full"
            className="text-sm font-medium gap-2"
            startContent={<Icon icon="lucide:user" className="h-4 w-4" />}
          >
            Account
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            color="primary"
            variant="solid"
            radius="full"
            className="font-medium text-sm"
            startContent={<Icon icon="lucide:plus" className="h-4 w-4" />}
          >
            Create New
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="gap-2 bg-background/95 backdrop-blur-xl pt-6">
        <NavbarMenuItem>
          <Link
            href="#"
            size="lg"
            color="primary"
            className="w-full font-medium"
          >
            Dashboard
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            href="/leagues"
            size="lg"
            className="w-full text-foreground-600"
          >
            Leagues
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            href="/matches"
            size="lg"
            className="w-full text-foreground-600"
          >
            Matches
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            href="/analysis"
            size="lg"
            className="w-full text-foreground-600"
          >
            Analysis
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            href="/patterns"
            size="lg"
            className="w-full text-foreground-600"
          >
            Patterns
            <Badge color="danger" variant="flat" className="ml-2">
              New
            </Badge>
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
