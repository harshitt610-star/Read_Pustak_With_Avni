# Build Read Pustak with Avni — Complete Responsive Website
**Master Architecture, Design System & Implementation Plan**

---

## Executive Summary & Project Context

This specification outlines the architectural blueprint, design system implementation, and step-by-step development roadmap for **"Read Pustak with Avni"** — a literary editorial informational web application.

The project is based on the 7-screen mobile prototype exported from **Google Stitch** located in `./stich/`. This document serves as the single source of truth for transforming those static prototypes into a high-performance, accessible, and responsive multi-page web application.

---

## 1. Project Directory & Stitch Prototype Audit

### 1.1 Existing Workspace Structure

```
read_pustak_with_avni/
├── BUILD_READ_PUSTAK_WITH_AVNI.md                     # Master architectural specification
└── stich/
    ├── literary_editorial/
    │   └── DESIGN.md                                  # Design system tokens and philosophy
    ├── home_read_pustak_with_avni/
    │   ├── code.html                                  # 36.6 KB, 530 lines
    │   └── screen.png                                 # High-res prototype preview
    ├── about_us_read_pustak_with_avni/
    │   ├── code.html                                  # 26.2 KB, 390 lines
    │   └── screen.png                                 # High-res prototype preview
    ├── meet_our_founders_read_pustak_with_avni/
    │   ├── code.html                                  # 27.2 KB, 410 lines
    │   └── screen.png                                 # High-res prototype preview
    ├── avni_s_journey_read_pustak_with_avni/
    │   ├── code.html                                  # 35.1 KB, 510 lines
    │   └── screen.png                                 # High-res prototype preview
    ├── our_books_read_pustak_with_avni/
    │   ├── code.html                                  # 28.5 KB, 420 lines
    │   └── screen.png                                 # High-res prototype preview
    ├── achievements_and_social_impact_read_pustak_with_avni/
    │   ├── code.html                                  # 34.7 KB, 490 lines
    │   └── screen.png                                 # High-res prototype preview
    └── contact_us_read_pustak_with_avni/
        ├── code.html                                  # 26.0 KB, 380 lines
        └── screen.png                                 # High-res prototype preview
```

### 1.2 Prototype Assets Inventory

The Stitch export includes verified photography, original portraits, and cover art referenced via Google user-content CDN:

| Asset Identifier | Current Alt Text / Subject | Target Local Path |
| :--- | :--- | :--- |
| **Brand Logo** | Read Pustak with Avni Logo | `/public/images/logo.png` |
| **Avni Portrait** | Warm natural portrait of Avni Chaturvedi seated by writing desk | `/public/images/founders/avni-portrait.png` |
| **Neena Portrait** | Dignified portrait of Neena Chaturvedi in a tranquil library | `/public/images/founders/neena-portrait.png` |
| **Book Cover 1** | *Emma Finds Her Solution* | `/public/images/books/emma-finds-her-solution.png` |
| **Book Cover 2** | *Pancha Tatva Tales: Stories of Joy and Wisdom* | `/public/images/books/pancha-tatva-tales.png` |
| **Book Cover 3** | *Ancient Answers for Modern Problems* | `/public/images/books/ancient-answers.png` |
| **Impact Photo 1**| Children seated in an open-air classroom at Apni Pathshala | `/public/images/impact/apni-pathshala.png` |
| **Impact Photo 2**| Author leading drawing/storytelling circle at Manisha Mandir | `/public/images/impact/manisha-mandir.png` |
| **Impact Photo 3**| Students holding newly received books (Hope Foundation) | `/public/images/impact/hope-foundation.png` |
| **Editorial Desk**| Sunlit author desk with notebooks, flowers, and fountain pen | `/public/images/editorial/desk-sunlit.png` |
| **Salon Still**   | Antique wooden desk with manuscripts in classic literary salon | `/public/images/editorial/literary-salon.png` |

---

## 2. Brand Identity & Core Principles

- **Brand Name:** Read Pustak with Avni
- **Publishing Imprint:** Read Pustak Publications
- **Founder & Owner:** Neena Chaturvedi
- **Young Author & Creative Visionary:** Avni Chaturvedi (began writing at age 10; author of 3 published works)
- **Core Motto:** *"Every Child Has a Story Worth Sharing."*
- **Cultural Slogan:** *"Ek Bachcha, Ek Pustak Padhe."*
- **Nature of Application:** Informational, educational, and editorial website.
  > **Strict Boundaries:** No e-commerce cart, checkout, payment gateway, user authentication, or manuscript submission database.

