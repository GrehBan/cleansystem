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
  icon: React.ElementType; // Changed from 'any' to specific React Component type for Lucide icons
  priority: string;
  priorityColor: string;
  lessons: LessonSection[];
  quiz: Question[];
  passingScore: number; // Percentage
}

export interface ModuleProgress {
  completedLessons: number[];
  quizScore: number | null;
  passed: boolean;
}

export interface UserProgress {
  [moduleId: string]: ModuleProgress;
}