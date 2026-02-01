import "./globals.css";
import InitLayout from "@/components/InitLayout";

export const metadata = {
  title: "FocusTube",
  description: "An app to encourage intentional watching",
};


export default function RootLayout({ children }) {

  return (
        <html lang="en">
          <InitLayout>
            {children}
          </InitLayout>
        </html>
  );
}
