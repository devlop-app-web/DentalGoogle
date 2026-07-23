export interface Treatment {
  id: string;
  title: string;
  category: 'cosmetic' | 'restorative' | 'orthodontic' | 'preventative';
  shortDescription: string;
  fullDescription: string;
  duration: string;
  startingPrice: string;
  imageUrl: string;
  features: string[];
  popular?: boolean;
}

export interface Doctor {
  id: string;
  name: string;
  role: string;
  credentials: string;
  experienceYears: number;
  specialties: string[];
  bio: string;
  imageUrl: string;
  quote: string;
  education: string[];
}

export interface TransformationCase {
  id: string;
  patientName: string;
  treatmentName: string;
  beforeImage: string;
  afterImage: string;
  durationMonths: number;
  description: string;
  category: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  treatment: string;
  avatarUrl: string;
  verified: boolean;
  highlight?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Cost & Insurance' | 'Emergency' | 'Invisalign' | 'Implants';
}

export interface AppointmentFormData {
  serviceId: string;
  preferredDoctorId: string;
  preferredDate: string;
  preferredTimeSlot: string;
  fullName: string;
  email: string;
  phone: string;
  isFirstVisit: boolean;
  notes: string;
}
