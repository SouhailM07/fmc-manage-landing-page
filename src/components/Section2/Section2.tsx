import "./section2.css";
// mui
import { Avatar } from "@mui/material";
// assets
import img1 from "/avatar-anisha.png";
import img2 from "/avatar-ali.png";
import img3 from "/avatar-richard.png";

export default function Section2() {
  interface cards_type {
    img: string;
    title: string;
    txt: string;
  }

  const cards: cards_type[] = [
    {
      img: img1,
      title: "Anisha Li",
      txt: "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
    },
    {
      img: img2,
      title: "Ali Bravo",
      txt: "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
    },
    {
      img: img3,
      title: "Richard Watts",
      txt: "Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!",
    },
  ];
  return (
    <>
      <section id="Section2" className=" mx-auto text-center">
        <h1 className="text-[2.7rem] font-bold">What they've said</h1>
        <ul className="grid gap-y-[1.5rem] place-items-center mt-[5rem] mb-[4rem]">
          {cards.map((e, i) => {
            return (
              <li
                key={i}
                className=" bg-VaryLightGray w-[32rem] h-full px-[2.5rem] text-center "
              >
                <div className="flex flex-col items-center translate-y-[-2.2rem]">
                  <Avatar
                    src={e.img}
                    sx={{ height: "4.5rem", width: "4.5rem" }}
                  />
                  <p className="text-[1.2rem]  my-[1.5rem] font-medium">
                    {e.title}
                  </p>
                  <q className="text-DarkGrayishBlue">{e.txt}</q>
                </div>
              </li>
            );
          })}
        </ul>
        <button className="px-[3rem] py-[0.8rem] text-white rounded-full bg-BrightRed">
          Get Started
        </button>
      </section>
    </>
  );
}
