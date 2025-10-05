"use client";

export default function Dropdown({ options, onSelect, val }) {

    const optionLength = typeof options[0] === 'object' ? 2 : 1;

    return (
        <select className="backdrop-blur-md w-full border-1 border-[--text-var] p-1.5 rounded-xl hover:bg-white/10 transition ease-in-out " 
                value={val} 
                onChange={(e) => onSelect(e.target.value)}>
            {optionLength === 2 && options.map((v) => (
                <option key={v[0]} value={v[1]}>
                    {v[0]}
                </option>
            ))}
            {optionLength === 1 && options.map((v) => (
                <option key={v} value={v}>
                    {v}
                </option>
            ))}

        </select>
    );
}