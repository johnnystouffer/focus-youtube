export default function SearchPage() {
    const data = require('./vids.json');

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-start text-white">
            <h1 className="text-4xl mt-6 mb-4">Playlist Video</h1>

            <div className="flex flex-col items-center w-full overflow-y-auto pb-10">
                {data.items.map((p) => (
                    <a
                        href={'/video/' + p.id.videoId}
                        key={p.id.videoId}
                        className="w-1/2 max-w-3xl bg-neutral-700 rounded-2xl p-3 m-3 flex items-start gap-3"
                    >
                        <img
                            src={p.snippet.thumbnails.medium.url}
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
                            <p className="text-sm text-gray-300 leading-snug">
                                {p.snippet.description}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}