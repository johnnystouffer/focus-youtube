"use client";
import { useRouter } from "next/navigation";

export default function HomeButton() {
  const router = useRouter();

  return (
    <div
      className="px-4 py-2 rounded-2xl bg-amber-700/10 backdrop-blur-md text-white hover:bg-white/10 border border-white transition-all hover:scale-105 duration-150 shadow-lg cursor-pointer m-4 ml-8 mb-0 w-fit text-lg"
      onClick={() => router.push("/")}
    >
      Home
    </div>
  );
}
