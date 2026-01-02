// Mock Data for BloodLink Platform

export const bloodTypes = [
  "A+",
  "A-",
  "B+",
  "B-",
  "AB+",
  "AB-",
  "O+",
  "O-",
] as const;
export type BloodType = (typeof bloodTypes)[number];

export interface DonorProfile {
  id: string;
  initials: string;
  bloodType: BloodType;
  reliabilityScore: number;
  totalDonations: number;
  lastDonation: string;
  nextEligibleDate: string;
  lifePoints: number;
  location: string;
  isEligible: boolean;
}

export interface BloodRequest {
  id: string;
  bloodType: BloodType;
  unitsNeeded: number;
  urgency: "critical" | "urgent" | "standard";
  hospital: string;
  hospitalAddress: string;
  distance: number;
  postedAt: string;
  expiresAt: string;
  donorsResponded: number;
  isVerified: boolean;
  patientInfo?: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  category: "education" | "success-stories" | "medical-news" | "community";
  author: string;
  authorRole: string;
  publishedAt: string;
  readTime: number;
  imageUrl: string;
  featured?: boolean;
}

export interface Reward {
  id: string;
  name: string;
  description: string;
  pointsCost: number;
  category: string;
  partnerLogo: string;
  available: boolean;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: string;
  progress?: number;
  maxProgress?: number;
}

export const donorProfiles: DonorProfile[] = [
  {
    id: "1",
    initials: "JM",
    bloodType: "O-",
    reliabilityScore: 95,
    totalDonations: 24,
    lastDonation: "2024-10-15",
    nextEligibleDate: "2025-01-15",
    lifePoints: 12500,
    location: "San Francisco, CA",
    isEligible: true,
  },
  {
    id: "2",
    initials: "SK",
    bloodType: "A+",
    reliabilityScore: 88,
    totalDonations: 12,
    lastDonation: "2024-11-20",
    nextEligibleDate: "2025-02-20",
    lifePoints: 6200,
    location: "Oakland, CA",
    isEligible: false,
  },
  {
    id: "3",
    initials: "MR",
    bloodType: "B+",
    reliabilityScore: 72,
    totalDonations: 6,
    lastDonation: "2024-09-10",
    nextEligibleDate: "2024-12-10",
    lifePoints: 3100,
    location: "Berkeley, CA",
    isEligible: true,
  },
  {
    id: "4",
    initials: "AL",
    bloodType: "AB+",
    reliabilityScore: 45,
    totalDonations: 2,
    lastDonation: "2024-06-05",
    nextEligibleDate: "2024-09-05",
    lifePoints: 800,
    location: "Palo Alto, CA",
    isEligible: true,
  },
  {
    id: "5",
    initials: "TC",
    bloodType: "O+",
    reliabilityScore: 91,
    totalDonations: 18,
    lastDonation: "2024-12-01",
    nextEligibleDate: "2025-03-01",
    lifePoints: 9400,
    location: "San Jose, CA",
    isEligible: false,
  },
];

