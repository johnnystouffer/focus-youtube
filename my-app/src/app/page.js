export default function Home() {
  return (
    <div className=" w-screen h-screen flex items-center justify-center">
      <div className="flex">
        <div className="w-fit h-fi flex items-center justify-center p-1">
          <h1 className="italic text-white text-2xl">Focus</h1>
        </div>
        <div className="bg-red-800 flex items-center justify-center p-1 rounded-lg">
          <h1 className="text-white text-2xl">Tube</h1>
        </div>
      </div>
    </div>
  );
}

