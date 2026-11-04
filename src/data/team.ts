export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  tagline?: string;
  image?: string;
  initials: string;
  department: string;
}

export const teamData: TeamMember[] = [
  {
    id: "harshit-tiwari",
    name: "Harshit Tiwari",
    role: "Technical Lead",
    department: "Technology & Digital Platforms",
    bio: "Harshit Tiwari leads the technical and digital development initiatives at Read Pustak with Avni. With an academic background in Computer Science and Engineering, he contributes to shaping the platform's digital infrastructure and technology-driven vision. He is responsible for guiding the technical development of the website and the planned mobile application, with a focus on functionality, accessibility and user experience. His contribution supports our vision of bringing books, readers and emerging writers together through technology.",
    initials: "HT",
    image: "/images/team/harshit-tiwari.jpg",
  },
  {
    id: "aishwarya-chaturvedi",
    name: "Aishwarya Chaturvedi",
    role: "Community Engagement Coordinator",
    department: "Community & Outreach",
    bio: "Aishwarya Chaturvedi contributes to building meaningful connections between Read Pustak with Avni and the wider community. She supports community outreach, NGO collaborations, educational initiatives and literary engagement activities. Her role focuses on encouraging participation, strengthening relationships and creating opportunities for children and young readers to connect with books and creative learning. Through collaborative efforts, she helps extend our mission of making reading and literary experiences accessible to more people.",
    tagline: "Connecting Communities. Inspiring Readers. Sharing Stories.",
    initials: "AC",
    image: "/images/team/aishwarya-chaturvedi.jpg",
  },
  {
    id: "rajneesh-shukla",
    name: "Rajneesh Shukla",
    role: "Communication & Public Relations Lead",
    department: "Media & External Relations",
    bio: "Rajneesh Shukla leads communication and public relations initiatives at Read Pustak with Avni. He contributes to building the initiative's public presence, strengthening professional relationships and developing meaningful connections with authors, publishers, educational institutions, media and partner organisations. His role focuses on communication strategies, collaborations, outreach and promoting the literary vision of Read Pustak with Avni.",
    tagline: "Building Connections. Creating Opportunities. Sharing Our Vision.",
    initials: "RS",
    image: "/images/team/rajneesh-shukla.jpg",
  },
];

