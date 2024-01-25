import "./mycontainer.css";
// mui
import { Container } from "@mui/material";
// components
import { Navbar, Hero, Section1 } from "../../components";

export default function MyContainer() {
  return (
    <>
      <Navbar />
      <Container maxWidth="xl" component="main" className="space-y-[10rem]">
        <Hero />
        <Section1 />
      </Container>
    </>
  );
}
