export interface GlimpseItem {
  id: string;
  image: string;
  title: string;
  category: "all" | "srmu" | "giving" | "circles";
  categoryLabel: string;
  date?: string;
  caption: string;
  aspect?: "portrait" | "landscape" | "poster";
}

export const glimpsesData: GlimpseItem[] = [
  {
    id: "srmu-poster",
    image: "/images/glimpses/srmu-workshop-poster.jpg",
    title: "SRMU x Apni Pathshaala Authors' Workshop",
    category: "srmu",
    categoryLabel: "University Collaboration",
    date: "17 October 2026",
    caption:
      "Official poster for the Authors' Workshop organized by Shri Ramswaroop Memorial University (SRMU) & Apni Pathshaala in collaboration with Avni Chaturvedi.",
    aspect: "poster",
  },
  {
    id: "meet-the-author-srmu",
    image: "/images/glimpses/glimpse-10.jpg",
    title: "Meet the Author & Faculty Presentation",
    category: "srmu",
    categoryLabel: "Meet the Author",
    date: "17 October 2026",
    caption:
      "Avni with SRMU faculty members, student coordinators, and young participants holding copies of 'Incredible Bharat', 'Ancient Answers', and workshop certificates under the 'Meet the Author' banner.",
    aspect: "landscape",
  },
  {
    id: "story-explorers-assembly-full",
    image: "/images/glimpses/glimpse-11.jpg",
    title: "Story Explorers Full Assembly",
    category: "srmu",
    categoryLabel: "SRMU Workshop",
    date: "17 October 2026",
    caption:
      "The complete gathering of young story explorers, university club volunteers, and faculty mentors celebrating reading and creative expression.",
    aspect: "landscape",
  },
  {
    id: "up-ki-baat-award-glimpse",
    image: "/images/achievements/up-ki-baat-award.jpg",
    title: "Felicitation at 'उत्तर प्रदेश की बात'",
    category: "giving",
    categoryLabel: "Awards & Honors",
    date: "2026",
    caption:
      "Avni receiving a prestigious trophy and felicitation on stage from distinguished guests at the 'उत्तर प्रदेश की बात' (Mahasangam) summit.",
    aspect: "portrait",
  },
  {
    id: "ancient-answers-giving",
    image: "/images/glimpses/glimpse-6.jpg",
    title: "Inspiring Wisdom & Calm",
    category: "giving",
    categoryLabel: "Community Giving",
    date: "2026",
    caption:
      "Avni gifting her book 'Ancient Answers for Modern Problems' to a bright young girl during a community outreach visit.",
    aspect: "portrait",
  },
  {
    id: "emma-giving",
    image: "/images/glimpses/glimpse-1.jpg",
    title: "Power of Books for Every Child",
    category: "giving",
    categoryLabel: "Community Giving",
    date: "2024",
    caption:
      "Avni sharing her debut book 'Emma Finds Her Solution' with young children to inspire everyday reading and curiosity.",
    aspect: "portrait",
  },
  {
    id: "storytelling-speech",
    image: "/images/glimpses/glimpse-2.jpg",
    title: "Storytelling & Literature Dialogue",
    category: "circles",
    categoryLabel: "Literary Workshops",
    date: "2025",
    caption:
      "Avni addressing children with a microphone, sharing tales and encouraging young minds to ask questions and dream big.",
    aspect: "portrait",
  },
  {
    id: "story-explorers-presentation",
    image: "/images/glimpses/glimpse-5.jpg",
    title: "Story Explorers Workshop Assembly",
    category: "srmu",
    categoryLabel: "SRMU Workshop",
    date: "17 October 2026",
    caption:
      "Interactive 'Story Explorers' multimedia presentation at Apni Pathshaala, introducing students to the joy of creative storycraft.",
    aspect: "landscape",
  },
  {
    id: "young-authors-certificates",
    image: "/images/glimpses/glimpse-7.jpg",
    title: "Young Authors in the Making",
    category: "srmu",
    categoryLabel: "SRMU Workshop",
    date: "17 October 2026",
    caption:
      "Students proudly displaying their writing sheets and participation certificates alongside Avni and school mentors.",
    aspect: "landscape",
  },
  {
    id: "srmu-group-gathering",
    image: "/images/glimpses/glimpse-8.jpg",
    title: "University Faculty & Volunteer Collaboration",
    category: "srmu",
    categoryLabel: "SRMU Workshop",
    date: "17 October 2026",
    caption:
      "SRMU faculty coordinators, student volunteers, and young participants united for the Read Pustak literary experience.",
    aspect: "landscape",
  },
  {
    id: "stationery-kits-distribution",
    image: "/images/glimpses/glimpse-9.jpg",
    title: "Equipping Young Minds with Creative Kits",
    category: "srmu",
    categoryLabel: "Creative Kits",
    date: "17 October 2026",
    caption:
      "Young students receiving creative writing kits, notebooks, and pens to cultivate daily writing and expression.",
    aspect: "landscape",
  },
  {
    id: "classroom-reading-circle",
    image: "/images/glimpses/glimpse-3.jpg",
    title: "Building a Classroom Reading Culture",
    category: "circles",
    categoryLabel: "Reading Circles",
    date: "2025",
    caption:
      "Students seated with their storybooks in a vibrant classroom circle, discussing characters, themes, and lessons.",
    aspect: "landscape",
  },
  {
    id: "writers-assembly",
    image: "/images/glimpses/glimpse-4.jpg",
    title: "Young Writers Assembly",
    category: "circles",
    categoryLabel: "Creative Writing",
    date: "2025",
    caption:
      "An enthusiastic assembly of young learners ready to transform their daily observations into creative stories.",
    aspect: "landscape",
  },
];

