import HomeButton from "@/components/HomeButton";
import PlaylistView from "../components/PlaylistSearch";

export default async function PlaylistSearchPage({ params }) {
  const { psId } = await params;

  const res = await fetch(
    `http://localhost:3000/api/search?text=${encodeURIComponent(psId)}&type=playlist`,
    { cache: "no-store" }
  );

  const initialPlaylists = await res.json();

  return (
    <>
      <div className="flex flex-col w-screen h-screen text-white">
        <div className="shrink-0">
          <HomeButton />
          <h1 className="text-4xl text-center mt-4 mb-2">Search Results for "{psId.replace('+', ' ')}"</h1>
        </div>
        <PlaylistView initialPlaylists={initialPlaylists} psId={psId} />
      </div>
    </>
  );
}
