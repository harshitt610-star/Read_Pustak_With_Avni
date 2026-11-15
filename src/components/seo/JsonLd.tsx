import React from "react";
import { booksData } from "@/data/books";

export const WebsiteAndOrgJsonLd: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "PublishingHouse",
        "@id": "https://readpustak.com/#organization",
        name: "Read Pustak Publications",
        alternateName: ["Read Pustak with Avni", "Read Pustak", "रीड पुस्तक"],
        url: "https://readpustak.com",
        logo: "https://readpustak.com/images/logo.png",
        image: "https://readpustak.com/images/author/meet-the-author-avni.jpg",
        description:
          "Independent literary publishing initiative inspiring children and adults to turn pages, not just screens. Founded by educator Neena Chaturvedi and young author Avni Chaturvedi.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lucknow",
          addressRegion: "Uttar Pradesh",
          postalCode: "226010",
          addressCountry: "IN",
        },
        founder: [
          {
            "@type": "Person",
            name: "Avni Chaturvedi",
            jobTitle: "Author & Co-Founder",
            url: "https://readpustak.com/founders",
            image: "https://readpustak.com/images/author/meet-the-author-avni.jpg",
            sameAs: [
              "https://www.amazon.in/stores/author/B09XYZ",
              "https://www.instagram.com/readpustakwithavni",
            ],
            award: [
              "'उत्तर प्रदेश की बात' Mahasangam Honoree",
              "Lucknow Book Fair 2026 Speaker",
            ],
          },
          {
            "@type": "Person",
            name: "Neena Chaturvedi",
            jobTitle: "Educator & Co-Founder",
            url: "https://readpustak.com/founders",
            image: "https://readpustak.com/images/founders/neena-portrait.jpg",
          },
        ],
        sameAs: [
          "https://www.instagram.com/readpustakwithavni",
          "https://www.youtube.com/@readpustakwithavni",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-7068999555",
          contactType: "Customer Support & Book Inquiries",
          email: "contact@readpustak.com",
          availableLanguage: ["English", "Hindi"],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://readpustak.com/#website",
        url: "https://readpustak.com",
        name: "Read Pustak with Avni",
        publisher: {
          "@id": "https://readpustak.com/#organization",
        },
        inLanguage: ["en-IN", "hi-IN"],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const BooksJsonLd: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": booksData.map((book) => ({
      "@type": "Book",
      "@id": `https://readpustak.com/books#${book.id}`,
      name: book.title,
      alternateName: book.subtitle,
      author: {
        "@type": "Person",
        name: book.author,
        url: "https://readpustak.com/founders",
      },
      publisher: {
        "@type": "Organization",
        name: "Read Pustak Publications",
        url: "https://readpustak.com",
      },
      datePublished: book.publishedYear,
      inLanguage: "English",
      bookFormat: "https://schema.org/Paperback",
      image: `https://readpustak.com${book.coverImage}`,
      description: book.summary,
      audience: {
        "@type": "Audience",
        audienceType: book.ageRange,
      },
      offers: [
        {
          "@type": "Offer",
          url: book.amazonUrl,
          seller: {
            "@type": "Organization",
            name: "Amazon India",
          },
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          url: book.flipkartUrl,
          seller: {
            "@type": "Organization",
            name: "Flipkart",
          },
          availability: "https://schema.org/InStock",
        },
      ],
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

interface BreadcrumbItem {
  name: string;
  url: string;
}

export const BreadcrumbJsonLd: React.FC<{ items: BreadcrumbItem[] }> = ({ items }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `https://readpustak.com${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

