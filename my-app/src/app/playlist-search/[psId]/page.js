export default async function SearchPage({ params }) {
  const { psId } = params;

  const res = await fetch(
    `http://localhost:3000/api/search?text=${encodeURIComponent(psId)}&type=playlist`,
    { cache: "no-store" }
  );

  const playlists = await res.json();
  console.log(playlists);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-start text-white">
      <h1 className="text-4xl mt-6 mb-4">Playlists matching "{psId}"</h1>

      <div className="flex flex-col items-center w-full overflow-y-auto pb-10">
        {playlists.items?.map((p) => (
          <a
            href={`/playlist/${p.id.playlistId}`}
            key={p.id.playlistId}
            className="w-1/2 max-w-3xl bg-neutral-700 rounded-2xl p-3 m-3 flex items-start gap-3"
          >
            <img
              src={p.snippet.thumbnails.medium.url}
              alt={p.snippet.title}
              width={160}
              height={120}
              className="rounded-md shrink-0 object-fill"
            />
            <div className="flex flex-col justify-start h-full p-3">
              <h2 className="text-lg font-semibold leading-tight mb-1">
                {p.snippet.title}
              </h2>
              <p className="text-sm text-gray-300 leading-snug">
                {p.snippet.description}
              </p>
              <p className="text-sm text-gray-400 mt-1 italic">
                By {p.snippet.channelTitle}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
