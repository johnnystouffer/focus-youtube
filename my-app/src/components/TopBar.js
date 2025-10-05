"use client";

import "../app/globals.css"
import { useRouter } from "next/navigation";

export default function TopBar() {
    const router = useRouter()

    return (
        <div className="cursor-pointer flex absolute top-2 right-2 z-20">
            <a className="cursor-pointer flex transform transition-transform duration-200 hover:scale-105 p-2"
                href={'/settings'}>
                <i className="las la-cog text-4xl md:text-2xl md:pr-1"></i>
                <p className="hidden text-l md:block">Settings</p>
            </a>
            <a className="cursor-pointer flex transform transition-transform duration-200 hover:scale-105 p-2"
                href={'/profile'}>
                <i className="las la-user-circle text-4xl md:text-2xl md:pr-1"></i>
                <p className="hidden text-l md:block">Profile</p>
            </a>
        </div>
    );
}

