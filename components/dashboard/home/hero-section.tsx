"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const now = new Date();

  const [state, setState] = useState({
    time: new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    }),
    date: new Intl.DateTimeFormat("en-Us", {
      dateStyle: "full",
    }).format(now),
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setState({
        ...state,
        time: now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [state]);

  return (
    <div className="h-[300px] w-full rounded-lg border">
      <div className="flex h-full flex-col justify-between max-lg:px-5 max-lg:py-8 lg:p-11">
        <h2 className="bg-slate-800 w-fit rounded py-2 px-3 text-center text-base font-normal">
          Upcoming Meeting at: 20:10
        </h2>
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-extrabold lg:text-7xl">{state.time}</h1>
          <p className="text-lg font-medium text-sky-1 lg:text-2xl">
            {state.date}
          </p>
        </div>
      </div>
    </div>
  );
}
