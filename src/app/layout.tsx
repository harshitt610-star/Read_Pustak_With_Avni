import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";

export const metadata: Metadata = {
  title: {
    default: "Read Pustak with Avni | A Literary Initiative",
    template: "%s | Read Pustak with Avni",
  },
  description:
    "Every Child Has a Story Worth Sharing. An independent literary publishing initiative founded by Neena Chaturvedi and young author Avni Chaturvedi.",
  keywords: [
    "Read Pustak",
    "Avni Chaturvedi",
    "Neena Chaturvedi",
    "Read Pustak Publications",
    "Young Author",
    "Children Books",
    "Emma Finds Her Solution",
    "Pancha Tatva Tales",
    "Ancient Answers for Modern Problems",
    "Literary Initiative",
  ],
  authors: [{ name: "Avni Chaturvedi" }, { name: "Neena Chaturvedi" }],
  creator: "Read Pustak Publications",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://readpustak.com",
    title: "Read Pustak with Avni | A Literary Initiative",
    description: "Every Child Has a Story Worth Sharing.",
    siteName: "Read Pustak with Avni",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#FFF9F1] text-charcoal min-h-screen flex flex-col font-sans antialiased">
        <Header />
        <main className="flex-1 pt-20 pb-16 lg:pb-0">{children}</main>
        <Footer />
        <MobileNav />
      </body>
    </html>
  );
}
