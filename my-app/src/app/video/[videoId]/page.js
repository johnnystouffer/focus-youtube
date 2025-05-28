"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import HomeButton from "@/components/HomeButton";

export default function Content() {
  const { videoId } = useParams(); 
  console.log("videoId:", videoId); // Debugging line to check videoId
  const searchParams = useSearchParams();

  const index = parseInt(searchParams.get("playlistIndex"), 10);
  const encoded = searchParams.get("playlist");
  console.log(typeof encoded);

  const playlist = useMemo(() => {
    try {
      return JSON.parse(Buffer.from(encoded, "base64").toString("utf-8"));
    } catch {
      return [];
    }
  }, [encoded]);

  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideo = async () => {
      const res = await fetch(`/api/video?videoId=${encodeURIComponent(videoId)}`, { cache: "no-store" });
      const vid = await res.json();
      setVideo(vid?.items?.[0] ?? null);
      setLoading(false);
    };

    fetchVideo();
  }, [videoId]);

  if (loading) return <div className="text-white p-10">Loading...</div>;

  if (!video) return <div className="text-white p-10">Video not found</div>;

  const { snippet } = video;
  const title = snippet?.title ?? "No title";
  const description = snippet?.description ?? "No description";

  const NextButton = () => {
        console.log("playlist:", playlist);

    if (playlist.length === 0 || index >= playlist.length - 1) return null;
    const nextVideoId = playlist[index + 1];
    console.log("nextVideoId:", nextVideoId); 
  
    return (
      <a href={`/video/${nextVideoId}?playlist=${encoded}&playlistIndex=${index + 1}`} className="text-blue-500 hover:underline">
        Next Video →
      </a>
    );
  };

  const PreviousButton = () => {
        console.log("playlist:", playlist);

    if (playlist.length === 0 || index <= 0) return null;
    console.log("index:", index);
    const prevVideoId = playlist[index - 1];
      console.log("prevVideoId:", prevVideoId); 

    return (
      <a href={`/video/${prevVideoId}?playlist=${encoded}&playlistIndex=${index - 1}`} className="text-blue-500 hover:underline">
        ← Previous Video
      </a>
    );
  };

  return (
    <>
      <HomeButton />
      <div className="h-lvh w-lvw flex flex-col items-center justify-start text-white">
        <h1 className="text-3xl p-2 m-2">{title}</h1>
        <iframe
          width="960"
          height="540"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <div className="flex items-center justify-between w-full max-w-5xl p-4 mt-4 bg-neutral-700 rounded-lg">
          <PreviousButton />
          <NextButton />
        </div>
        <div className="flex items-center justify-between max-h-1/5 w-full max-w-5xl p-4 mt-4 bg-neutral-700 rounded-lg overflow-scroll">
          <p className="mt-4 text-gray-300">{description}</p>
        </div>
      </div>
    </>
  );
}
