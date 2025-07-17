"use client"

import { useState } from "react";
import { decodeText } from "@/utils/util";

export default function PlaylistView({ initialPlaylists, psId }) {

  const [playlists, setPlaylists] = useState(initialPlaylists.items || []);
  const [nextPageToken, setNextPageToken] = useState(initialPlaylists.nextPageToken);
  const [loading, setLoading] = useState(false);

  const loadMore = async () => {

    setLoading(true);

    const res = await fetch(
        `/api/search?text=${encodeURIComponent(psId)}&type=playlist&nextPageToken=${nextPageToken}`,
        { cache: "no-store" }
    );

    const data = await res.json();

    setPlaylists((prev) => {
        const seen = new Set(prev.map((v) => v.id.playlistId));
        const newItems = (data.items || []).filter((v) => !seen.has(v.id.playlistId));
        return [...prev, ...newItems];
    });

    setNextPageToken(data.nextPageToken);
    setLoading(false);
  }

  const approvedPlaylists = [];
  const seenPlaylists = new Set();

  for (const p of playlists) {
    const id = p?.id?.playlistId;
    if (!id || seenPlaylists.has(id) || p.id.kind !== "youtube#playlist") continue;
    seenPlaylists.add(id);
    approvedPlaylists.push(p);
  }

  return (
    <>
        <div className="flex-1 overflow-y-auto flex flex-col items-center px-4 pb-10">
            {approvedPlaylists.map((p) => (
                <a
                href={`/playlists/${p.id.playlistId}`}
                key={p.id.playlistId}
                className="w-full max-w-3xl h-[180px] bg-amber-700/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg flex items-start gap-4 p-4 m-2 hover:bg-white/10 transition hover:scale-[1.01] hover:shadow-2xl"
                >
                <img
                    src={p.snippet.thumbnails.medium.url}
                    alt={p.snippet.title}
                    className="w-[200px] h-full object-cover rounded-xl shrink-0"
                />
                <div className="flex flex-col justify-between h-full overflow-hidden">
                    <h2 className="text-lg font-semibold text-white leading-tight mb-2 line-clamp-2">
                    {decodeText(p.snippet.title)}
                    </h2>
                    <p className="text-sm text-white/80 leading-snug line-clamp-2 whitespace-pre-wrap">
                    {decodeText(p.snippet.description)}
                    </p>
                    <p className="text-xs text-white/60 italic mt-1">
                    By {decodeText(p.snippet.channelTitle)}
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
    </>
  );
}
