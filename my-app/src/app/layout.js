import ClientLayout from "@/components/ClientLayout";
import Background from "@/components/Background";
import "./globals.css";
import ThemeInit from "@/components/ThemeInit";

export const metadata = {
  title: "FocusTube",
  description: "An app to encourage intentional watching",
};


export default function RootLayout({ children }) {

  return (
        <html lang="en">
          <body className="antialiased text-[var(--text-var)]">
            <ThemeInit />
            <Background />
            <div className="fixed top-0 left-0 w-full h-full bg-indigo-950/40 z-[-1]" />
              <ClientLayout>
                {children}
              </ClientLayout>
          </body>
        </html>
  );
}
