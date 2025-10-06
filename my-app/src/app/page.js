"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Home() {
  const [input, changeInput] = useState("");
  const router = useRouter();

  const [logo] = useTypewriter({
    words: ['FocusTube'],
    typeSpeed: 120,
    
  })

  const handleInputChange = (e) => {
    changeInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      router.push(`/search/${input.replace(" ", "+")}`);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col px-4 relative z-10">
      <div className="flex m-3 p-3">
        <h1 className="italic  text-4xl drop-shadow">
          <span>
            {logo}
          </span>
          <Cursor cursorStyle={'_'}/>
        </h1>
      </div>

      <div className="mt-6 w-full flex justify-center">
        <form onSubmit={handleSubmit} className="w-full max-w-2xl px-4 flex gap-2">
          <input
            value={input}
            onChange={handleInputChange}
            type="text"
            className="bg-amber-700/10 backdrop-blur-md  pl-4 pr-4 py-3 rounded-full w-full text-lg outline-none placeholder-[var(--second-var)] shadow-inner ring-1 focus:ring-2 focus:white focus:scale-102 transition-all"
            placeholder="Search for something..."
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-3xl bg-amber-700/10 backdrop-blur-md  hover:bg-white/10 border border-[var(--text-var)] transition-all hover:scale-105 duration-150 shadow-lg"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
