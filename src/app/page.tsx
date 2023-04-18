"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import { ctw } from "../utils/tailwindClassBuilder";

import fames from "../constants/fames.json";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [active, setActive] = useState(-1);

  if (fames.length > 6) {
    console.warn(
      "The hall of fame will only display top 6 for the sake of responsiveness"
    );
  }

  const handleActive = (index: number) => {
    setActive((prev) => (prev === index ? -1 : index));
  };

  const hallOfFame = fames.slice(0, 6);

  return (
    <main className="bg-sky-50 text-violet-500 min-h-screen flex justify-center items-center flex-col gap-8">
      <h1 className="text-4xl font-bold mix-blend-darken bg-violet-300 px-4 py-2 rounded-xl">
        My Hall Of Fame
      </h1>
      <section className="flex flex-row items-center justify-center px-32">
        <div className="h-72 w-4 bg-gradient-to-b from-indigo-50 to-indigo-300 grayscale rounded mr-2" />
        {hallOfFame.map((fame, index) => (
          <div
            key={fame.id}
            className={ctw([
              "h-72 flex-1 flex grayscale brightness-110",
              "data-[active=true]:grow-[3] data-[active=true]:grayscale-0 data-[active=true]:brightness-105",
              "transition-all duration-[600ms]",
              "hover:grow-[1.2] hover:grayscale-[0.01%] hover:brightness-125",
            ])}
            data-active={index === active}
            onClick={() => handleActive(index)}
          >
            <div
              className={ctw([
                "relative shadow-indigo-200 w-full shadow-lg flex flex-col justify-center items-center rounded-lg mx-2",
                "bg-gradient-to-br from-indigo-50 to-indigo-300",
              ])}
            >
              <Image
                src={fame.image}
                alt={fame.name}
                width={200}
                height={258}
                className="bg-contain pointer-events-none select-none"
              />
              <h3
                className="font-bold text-center opacity-0 data-[active=true]:opacity-100 transition-opacity duration-300 text-sm select-none whitespace-nowrap mix-blend-darken leading-3 brightness-110"
                data-active={index === active}
              >
                {fame.category}
              </h3>
              <h2
                className="font-bold text-center opacity-0 data-[active=true]:opacity-100 transition-opacity duration-300 text-2xl select-none whitespace-nowrap mb-12 mix-blend-darken"
                data-active={index === active}
              >
                {fame.name}
              </h2>
            </div>
          </div>
        ))}
        <div className="h-72 w-4 bg-gradient-to-b from-indigo-50 to-indigo-300 grayscale rounded ml-2" />
      </section>
    </main>
  );
}
