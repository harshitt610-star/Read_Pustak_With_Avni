import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { PromoPopupModal } from "@/components/promotions/PromoPopupModal";
import { WebsiteAndOrgJsonLd, BooksJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://readpustak.com"),
  title: {
    default: "Read Pustak with Avni | Turn Pages, Not Just Screens",
    template: "%s | Read Pustak with Avni",
  },
  description:
    "Official website of young author Avni Chaturvedi and Read Pustak Publications. Discover published children's books, school workshops, cultural storytelling, and literacy initiatives.",
  keywords: [
    "Read Pustak",
    "Avni Chaturvedi",
    "Neena Chaturvedi",
    "Read Pustak Publications",
    "Young Author India",
    "Children Books India",
    "Emma Finds Her Solution",
    "Pancha Tatva Tales",
    "Ancient Answers for Modern Problems",
    "Incredible Bharat Book",
    "Literary Initiative Lucknow",
    "Lucknow Book Fair 2026",
    "बाल लेखक अवनि चतुर्वेदी",
    "रीड पुस्तक",
    "एक बच्चा एक पुस्तक पढ़े",
  ],
  authors: [{ name: "Avni Chaturvedi" }, { name: "Neena Chaturvedi" }],
  creator: "Read Pustak Publications",
  publisher: "Read Pustak Publications",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://readpustak.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://readpustak.com",
    siteName: "Read Pustak with Avni",
    title: "Read Pustak with Avni | Turn Pages, Not Just Screens",
    description:
      "Empowering children and adults through books, cultural storytelling, and creative expression. Founded by young author Avni Chaturvedi and educator Neena Chaturvedi.",
    images: [
      {
        url: "/images/author/meet-the-author-avni.jpg",
        width: 1200,
        height: 630,
        alt: "Avni Chaturvedi - Young Author & Co-Founder of Read Pustak",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Read Pustak with Avni | A Literary Initiative",
    description:
      "Every Child Has a Story Worth Sharing. Discover published books and community initiatives by Avni Chaturvedi.",
    images: ["/images/author/meet-the-author-avni.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "IN-UP",
    "geo.placename": "Lucknow",
    "geo.position": "26.8467;80.9462",
    "ICBM": "26.8467, 80.9462",
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
        <WebsiteAndOrgJsonLd />
        <BooksJsonLd />
      </head>
      <body className="bg-[#FFF9F1] text-charcoal min-h-screen flex flex-col font-sans antialiased">
        <Header />
        <main className="flex-1 pt-24 sm:pt-28 pb-20 md:pb-16 lg:pb-0">{children}</main>
        <Footer />
        <MobileNav />
        <WhatsAppButton />
        <PromoPopupModal />
        <Analytics />
      </body>
    </html>
  );
}
