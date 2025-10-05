"use client";

import { useEffect, useState } from "react";
import TopBar from "../components/TopBar";
import Loading from "../components/Loading"; 

export default function ClientLayout({ children }) {

    const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (typeof window !== undefined) {
      let f = localStorage.getItem("font");
      if (!f) {
          localStorage.setItem("font", "font-spacemono");
          f = localStorage.getItem("font");
      }
      if (!document.body.classList.contains(f)) {
        document.body.classList.add(f);
      }
    }
    setLoading(false);
  }, []);

  if (loading) {
    return ( <Loading></Loading>);
  }

  return (
    <html lang="en">
      <body className="antialiased">
        <video
          className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
          src="/assets/media/background.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="fixed top-0 left-0 w-full h-full bg-indigo-950/40 z-[-1]. " />
          <main className="absolute z-10 mt-0">
            <TopBar/>
            {children}
          </main>
      </body>
    </html>
  );
}
