import Image from 'next/image';

export default function Home() {
  const data = require('./pl.json');

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-start text-white bg-black">
      <h1 className="text-4xl mt-6 mb-4">Playlists</h1>

      <div className="flex flex-col items-center w-full overflow-y-auto pb-10">
        {data.items.map((p) => (
          <div
            key={p.id}
            className="w-3/4 max-w-3xl bg-neutral-700 rounded-2xl p-3 m-3 flex items-start gap-3"
          >
            <Image
              src={p.snippet.thumbnails.medium.url}
              alt={p.snippet.title}
              fill={true}
              className="rounded-md shrink-0"
            />
            <div className="flex flex-col justify-start">
              <h2 className="text-lg font-semibold leading-tight mb-1">
                {p.snippet.title}
              </h2>
              <p className="text-sm text-gray-300 leading-snug">
                {p.snippet.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
