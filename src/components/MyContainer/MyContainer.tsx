import "./mycontainer.css";
// mui
import { Container } from "@mui/material";
// components
import { Navbar, Hero } from "../../components";

export default function MyContainer() {
  return (
    <>
      <Navbar />
      <Container maxWidth="xl" component="main">
        <Hero />
      </Container>
    </>
  );
}
