export interface WorkshopItem {
  id: string;
  title: string;
  subtitle: string;
  category: "conducted" | "upcoming";
  categoryLabel: string;
  date: string;
  institution: string;
  location: string;
  audience: string;
  duration?: string;
  coverImage: string;
  galleryImages?: string[];
  description: string;
  highlights: string[];
  statusBadge: string;
  whatsappMessage?: string;
}

export const workshopsData: WorkshopItem[] = [
  // ==========================================
  // 1. CONDUCTED WORKSHOPS (JO HO CHUKI HAIN)
  // ==========================================
  {
    id: "lets-give-hope-workshop",
    title: "Let's Give Hope Foundation x Avni Chaturvedi Workshop",
    subtitle: "Storytelling and Creative Writing Workshop empowering young storytellers",
    category: "conducted",
    categoryLabel: "Conducted Session",
    date: "23 November 2026",
    institution: "Let's Give Hope Foundation",
    location: "Let's Give Hope Foundation, Lucknow, UP",
    audience: "Young Students, Aspiring Writers & Foundation Children",
    duration: "2 Hours (4:00 PM – 6:00 PM)",
    coverImage: "/images/workshops/lets-give-hope-workshop.jpg",
    galleryImages: [
      "/images/workshops/lets-give-hope-workshop.jpg",
    ],
    description:
      "A special Storytelling and Creative Writing Workshop organized by Let's Give Hope Foundation ('To every Eye, To each heart') in collaboration with young author Avni Chaturvedi on 23 November 2026. Avni shared insights from her latest book 'Incredible Bharat: Ek Desh, Anek Kahaniyaan' and guided young participants through interactive storytelling drills and creative writing exercises.",
    highlights: [
      "Official collaborative initiative between Let's Give Hope Foundation & Read Pustak with Avni",
      "Listen to Inspiring Stories — live interactive reading & cultural dialogue by Avni",
      "Learn Creative Writing — character sketching, plot building, and expressing thoughts",
      "Turn Ideas into Stories — hands-on creative drafting session for foundation students",
      "Live book showcase of 'Incredible Bharat: Ek Desh, Anek Kahaniyaan' with young author Avni",
    ],
    statusBadge: "Conducted Today (23 Nov 2026)",
  },
  {
    id: "srmu-authors-workshop",
    title: "SRMU x Apni Pathshaala Authors' Workshop",
    subtitle: "University collaboration empowering young story explorers & authors",
    category: "conducted",
    categoryLabel: "Conducted Session",
    date: "17 October 2026",
    institution: "Shri Ramswaroop Memorial University (SRMU)",
    location: "SRMU Campus, Lucknow, UP",
    audience: "50+ School & College Students, Faculty Mentors",
    duration: "Full-Day Interactive Workshop",
    coverImage: "/images/glimpses/srmu-workshop-poster.jpg",
    galleryImages: [
      "/images/glimpses/srmu-workshop-poster.jpg",
      "/images/glimpses/glimpse-10.jpg",
      "/images/glimpses/glimpse-11.jpg",
    ],
    description:
      "Official Authors' Workshop organized jointly by Shri Ramswaroop Memorial University (SRMU), Apni Pathshaala, and Read Pustak with Avni. Faculty members, university club coordinators, and young learners gathered for an immersive storytelling masterclass, book reading, and interactive creative writing.",
    highlights: [
      "Official university banner presentation with SRMU faculty & student coordinators",
      "Interactive 'Story Explorers' multimedia storytelling session by Avni Chaturvedi",
      "Distribution of creative writing stationery kits, notebooks & storybooks",
      "Copies of 'Incredible Bharat' & 'Ancient Answers' gifted to young participants",
      "Official certificates of participation awarded to young authors",
    ],
    statusBadge: "Completed Milestone",
  },
  {
    id: "manisha-mandir-reading-drive",
    title: "Manisha Mandir Storytelling & Book Gifting Drive",
    subtitle: "Bringing the joy of literature & creative writing to residential care",
    category: "conducted",
    categoryLabel: "Conducted Session",
    date: "2026",
    institution: "Manisha Mandir Residential Care Home",
    location: "Manisha Mandir, Lucknow, UP",
    audience: "Young Girls & Residential Care Students",
    duration: "Half-Day Reading Circle",
    coverImage: "/images/glimpses/manisha-mandir.jpg",
    galleryImages: [
      "/images/glimpses/manisha-mandir.jpg",
      "/images/glimpses/glimpse-1.jpg",
    ],
    description:
      "A heartfelt reading circle and creative workshop conducted with young girls living at Manisha Mandir residential care home in Lucknow. Avni shared character stories, guided the girls in expressing their own thoughts through drawing and writing, and gifted storybooks to create an in-house library.",
    highlights: [
      "Guided creative writing circles encouraging girls to express personal dreams",
      "Interactive story reading session with Avni's debut book 'Emma Finds Her Solution'",
      "Dedicated storybook set gifted to build a permanent library for the girls' home",
      "Pencils, notebooks, and creative materials distributed to all attendees",
    ],
    statusBadge: "Completed Milestone",
  },
  {
    id: "lucknow-book-fair-session",
    title: "Lucknow Book Fair 2026: Young Readers Dialogue",
    subtitle: "Keynote presentation & storytelling on the grand literary stage",
    category: "conducted",
    categoryLabel: "Conducted Session",
    date: "2026",
    institution: "Lucknow National Book Fair",
    location: "Book Fair Grounds, Lucknow, UP",
    audience: "Hundreds of Children, Parents & Book Lovers",
    duration: "2-Hour Keynote & Book Dialogue",
    coverImage: "/images/glimpses/glimpse-2.jpg",
    galleryImages: [
      "/images/glimpses/glimpse-2.jpg",
      "/images/achievements/up-ki-baat-award.jpg",
      "/images/glimpses/glimpse-3.jpg",
    ],
    description:
      "Invited speaker and young author presentation at the Lucknow Book Fair. Speaking before hundreds of young readers and parents, Avni shared how everyday wonder transforms into published literature, answered questions on overcoming writer's block, and signed copies of her books.",
    highlights: [
      "Live stage address with microphone on 'Turn Pages, Not Just Screens'",
      "Interactive Q&A answering young students' curiosity about writing books",
      "Felicitated on stage with honors and state recognition",
      "Live book signing and interaction with aspiring kid authors",
    ],
    statusBadge: "Completed Milestone",
  },
  {
    id: "scholarship-mentorship-grant",
    title: "Book Royalties Giving Back & Educational Mentorship",
    subtitle: "किताबों से मिली कमाई, किसी के सपनों की उड़ान बन गई!",
    category: "conducted",
    categoryLabel: "Conducted Session",
    date: "2026",
    institution: "Read Pustak Literacy Foundation",
    location: "Lucknow, Uttar Pradesh",
    audience: "Underprivileged Students & Families",
    duration: "Community Outreach Session",
    coverImage: "/images/glimpses/scholarship-giving.jpg",
    description:
      "Demonstrating that true success is not just about achieving dreams, but helping others achieve theirs. Avni presented an educational support grant funded by her book royalties to a deserving girl student, accompanied by personal mentorship on reading and study habits.",
    highlights: [
      "Direct educational sponsorship check presented from book earnings",
      "One-on-one study habits, writing, and curiosity mentorship session",
      "Complete stationery and storybook kit gifted to support schooling",
    ],
    statusBadge: "Completed Milestone",
  },
  {
    id: "ancient-answers-wisdom-circle",
    title: "Ancient Answers: Mindful Living Circles for Students",
    subtitle: "Connecting Indian heritage & five elements with student life",
    category: "conducted",
    categoryLabel: "Conducted Session",
    date: "2026",
    institution: "Youth Literature Circles",
    location: "Lucknow Cultural Centre, UP",
    audience: "Middle & High School Students",
    duration: "90-Minute Dialogue Circle",
    coverImage: "/images/glimpses/glimpse-6.jpg",
    description:
      "An introspective literary circle exploring the themes of 'Ancient Answers for Modern Problems'. Avni guided peers through mindful problem-solving, discussing how nature's five elements (Panch Tatva) and traditional Indian fables provide grounding in an era of digital distractions.",
    highlights: [
      "Discussion on balancing screen time with deep reading habits",
      "Journaling prompts based on nature observation and gratitude",
      "Peer-to-peer open dialogue on stress, focus, and creativity",
    ],
    statusBadge: "Completed Milestone",
  },

  // ==========================================
  // 2. UPCOMING WORKSHOPS (JO HONE WALI HAIN)
  // ==========================================
  {
    id: "young-storytellers-masterclass",
    title: "Young Storytellers Masterclass: From Idea to Book",
    subtitle: "Step-by-step creative writing masterclass for school students",
    category: "upcoming",
    categoryLabel: "Open for Booking",
    date: "Available on School Request (2026–2027)",
    institution: "Read Pustak with Avni",
    location: "In-Person (Lucknow / UP Schools) & Online (Pan-India)",
    audience: "Grades 3 to 8 (Ages 8–14 Years)",
    duration: "2 to 3 Hours (Single Session or Half-Day)",
    coverImage: "/images/publishing/publish-your-book-banner.jpg",
    description:
      "A high-energy, participatory masterclass led by young author Avni Chaturvedi and educator Neena Chaturvedi. Students learn the secret anatomy of great stories: character sketching, plot arches, creating emotional stakes, and how to begin writing their own original manuscript.",
    highlights: [
      "How to turn daily observations into thrilling story plots",
      "Character building worksheets and interactive live exercises",
      "Dialogue writing tricks to make stories natural and lively",
      "Exclusive Q&A session with young author Avni Chaturvedi",
      "Certificate of Participation for every attending student",
    ],
    statusBadge: "Accepting School Invitations",
    whatsappMessage:
      "Hello Read Pustak, our school is interested in hosting the 'Young Storytellers Masterclass' for our students. Please share available dates and details.",
  },
  {
    id: "panch-tatva-nature-writing",
    title: "Panch Tatva: Nature, Mindfulness & Storycraft",
    subtitle: "Exploring Earth, Water, Fire, Air & Space through creative writing",
    category: "upcoming",
    categoryLabel: "Open for Booking",
    date: "Available on Request",
    institution: "Read Pustak Environmental & Literary Club",
    location: "Schools, Nature Camps & Online",
    audience: "Grades 2 to 6 (Ages 7–12 Years)",
    duration: "90 Minutes Interactive Circle",
    coverImage: "/images/books/pancha-tatva-tales.jpg",
    description:
      "Rooted in Avni's acclaimed book 'The Panch Tatva Tales', this workshop connects nature appreciation with storytelling. Children discover how ancient Indian science viewed the five elements and create their own nature-inspired adventure stories.",
    highlights: [
      "Sensory observation exercises using sight, sound, and touch",
      "Drawing and writing mini-fables featuring animal and element characters",
      "Cultivating environmental mindfulness and respect for nature",
      "Fun quiz on Indian heritage and eco-friendly daily habits",
    ],
    statusBadge: "Accepting School Invitations",
    whatsappMessage:
      "Hello Read Pustak, I would like to book the 'Panch Tatva Nature Writing' workshop for our school/club. Please share details.",
  },
  {
    id: "little-authors-bootcamp",
    title: "Little Authors Boot Camp: 3-Day Manuscript Accelerator",
    subtitle: "Comprehensive writing-to-publishing cohort for aspiring young writers",
    category: "upcoming",
    categoryLabel: "Upcoming Cohort",
    date: "Upcoming Winter Cohort (December 2026)",
    institution: "Read Pustak Publishing Academy",
    location: "Lucknow & Hybrid Online Cohort",
    audience: "Young Writers Aged 10 to 18 Years",
    duration: "3-Day Intensive Weekend Cohort",
    coverImage: "/images/publishing/publishing-plan-1999.jpg",
    description:
      "An intensive accelerator for young writers who have story drafts or notebooks ready and wish to understand the complete publishing process. Covers manuscript structure, developmental editing, cover conceptualization, ISBN allocation, and publishing roadmap.",
    highlights: [
      "Day 1: Structural Storycraft & Narrative Pacing",
      "Day 2: Self-Editing, Dialogue Polish & Proofreading",
      "Day 3: Publishing Roadmap (Cover Design, ISBN, Paperback Printing)",
      "Direct pathway to publish under Read Pustak's ₹1,999 Affordable Plan",
      "Personal 1-on-1 editorial review with Neena & Avni Chaturvedi",
    ],
    statusBadge: "Registrations Opening Soon",
    whatsappMessage:
      "Hello Read Pustak, I am interested in registering for the 'Little Authors Boot Camp (3-Day Accelerator)'. Please share details.",
  },
  {
    id: "heritage-modern-teens-dialogue",
    title: "Heritage, Ethics & Calm: Modern Wisdom for Teens",
    subtitle: "Navigating digital distraction, peer pressure & academic anxiety",
    category: "upcoming",
    categoryLabel: "Open for Booking",
    date: "Available on School & College Request",
    institution: "Read Pustak Youth Dialogue Secretariat",
    location: "High Schools & Colleges Across UP / India",
    audience: "Grades 8 to 12 & College Freshmen (Teens & Youth)",
    duration: "2-Hour Interactive Dialogue",
    coverImage: "/images/books/ancient-answers.jpg",
    description:
      "Based on Avni's third book 'Ancient Answers for Modern Problems', this workshop is specifically structured for teenagers. It addresses screen addiction, exam stress, peer competition, and finding inner purpose through timeless philosophical insights adapted for Gen-Z.",
    highlights: [
      "Open student circle tackling digital distractions & emotional grounding",
      "Historical and cultural analogies made accessible and actionable",
      "Model UN style structured argumentation and compassionate listening",
      "Practical daily routine framework for focus and creative expression",
    ],
    statusBadge: "Accepting School Invitations",
    whatsappMessage:
      "Hello Read Pustak, we want to invite Avni for the 'Heritage & Modern Wisdom for Teens' dialogue session at our school/college. Please share details.",
  },
];
