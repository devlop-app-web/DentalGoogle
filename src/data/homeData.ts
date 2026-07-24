import { Treatment, Doctor, TransformationCase, Review, FAQItem } from '../types';
import { generateDentalMacroImage } from '../utils/dentalImages';

export const CLINIC_INFO = {
  name: "Dr. Sheekha Shah",
  studioName: "DENTAL STUDIO",
  fullName: "Dr. Sheekha Shah DENTAL STUDIO",
  tagline: "Premier DENTAL STUDIO & Implant Center",
  phone: "(555) 234-5678",
  emergencyPhone: "(555) 911-DENT",
  email: "care@drsheekhashah.com",
  address: "742 Evergreen Suite 300, Medical Plaza, CA 90210",
  hours: {
    weekdays: "8:00 AM - 7:00 PM",
    saturday: "9:00 AM - 4:00 PM",
    sunday: "Emergency Calls Only"
  },
  rating: 4.9,
  reviewsCount: 1280,
  googleRatingCount: 850,
  whatsapp: "919825000000",
  googleMapsUrl: "https://maps.google.com"
};

export const TREATMENTS: Treatment[] = [
  {
    id: "invisalign",
    title: "Invisalign® Clear Aligners",
    category: "orthodontic",
    shortDescription: "Discreet, removable clear aligners engineered to straighten your teeth comfortably without metal braces.",
    fullDescription: "Transform your smile invisibly using custom 3D SmartTrack® aligners. Designed for precision, speed, and supreme comfort with digital iTero® 3D scanning.",
    duration: "6 - 15 Months",
    startingPrice: "$2,990",
    imageUrl: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
    features: ["3D iTero® Digital Scan", "Custom Removable Aligners", "Invisible & Comfortable", "Fewer Clinic Visits"],
    popular: true
  },
  {
    id: "veneers",
    title: "Porcelain Veneers & Smile Makeovers",
    category: "cosmetic",
    shortDescription: "Ultra-thin, handcrafted ceramic shells that correct chips, gaps, alignment, and severe discoloration.",
    fullDescription: "Achieve your dream Hollywood smile. Custom ultra-thin porcelain veneers bond seamlessly to your natural enamel, crafting flawless shape and radiance.",
    duration: "2 - 3 Visits",
    startingPrice: "$950 / tooth",
    imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    features: ["Stain Resistant Porcelain", "Custom Digital Smile Design", "Natural Translucency", "15+ Year Longevity"],
    popular: true
  },
  {
    id: "implants",
    title: "Dental Implants & All-on-4®",
    category: "restorative",
    shortDescription: "Permanent, natural-looking titanium dental root replacements for single or full-arch tooth restorations.",
    fullDescription: "Permanent solution for missing teeth that preserves jawbone density and restores 100% chewing functionality with zero slippage.",
    duration: "3 - 6 Months",
    startingPrice: "$1,850",
    imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
    features: ["Guided CBCT 3D Surgery", "Lifetime Titanium Post", "Natural Aesthetic Crown", "Preserves Bone Structure"],
    popular: true
  },
  {
    id: "whitening",
    title: "Laser Teeth Whitening",
    category: "cosmetic",
    shortDescription: "Professional in-chair whitening that brightens enamel up to 8 shades in a single 60-minute relaxing session.",
    fullDescription: "Painless, high-potency LED light whitening system with specialized enamel protection that eliminates stubborn coffee, wine, and age stains instantly.",
    duration: "60 Minutes",
    startingPrice: "$390",
    imageUrl: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
    features: ["Up to 8 Shades Whiter", "Zero Tooth Sensitivity Tech", "Long-lasting Results", "Includes At-Home Touchup Kit"]
  },
  {
    id: "pediatric",
    title: "Gentle Pediatric Dentistry",
    category: "preventative",
    shortDescription: "Fear-free, compassionate dental care designed specifically for infants, children, and teenagers.",
    fullDescription: "Making dental visits fun and comforting for little ones. Preventive care, dental sealants, gentle cleanings, and positive habit reinforcement.",
    duration: "45 Minutes",
    startingPrice: "$120",
    imageUrl: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800",
    features: ["Kid-Friendly Environment", "Fluoride & Dental Sealants", "Painless Cleanings", "Parent Guidance"]
  },
  {
    id: "root-canal",
    title: "Root Canal Therapy & Endodontics",
    category: "restorative",
    shortDescription: "Painless single-visit micro-endodontics designed to save infected teeth and relieve pain instantly.",
    fullDescription: "Advanced rotary endodontic technology ensures 100% pain relief and saves your natural tooth structure under gentle local anesthesia.",
    duration: "60 - 90 Mins",
    startingPrice: "$750",
    imageUrl: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=800",
    features: ["Microscopic Precision", "Instant Pain Relief", "99% Tooth Retention Rate", "Gentle Local Anesthesia"]
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: "dr-sheekha-shah",
    name: "Dr. Sheekha Shah",
    role: "Lead Cosmetic Surgeon & Studio Director",
    credentials: "BDS, MDS (Cosmetic Dentistry & Implantology)",
    experienceYears: 16,
    specialties: ["Smile Makeovers", "Dental Implants", "Porcelain Veneers", "Full Mouth Rehabilitation"],
    bio: "Dr. Sheekha Shah is a renowned aesthetic dentist and implantologist dedicated to gentle, pain-free techniques and state-of-the-art digital dentistry at DENTAL STUDIO.",
    imageUrl: "/assets/CEO.jpeg",
    quote: "A healthy, radiant smile redefines your confidence. At DENTAL STUDIO, we blend clinical perfection with artistic care.",
    education: [
      "Master of Dental Surgery (MDS), Cosmetic Dentistry & Implantology",
      "Bachelor of Dental Surgery (BDS)",
      "Fellowship, International College of Dentists (FICD)",
      "Master Clinician Certification in Digital Smile Design"
    ]
  },
  {
    id: "dr-marcus-chen",
    name: "Dr. Marcus Chen, DMD",
    role: "Orthodontics & Invisalign® Specialist",
    credentials: "DMD (Harvard), Diamond Invisalign Provider",
    experienceYears: 12,
    specialties: ["Invisalign® Aligners", "Airway Orthodontics", "Accelerated Tooth Movement"],
    bio: "Dr. Chen specializes in clear aligner biomechanics and facial aesthetics, helping teenagers and adults align their teeth seamlessly without compromising lifestyle.",
    imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800",
    quote: "Modern orthodontics isn't just about straight teeth; it's about facial balance and functional bite longevity.",
    education: [
      "Doctor of Dental Medicine, Harvard School of Dental Medicine",
      "Master of Science in Orthodontics, Columbia University",
      "Top 1% Diamond Plus Invisalign® Provider Status"
    ]
  }
];

