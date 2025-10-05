'use client';
import { useRouter } from "next/navigation";



export default function Back() {

    const router = useRouter();

    return (
        <a className="absolute top-3 left-4 flex" onClick={() => router.back()}>
            <i className="las la-arrow-left text-5xl md:text-4xl"></i>
        </a>
    );
}