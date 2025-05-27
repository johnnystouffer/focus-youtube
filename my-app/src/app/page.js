"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import GoogleProvider from "next-auth/providers/google";



export default function Home() {

  const [input, changeInput] = useState("");
  const router = useRouter();

  const handleInputChange = (e) => {
    changeInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      router.push(`/search/${input}`);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col">
      <div className="flex m-3 p-3">
        <div className="w-fit h-fit flex items-center justify-center p-1">
          <h1 className="italic text-white text-4xl">Focus</h1>
        </div>
        <div className="bg-red-800 flex items-center justify-center p-1 rounded-lg">
          <h1 className="text-white text-4xl">Tube</h1>
        </div>
      </div>

      <div className="mt-6 w-full flex justify-center">
        <form onSubmit={handleSubmit} className="w-full max-w-2xl px-4 flex gap-2">
          <input
            value={input}
            onChange={handleInputChange}
            type="text"
            className="bg-neutral-700 text-white pl-4 pr-4 py-3 rounded-full w-full text-lg outline-none focus:ring-2 focus:ring-red-800"
            placeholder="Search for a video..."
          />
          <button
            type="submit"
            className="bg-red-800 text-white px-6 py-2 rounded-full text-lg hover:bg-red-700 active:bg-red-900 transition-colors duration-150 cursor-pointer"
          >
            Search
          </button>
        </form>
      </div>
      <div className="mt-10  w-full flex justify-center">
        <button className="bg-neutral-600 stron text-white px-4 py-2 rounded-2xl cursor-pointer 
  hover:bg-neutral-500 active:bg-neutral-700 transition-colors duration-150 mr-3.5"> Sign In </button>
        <Link href={`/playlists/`} className="bg-neutral-600 stron text-white px-4 py-2 rounded-2xl cursor-pointer 
  hover:bg-neutral-500 active:bg-neutral-700 transition-colors duration-150 mr-3.5"> Show Playlists </Link>
          <button className="bg-neutral-600 stron text-white px-4 py-2 rounded-2xl cursor-pointer 
  hover:bg-neutral-500 active:bg-neutral-700 transition-colors duration-150 mr-3.5"> Show Subscribed Channels </button>
      </div>
    </div>
  );
}
