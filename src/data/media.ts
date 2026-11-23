export interface MediaItem {
  id: string;
  type: "newspaper" | "photo" | "video";
  category: "press" | "moments" | "readers" | "videos";
  categoryLabel: string;
  title: string;
  publicationOrSource?: string;
  date?: string;
  src: string;
  poster?: string;
  aspect?: "portrait" | "landscape" | "clipping";
  caption: string;
  highlights?: string[];
  featured?: boolean;
}

export const mediaData: MediaItem[] = [
  // ==========================================
  // 1. NEWSPAPER CUTTINGS & PRINT COVERAGE
  // ==========================================
  {
    id: "newspaper-young-writers",
    type: "newspaper",
    category: "press",
    categoryLabel: "Dainik Jagran / Inext",
    title: "यंग राइटर्स की बुक्स तो जीत ले गईं दिल",
    publicationOrSource: "Dainik Jagran / Inext Lucknow",
    date: "20 September 2026",
    src: "/images/media/newspaper-young-writers.jpg",
    aspect: "clipping",
    caption:
      "गोमती पुस्तक महोत्सव के समापन पर दैनिक जागरण / इनएक्सट की विशेष रिपोर्ट। 13 वर्षीय युवा लेखिका अवनी चतुर्वेदी की तीनों पुस्तकों — 'एम्मा फाइंड्स हर सॉल्यूशन', 'द पंचतत्व टेल्स', और 'अनक्रेडिबल भारत' ने पाठकों और पुस्तक विक्रेताओं का ध्यान खींचा।",
    highlights: [
      "13 साल की युवा लेखिका अवनी चतुर्वेदी की पुस्तकों को मिली विशेष सराहना",
      "श्रीमद्भगवद्गीता के ज्ञान से समस्याओं के समाधान पर 'एम्मा फाइंड्स हर सॉल्यूशन'",
      "पंचतत्व और प्रकृति से जीवन मूल्यों पर 'द पंचतत्व टेल्स'",
      "भारत की संस्कृति और त्योहारों पर 'अनक्रेडिबल भारत: एक देश, अनेक कहानियां'",
    ],
    featured: true,
  },
  {
    id: "newspaper-13-year-avni",
    type: "newspaper",
    category: "press",
    categoryLabel: "Dainik Jagran / Inext",
    title: "13 वर्षीया अवनी बच्चों में जगाएंगी शिक्षा की अलख",
    publicationOrSource: "Dainik Jagran / Inext Lucknow",
    date: "3 November 2026",
    src: "/images/media/newspaper-13-year-avni.jpg",
    aspect: "clipping",
    caption:
      "डिजिटल दौर में बच्चों को किताबों से जोड़ने के लिए 13 वर्षीय बाल लेखिका अवनी चतुर्वेदी ने 'रीड पुस्तक विद अवनी' अभियान शुरू किया। 'एक बच्चा, एक बुक' की थीम पर अवनी बच्चों को अपनी हस्तलिखित पुस्तकें भेंट कर रही हैं।",
    highlights: [
      "'एक बच्चा, एक बुक' थीम पर आधारित सामाजिक साक्षरता अभियान",
      "अवनी का मंत्र: 'पढ़ो, रचो, कल्पना करो, लिखो और साझा करो'",
      "रचनात्मक लेखन कार्यशालाओं के जरिए जरूरतमंद बच्चों की प्रतिभा निखारने का प्रयास",
    ],
    featured: true,
  },
  {
    id: "newspaper-diwali-inext",
    type: "newspaper",
    category: "press",
    categoryLabel: "Inextlive Print",
    title: "ज्ञान और खुशियों के दीप जलाने का संदेश",
    publicationOrSource: "Inextlive.com / Dainik Jagran Inext",
    date: "Diwali 2026",
    src: "/images/media/newspaper-diwali-inext.jpg",
    aspect: "clipping",
    caption:
      "धनतेरस एवं दीपावली के पावन अवसर पर ReadPustak with Avni की संस्थापक नीना चतुर्वेदी का विशेष संदेश: 'दीपावली केवल दीयों का त्योहार नहीं, बल्कि ज्ञान, संस्कार, सकारात्मकता और नई उम्मीदों का प्रतीक है।'",
    highlights: [
      "भारतीय साहित्य और स्वदेशी पुस्तकों को प्रोत्साहित करने का आह्वान",
      "नीना चतुर्वेदी (संस्थापक, ReadPustak with Avni) का संदेश",
    ],
  },
  {
    id: "newspaper-inext-fullpage",
    type: "newspaper",
    category: "press",
    categoryLabel: "Inext Full Edition",
    title: "Inext Lucknow Edition — 04 Nov Full Coverage",
    publicationOrSource: "Inext Lucknow Print Edition",
    date: "4 November 2026",
    src: "/images/media/newspaper-inext-fullpage.jpg",
    aspect: "clipping",
    caption:
      "दैनिक समाचार पत्र Inext लखनऊ के मुख्य पृष्ठ पर '13 वर्षीया अवनी बच्चों में जगाएंगी शिक्षा की अलख' का संपूर्ण समाचार एवं छायाचित्र।",
    highlights: [
      "लखनऊ समाचार संस्करण में प्रमुखता से प्रकाशित रिपोर्ट",
      "अवनी चतुर्वेदी और प्रशासनिक अधिकारियों के साथ पुस्तक विमोचन",
    ],
  },

  // ==========================================
  // 2. AUTHOR MOMENTS & STAGE PHOTOGRAPHS
  // ==========================================
  {
    id: "avni-speaking-mic",
    type: "photo",
    category: "moments",
    categoryLabel: "Stage & Speeches",
    title: "Avni Addressing Young Students & Literary Gathering",
    publicationOrSource: "Literary Youth Gathering, Lucknow",
    date: "2026",
    src: "/images/media/avni-speaking-mic.jpg",
    aspect: "portrait",
    caption:
      "युवा लेखिका अवनी चतुर्वेदी मंच से छात्रों और अभिभावकों को संबोधित करते हुए, जहाँ उन्होंने बच्चों में पढ़ने की आदत और रचनात्मक लेखन के महत्व पर विचार रखे।",
    highlights: [
      "मंच से पुस्तक प्रेम और लेखन कला पर वक्तव्य",
      "युवा लेखिका द्वारा बच्चों के प्रश्नों के उत्तर",
    ],
    featured: true,
  },
  {
    id: "up-ki-baat-award-media",
    type: "photo",
    category: "moments",
    categoryLabel: "Felicitation & Honors",
    title: "'उत्तर प्रदेश की बात' महासंगम पर अवनी का सम्मान",
    publicationOrSource: "उत्तर प्रदेश की बात Summit",
    date: "2026",
    src: "/images/achievements/up-ki-baat-award.jpg",
    aspect: "portrait",
    caption:
      "प्रतिष्ठित 'उत्तर प्रदेश की बात' महासंगम मंच पर वरिष्ठ अतिथियों एवं गणमान्य विभूतियों द्वारा युवा लेखिका अवनी चतुर्वेदी को स्मृति चिह्न एवं सम्मान पत्र प्रदान किया गया।",
    highlights: [
      "राज्य स्तरीय साहित्यिक महासंगम में सम्मान",
      "कम उम्र में 5 पुस्तकों के लेखन एवं प्रकाशन हेतु अभिनंदन",
    ],
    featured: true,
  },
  {
    id: "lets-give-hope-poster-media",
    type: "photo",
    category: "moments",
    categoryLabel: "Workshop Collaboration",
    title: "Let's Give Hope Foundation x Avni Chaturvedi Workshop",
    publicationOrSource: "Let's Give Hope Foundation",
    date: "23 November 2026",
    src: "/images/workshops/lets-give-hope-workshop.jpg",
    aspect: "landscape",
    caption:
      "Storytelling and Creative Writing Workshop organized jointly by Let's Give Hope Foundation and young author Avni Chaturvedi holding 'Incredible Bharat'.",
    highlights: [
      "Listen to Inspiring Stories • Learn Creative Writing • Turn Ideas into Stories",
    ],
  },

  // ==========================================
  // 3. READERS' LOVE & COMMUNITY IMPACT
  // ==========================================
  {
    id: "world-book-day-outreach",
    type: "photo",
    category: "readers",
    categoryLabel: "Social Impact & Book Gifting",
    title: "विश्व पुस्तक दिवस — किताबों से दोस्ती और सपनों की उड़ान",
    publicationOrSource: "World Book Day Campaign",
    date: "23 April 2026",
    src: "/images/media/world-book-day-outreach.jpg",
    aspect: "portrait",
    caption:
      "विश्व पुस्तक दिवस पर अवनी चतुर्वेदी जरूरतमंद बच्चों को अपनी पुस्तक 'एम्मा फाइंड्स हर सॉल्यूशन' उपहार स्वरूप भेंट करते हुए। 'पुस्तकें हैं सच्ची मित्र, जो मंज़िल की राह दिखाती हैं।'",
    highlights: [
      "बाल साक्षरता एवं पुस्तक वितरण अभियान",
      "'पढ़ें किताबें, बढ़ें ज्ञान, बदले जीवन, बने पहचान'",
    ],
    featured: true,
  },
  {
    id: "young-reader-happiness",
    type: "photo",
    category: "readers",
    categoryLabel: "Young Readers",
    title: "Connecting with Young Readers",
    publicationOrSource: "Reader Testimonial & Social Impact",
    date: "2026",
    src: "/images/media/young-reader-happiness.jpg",
    aspect: "portrait",
    caption:
      "“Seeing kids read, smile, and connect with my stories is the biggest blessing for me as a young author. 📚✨” — A young boy absorbed in Avni's published book.",
    highlights: [
      "Authentic reader smiles and emotional connection with characters",
      "Encouraging daily reading habits in the digital era",
    ],
  },
  {
    id: "little-boy-reading-incredible-bharat",
    type: "photo",
    category: "readers",
    categoryLabel: "Young Readers",
    title: "Little Explorer Reading 'Incredible Bharat'",
    publicationOrSource: "Home Reading Moments",
    date: "2026",
    src: "/images/media/little-boy-reading-incredible-bharat.jpg",
    aspect: "portrait",
    caption:
      "A young school reader immersed in the stories of India's culture and heritage from Avni's book 'Incredible Bharat: Ek Desh, Anek Kahaniyaan'.",
    highlights: [
      "Igniting curiosity for Indian culture and folk stories",
      "Vibrant illustrations engaging early readers",
    ],
  },
  {
    id: "shelter-home-gathering",
    type: "photo",
    category: "readers",
    categoryLabel: "Care Home Outreach",
    title: "Sharing Joy & Literature with Care Home Children",
    publicationOrSource: "Community Learning Outreach",
    date: "2026",
    src: "/images/media/shelter-home-gathering.jpg",
    aspect: "landscape",
    caption:
      "Warm celebrations, storytelling circles, and sharing smiles with children at community care shelters in Lucknow.",
    highlights: [
      "Literature and compassion walking hand in hand",
      "Empowering under-resourced youth through friendship and books",
    ],
  },

  // ==========================================
  // 4. EVENT VIDEOS & WORKSHOP GLIMPSES
  // ==========================================
  {
    id: "avni-video-1",
    type: "video",
    category: "videos",
    categoryLabel: "Video Clip 01",
    title: "Avni's Storytelling Dialogue & Reading Circle",
    publicationOrSource: "Event Video Recording",
    date: "2026",
    src: "/videos/avni-video-1.mp4",
    poster: "/images/media/avni-speaking-mic.jpg",
    aspect: "portrait",
    caption:
      "Interactive video snippet of young author Avni Chaturvedi sharing storytelling insights, character craft, and inspiring children to read.",
    highlights: ["Live video interaction", "Student dialogue and reading excitement"],
  },
  {
    id: "avni-video-2",
    type: "video",
    category: "videos",
    categoryLabel: "Video Clip 02",
    title: "Children's Creative Session & Book Engagement",
    publicationOrSource: "Event Video Recording",
    date: "2026",
    src: "/videos/avni-video-2.mp4",
    poster: "/images/media/world-book-day-outreach.jpg",
    aspect: "portrait",
    caption:
      "Children actively participating and exploring storybooks during an interactive community literacy session.",
    highlights: ["Children engaged in books", "Joyful learning atmosphere"],
  },
  {
    id: "avni-video-3",
    type: "video",
    category: "videos",
    categoryLabel: "Video Clip 03",
    title: "Youth Authorship & Mentorship Drive",
    publicationOrSource: "Event Video Recording",
    date: "2026",
    src: "/videos/avni-video-3.mp4",
    poster: "/images/media/newspaper-young-writers.jpg",
    aspect: "portrait",
    caption:
      "Live recorded moments capturing Avni's literary interactions and discussions on youth empowerment through writing.",
    highlights: ["Live speech and discussion", "Inspiring peer author journey"],
  },
  {
    id: "avni-video-4",
    type: "video",
    category: "videos",
    categoryLabel: "Video Clip 04",
    title: "Full Workshop Highlights & Student Joy",
    publicationOrSource: "Event Video Recording",
    date: "2026",
    src: "/videos/avni-video-4.mp4",
    poster: "/images/workshops/lets-give-hope-workshop.jpg",
    aspect: "portrait",
    caption:
      "Vibrant full-length video compilation showcasing young storytellers, interactive exercises, and smiles from Avni's reading workshops.",
    highlights: ["Complete workshop highlights", "Classroom and community impact"],
  },
];
