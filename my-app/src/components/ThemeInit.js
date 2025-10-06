"use client";

import { useEffect } from "react";

const HEX_RE = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;

export default function ThemeInit() {
  useEffect(() => {
    try {
      const savedColor = localStorage.getItem("color");
      if (savedColor && HEX_RE.test(savedColor)) {
        document.documentElement.style.setProperty("--text-var", savedColor.toLowerCase());
      }

      const secondary = localStorage.getItem("secondary");
      if (secondary && HEX_RE.test(secondary)) {
        document.documentElement.style.setProperty("--second-var", secondary.toLowerCase());
      }

      const third = localStorage.getItem("link");
      if (third && HEX_RE.test(third)) {
        document.documentElement.style.setProperty("--third-var", third.toLowerCase());
      }

    } catch {}
  }, []);

  return null;
}
