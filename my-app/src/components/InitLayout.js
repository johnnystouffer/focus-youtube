"use client";
import ThemeInit from "./ThemeInit";
import Background from "./Background";
import ClientLayout from "./ClientLayout";
import { useEffect, useState } from "react";

export default function InitLayout({ children }) {

    const [currBackground, setCurrBackground] = useState(null);

    const selectingBackground = (val) => {
        setCurrBackground(val);
    }

    useEffect(() => {
        if (localStorage.getItem("background")) {
            setCurrBackground(localStorage.getItem("background"));
        }
    }, []);

    return (
        <body className="antialiased text-[var(--text-var)]">
            <ThemeInit />
            <Background selectingBackground={setCurrBackground} />
            <div className="fixed top-0 left-0 w-full h-full bg-indigo-950/40 z-[-1]" />
              <ClientLayout>
                {children}
              </ClientLayout>
        </body>

    );
}