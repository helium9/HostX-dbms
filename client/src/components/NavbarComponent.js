import React from "react";
import menuLogo from "../images/menu.svg";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function NavbarComponent() {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit italic text-lg">HostX</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-x-16" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Docs
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            About us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="flat"
            className="invisible sm:visible"
          >
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarItem className="sm:invisible visible">
          <img src={menuLogo} alt="menu" /> {/*use with memu implementation later on */}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}