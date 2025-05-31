import Script from "next/script";
import { Inter } from "next/font/google";
import { Metadata } from "next";

import "./globals.css";
import Header from "@/components/layout/header";
import { Providers } from "@/lib/providers";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

const title = "Seyed Mostafa Hosseini | Frontend Developer";
const description = "Frontend Developer";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Frontend Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
  ],
  creator: "Seyed Mostafa Hosseini",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray text-gray-600 antialiased`}>
        <Providers>
          <Header />
          <main className="flex min-h-screen w-full flex-col">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
