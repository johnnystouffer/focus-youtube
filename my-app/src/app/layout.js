import ClientLayout from "@/components/ClientLayout";
import "./globals.css";

export const metadata = {
  title: "FocusTube",
  description: "An app to encourage intentional watching",
};

export default function RootLayout({ children }) {

  return (
    <ClientLayout>
      {children}
    </ClientLayout>
  );
}
