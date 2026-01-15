import React from 'react';

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface LessonSection {
  title: string;
  content: React.ReactNode; 
}

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  priority: string;
  priorityColor: string;
  lessons: LessonSection[];
  quiz: Question[];
  passingScore: number;
}

export interface ModuleProgress {
  completedLessons: number[];
  quizScore: number | null;
  passed: boolean;
}

export interface UserProgress {
  [moduleId: string]: ModuleProgress;
}

// Konfiguracja Podmiotu Prawnego (Pracodawcy)
export interface CompanyConfig {
  companyName: string;
  nip: string;
  address: string;
  representative: string; // Osoba reprezentująca (np. Prezes, Kierownik BHP)
  city: string; // Miejscowość wystawienia dokumentów
}

export interface User {
  id: string;
  name: string;
  role: 'admin' | 'worker';
  password?: string;
  progress: UserProgress;
  joinedDate: string;
  certificateId?: string;
  // Dane Osobowe (RODO/Kadrowe)
  pesel?: string;
  idNumber?: string; // Numer Dowodu / Karty Pobytu
  address?: string;
  phoneNumber?: string;
  email?: string;
  jobTitle?: string; // Stanowisko pracy - KLUCZOWE DLA INSTRUKTAŻU STANOWISKOWEGO
  // Zgody Prawne
  rodoAccepted?: boolean;
  rodoAcceptedDate?: string;
}

// Struktura Logu Prawnego (Dowód odbycia szkolenia)
export interface TrainingLog {
  id: string;
  userId: string;
  userName: string;
  userPesel: string; // Kluczowy identyfikator prawny
  moduleId: string;
  moduleTitle: string;
  score: number;
  timestamp: string;
  legalStatementAccepted: boolean;
  signatureData?: string | null; // Obraz podpisu (Base64)
  // Snapshot danych w momencie zdawania
  userSnapshot: {
    address: string;
    idNumber: string;
    jobTitle: string;
  };
  // Metadane techniczne dowodowe
  legalMeta: {
    userAgent: string;
    ipPlaceholder: string; // W realnej app to prawdziwe IP
    employerNameSnapshot: string; // U kogo pracował w momencie szkolenia
  };
}

export interface SDSConfig {
  hazards: string;
  firstAid: string;
  ppe: string;
  fire?: string;
  storage?: string;
  waste?: string;
  ph?: string;
  contains?: string;
  usage?: string;
}

export interface ResourceItem {
  id: string;
  category: string;
  name: string;
  description: string;
  links: string[];
  sdsConfig?: SDSConfig;
}