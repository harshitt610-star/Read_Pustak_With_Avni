import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { PromoPopupModal } from "@/components/promotions/PromoPopupModal";
import { WebsiteAndOrgJsonLd, BooksJsonLd, FAQJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://readpustak.com"),
  title: {
    default: "Read Pustak with Avni | Turn Pages, Not Just Screens",
    template: "%s | Read Pustak with Avni",
  },
  description:
    "Official portal of young author Avni Chaturvedi and Read Pustak Publications based in Gomti Nagar, Lucknow. Discover published children's books, school reading circles, creative writing workshops, and professional web development services in Lucknow, UP, India.",
  keywords: [
    "Read Pustak",
    "Read Pustak with Avni",
    "Read Pustak Publications",
    "Avni Chaturvedi",
    "Young Author Avni Chaturvedi",
    "Neena Chaturvedi",
    "Book Publisher in Lucknow",
    "Children Book Publisher Lucknow",
    "Publishing House in Lucknow",
    "Self Publishing India",
    "Young Author India",
    "Children Books India",
    "Website Development Lucknow",
    "Website Design Company in Lucknow",
    "App Development Services Lucknow",
    "Creative Writing Workshops Lucknow",
    "School Storytelling Workshops Lucknow",
    "Gomti Nagar Book Publisher",
    "Emma Finds Her Solution",
    "Pancha Tatva Tales",
    "Ancient Answers for Modern Problems",
    "Incredible Bharat Book",
    "Lucknow Book Fair 2026",
    "Literary Initiative Lucknow",
    "बाल लेखक अवनि चतुर्वेदी",
    "रीड पुस्तक",
    "किताब प्रकाशन लखनऊ",
    "वेबसाइट डिजाइन लखनऊ",
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
    languages: {
      "en-IN": "https://readpustak.com",
      "hi-IN": "https://readpustak.com",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://readpustak.com",
    siteName: "Read Pustak with Avni",
    title: "Read Pustak with Avni | Publishing & Literary House in Lucknow, India",
    description:
      "Empowering young minds through books, storytelling, and digital innovation. Premier independent publishing house and young author platform in Lucknow, India.",
    images: [
      {
        url: "/images/author/meet-the-author-avni.jpg",
        width: 1200,
        height: 630,
        alt: "Avni Chaturvedi - Young Author & Co-Founder of Read Pustak Lucknow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Read Pustak with Avni | Publishing & Literary House Lucknow",
    description:
      "Every child has a story worth sharing. Discover published books, school workshops, and digital solutions by Read Pustak in Lucknow, India.",
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
    "geo.placename": "Lucknow, Uttar Pradesh, India",
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
        <FAQJsonLd />
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
