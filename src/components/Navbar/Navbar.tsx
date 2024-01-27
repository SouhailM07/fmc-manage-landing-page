import "./navbar.css";
// mui
import { AppBar, Toolbar, Stack } from "@mui/material";
// hooks
import { useState } from "react";
// assets
import nav_logo from "/logo.svg";
import toggle_nav_logo from "/icon-hamburger.svg";
import close_logo from "/icon-close.svg";
// ==============>
// global vars <
// ==============>
const navLinks: string[] = [
  "Pricing",
  "Product",
  "About us",
  "Careers",
  "Community",
];
export default function Navbar() {
  const [toggleMenu, SetToggleMenu] = useState<boolean>(false);
  return (
    <>
      <AppBar
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          overflow: "visible",
        }}
        position="fixed"
        className="!inline-block z-[99]"
      >
        <Toolbar
          component="nav"
          className="justify-between items-center mt-[1.5rem] lg:mt-[3rem] text-black font-medium  max-w-[90rem] mx-auto "
        >
          <img src={nav_logo} alt="img" />
          <Stack
            component="ul"
            direction="row"
            spacing="2.5rem"
            className="max-lg:!hidden"
          >
            {navLinks.map((e, i) => {
              return (
                <li
                  key={i}
                  className="cursor-pointer hover:text-DarkGrayishBlue"
                >
                  {e}
                </li>
              );
            })}
          </Stack>
          <img
            src={toggleMenu ? close_logo : toggle_nav_logo}
            className="lg:hidden "
            aria-expanded={toggleMenu}
            onClick={() => SetToggleMenu(!toggleMenu)}
            alt="logo"
            id="menuDropdown"
            role="button"
          />
          <button className="max-lg:hidden px-[3rem] py-[1rem] text-white rounded-full bg-BrightRed">
            Get Started
          </button>
        </Toolbar>
      </AppBar>
      {toggleMenu && <Navbar_mobile />}
    </>
  );
}

const Navbar_mobile = () => {
  return (
    <>
      <div className="bg-[#0000005e] fixed lg:hidden w-full top-0  min-h-full z-[10]  left-0 ">
        <Stack
          role="menu"
          component="ul"
          aria-labelledby="menuDropdown"
          spacing="1.7rem"
          className="items-center translate-y-[8rem] rounded-lg py-[3rem] font-bold bg-white w-[90%] mx-auto"
        >
          {navLinks.map((e, i) => {
            return (
              <li role="menuitem" key={i}>
                {e}
              </li>
            );
          })}
        </Stack>
      </div>
    </>
  );
};