export const bloodRequests: BloodRequest[] = [
  {
    id: "1",
    bloodType: "O-",
    unitsNeeded: 3,
    urgency: "critical",
    hospital: "SF General Hospital",
    hospitalAddress: "1001 Potrero Ave, San Francisco",
    distance: 2.5,
    postedAt: "2024-12-25T08:00:00Z",
    expiresAt: "2024-12-25T20:00:00Z",
    donorsResponded: 5,
    isVerified: true,
    patientInfo: "Emergency surgery patient",
  },
  {
    id: "2",
    bloodType: "A+",
    unitsNeeded: 2,
    urgency: "urgent",
    hospital: "UCSF Medical Center",
    hospitalAddress: "505 Parnassus Ave, San Francisco",
    distance: 4.2,
    postedAt: "2024-12-24T14:00:00Z",
    expiresAt: "2024-12-26T14:00:00Z",
    donorsResponded: 3,
    isVerified: true,
  },
  {
    id: "3",
    bloodType: "B+",
    unitsNeeded: 1,
    urgency: "standard",
    hospital: "Stanford Medical Center",
    hospitalAddress: "300 Pasteur Dr, Palo Alto",
    distance: 15.8,
    postedAt: "2024-12-23T10:00:00Z",
    expiresAt: "2024-12-28T10:00:00Z",
    donorsResponded: 2,
    isVerified: true,
  },
  {
    id: "4",
    bloodType: "AB-",
    unitsNeeded: 4,
    urgency: "critical",
    hospital: "Kaiser Permanente Oakland",
    hospitalAddress: "280 W MacArthur Blvd, Oakland",
    distance: 8.1,
    postedAt: "2024-12-25T06:30:00Z",
    expiresAt: "2024-12-25T18:30:00Z",
    donorsResponded: 1,
    isVerified: true,
    patientInfo: "Multiple trauma patient",
  },
  {
    id: "5",
    bloodType: "O+",
    unitsNeeded: 2,
    urgency: "urgent",
    hospital: "Sutter Health CPMC",
    hospitalAddress: "3700 California St, San Francisco",
    distance: 3.4,
    postedAt: "2024-12-24T20:00:00Z",
    expiresAt: "2024-12-26T20:00:00Z",
    donorsResponded: 4,
    isVerified: true,
  },
  {
    id: "6",
    bloodType: "A-",
    unitsNeeded: 1,
    urgency: "standard",
    hospital: "John Muir Medical Center",
    hospitalAddress: "1601 Ygnacio Valley Rd, Walnut Creek",
    distance: 22.5,
    postedAt: "2024-12-22T09:00:00Z",
    expiresAt: "2024-12-29T09:00:00Z",
    donorsResponded: 0,
    isVerified: true,
  },
  {
    id: "7",
    bloodType: "B-",
    unitsNeeded: 2,
    urgency: "urgent",
    hospital: "Alta Bates Summit Medical",
    hospitalAddress: "2450 Ashby Ave, Berkeley",
    distance: 6.7,
    postedAt: "2024-12-24T16:00:00Z",
    expiresAt: "2024-12-26T16:00:00Z",
    donorsResponded: 2,
    isVerified: true,
  },
  {
    id: "8",
    bloodType: "AB+",
    unitsNeeded: 1,
    urgency: "standard",
    hospital: "El Camino Hospital",
    hospitalAddress: "2500 Grant Rd, Mountain View",
    distance: 18.3,
    postedAt: "2024-12-23T12:00:00Z",
    expiresAt: "2024-12-28T12:00:00Z",
    donorsResponded: 1,
    isVerified: true,
  },
  {
    id: "9",
    bloodType: "O-",
    unitsNeeded: 5,
    urgency: "critical",
    hospital: "Zuckerberg SF General",
    hospitalAddress: "1001 Potrero Ave, San Francisco",
    distance: 2.5,
    postedAt: "2024-12-25T07:00:00Z",
    expiresAt: "2024-12-25T19:00:00Z",
    donorsResponded: 8,
    isVerified: true,
    patientInfo: "Mass casualty event",
  },
  {
    id: "10",
    bloodType: "A+",
    unitsNeeded: 1,
    urgency: "standard",
    hospital: "Sequoia Hospital",
    hospitalAddress: "170 Alameda de las Pulgas, Redwood City",
    distance: 12.4,
    postedAt: "2024-12-24T08:00:00Z",
    expiresAt: "2024-12-29T08:00:00Z",
    donorsResponded: 1,
    isVerified: true,
  },
  {
    id: "11",
    bloodType: "O+",
    unitsNeeded: 3,
    urgency: "urgent",
    hospital: "Good Samaritan Hospital",
    hospitalAddress: "2425 Samaritan Dr, San Jose",
    distance: 25.1,
    postedAt: "2024-12-24T22:00:00Z",
    expiresAt: "2024-12-26T22:00:00Z",
    donorsResponded: 2,
    isVerified: true,
  },
  {
    id: "12",
    bloodType: "B+",
    unitsNeeded: 2,
    urgency: "standard",
    hospital: "Mills-Peninsula Medical",
    hospitalAddress: "1501 Trousdale Dr, Burlingame",
    distance: 9.8,
    postedAt: "2024-12-23T15:00:00Z",
    expiresAt: "2024-12-28T15:00:00Z",
    donorsResponded: 1,
    isVerified: true,
  },
];

