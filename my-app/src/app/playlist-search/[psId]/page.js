import HomeButton from "@/components/HomeButton";
import PlaylistView from "../components/PlaylistSearch";

export default async function PlaylistSearchPage({ params }) {
  const { psId } = await params;

  const psText = decodeURIComponent(psId);

  const res = await fetch(
    `/api/search?text=${psId}&type=playlist`,
    { cache: "no-store" }
  );

  const initialPlaylists = await res.json();

  return (
    <>
      <div className="flex flex-col w-screen h-screen text-white">
        <div className="shrink-0">
          <HomeButton />
          <h1 className="text-4xl text-center mt-4 mb-2">Search Results for: {psText.replace('+', ' ')}</h1>
        </div>
        <PlaylistView initialPlaylists={initialPlaylists} psId={psId} />
      </div>
    </>
  );
}
