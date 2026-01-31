"use client";
import { useState } from "react";

export default function Dropdown({ options, onSelect, val }) {
  const optionLength = typeof options[0] === "object" ? 2 : 1;
  const [enabled, setEnabled] = useState(false);

  const handleSelect = (value) => {
    onSelect(value);
    setEnabled(false);
  };

  return (
    <div className="relative w-full">
      <div
        onClick={() => setEnabled(!enabled)}
        className="backdrop-blur-md w-full border border-[--text-var] p-1.5 rounded-xl hover:bg-white/10 transition ease-in-out appearance-none cursor-pointer"
      >
        {val || "Select an option"}
      </div>
      {enabled && (
        <div className="absolute z-50 mt-2 left-0 right-0 backdrop-blur-md border border-[--text-var] rounded-xl overflow-y-auto max-h-64">
          {optionLength === 2 &&
            options.map((v) => (
              <div
                className="hover:bg-white/10 transition ease-in-out p-1.5 cursor-pointer"
                key={v[0]}
                onClick={() => handleSelect(v[1])}
              >
                {v[1]}
              </div>
            ))}
          {optionLength === 1 &&
            options.map((v) => (
              <div
                className="hover:bg-white/10 transition ease-in-out p-1.5 cursor-pointer"
                key={v}
                onClick={() => handleSelect(v)}
              >
                {v}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}