export const blogArticles: BlogArticle[] = [
  {
    id: "1",
    title: "Why O-Negative Blood is Called the Universal Donor",
    excerpt:
      "Understanding the science behind blood type compatibility and why O-negative is crucial in emergencies.",
    category: "education",
    author: "Dr. Sarah Chen",
    authorRole: "Hematologist",
    publishedAt: "2024-12-20",
    readTime: 6,
    imageUrl: "/placeholder.svg",
    featured: true,
  },
  {
    id: "2",
    title: "How One Donation Saved Three Lives",
    excerpt:
      "The incredible story of how a single blood donation made a difference in a major hospital.",
    category: "success-stories",
    author: "Michael Torres",
    authorRole: "BloodLink Community",
    publishedAt: "2024-12-18",
    readTime: 4,
    imageUrl: "/placeholder.svg",
  },
  {
    id: "3",
    title: "New Research: Blood Donation and Cardiovascular Health",
    excerpt:
      "Recent studies suggest regular blood donation may have unexpected health benefits.",
    category: "medical-news",
    author: "Dr. James Wilson",
    authorRole: "Research Scientist",
    publishedAt: "2024-12-15",
    readTime: 8,
    imageUrl: "/placeholder.svg",
  },
  {
    id: "4",
    title: "BloodLink Community: 10,000 Lives Saved Milestone",
    excerpt:
      "Celebrating our incredible community of donors who have reached this historic achievement.",
    category: "community",
    author: "BloodLink Team",
    authorRole: "Official",
    publishedAt: "2024-12-12",
    readTime: 3,
    imageUrl: "/placeholder.svg",
  },
  {
    id: "5",
    title: "Preparing for Your First Blood Donation",
    excerpt:
      "Everything you need to know before, during, and after your first donation experience.",
    category: "education",
    author: "Nurse Patricia Adams",
    authorRole: "Donation Specialist",
    publishedAt: "2024-12-10",
    readTime: 7,
    imageUrl: "/placeholder.svg",
  },
  {
    id: "6",
    title: "A Mother's Thank You Letter to Donors",
    excerpt:
      "When her daughter needed emergency transfusions, donors she never met became heroes.",
    category: "success-stories",
    author: "Anonymous",
    authorRole: "BloodLink User",
    publishedAt: "2024-12-08",
    readTime: 5,
    imageUrl: "/placeholder.svg",
  },
  {
    id: "7",
    title: "FDA Updates Blood Donation Eligibility Guidelines",
    excerpt:
      "What the new guidelines mean for potential donors and the medical community.",
    category: "medical-news",
    author: "Dr. Emily Rodriguez",
    authorRole: "Medical Director",
    publishedAt: "2024-12-05",
    readTime: 6,
    imageUrl: "/placeholder.svg",
  },
  {
    id: "8",
    title: "Host a Blood Drive: A Step-by-Step Guide",
    excerpt:
      "Learn how to organize a successful blood drive in your workplace or community.",
    category: "community",
    author: "David Kim",
    authorRole: "Community Coordinator",
    publishedAt: "2024-12-03",
    readTime: 10,
    imageUrl: "/placeholder.svg",
  },
  {
    id: "9",
    title: "Blood Type and Diet: Myth or Science?",
    excerpt:
      "Examining the popular blood type diet claims through the lens of current research.",
    category: "education",
    author: "Dr. Lisa Park",
    authorRole: "Nutritionist",
    publishedAt: "2024-12-01",
    readTime: 9,
    imageUrl: "/placeholder.svg",
  },
  {
    id: "10",
    title: "From Recipient to Regular Donor: John's Journey",
    excerpt:
      "After receiving blood during cancer treatment, John now donates every 56 days.",
    category: "success-stories",
    author: "John M.",
    authorRole: "BloodLink Donor",
    publishedAt: "2024-11-28",
    readTime: 5,
    imageUrl: "/placeholder.svg",
  },
  {
    id: "11",
    title: "Understanding Platelet Donation",
    excerpt:
      "How platelet donation differs from whole blood donation and why it matters.",
    category: "education",
    author: "Dr. Robert Chen",
    authorRole: "Blood Bank Director",
    publishedAt: "2024-11-25",
    readTime: 7,
    imageUrl: "/placeholder.svg",
  },
  {
    id: "12",
    title: "Holiday Season: When Blood Donations Drop",
    excerpt:
      "Why the holidays see a decline in donations and how you can help.",
    category: "community",
    author: "BloodLink Team",
    authorRole: "Official",
    publishedAt: "2024-11-22",
    readTime: 4,
    imageUrl: "/placeholder.svg",
  },
  {
    id: "13",
    title: "Artificial Blood: Where Are We Now?",
    excerpt:
      "The latest developments in synthetic blood research and what it means for the future.",
    category: "medical-news",
    author: "Dr. Amanda Foster",
    authorRole: "Biomedical Researcher",
    publishedAt: "2024-11-20",
    readTime: 11,
    imageUrl: "/placeholder.svg",
  },
  {
    id: "14",
    title: "Rare Blood Types: The Unsung Heroes",
    excerpt:
      "Meet the donors with rare blood types who are on call for emergencies worldwide.",
    category: "success-stories",
    author: "Sarah Johnson",
    authorRole: "Medical Journalist",
    publishedAt: "2024-11-18",
    readTime: 6,
    imageUrl: "/placeholder.svg",
  },
  {
    id: "15",
    title: "Blood Donation Apps: Transforming How We Give",
    excerpt:
      "How technology is making blood donation more accessible and efficient.",
    category: "community",
    author: "Tech Team",
    authorRole: "BloodLink Engineering",
    publishedAt: "2024-11-15",
    readTime: 5,
    imageUrl: "/placeholder.svg",
  },
];

