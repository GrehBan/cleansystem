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

export interface User {
  id: string;
  name: string;
  role: 'admin' | 'worker';
  password?: string;
  progress: UserProgress;
  joinedDate: string;
  certificateId?: string;
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