export const TRANSFORMATION_CASES: TransformationCase[] = [
  {
    id: "case-1",
    patientName: "Sophia R.",
    treatmentName: "Porcelain Veneers (8 Upper Teeth)",
    beforeImage: generateDentalMacroImage({ type: 'makeover', state: 'before' }),
    afterImage: generateDentalMacroImage({ type: 'makeover', state: 'after' }),
    durationMonths: 1,
    description: "Corrected chipped lateral incisors, deep discoloration, and uneven gumline with ultra-thin porcelain veneers by Dr. Sheekha Shah.",
    category: "Veneers"
  },
  {
    id: "case-2",
    patientName: "David K.",
    treatmentName: "Invisalign® + Laser Whitening",
    beforeImage: generateDentalMacroImage({ type: 'ortho', state: 'before' }),
    afterImage: generateDentalMacroImage({ type: 'ortho', state: 'after' }),
    durationMonths: 8,
    description: "Resolved severe lower crowding and crossbite within 8 months, followed by 1-hour laser whitening.",
    category: "Invisalign"
  },
  {
    id: "case-3",
    patientName: "Emily M.",
    treatmentName: "Single Tooth Implant + Crown",
    beforeImage: generateDentalMacroImage({ type: 'implant', state: 'before' }),
    afterImage: generateDentalMacroImage({ type: 'implant', state: 'after' }),
    durationMonths: 4,
    description: "Restored a missing molar with 3D CBCT guided implant placement and custom zirconic porcelain crown.",
    category: "Implants"
  }
];