export const rewards: Reward[] = [
  {
    id: "1",
    name: "$10 Starbucks Gift Card",
    description: "Treat yourself to your favorite coffee",
    pointsCost: 2000,
    category: "Food & Drink",
    partnerLogo: "/placeholder.svg",
    available: true,
  },
  {
    id: "2",
    name: "Movie Night Pack",
    description: "2 AMC movie tickets + popcorn combo",
    pointsCost: 5000,
    category: "Entertainment",
    partnerLogo: "/placeholder.svg",
    available: true,
  },
  {
    id: "3",
    name: "Wellness Kit",
    description: "Premium vitamins and supplements pack",
    pointsCost: 3500,
    category: "Health",
    partnerLogo: "/placeholder.svg",
    available: true,
  },
  {
    id: "4",
    name: "$25 Amazon Gift Card",
    description: "Shop millions of products",
    pointsCost: 5000,
    category: "Shopping",
    partnerLogo: "/placeholder.svg",
    available: true,
  },
  {
    id: "5",
    name: "Gym Day Pass",
    description: "Access to partner fitness centers",
    pointsCost: 1500,
    category: "Fitness",
    partnerLogo: "/placeholder.svg",
    available: true,
  },
  {
    id: "6",
    name: "Spotify Premium (1 Month)",
    description: "Ad-free music streaming",
    pointsCost: 2500,
    category: "Entertainment",
    partnerLogo: "/placeholder.svg",
    available: true,
  },
  {
    id: "7",
    name: "BloodLink Hoodie",
    description: "Exclusive branded merchandise",
    pointsCost: 4000,
    category: "Merchandise",
    partnerLogo: "/placeholder.svg",
    available: true,
  },
  {
    id: "8",
    name: "$50 Whole Foods Gift Card",
    description: "Fresh, healthy groceries",
    pointsCost: 10000,
    category: "Food & Drink",
    partnerLogo: "/placeholder.svg",
    available: true,
  },
  {
    id: "9",
    name: "Uber Rides Credit ($15)",
    description: "Get to your donation safely",
    pointsCost: 3000,
    category: "Transportation",
    partnerLogo: "/placeholder.svg",
    available: true,
  },
  {
    id: "10",
    name: "Charity Donation Match",
    description: "We donate $25 to charity of your choice",
    pointsCost: 2500,
    category: "Giving Back",
    partnerLogo: "/placeholder.svg",
    available: true,
  },
  {
    id: "11",
    name: "Premium BloodLink Badge",
    description: "Exclusive profile badge for 1 year",
    pointsCost: 1000,
    category: "Exclusive",
    partnerLogo: "/placeholder.svg",
    available: true,
  },
  {
    id: "12",
    name: "Spa Day Experience",
    description: "Relaxation package at partner spas",
    pointsCost: 15000,
    category: "Wellness",
    partnerLogo: "/placeholder.svg",
    available: true,
  },
  {
    id: "13",
    name: "Concert Tickets (2)",
    description: "Live Nation event of your choice",
    pointsCost: 20000,
    category: "Entertainment",
    partnerLogo: "/placeholder.svg",
    available: false,
  },
  {
    id: "14",
    name: "Apple Watch Band",
    description: "BloodLink edition sport band",
    pointsCost: 7500,
    category: "Merchandise",
    partnerLogo: "/placeholder.svg",
    available: true,
  },
  {
    id: "15",
    name: "Plant a Tree",
    description: "We plant 5 trees in your name",
    pointsCost: 500,
    category: "Giving Back",
    partnerLogo: "/placeholder.svg",
    available: true,
  },
];

