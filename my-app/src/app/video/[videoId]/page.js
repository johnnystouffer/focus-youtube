export default async function Content({ params }) {
  const {videoId} = await params;

  const res = await fetch(
    `http://localhost:3000/api/video?videoId=${encodeURIComponent(videoId)}`,
    { cache: "no-store" }
  );

  const vid = await res.json();

  const video = vid?.items?.[0];

  if (!video) {
    return (
      <div className="text-white p-10">
        <h1 className="text-2xl">Video not found</h1>
      </div>
    );
  }

  const { snippet, contentDetails, statistics } = video;
  const title = snippet?.title ?? "No title";
  const description = snippet?.description ?? "No description";
  const hasCaptions = contentDetails?.caption === "true";

  return (
    <div className="h-lvh w-lvw flex flex-col items-center justify-start pt-10 text-white">
      <h1 className="text-3xl p-2 m-2">{title}</h1>

      <iframe
        width="960"
        height="540"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <div className="flex items-center justify-between max-h-1/4 w-full max-w-3xl p-4 mt-4 bg-neutral-700 rounded-lg overflow-scroll">
        <p className="max-w-3xl mt-4 text-gray-300">{description}</p>
      </div>
    </div>
  );
}
