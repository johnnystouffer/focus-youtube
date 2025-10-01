"use client";

import "../globals.css"
import { useRouter } from "next/navigation";

export default function TopBar() {
    const router = useRouter()

    return (
        <div className="cursor-pointer flex absolute top-2 right-2 text-white z-20">
            <div className="cursor-pointer flex transform transition-transform duration-200 hover:scale-105 p-2"
                onClick={() => router.push('works')}>
                <i className="las la-cog text-4xl md:text-2xl md:pr-1"></i>
                <p className="hidden text-l md:block">Settings</p>
            </div>
            <div className="cursor-pointer flex transform transition-transform duration-200 hover:scale-105 p-2"
                onClick={() => router.push('works')}>
                <i className="las la-user-circle text-4xl md:text-2xl md:pr-1"></i>
                <p className="hidden text-l md:block">johnstouffer</p>
            </div>
        </div>
    );
}

