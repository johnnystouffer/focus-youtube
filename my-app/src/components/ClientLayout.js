"use client";

import { useEffect, useState } from "react";
import TopBar from "../components/TopBar";
import Loading from "../components/Loading"; 

export default function ClientLayout({ children }) {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (typeof window !== 'undefined') {
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
    <main className="absolute z-10 mt-0">
      <TopBar/>
      {children}
    </main>
  );
}
