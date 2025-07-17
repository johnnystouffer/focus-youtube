export default function PrevButton({playlist, index, encoded}) {

    if (playlist.length === 0 || index <= 0) return null;
    const prevVideoId = playlist[index - 1];

    return (
        <a href={`/video/${prevVideoId}?playlist=${encoded}&playlistIndex=${index - 1}`} className="text-blue-300 hover:underline">
        ← Previous Video
        </a>
    );
};