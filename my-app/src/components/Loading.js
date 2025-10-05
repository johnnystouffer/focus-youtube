export default function Loading() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-[--text-var] border-t-transparent rounded-full animate-spin"></div>

        <h1 className="text-2xl font-mono animate-pulse">Loading...</h1>
      </div>
    </div>
  );
}
