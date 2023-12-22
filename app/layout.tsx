import { Header } from "@/components/header";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
});

export const metadata: Metadata = {
  title: "Blog sobreTech",
  description: "Blog sobre tecnologia",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-br">
      <body
        className={cn("bg-white-smoke text-black-smoke", poppins.className)}
      >
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
