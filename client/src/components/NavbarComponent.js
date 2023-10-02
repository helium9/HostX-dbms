import React from "react";
import menuLogo from "../images/menu.svg";
import AboutUs from "../pages/AboutUs.js";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  menuItems,
} from "@nextui-org/react";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    "Home",
    "Docs",
    "About Us",
    "Log In",
    "Sign Up",
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}>
      <NavbarBrand>
        <p className="font-bold text-inherit italic text-3xl">HostX</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-x-16" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/" className="text-xl">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/form" aria-current="page" className="text-xl">
            Docs
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/about" className="text-xl">
            About us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#" className="text-xl">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="flat"
            className="invisible sm:visible text-xl h-10 rounded-lg"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>
      <NavbarMenu className="absolute left-60">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
