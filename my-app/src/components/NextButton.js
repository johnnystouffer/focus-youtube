import Link from "next/link";

export default function NextButton({playlist, index, encoded}) {

    if (playlist.length === 0 || index >= playlist.length - 1) return null;
    const nextVideoId = playlist[index + 1];

    return (
        <Link href={`/video/${nextVideoId}?playlist=${encoded}&playlistIndex=${index + 1}`} className="text-(--third-var) hover:underline">
        Next Video →
        </Link>
    );
};
