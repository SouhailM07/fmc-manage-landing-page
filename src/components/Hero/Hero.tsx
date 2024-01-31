import "./hero.css";
// assets
import hero_lg from "/illustration-intro.svg";
declare module "react" {
  interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
    fetchpriority?: "high" | "low" | "auto";
  }
}
export default function Hero() {
  return (
    <>
      <article
        id="Hero"
        className="px-[2rem] max-lg:bg-[length:40rem_40rem] max-lg:text-center max-lg:bg-[5rem_-10rem] bg-[141%_-13rem] mx-auto pt-[10rem] lg:pt-[15rem] max-w-[90rem] flex max-lg:flex-col-reverse justify-between  items-center"
      >
        <section className="max-w-[30rem]">
          <h1 className="max-sm:text-[2.7rem] text-[3.5rem] font-bold leading-[4rem]">
            Bring everyone together to build better products.
          </h1>
          <p className="md:my-[2.7rem] my-[0rem] txt max-sm:mt-[1rem] max-sm:mb-[2rem] text-[1.2rem]">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <button className="px-[3rem] py-[0.8rem] text-white rounded-full bg-BrightRed">
            Get Started
          </button>
        </section>
        <section id="Hero__s2">
          <img id="test" src={hero_lg} alt="image" fetchpriority="high" />
        </section>
      </article>
    </>
  );
}
