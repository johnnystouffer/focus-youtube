"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import HomeButton from "@/components/HomeButton";
import PrevButton from "@/components/PrevButton";
import NextButton from "@/components/NextButton";
import Loading from "@/components/Loading";

export default function Content() {
  const { videoId } = useParams(); 
  const searchParams = useSearchParams();

  const index = parseInt(searchParams.get("playlistIndex"), 10);
  const encoded = searchParams.get("playlist");

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

  if (loading) return <Loading/>;
  if (!video) return <div className="text-white p-10">Video not found</div>;

  const title = video?.snippet?.title ?? "No title";
  const description = video?.snippet?.description ?? "No description";

  return (
    <>
      <HomeButton />
      <div className="min-h-screen w-full flex flex-col items-center justify-start text-white px-4 pb-10">
        <h1 className="text-3xl p-2 m-2 text-center max-w-5xl">{title}</h1>

        {/* Responsive iframe */}
        <div className="w-full max-w-5xl aspect-video mt-4 rounded-xl overflow-hidden shadow-lg">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            frameBorder="0"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>

        {Array.isArray(playlist) && playlist.length > 0 && !isNaN(index) && (
          <div className="flex items-center justify-between w-full max-w-5xl px-6 py-4 mt-4 rounded-2xl bg-amber-700/10 backdrop-blur-md border border-white text-white shadow-lg">
            <PrevButton playlist={playlist} index={index} encoded={encoded} />
            <NextButton playlist={playlist} index={index} encoded={encoded} />
          </div>
        )}

        {description.length > 0 && (<div className="w-full max-w-5xl mt-4 px-6 py-4 rounded-2xl bg-amber-700/10 backdrop-blur-md border border-white text-white shadow-lg whitespace-pre-wrap">
          {description}
        </div>)}
      </div>
    </>
  );
}
