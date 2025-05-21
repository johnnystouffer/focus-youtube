

export default function Content() {
  return (
    <div className="h-lvh w-lvw flex flex-col items-center justify-start pt-10">
        <h1 className="text-3xl p-2 m-2"> A Youtube Video </h1>
      <iframe
        width="960"
        height="540"
        src="https://www.youtube.com/embed/6jQdZcYY8OY?si=vVsjPvPPtaqZesDn"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <div className="flex flex-wrap justify-center mt-6 gap-4">
        <button className="bg-gray-500 stron text-white px-4 py-2 rounded-md cursor-pointer 
  hover:bg-gray-400 active:bg-gray-600 transition-colors duration-150">Like</button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded-md cursor-pointer 
  hover:bg-gray-400 active:bg-gray-600 transition-colors duration-150">Dislike</button>
        <button className="bg-gray-600 text-white px-4 py-2 rounded-md cursor-pointer 
  hover:bg-gray-500 active:bg-gray-700 transition-colors duration-150">Share</button>
        <button className="bg-gray-600 text-white px-4 py-2 rounded-md cursor-pointer 
  hover:bg-gray-500 active:bg-gray-700 transition-colors duration-150">Add to Playlist</button>
          <button className="bg-gray-600 text-white px-4 py-2 rounded-md cursor-pointer 
  hover:bg-gray-500 active:bg-gray-700 transition-colors duration-150">Show Caption</button>
        <button className="bg-red-600 text-white px-4 py-2 rounded-md cursor-pointer 
  hover:bg-red-500 active:bg-red-700 transition-colors duration-150">SUBSCRIBE</button>
      </div>
    </div>
  );
}
