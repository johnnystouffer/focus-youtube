"use client";

export default function Dropdown({ options, onSelect, val }) {

    return (
        <select value={val} onChange={(e) => onSelect(e.target.value)}>
            {options.map((v) => (
                <option key={v[0]} value={v[1]}>
                    {v[0]}
                </option>
            ))}
        </select>
    );
}