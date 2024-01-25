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
        sx={{ backgroundColor: "transparent", boxShadow: "none" }}
        position="sticky"
      >
        <Toolbar
          component="nav"
          className="justify-between items-center text-black font-medium mt-[2rem]"
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
