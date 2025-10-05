export default function NotFound() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-center">
      <div className="p-8">
        <h2 className="text-6xl font-bold mb-4">404</h2>
        <p className="text-2xl text-gray-200 mb-6">Page Not Found</p>
        <p className="max-w-md mb-8">
          The page you’re looking for doesn’t exist or may have been moved. 
          Please check the URL or return to the home page.
        </p>
        <a
        href="/"
        className="inline-block px-4 py-2 rounded-2xl border border-[--text-var] backdrop-blur-md transform hover:scale-105 transition duration-300 ease-in-out hover:bg-white/10">
            Go Back Home
        </a>
      </div>
    </div>
  );
}
