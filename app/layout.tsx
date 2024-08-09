import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Indie Hackers Army",
  description:
    "A closed community of founders and builders, focused on building and sharing knowledge.",
  openGraph: {
    title: "Indie Hackers Army",
    description:
      "A closed community of founders and builders, focused on building and sharing knowledge.",
    images: ["https://indiehackersarmy.com/banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-black antialiased")}>
        {children}
      </body>
    </html>
  );
}
