import HomeButton from "@/components/HomeButton";
import VideoSearchResults from "@/app/search/components/SearchResults";

export default async function SearchPage({ params }) {
  const { searchId } = await params;
  const searchText = decodeURIComponent(searchId);

  const res = await fetch(
    `http://localhost:3000/api/search?text=${searchText}&type=video`,
    { cache: "no-store" }
  );

  const initialVideos = await res.json();

  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="shrink-0">
        <HomeButton />
        <h1 className="text-4xl text-center mt-4 mb-2">
          Search Results for: {searchText.replace("+", " ")}
        </h1>
      </div>

      <VideoSearchResults initialVideos={initialVideos} searchText={searchText} />
    </div>
  );
}
