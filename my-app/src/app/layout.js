import TopBar from "./components/topbar";
import "./globals.css";

export const metadata = {
  title: "FocusTube",
  description: "An app to encourage intentional watching",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <video
          className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
          src="/assets/media/background.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="fixed top-0 left-0 w-full h-full bg-indigo-950/40 z-[-1]. " />
          <main className="relative z-10">
            <TopBar/>
            {children}
          </main>
      </body>
    </html>
  );
}
