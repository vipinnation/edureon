import NavbarComponent from "@/components/ui/navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import FooterComponent from "@/components/ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Edureon",
  description: "Industrial Training",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='min-h-screen'>
        <NavbarComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
