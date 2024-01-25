import "./section1.css";
//
export default function Section1() {
  interface arrOfLists_type {
    title: string;
    txt: string;
  }
  const arrOfLists: arrOfLists_type[] = [
    {
      title: "Track company-wide progress",
      txt: "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
    },
    {
      title: "Advanced built-in reports",
      txt: " Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
    },
    {
      title: "Everything you need in one place",
      txt: "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
    },
  ];
  return (
    <>
      <article className="flex justify-between max-w-pw mx-auto ">
        <section>
          <h1 className="font-bold max-w-[30rem] text-[2.5rem]">
            What’s different about Manage?
          </h1>
          <p className="max-w-[24rem] text-[1.1rem] font-medium mt-[2.5rem]">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </section>
        <section>
          <ul className="space-y-[3rem]">
            {arrOfLists.map((e, i) => {
              return (
                <li key={i} className=" w-[35rem] Different_choice">
                  <div className="bg-BrightRed grid place-items-center text-white font-bold rounded-full ">
                    {`0${i + 1} `}
                  </div>
                  <h3 className="font-bold">{e.title}</h3>
                  <p className="font-medium">{e.txt}</p>
                </li>
              );
            })}
          </ul>
        </section>
      </article>
    </>
  );
}
