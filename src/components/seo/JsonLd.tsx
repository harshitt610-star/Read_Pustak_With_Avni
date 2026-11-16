import React from "react";
import { booksData } from "@/data/books";

export const WebsiteAndOrgJsonLd: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["PublishingHouse", "LocalBusiness", "ProfessionalService"],
        "@id": "https://readpustak.com/#organization",
        name: "Read Pustak Publications",
        alternateName: [
          "Read Pustak with Avni",
          "Read Pustak",
          "रीड पुस्तक",
          "Read Pustak Lucknow",
        ],
        url: "https://readpustak.com",
        logo: "https://readpustak.com/images/logo.png",
        image: "https://readpustak.com/images/author/meet-the-author-avni.jpg",
        description:
          "Premier independent children's book publisher, author platform, and digital solutions provider in Gomti Nagar, Lucknow, Uttar Pradesh, India. Founded by educator Neena Chaturvedi and young author Avni Chaturvedi.",
        telephone: "+91-7068999555",
        email: "contact@readpustak.com",
        priceRange: "₹1,000 - ₹89,999",
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, UPI, Credit Card, Net Banking",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Gomti Nagar",
          addressLocality: "Lucknow",
          addressRegion: "Uttar Pradesh",
          postalCode: "226010",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 26.8467,
          longitude: 80.9462,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "09:00",
            closes: "19:00",
          },
        ],
        areaServed: [
          {
            "@type": "City",
            name: "Lucknow",
          },
          {
            "@type": "State",
            name: "Uttar Pradesh",
          },
          {
            "@type": "Country",
            name: "India",
          },
        ],
        founder: [
          {
            "@type": "Person",
            name: "Avni Chaturvedi",
            jobTitle: "Author & Co-Founder",
            url: "https://readpustak.com/founders",
            image: "https://readpustak.com/images/author/meet-the-author-avni.jpg",
            sameAs: [
              "https://www.instagram.com/author_avnic?srtk=bzBwcXg1ZW51M2Nt",
              "https://www.amazon.in/stores/author/B09XYZ",
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
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Read Pustak Publishing, Educational & Digital Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Children's Book Publishing & Mentorship in Lucknow",
                description:
                  "Comprehensive self-publishing, editorial mentoring, and distribution for young authors and writers across Lucknow and India.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "School Reading Circles & Storytelling Workshops in Lucknow",
                description:
                  "Interactive literature workshops, story circles, and author visits for schools and colleges across Uttar Pradesh.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Website Development Services in Lucknow",
                description:
                  "Custom websites, personal portfolios, educational portals, and e-commerce websites starting at ₹7,999 in Lucknow.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Mobile App Development Services in Lucknow",
                description:
                  "Native Android and iOS mobile app development for businesses, schools, and creators in Lucknow and India.",
              },
            },
          ],
        },
        sameAs: [
          "https://www.instagram.com/author_avnic?srtk=bzBwcXg1ZW51M2Nt",
          "https://www.youtube.com/@readpustakwithavni",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-7068999555",
          contactType: "Customer Support & Book Inquiries",
          email: "contact@readpustak.com",
          areaServed: ["IN", "IN-UP"],
          availableLanguage: ["English", "Hindi"],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://readpustak.com/#website",
        url: "https://readpustak.com",
        name: "Read Pustak with Avni",
        alternateName: "Read Pustak Publications Lucknow",
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

export interface FAQItem {
  question: string;
  answer: string;
}

export const defaultFaqs: FAQItem[] = [
  {
    question: "What is Read Pustak with Avni in Lucknow?",
    answer:
      "Read Pustak with Avni is a Lucknow-based literary and educational publishing house founded by young author Avni Chaturvedi and educator Neena Chaturvedi. Located in Gomti Nagar, Lucknow, it inspires children and youth across India to read, write, create, and publish meaningful stories.",
  },
  {
    question: "Where is Read Pustak Publications located in Lucknow?",
    answer:
      "Read Pustak Publications is headquartered in Gomti Nagar, Lucknow, Uttar Pradesh 226010, India. You can connect via WhatsApp or phone at +91-7068999555 or email contact@readpustak.com.",
  },
  {
    question: "How can young authors publish their books with Read Pustak in India?",
    answer:
      "Read Pustak offers complete author mentorship and publishing services including story refinement, professional editing, ISBN allocation, cover design, paperback printing, and distribution across Amazon India and Flipkart.",
  },
  {
    question: "Does Read Pustak offer Website and App Development in Lucknow?",
    answer:
      "Yes! Read Pustak provides professional website development (starting at ₹7,999) and mobile application development (Android & iOS starting at ₹49,999) for authors, educators, businesses, and startups in Lucknow and throughout Uttar Pradesh.",
  },
  {
    question: "How can schools in Lucknow invite Avni for storytelling and reading workshops?",
    answer:
      "Schools and cultural institutions in Lucknow, Kanpur, and nearby cities can invite Avni Chaturvedi for creative writing circles, theatre storytelling, and motivational sessions by contacting +91-7068999555 or submitting the invitation form on readpustak.com/contact.",
  },
  {
    question: "Where can I purchase Avni Chaturvedi's published books in India?",
    answer:
      "All four published titles — 'Emma Finds Her Solution', 'Pancha Tatva Tales', 'Ancient Answers for Modern Problems', and 'Incredible Bharat' — are available online on Amazon India, Flipkart, and directly through the Read Pustak official website.",
  },
];

export const FAQJsonLd: React.FC<{ faqs?: FAQItem[] }> = ({ faqs = defaultFaqs }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};


