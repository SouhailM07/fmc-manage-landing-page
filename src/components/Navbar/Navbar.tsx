import "./navbar.css";
// mui
import { AppBar, Toolbar, Stack } from "@mui/material";
// assets
import nav_logo from "/logo.svg";

export default function Navbar() {
  const navLinks: string[] = [
    "Pricing",
    "Product",
    "About us",
    "Careers",
    "Community",
  ];
  return (
    <>
      <AppBar
        sx={{ backgroundColor: "white", boxShadow: "none" }}
        position="sticky"
        className="!inline-block"
      >
        <Toolbar
          component="nav"
          className="justify-between items-center mt-[3rem] text-black font-medium  max-w-[90rem] mx-auto"
        >
          <img src={nav_logo} alt="img" />
          <Stack component="ul" direction="row" spacing="2.5rem">
            {navLinks.map((e, i) => {
              return (
                <li key={i} className="cursor-pointer">
                  {e}
                </li>
              );
            })}
          </Stack>
          <button className="px-[3rem] py-[1rem] text-white rounded-full bg-BrightRed">
            Get Started
          </button>
        </Toolbar>
      </AppBar>
    </>
  );
}
