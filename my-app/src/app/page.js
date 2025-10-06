"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const OPTIONS = ['Videos', 'Playlists'];
const UNSELECTED = "text-[var(--text-color)] border border-[var(--text-var)] hover:bg-white/10";
const SELECTED = `bg-[var(--text-var)]/25 border border-[var(--text-var)] transition-all scale-[1.05]
`;
export default function Home() {
  const [input, changeInput] = useState("");
  const [option, setOption] = useState(OPTIONS[0]);
  const router = useRouter();

  const [logo] = useTypewriter({
    words: ["FocusTube"],
    typeSpeed: 120,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const q = input.trim();
    if (!q) return;
    const encoded = encodeURIComponent(q);

    if (option === "Videos") {
      router.push(`/search/${encoded}`);
    } 
    else if (option === "Playlists") {
      router.push(`/playlist-search/${encoded}`);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col px-4 relative z-10">
      <div className="flex m-3 p-3">
        <h1 className="italic text-4xl drop-shadow">
          <span>{logo}</span>
          <Cursor cursorStyle={"_"} />
        </h1>
      </div>

      {/* Inline option selector */}
      <div className="flex gap-2 mt-2" role="tablist" aria-label="Search type">
        {OPTIONS.map((n) => {
          const selected = option === n;
          return (
            <button
              key={n}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setOption(n)}
              className={`m-0.5 px-2 py-1 rounded-2xl backdrop-blur-md transition-all ${selected ? SELECTED : UNSELECTED}`}
            >
              {n}
            </button>
          );
        })}
      </div>

      <div className="mt-6 w-full flex justify-center">
        <form onSubmit={handleSubmit} className="w-full max-w-2xl px-4 flex gap-2">
          <input
            value={input}
            onChange={(e) => changeInput(e.target.value)}
            type="text"
            className="bg-amber-700/10 backdrop-blur-md pl-4 pr-4 py-3 rounded-full w-full text-lg outline-none placeholder-[var(--second-var)] shadow-inner ring-1 focus:ring-2 focus:scale-102 transition-all"
            placeholder={`Search ${option.toLowerCase()}...`}
          />
          <button
            type="submit"
            className="px-3 py-2 rounded-3xl bg-amber-700/10 backdrop-blur-md hover:bg-white/10 border border-[var(--text-var)] transition-all hover:scale-105 duration-150 shadow-lg"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
