'use client';

import Link from "next/link";

export default function Back({ link = '/' }) {
    return (
        <Link className="absolute top-3 left-4 flex" href={link}>
            <i className="las la-arrow-left text-5xl md:text-4xl"></i>
        </Link>
    );
}