export const REVIEWS: Review[] = [
  {
    id: "review-1",
    author: "Jessica Martinez",
    rating: 5,
    date: "2 weeks ago",
    comment: "Dr. Sheekha Shah transformed my smile with veneers before my wedding! The entire process was painless, incredibly thorough, and the staff made me feel like royalty. DENTAL STUDIO is hands down the best practice in the area.",
    treatment: "Porcelain Veneers",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    verified: true,
    highlight: "Dr. Sheekha Shah transformed my smile!"
  },
  {
    id: "review-2",
    author: "Robert Sterling",
    rating: 5,
    date: "1 month ago",
    comment: "I had extreme dental anxiety due to bad childhood experiences. Dr. Sheekha Shah's gentle approach and DENTAL STUDIO's peaceful spa-like environment completely cured my fear. My implant treatment was effortless.",
    treatment: "Dental Implant",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    verified: true,
    highlight: "DENTAL STUDIO's environment cured my anxiety!"
  },
  {
    id: "review-3",
    author: "Amanda Thorne",
    rating: 5,
    date: "3 weeks ago",
    comment: "Completed my Invisalign treatment at DENTAL STUDIO with Dr. Chen and Dr. Sheekha Shah! Digital scans were quick and accurate. No gross impression trays. My teeth are perfectly straight and bite feels amazing.",
    treatment: "Invisalign Clear Aligners",
    avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200",
    verified: true,
    highlight: "Perfectly straight teeth with no gross trays!"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Does Dr. Sheekha Shah DENTAL STUDIO accept insurance plans?",
    answer: "Yes! We accept most major PPO dental insurance plans (including Delta Dental, MetLife, Cigna, Aetna, Guardian, and Humana). Our financial coordinator will file claims directly on your behalf to maximize your coverage benefits.",
    category: "Cost & Insurance"
  },
  {
    id: "faq-2",
    question: "What flexible financing options are available at DENTAL STUDIO?",
    answer: "We offer 0% interest financing for up to 24 months through CareCredit® and Sunbit. We also provide customized in-house membership plans for patients without traditional insurance.",
    category: "Cost & Insurance"
  },
  {
    id: "faq-3",
    question: "How does Invisalign® compare to traditional metal braces?",
    answer: "Invisalign® aligners are completely transparent, removable when eating or brushing, and feature smooth edges that eliminate mouth sores. Most patients complete treatment 30% faster than traditional bracket braces.",
    category: "Invisalign"
  },
  {
    id: "faq-4",
    question: "Are dental implants performed by Dr. Sheekha Shah painful?",
    answer: "Not at all. Dr. Sheekha Shah utilizes 3D CBCT computer-guided surgical technology, ensuring minimal disruption to surrounding tissue. Most patients report feeling only mild pressure during the procedure and resume normal activities within 24 hours.",
    category: "Implants"
  },
  {
    id: "faq-5",
    question: "What should I do if I experience a sudden dental emergency?",
    answer: "Call our emergency hotline immediately at (555) 911-DENT. DENTAL STUDIO guarantees same-day emergency appointments for severe pain, broken teeth, or knocked-out teeth.",
    category: "Emergency"
  },
  {
    id: "faq-6",
    question: "How long do porcelain veneers last?",
    answer: "With good oral hygiene and routine bi-annual cleanings, high-grade medical porcelain veneers last 15 to 20+ years without fading or staining.",
    category: "General"
  }
];

export const METRICS = [
  { label: "Years of Excellence", value: 16, suffix: "+" },
  { label: "Happy Smiles Restored", value: 12500, suffix: "+" },
  { label: "Implants Placed", value: 3800, suffix: "+" },
  { label: "Google Rating", value: 4.9, suffix: " ★" }
];
