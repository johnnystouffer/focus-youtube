import HomeButton from "@/components/HomeButton";
import { decodeText } from "@/utils/util";

export default async function SearchPage({ params, }) {

    const { searchId } = await params;

    const res = await fetch(
        `http://localhost:3000/api/search?text=${encodeURIComponent(searchId)}&type=video`,
        { cache: "no-store" }
    );

    const videos = await res.json();

    console.log(videos);

    return ( <>
        <HomeButton />
        <div className="w-screen h-screen flex flex-col items-center justify-start text-white">
            <h1 className="text-4xl mt-6 mb-4">Search Results for "{searchId}"</h1>

            <div className="flex flex-col items-center w-full overflow-y-auto pb-10">
                {videos.items?.map((p) => {
                     
                    if (p.id.kind !== "youtube#video") {
                        return null; // Skip non-video items
                    }
                    return (<a
                        href={`/video/${p.id.videoId}`}
                        key={p.id.videoId}
                        className="w-1/2 max-w-3xl bg-neutral-700 rounded-2xl p-3 m-3 flex items-start gap-3"
                    >
                        <img
                            src={p.snippet.thumbnails.medium.url}
                            alt={decodeText(p.snippet.title)}
                            width={160}
                            height={120}
                            className="rounded-md shrink-0 object-fill"
                        />
                        <div className="flex flex-col justify-start h-full p-3">
                            <h2 className="text-lg font-semibold leading-tight mb-1">
                                {decodeText(p.snippet.title)}
                            </h2>
                            <p className="text-sm text-gray-300 leading-snug">
                                {decodeText(p.snippet.description)}
                            </p>
                        </div>
                    </a>)
                })}
            </div>
        </div>
        </>
        
    );
}
