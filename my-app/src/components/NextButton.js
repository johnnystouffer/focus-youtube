export default function NextButton({playlist, index, encoded}) {

    if (playlist.length === 0 || index >= playlist.length - 1) return null;
    const nextVideoId = playlist[index + 1];

    return (
        <a href={`${process.env.SITE_URL}/video/${nextVideoId}?playlist=${encoded}&playlistIndex=${index + 1}`} className="text-blue-300 hover:underline">
        Next Video →
        </a>
    );
};
