"use client";

import { useState } from "react";
import { decodeText } from "@/utils/util";

export default function VideoSearchResults({ initialVideos, searchText }) {
  
  const [videos, setVideos] = useState(initialVideos.items || []);
  const [nextPageToken, setNextPageToken] = useState(initialVideos.nextPageToken);
  const [loading, setLoading] = useState(false);

  const loadMore = async () => {
    if (!nextPageToken) return;

    setLoading(true);

    const res = await fetch(
      `/api/search?text=${encodeURIComponent(searchText)}&type=video&nextPageToken=${nextPageToken}`,
      { cache: "no-store" }
    );

    const data = await res.json();

    // Deduplicate by videoId
    setVideos((prev) => {
      const seen = new Set(prev.map((v) => v.id.videoId));
      const newItems = (data.items || []).filter((v) => !seen.has(v.id.videoId));
      return [...prev, ...newItems];
    });

    setNextPageToken(data.nextPageToken);
    setLoading(false);
  };

  const renderedVideos = [];
  const seenIds = new Set();

  for (const v of videos) {
    const id = v?.id?.videoId;
    if (!id || seenIds.has(id) || v.id.kind !== "youtube#video") continue;
    seenIds.add(id);
    renderedVideos.push(v);
  }

  return (
    <div className="flex-1 overflow-y-auto flex flex-col items-center pb-10 px-4">
      {renderedVideos.map((p) => (
        <a
          href={`/video/${p.id.videoId}`}
          key={p.id.videoId}
          className="w-full max-w-3xl h-[180px] bg-amber-700/10 backdrop-blur-md border border-[--text-var]/20 rounded-2xl shadow-lg flex items-start gap-4 p-4 m-2 hover:bg-white/10 transition hover:scale-[1.01] hover:shadow-2xl"
        >
          <img
            src={p.snippet.thumbnails.medium.url}
            alt={decodeText(p.snippet.title)}
            className="w-[200px] h-full object-cover rounded-xl shrink-0"
          />
          <div className="flex flex-col justify-between h-full overflow-hidden">
            <h2 className="text-lg font-semibold leading-tight mb-2 line-clamp-2">
              {decodeText(p.snippet.title)}
            </h2>
            <p className="text-sm text-white/80 leading-snug line-clamp-3 whitespace-pre-wrap">
              {decodeText(p.snippet.description)}
            </p>
          </div>
        </a>
      ))}

      {nextPageToken && (
        <button
          onClick={loadMore}
          className="w-full max-w-3xl h-[60px] bg-amber-700/10 backdrop-blur-md rounded-2xl shadow-lg flex justify-center items-center gap-4 p-4 m-2 hover:bg-white/10 transition hover:scale-[1.01] hover:shadow-2xl"
          disabled={loading}
        >
          <b>{loading ? "Loading..." : "Load More..."}</b>
        </button>
      )}
    </div>
  );
}