export const achievements: Achievement[] = [
  {
    id: "1",
    name: "First Drop",
    description: "Complete your first donation",
    icon: "🩸",
    unlocked: true,
    unlockedAt: "2024-01-15",
  },
  {
    id: "2",
    name: "Lifesaver",
    description: "Help save 5 lives",
    icon: "❤️",
    unlocked: true,
    unlockedAt: "2024-06-20",
  },
  {
    id: "3",
    name: "Regular Hero",
    description: "Donate 10 times",
    icon: "🦸",
    unlocked: false,
    progress: 8,
    maxProgress: 10,
  },
  {
    id: "4",
    name: "Universal Giver",
    description: "O- donors: Help 25 different patients",
    icon: "🌟",
    unlocked: false,
    progress: 18,
    maxProgress: 25,
  },
  {
    id: "5",
    name: "Community Builder",
    description: "Refer 5 new donors",
    icon: "🤝",
    unlocked: true,
    unlockedAt: "2024-09-10",
  },
  {
    id: "6",
    name: "Reliability Champion",
    description: "Maintain 90%+ reliability for 6 months",
    icon: "🏆",
    unlocked: true,
    unlockedAt: "2024-11-01",
  },
  {
    id: "7",
    name: "Emergency Responder",
    description: "Respond to 3 critical requests",
    icon: "🚨",
    unlocked: false,
    progress: 1,
    maxProgress: 3,
  },
  {
    id: "8",
    name: "Gallon Club",
    description: "Donate a gallon of blood (8 donations)",
    icon: "🎖️",
    unlocked: true,
    unlockedAt: "2024-10-25",
  },
];

export const teamMembers = [
  {
    id: "1",
    name: "Dr. Maya Patel",
    role: "CEO & Co-Founder",
    bio: "Former hematologist with 15 years of experience in blood banking.",
    image: "/placeholder.svg",
  },
  {
    id: "2",
    name: "James Chen",
    role: "CTO & Co-Founder",
    bio: "Previously led engineering at two successful health-tech startups.",
    image: "/placeholder.svg",
  },
  {
    id: "3",
    name: "Dr. Sarah Williams",
    role: "Chief Medical Officer",
    bio: "Board-certified physician specializing in transfusion medicine.",
    image: "/placeholder.svg",
  },
  {
    id: "4",
    name: "Michael Torres",
    role: "Head of Community",
    bio: "Passionate advocate for blood donation accessibility.",
    image: "/placeholder.svg",
  },
  {
    id: "5",
    name: "Lisa Park",
    role: "Head of Design",
    bio: "Award-winning UX designer focused on healthcare applications.",
    image: "/placeholder.svg",
  },
  {
    id: "6",
    name: "David Kim",
    role: "Head of Partnerships",
    bio: "Building relationships with hospitals and blood banks nationwide.",
    image: "/placeholder.svg",
  },
];

export const partnerHospitals = [
  "UCSF Medical Center",
  "Stanford Health Care",
  "SF General Hospital",
  "Kaiser Permanente",
  "Sutter Health",
  "John Muir Health",
  "El Camino Health",
  "Good Samaritan Hospital",
];

export const impactStats = {
  livesSaved: 12847,
  activeDonors: 52340,
  unitsCollected: 38521,
  partnerHospitals: 156,
  citiesCovered: 42,
  averageResponseTime: "2.4 hours",
};
