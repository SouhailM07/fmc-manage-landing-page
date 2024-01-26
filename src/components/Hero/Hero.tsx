import "./hero.css";
// assets
import hero_lg from "/illustration-intro.svg";
export default function Hero() {
  return (
    <>
      <article className="bg-no-repeat  bg-[141%_-13rem] mx-auto max-w-[100rem] pt-[15rem] bg-[url('/bg-tablet-pattern.svg')] ">
        <div className="max-w-pw mx-auto flex justify-between  items-center">
          <section className="w-[30rem] ">
            <h1 className="text-[3.5rem] font-bold leading-[4rem]">
              Bring everyone together to build better products.
            </h1>
            <p className="my-[2.7rem] text-[1.2rem]">
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <button className="px-[3rem] py-[0.8rem] text-white rounded-full bg-BrightRed">
              Get Started
            </button>
          </section>
          <section>
            <img src={hero_lg} alt="" />
          </section>
        </div>
      </article>
    </>
  );
}
