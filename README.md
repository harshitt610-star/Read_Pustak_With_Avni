# Read Pustak with Avni — Official Web Application

A responsive, accessible, and literary editorial informational website for **Read Pustak with Avni**, founded by **Neena Chaturvedi** (Publisher & Founder, Read Pustak Publications) and **Avni Chaturvedi** (Young Author & Storyteller).

This project was engineered directly from the 7-screen Google Stitch mobile-first designs in `./stich/`, preserving all typography, color tokens, layout aesthetics, and authentic brand voice.

---

## 📚 Website Pages & Routes

The application implements all 7 dedicated routes:

| Route | Page | Purpose & Content |
| :--- | :--- | :--- |
| **`/`** | [Home](file:///c:/Users/pc/OneDrive/Desktop/read_pustak_with_avni/src/app/page.tsx) | Hero with Avni's portrait, initiative mission, founder spotlights, 3 featured books, verified milestone summary, and cultural closing *"Ek Bachcha, Ek Pustak Padhe."* |
| **`/about`** | [About Us](file:///c:/Users/pc/OneDrive/Desktop/read_pustak_with_avni/src/app/about/page.tsx) | The founding story, our purpose, three core pillars (reading, writing, youth authorship), mission, and vision. |
| **`/founders`** | [Meet Our Founders](file:///c:/Users/pc/OneDrive/Desktop/read_pustak_with_avni/src/app/founders/page.tsx) | Comprehensive profiles of Avni Chaturvedi & Neena Chaturvedi, key responsibilities, and signature author quotes. |
| **`/avni-journey`** | [Avni's Journey](file:///c:/Users/pc/OneDrive/Desktop/read_pustak_with_avni/src/app/avni-journey/page.tsx) | Chronological timeline from age 10 to publishing 3 books, Model United Nations, school theatre, and book fair speaking. |
| **`/books`** | [Our Books](file:///c:/Users/pc/OneDrive/Desktop/read_pustak_with_avni/src/app/books/page.tsx) | Catalogue of all 3 books (*Emma Finds Her Solution*, *Pancha Tatva Tales*, *Ancient Answers for Modern Problems*) with interactive synopsis modals. |
| **`/achievements`** | [Achievements & Social Impact](file:///c:/Users/pc/OneDrive/Desktop/read_pustak_with_avni/src/app/achievements/page.tsx) | Verified literary milestones, Lucknow Book Fair 2026 speaker honor, and community partnerships (*Apni Pathshala*, *Manisha Mandir*, *Hope Foundation*). |
| **`/contact`** | [Contact Us](file:///c:/Users/pc/OneDrive/Desktop/read_pustak_with_avni/src/app/contact/page.tsx) | Literary secretariat coordinates (New Delhi, India), email (`contact@readpustak.com`), and an accessible contact form with client-side validation. |

---

## 🎨 Design System

- **Palette:**
  - Deep Royal Purple: `#35105F` (Brand anchor, headings, navigation, primary buttons, footer)
  - Warm Ivory: `#FFF9F1` (Archival book canvas background)
  - Antique Gold: `#D9A441` (Accents, star medals, gilded borders)
  - Soft Lavender Pink: `#F4E4F4` (Pill badges, quote callouts)
  - Dark Charcoal: `#30283A` (Warm-violet undertone body text)
- **Typography:**
  - Headings: **Playfair Display** (High-contrast transitional serif)
  - Body & UI: **Plus Jakarta Sans** (Contemporary, highly legible sans-serif)
- **Styling:** Tailwind CSS with custom editorial shadows, hairline borders, and responsive breakpoints.

---

## 🛠️ Technology Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + PostCSS + Autoprefixer
- **Icons:** `lucide-react`
- **Build Output:** Static prerendered pages (`next build`)

---

## 🚀 Running the Project

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm run start
```

