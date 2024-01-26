import "./mycontainer.css";
// components
import { Navbar, Hero, Section1, Section2, Footer } from "../../components";

export default function MyContainer() {
  return (
    <>
      <Navbar />
      <main className="space-y-[10rem]">
        <Hero />
        <Section1 />
        <Section2 />
      </main>
      <Footer />
    </>
  );
}
