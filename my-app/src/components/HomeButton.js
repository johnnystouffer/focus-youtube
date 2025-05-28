"use client";
import { useRouter } from 'next/navigation';

export default function HomeButton() {
    const router = useRouter();

    return (
        <div
            className="text-xl bg-red-800 rounded-2xl hover:bg-red-700 active:bg-red-900 transition-colors duration-150 cursor-pointer p-2 m-4 ml-8 mb-0 w-fit"
            onClick={() => router.push('/')}
        >
            Home
        </div>
    );
}