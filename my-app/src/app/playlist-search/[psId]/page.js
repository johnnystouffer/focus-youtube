import HomeButton from "@/components/HomeButton";

export default async function SearchPage({ params }) {
  const { psId } = await params;

  const res = await fetch(
    `http://localhost:3000/api/search?text=${encodeURIComponent(psId)}&type=playlist`,
    { cache: "no-store" }
  );

  const playlists = await res.json();
  console.log(playlists);

  return (
    <>
      <div className="flex flex-col w-screen h-screen text-white">
        {/* Header */}
        <div className="shrink-0">
          <HomeButton />
          <h1 className="text-4xl text-center mt-4 mb-2">Playlists matching "{psId}"</h1>
        </div>

        {/* Scrollable card container */}
        <div className="flex-1 overflow-y-auto flex flex-col items-center px-4 pb-10">
          {playlists.items?.map((p) => (
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
                <h2 className="text-lg font-semibold text-white leading-tight mb-1 line-clamp-2">
                  {p.snippet.title}
                </h2>
                <p className="text-sm text-white/80 leading-snug line-clamp-2">
                  {p.snippet.description}
                </p>
                <p className="text-xs text-white/60 italic mt-1">
                  By {p.snippet.channelTitle}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>

  );
}
