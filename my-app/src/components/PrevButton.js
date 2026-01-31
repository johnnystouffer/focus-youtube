import Link from "next/link";

export default function PrevButton({playlist, index, encoded}) {

    if (playlist.length === 0 || index <= 0) return null;
    const prevVideoId = playlist[index - 1];

    return (
        <Link href={`/video/${prevVideoId}?playlist=${encoded}&playlistIndex=${index - 1}`} className="text-(--third-var) hover:underline">
        ← Previous Video
        </Link>
    );
};