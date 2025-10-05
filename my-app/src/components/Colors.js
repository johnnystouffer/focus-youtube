"use client";

import React, { useEffect, useState } from "react";
import { HexColorPicker } from "react-colorful";

export default function ChooseColor({ onChange }) {
  const [color, setColor] = useState("#ffffff");
  const [custom, setCustom] = useState("");

  const HEX_RE = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;

  const applyColor = (hex) => {
    const lower = hex.toLowerCase();
    setColor(lower);
    setCustom(lower);
    localStorage.setItem("color", lower);
    document.documentElement.style.setProperty("--text-var", lower);
    if (onChange) onChange(lower);
  };

  const handleChange = (col) => {
    if (HEX_RE.test(col)) applyColor(col);
  };

  const setCustomColor = (e) => {
    let val = e.target.value.toLowerCase();
    if (val && !val.startsWith("#")) val = `#${val}`;
    setCustom(val);
    if (HEX_RE.test(val)) applyColor(val);
  };

  useEffect(() => {
    const saved = localStorage.getItem("color");
    const valid = saved && HEX_RE.test(saved) ? saved : "#ffffff";
    setColor(valid);
    setCustom(valid);
    document.documentElement.style.setProperty("--text-var", valid);
  }, []);

  return (
    <>
      <div
        className="rounded-2xl border backdrop-blur-2xl p-3"
        style={{ borderColor: color }}
      >
        <HexColorPicker color={color} onChange={handleChange} style={{ width: "100%" }} />
      </div>
      <div className="mt-2">
        <p>Input:</p>
        <input
          style={{ borderColor: color }}
          className="backdrop-blur-2xl rounded-2xl border p-0.5 pl-2 w-full"
          type="text"
          value={custom}
          onChange={setCustomColor}
          placeholder={color}
        />
      </div>
    </>
  );
}