---

## 3. Technology Stack & Directory Architecture

### 3.1 Stack Selection
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript (`strict: true`)
- **Styling:** Tailwind CSS with CSS Variables & custom typography utilities
- **Iconography:** `lucide-react` (clean, accessible vector icons) & Google Material Symbols Outlined
- **Typography:** `@next/font/google` loading `Playfair Display` (editorial serif) and `Plus Jakarta Sans` (body sans)
- **Deployment Target:** Vercel / Netlify / Static Export (`output: 'export'` compatible)

### 3.2 Target Project Structure

```
read_pustak_with_avni/
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   ├── founders/
│   │   ├── books/
│   │   ├── impact/
│   │   └── editorial/
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx                     # Global layout, fonts, meta, Header, Footer
│   │   ├── page.tsx                       # Route: / (Home)
│   │   ├── about/
│   │   │   └── page.tsx                   # Route: /about
│   │   ├── founders/
│   │   │   └── page.tsx                   # Route: /founders
│   │   ├── avni-journey/
│   │   │   └── page.tsx                   # Route: /avni-journey
│   │   ├── books/
│   │   │   └── page.tsx                   # Route: /books
│   │   ├── achievements/
│   │   │   └── page.tsx                   # Route: /achievements
│   │   └── contact/
│   │       └── page.tsx                   # Route: /contact
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx                 # Desktop navbar + mobile drawer trigger
│   │   │   ├── MobileNav.tsx              # Mobile bottom navigation bar & drawer
│   │   │   └── Footer.tsx                 # Unified literary footer
│   │   ├── ui/
│   │   │   ├── Button.tsx                 # Primary, secondary, ghost, text button variants
│   │   │   ├── Card.tsx                   # Paper card with ambient purple elevation
│   │   │   ├── Badge.tsx                  # Antique gold & lavender pills
│   │   │   └── SectionHeader.tsx          # Eyebrow, serif headline, and gold ornament
│   │   ├── books/
│   │   │   ├── BookCard.tsx               # Cover presentation, tags, description
│   │   │   └── BookModal.tsx              # Detailed modal reader preview
│   │   ├── founders/
│   │   │   └── FounderCard.tsx            # High-res portrait, bio, quote banner
│   │   ├── journey/
│   │   │   └── Timeline.tsx               # Chronological milestone renderer
│   │   └── forms/
│   │       └── ContactForm.tsx            # Accessible client form with feedback toast
│   ├── data/
│   │   ├── books.ts                       # Verified book metadata
│   │   ├── founders.ts                    # Neena & Avni profiles & quotes
│   │   ├── milestones.ts                  # Journey timeline items
│   │   └── partners.ts                    # Social impact organizations & collaborations
│   └── types/
│       └── index.ts                       # TypeScript interfaces for data models
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 4. Design System & Aesthetics

### 4.1 Color Palette

```ts
// tailwind.config.ts color mapping
colors: {
  primary: {
    DEFAULT: "#35105F", // Deep Royal Purple - Headings, main CTAs, brand identity
    container: "#1C003C",
    foreground: "#FFFFFF",
  },
  accent: {
    DEFAULT: "#D9A441", // Antique Gold - Medals, borders, stars, literary gilding
    container: "#FFE5A3",
    foreground: "#5A3F00",
  },
  surface: {
    DEFAULT: "#FFF9F1", // Warm Ivory - Archival book paper background
    container: "#F6E9FF", // Soft Tint container
    lavender: "#F4E4F4",  // Soft Lavender Pink - Highlight cards & quotes
    card: "#FFFFFF",      // Pure White elevated surfaces
  },
  neutral: {
    charcoal: "#30283A", // Dark Charcoal with faint violet undertone (Body text)
    muted: "#5F5568",    // Subtext, metadata, secondary copy
    outline: "#E4D8CE",  // Bookbinding hairline border
  }
}
```

### 4.2 Typography Hierarchy

- **Editorial Headings:** `Playfair Display` (Serif, weights: 500, 600, 700)
  - Display Hero: `3.5rem` (56px) desktop / `2.25rem` (36px) mobile; line-height: 1.15
  - Headline Lg: `2.5rem` (40px) desktop / `1.75rem` (28px) mobile
  - Headline Md: `1.75rem` (28px); line-height: 1.3
  - Headline Sm / Title Editorial: `1.375rem` (22px); letter-spacing: -0.01em
- **Body & Interface:** `Plus Jakarta Sans` (Sans-serif, weights: 400, 500, 600)
  - Body Lg: `1.125rem` (18px), line-height: 1.7
  - Body Md: `1rem` (16px), line-height: 1.6
  - Body Sm: `0.875rem` (14px), line-height: 1.5
  - Label / Eyebrow: `0.75rem` (12px), tracking-widest, uppercase, weight: 600

### 4.3 Tactile Depth & Bookbinding Shadows
- **Paper Elevation:** `shadow-[0_2px_12px_rgba(53,16,95,0.06)]`
- **Lifted Card (Hover):** `shadow-[0_12px_32px_rgba(53,16,95,0.12)]`
- **Hairline Borders:** `border border-[#E4D8CE]/70`
- **Corner Radii:** Cards: `rounded-xl` (`16px`); Buttons: `rounded-lg` (`8px`); Tags: `rounded-full`

---

## 5. Global Navigation & Layout Architecture

### 5.1 Shared Header (`Header.tsx`)
- **Left:** Brand Logo linked to `/` with accompanying serif logotype ("Read Pustak") and gold sub-mark ("with Avni").
- **Center (Desktop):** Horizontal navigation bar with animated gold underline for active state:
  - Home (`/`)
  - About Us (`/about`)
  - Meet Our Founders (`/founders`)
  - Avni's Journey (`/avni-journey`)
  - Our Books (`/books`)
  - Achievements & Social Impact (`/achievements`)
  - Contact (`/contact`)
- **Right (Desktop):** "Get in Touch" primary pill button (`#35105F` with gold hover).
- **Mobile Hamburger:** Smooth slide-out Folio Directory modal with complete routes and icons.

### 5.2 Mobile Bottom Tab Bar (`MobileNav.tsx`)
Preserves the high-utility mobile navigation from the Stitch prototype:
- Fixed to bottom with `pb-safe` (safe-area insets).
- 5 primary touch targets:
  1. **Home** (`/`) — Icon: `home`
  2. **Books** (`/books`) — Icon: `menu_book`
  3. **Journey** (`/avni-journey`) — Icon: `history_edu`
  4. **Honors** (`/achievements`) — Icon: `workspace_premium`
  5. **Impact** (`/achievements#social-impact`) — Icon: `volunteer_activism`
- Hidden on desktop (`md:hidden`).

### 5.3 Shared Footer (`Footer.tsx`)
- Deep Royal Purple background (`#35105F`) with Warm Ivory text.
- Brand mission statement: *"Dedicated to inspiring young minds through literary storytelling..."*
- Two-column directory linking all 7 routes.
- Verified contact coordinates:
  - Location: New Delhi, India
  - Social Links: Instagram, YouTube, LinkedIn
- Copyright notice: `© Read Pustak Publications. All literary rights reserved.`

---

## 6. Page Specifications & Content Breakdown

### Page 1: Home (`/`)
1. **Hero Section:**
   - Eyebrow: `[Auto Awesome Icon] A LITERARY INITIATIVE`
   - Headline: *"Read Pustak with Avni"*
   - Subheading (Italic Serif): *"“Every Child Has a Story Worth Sharing.”"*
   - Body Paragraph: Introduces the mission to cultivate reading habits and nurture imaginative young authors.
   - Dual CTAs: `Explore Our Journey` (link to `/avni-journey`) & `Discover Our Books` (link to `/books`).
   - Visual: Warm portrait of young author Avni Chaturvedi framed with hairline gold borders.
2. **About the Initiative Section:**
   - Editorial card introducing Read Pustak Publications and its community ethos.
3. **Founders Showcase:**
   - Paired profile cards: Avni Chaturvedi & Neena Chaturvedi with roles and portraits.
4. **Featured Books Spotlight:**
   - 3 book cards with cover jackets: *Emma Finds Her Solution*, *Pancha Tatva Tales*, *Ancient Answers for Modern Problems*.
5. **Mission & Vision Pillars:**
   - Visual badges for Encouraging Reading, Creative Writing, and Supporting Young Authors.
6. **Cultural Closing Section:**
   - Gilded banner with the foundational quote: *"Ek Bachcha, Ek Pustak Padhe."*

### Page 2: About Us (`/about`)
1. **Hero Section:** Introduction to Read Pustak with Avni's founding vision.
2. **Our Story:** Narrative of how the initiative began at home and expanded into community literacy.
3. **Core Purpose & Three Pillars:**
   - *Cultivating Reading Habits:* Helping children fall in love with literature.
   - *Inspiring Creative Writing:* Nurturing original storytelling from a young age.
   - *Amplifying Youth Voices:* Demonstrating that age is never a barrier to published authorship.
4. **Philosophical Foundation:** Reflection on literature as an agent of empathy and emotional growth.
5. **Closing CTA Banner:** Direct navigation to explore books and get in touch.

### Page 3: Meet Our Founders (`/founders`)
1. **Page Header:** *"The Visionaries Behind the Pages"*
2. **Avni Chaturvedi (Young Author & Storyteller):**
   - High-resolution desk portrait.
   - Bio: Began writing at age 10; authored three published books; passion for Indian culture, mythology, and ethical storytelling.
   - Author Quote: *"Young in Age, Limitless in Imagination."*
3. **Neena Chaturvedi (Founder & Owner, Read Pustak Publications):**
   - Library portrait.
   - Bio: Guiding mentor leading publishing operations, community outreach, and author workshops.
   - Vision for independent literature.
4. **Shared Philosophical Anchor:**
   - *"Every child has an imagination. Every writer has a voice. And every story deserves an opportunity to reach the world."*

### Page 4: Avni's Journey (`/avni-journey`)
1. **Introduction:** Portrait & overview of Avni’s creative path.
2. **Verified Chronological Timeline:**
   - **Age 10:** The First Spark — writing short tales, journal reflections, and personal fables.
   - **First Book:** Authoring and publishing *Emma Finds Her Solution*.
   - **Expanding Horizons:** Writing *Pancha Tatva Tales: Stories of Joy and Wisdom*.
   - **Cultural Depth:** Researching and authoring *Ancient Answers for Modern Problems*.
   - **Community Engagement:** Leading creative writing workshops and participating in school panels.
   - **Public Speaking:** Invited speaker at the Lucknow Book Fair 2026.
3. **Creative Expressions Beyond Writing:**
   - Active participation in theatre and Model United Nations (MUN), fostering public speaking and critical analysis.

### Page 5: Our Books (`/books`)
Showcase of the three published titles:
1. ***Emma Finds Her Solution***
   - Cover image, synopsis, themes: problem-solving, empathy, friendship, youth resilience.
2. ***Pancha Tatva Tales: Stories of Joy and Wisdom***
   - Cover image, synopsis, themes: the five classical elements of nature, moral wisdom, Indian cultural values.
3. ***Ancient Answers for Modern Problems***
   - Cover image, synopsis, themes: timeless philosophical insights applied to contemporary student dilemmas.
- **Card Elements:** Cover art, book title, author byline, verified synopsis, reader age bracket badge, and an accessible "Read Synopsis" modal.

### Page 6: Achievements & Social Impact (`/achievements`)
1. **Literary Milestones:**
   - 3 Published Books before high school graduation.
   - Speaker at the Lucknow Book Fair 2026.
   - Student mentoring and storytelling workshops.
2. **Social Impact Partnerships:**
   - **Apni Pathshala:** Interactive storytelling sessions and book distributions for underprivileged children.
   - **Manisha Mandir:** Expressive drawing, creative writing circles, and donation drives at the shelter home for girls.
   - **Hope Foundation:** Promoting literacy access and providing library books to young learners.
3. **Photo Documentary Vignettes:**
   - Verified photo documentation from each community partnership.

### Page 7: Contact Us (`/contact`)
1. **Introductory Banner:** Editorial invitation for literary inquiries, school workshops, and collaboration notes.
2. **Contact Coordinates:**
   - Address: New Delhi, India
   - Email: Placeholder ready for deployment (e.g., `contact@readpustak.com`)
   - Social Handles: Instagram, YouTube, LinkedIn
3. **Interactive Contact Form:**
   - Fields: Full Name, Email Address, Subject (e.g., General Inquiry, School Workshop, Book Club), Message.
   - Client-side validation: Required field checks, regex email check, character limits.
   - Frontend state handling: Clear status banner indicating submission simulation with guidelines for connecting services like Resend or Formspree.

---

## 7. Responsive Design Strategy

| Screen Tier | Width | Layout Adjustments |
| :--- | :--- | :--- |
| **Mobile** | `< 768px` | Single column, stacked cards, full-width touch targets (minimum 44x44px), mobile drawer menu, fixed bottom tab bar. |
| **Tablet** | `768px - 1024px` | 2-column grids for book cards and founder profiles, condensed top navigation, balanced margins (`px-6`). |
| **Desktop** | `> 1024px` | Max container width `1280px` (`max-w-7xl mx-auto`), full horizontal navbar, 3-column book grid, 2-column asymmetrical founder layout, generous vertical rhythm (`py-20`). |

---

## 8. SEO, Metadata & Accessibility Requirements

### 8.1 Metadata Specification
```ts
// Example route title and description mapping
export const pageMetadata = {
  home: {
    title: "Read Pustak with Avni | A Literary Initiative",
    description: "Every Child Has a Story Worth Sharing. An independent literary platform founded by Neena Chaturvedi and young author Avni Chaturvedi.",
  },
  about: {
    title: "About Read Pustak with Avni | Mission & Vision",
    description: "Learn about Read Pustak Publications, our dedication to cultivating reading habits, and inspiring young storytellers.",
  },
  founders: {
    title: "Meet Our Founders | Avni Chaturvedi & Neena Chaturvedi",
    description: "Discover the stories of young author Avni Chaturvedi and publisher Neena Chaturvedi.",
  },
  books: {
    title: "Our Books | Read Pustak Publications",
    description: "Explore Emma Finds Her Solution, Pancha Tatva Tales, and Ancient Answers for Modern Problems by Avni Chaturvedi.",
  },
  journey: {
    title: "Avni's Journey | From Young Reader to Published Author",
    description: "Follow the literary timeline of Avni Chaturvedi from writing at age 10 to speaking at the Lucknow Book Fair.",
  },
  achievements: {
    title: "Achievements & Social Impact | Read Pustak with Avni",
    description: "Literary milestones and community outreach with Apni Pathshala, Manisha Mandir, and Hope Foundation.",
  },
  contact: {
    title: "Contact Us | Read Pustak with Avni",
    description: "Get in touch for school reading workshops, literary collaborations, or inquiries.",
  },
};
```

### 8.2 Accessibility (a11y) Standards
- WCAG 2.1 AA compliance across all pages.
- Contrast ratio ≥ 4.5:1 for body copy (`#30283A` on `#FFF9F1` achieves ~13.8:1).
- Contrast ratio ≥ 3.0:1 for large display headings and buttons.
- All decorative images tagged with empty `alt=""`, and content photography tagged with descriptive, non-redundant alt strings.
- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`).
- Full keyboard focus rings (`focus-visible:ring-2 focus-visible:ring-[#D9A441]`).

---

## 9. Implementation Roadmap & QA Checklist

### Phase 1: Environment & Asset Setup
- [ ] Initialize Next.js project with TypeScript, Tailwind CSS, and App Router.
- [ ] Configure `Playfair Display` and `Plus Jakarta Sans` with `@next/font`.
- [ ] Setup `tailwind.config.ts` with custom brand colors, shadows, and radii.
- [ ] Download and optimize all 11 Stitch images into `public/images/`.

### Phase 2: Core Components & Layout
- [ ] Implement `Header.tsx` (responsive with desktop links + mobile drawer).
- [ ] Implement `MobileNav.tsx` (bottom tab bar for mobile viewports).
- [ ] Implement `Footer.tsx` (deep royal purple brand footer).
- [ ] Create UI primitives (`Button`, `Card`, `Badge`, `SectionHeader`).

### Phase 3: Page-by-Page Development
- [ ] **Home (`/`)**: Hero, founder summaries, featured books, mission pillars, cultural closing.
- [ ] **About Us (`/about`)**: Full narrative, story, three pillars, philosophy.
- [ ] **Founders (`/founders`)**: Detailed Avni and Neena profiles, verified quotes.
- [ ] **Avni's Journey (`/avni-journey`)**: Interactive timeline, milestones, MUN/theatre activities.
- [ ] **Our Books (`/books`)**: 3 book presentations, metadata, synopses.
- [ ] **Achievements (`/achievements`)**: Book fair speaker highlight, partnerships (Apni Pathshala, Manisha Mandir, Hope Foundation).
- [ ] **Contact (`/contact`)**: Form validation, feedback toast, coordinates.

### Phase 4: Final Quality Assurance
- [ ] Build verification (`npm run build` / zero TypeScript or lint errors).
- [ ] Check all 7 routes and verify no broken links or `href="#"`.
- [ ] Test viewport responsiveness across 375px (mobile), 768px (tablet), and 1440px (desktop).
- [ ] Validate image loading, aspect ratios, and zero horizontal scrollbars.
- [ ] Verify accessibility navigation and screen reader tags.

