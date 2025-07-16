import HomeButton from "@/components/HomeButton";
import { decodeText } from "@/utils/util";

export default async function SearchPage({ params }) {
  const { searchId } = await params;
  
  const searchText = decodeURIComponent(searchId);
  console.log(searchText);

  const res = await fetch(
    `http://localhost:3000/api/search?text=${searchText}&type=video`,
    { cache: "no-store" }
  );

  const videos = await res.json();


  return (
    <>
      <div className="flex flex-col w-screen h-screen">
        {/* Header */}
        <div className="shrink-0">
          <HomeButton />
          <h1 className="text-4xl text-center mt-4 mb-2">Search Results for "{searchText.replace('+', ' ')}"</h1>
        </div>

        <div className="flex-1 overflow-y-auto flex flex-col items-center pb-10 px-4">
          {videos.items?.map((p) => {
            if (p.id.kind !== "youtube#video") return null;

            return (
                <a
                href={`/video/${p.id.videoId}`}
                key={p.id.videoId}
                className="w-full max-w-3xl h-[180px] bg-amber-700/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg flex items-start gap-4 p-4 m-2 hover:bg-white/10 transition hover:scale-[1.01] hover:shadow-2xl"
                >
                <img
                    src={p.snippet.thumbnails.medium.url}
                    alt={decodeText(p.snippet.title)}
                    className="w-[200px] h-full object-cover rounded-xl shrink-0"
                />
                <div className="flex flex-col justify-between h-full overflow-hidden">
                    <h2 className="text-lg font-semibold text-white leading-tight mb-2 line-clamp-2">
                    {decodeText(p.snippet.title)}
                    </h2>
                    <p className="text-sm text-white/80 leading-snug line-clamp-3 whitespace-pre-wrap">
                    {decodeText(p.snippet.description)}
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
