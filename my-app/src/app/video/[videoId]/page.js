"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import HomeButton from "@/components/HomeButton";
import PrevButton from "@/components/PrevButton";
import NextButton from "@/components/NextButton";


export default function Content() {
  const { videoId } = useParams(); 
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
      const res = await fetch(`/api/video?videoId=${encodeURIComponent(videoId)}`, { cache: "force-cache" });
      const vid = await res.json();
      setVideo(vid?.items?.[0] ?? null);
      setLoading(false);
    };

    fetchVideo();
  }, [videoId]);

  if (loading) return <div className="text-white p-10">Loading...</div>;

  if (!video) return <div className="text-white p-10">Video not found</div>;

  const title = video?.snippet?.title ?? "No title";
  const description = video?.snippet?.description ?? "No description";

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
        {Array.isArray(playlist) && playlist.length > 0 && !isNaN(index) && (
          <div className="flex items-center justify-between w-full max-w-5xl p-4 mt-4 bg-neutral-700 rounded-lg">
            <PrevButton playlist={playlist} index={index} encoded={encoded} />
            <NextButton playlist={playlist} index={index} encoded={encoded} />
          </div>
        )}
        <div className="flex items-center justify-between max-h-1/4 w-full max-w-5xl p-4 mt-4 bg-neutral-700 rounded-lg overflow-scroll">
          <p className="mt-4 text-gray-300">{description}</p>
        </div>
      </div>
    </>
  );
}
