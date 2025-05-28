import HomeButton from "@/components/HomeButton";

export default async function SearchPage({ params }) {
    
    const { playlistId } = await params;

    let videoList = [];
    let index = 0;

    const res = await fetch(
        `http://localhost:3000/api/playlist?playlistId=${encodeURIComponent(playlistId)}`,
        { cache: 'no-store' }
    );

    const videos = await res.json();
    if (!videos.items || videos.items.length === 0) {
        return (
            <>
            <HomeButton/>
            <div className="w-screen h-screen flex flex-col items-center justify-start text-white">
                <h1 className="text-4xl mt-6 mb-4">No videos found in this playlist</h1>
            </div>
            </>
        );
    }
    const encodedList = Buffer.from(JSON.stringify(videos.items.map(v => v.snippet.resourceId.videoId))).toString('base64');


    return (
        <>
        <HomeButton/>
        <div className="w-screen h-screen flex flex-col items-center justify-start text-white">
            <h1 className="text-4xl mt-6 mb-4">Playlist Videos</h1>

            <div className="flex flex-col items-center w-full overflow-y-auto pb-10">
            {videos.items?.map((p) => {

                videoList.push([p.snippet.resourceId.videoId, index]);
                ++index;

                return (
                <a
                href={`/video/${p.snippet.resourceId.videoId}?playlist=${encodedList}&playlistIndex=${index}`}
                key={p.snippet.resourceId.videoId}
                className="w-1/2 max-w-3xl bg-neutral-700 rounded-2xl p-3 m-3 flex items-start gap-3 max-h-1/5"
                >
                <img
                    src={p.snippet.thumbnails.medium?.url}
                    alt={p.snippet.title}
                    width={160}
                    height={120}
                    className="rounded-md shrink-0 object-fill"
                    style={{ width: '160px', height: '120px' }}
                />
                <div className="flex flex-col justify-start h-full p-3">
                    <h2 className="text-lg font-semibold leading-tight mb-1">
                    {p.snippet.title}
                    </h2>
                    <p className="text-sm text-gray-300 leading-snug max-h-3/4 overflow-scroll">
                    {p.snippet.description}
                    </p>
                </div>
                </a>
            );
            })}
            </div>
        </div></>
    );
}