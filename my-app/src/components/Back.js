'use client';

export default function Back({ link = '/' }) {
    return (
        <a className="absolute top-3 left-4 flex" href={link}>
            <i className="las la-arrow-left text-5xl md:text-4xl"></i>
        </a>
    );
}