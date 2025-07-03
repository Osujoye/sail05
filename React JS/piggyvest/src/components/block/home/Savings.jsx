import React from "react";

const Savings = () => {
  const piggyCard = [
    {
      title: "Automated Saving",
      desc: "Build a dedicated savings faster on your terms, automatically or manually",
      btnTitle: "Piggy bank",
      color: "#123456",
    },
    {
      title: "Fixed Savings",
      desc: "Lock money away for a fixed duration without having access to it until maturity. It's like having a custom fixed deposit.",
      btnTitle: "Safe Lock",
      color: "yellow",
    },
    {
      title: "Goal-oriented Savings",
      desc: "Reach all your savings goals faster. Save towards multiple goals on your own or with a group.",
      btnTitle: "Target Savings",
      color: "red",
    },
  ];
  return (
    <div className=" my-20 flex flex-col items-center">
      <section className=" text-center">
        <h1 className=" font-bold text-5xl">Many ways to build your savings</h1>
        <p className=" text-2xl">
          Earn 12%-20% when you save with any of these Piggyvest plans.
        </p>
      </section>
      <section className=" flex justify-center max-w-[1200px] flex-wrap bg-amber-400">
        {piggyCard?.map((data, i) => (
          <main className=" bg-white h-[400px] w-[400px] m-9 p-5" key={i}>
            <h1
              style={{ color: `${data.color}` }}
              className=" font-bold text-3xl"
            >
              {" "}
              {data.title}{" "}
            </h1>
            <p>{data.desc}</p>
            <button> {data.btnTitle} </button>
          </main>
        ))}
      </section>
    </div>
  );
};

export default Savings;
