import HomeButton from "@/components/HomeButton";

export default async function SearchPage({ params }) {
  const { playlistId } = await params;

  let videoList = [];
  let index = 0;

  const res = await fetch(
    `http://localhost:3000/api/playlist?playlistId=${encodeURIComponent(playlistId)}`,
    { cache: "no-store" }
  );

  const videos = await res.json();

  if (!videos.items || videos.items.length === 0) {
    return (
      <>
        <HomeButton />
        <div className="w-screen h-screen flex flex-col items-center justify-start text-white">
          <h1 className="text-4xl mt-6 mb-4">No videos found in this playlist</h1>
        </div>
      </>
    );
  }

  const encodedList = Buffer.from(
    JSON.stringify(videos.items.map((v) => v.snippet.resourceId.videoId))
  ).toString("base64");

  return (
    <>
      <HomeButton />
      <div className="w-screen h-screen flex flex-col items-center justify-start text-white px-4">
        <h1 className="text-4xl mt-6 mb-4">Playlist Videos</h1>

        <div className="flex flex-col items-center w-full overflow-y-auto pb-10">
          {videos.items?.map((p) => {
            videoList.push([p.snippet.resourceId.videoId, index]);
            const currentIndex = index;
            ++index;

            return (
              <a
                href={`/video/${p.snippet.resourceId.videoId}?playlist=${encodedList}&playlistIndex=${currentIndex}`}
                key={p.snippet.resourceId.videoId}
                className="w-full max-w-3xl h-[180px] bg-amber-700/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg flex items-start gap-4 p-4 m-2 hover:bg-white/10 transition hover:scale-[1.01] hover:shadow-2xl"
              >
                <img
                  src={p.snippet.thumbnails.medium?.url}
                  alt={p.snippet.title}
                  className="w-[200px] h-full object-cover rounded-xl shrink-0"
                />
                <div className="flex flex-col justify-between h-full overflow-hidden">
                  <h2 className="text-lg font-semibold text-white leading-tight mb-1 line-clamp-2">
                    {p.snippet.title}
                  </h2>
                  <p className="text-sm text-white/80 leading-snug line-clamp-3 whitespace-pre-wrap">
                    {p.snippet.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
