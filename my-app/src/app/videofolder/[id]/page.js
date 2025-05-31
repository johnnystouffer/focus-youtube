"use client";
import { useParams } from "next/navigation";

export default function Content() {

  // since this is NOT a server side component we CANNOT use await
  // luckily NextJS provides a useParams hook to get the params from the URL
  // this is a client side component this is our equivalent to the server side 
  // of 'await params'
  const { id } = useParams();

  
  return (
    <div className="h-lvh w-lvw flex flex-col items-center justify-start text-white">
        <iframe
          width="960"
          height="540"
          // we can add the id directly to the src
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
          className="rounded-lg shadow-lg"
        >
        </iframe>
    </div>
  );
}
