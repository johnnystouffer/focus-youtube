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
    } catch {}
  }, []);

  return null;
}
