import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Quiz from './components/Quiz';
import Certificate from './components/Certificate';
import { MODULES } from './data';
import { UserProgress } from './types';
import { ChevronRight, Home, BookOpen, Loader2 } from 'lucide-react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const App: React.FC = () => {
  // --- STATE ---
  const [currentView, setCurrentView] = useState<'dashboard' | 'module'>('dashboard');
  const [activeModuleId, setActiveModuleId] = useState<string | null>(null);
  const [activeLessonIndex, setActiveLessonIndex] = useState(0);
  const [isQuizMode, setIsQuizMode] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [certificateId] = useState(() => Math.random().toString(36).substr(2, 9).toUpperCase() + '-2026');
  
  // Ref for main content to scroll
  const mainContentRef = useRef<HTMLDivElement>(null);

  // Initialize progress from localStorage or default
  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem('cleanProProgress');
    if (saved) return JSON.parse(saved);
    
    // Default empty progress
    const initial: UserProgress = {};
    MODULES.forEach(m => {
      initial[m.id] = { completedLessons: [], quizScore: null, passed: false };
    });
    return initial;
  });

  // --- EFFECTS ---
  useEffect(() => {
    localStorage.setItem('cleanProProgress', JSON.stringify(progress));
  }, [progress]);

  // Scroll to top when lesson changes
  useEffect(() => {
    if (mainContentRef.current) {
        mainContentRef.current.scrollTop = 0;
    }
  }, [activeLessonIndex, currentView, isQuizMode]);

  // --- HANDLERS ---

  const handleSelectModule = (id: string) => {
    setActiveModuleId(id);
    setCurrentView('module');
    setActiveLessonIndex(0);
    setIsQuizMode(false);
  };

  const handleLessonComplete = (moduleId: string, lessonIndex: number) => {
    setProgress(prev => {
      const current = prev[moduleId];
      if (!current.completedLessons.includes(lessonIndex)) {
        return {
          ...prev,
          [moduleId]: {
            ...current,
            completedLessons: [...current.completedLessons, lessonIndex]
          }
        };
      }
      return prev;
    });

    // Determine if we should go to next lesson or quiz
    const activeModule = MODULES.find(m => m.id === moduleId);
    if (activeModule) {
      if (lessonIndex < activeModule.lessons.length - 1) {
        setActiveLessonIndex(lessonIndex + 1);
      } else {
        setIsQuizMode(true);
      }
    }
  };

  const handleQuizComplete = (score: number, passed: boolean) => {
    if (activeModuleId) {
      setProgress(prev => ({
        ...prev,
        [activeModuleId]: {
          ...prev[activeModuleId],
          quizScore: score,
          passed: passed
        }
      }));
      
      if (passed) {
        setTimeout(() => {
            setCurrentView('dashboard');
            setActiveModuleId(null);
        }, 1500);
      }
    }
  };

  const handleDownloadCertificate = async () => {
    const element = document.getElementById('certificate-print-area');
    if (!element) return;

    try {
      setIsGeneratingPdf(true);
      
      // Temporarily make it visible/opaque for capture without showing in viewport logic
      const parent = element.parentElement;
      if (parent) {
          parent.style.opacity = '1';
          parent.style.zIndex = '9999';
          parent.style.background = '#fff'; // Ensure white background behind it
      }

      const canvas = await html2canvas(element, {
        scale: 2, // Higher resolution
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });

      // Revert styles
      if (parent) {
          parent.style.opacity = '0';
          parent.style.zIndex = '-1';
      }

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Certyfikat_CzystoscPro_${certificateId}.pdf`);

    } catch (error) {
      console.error('Failed to generate PDF', error);
      alert('Błąd generowania certyfikatu. Spróbuj ponownie.');
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  // --- RENDER HELPERS ---
  const activeModule = MODULES.find(m => m.id === activeModuleId);

  return (
    <div className="flex min-h-screen bg-background text-white font-sans selection:bg-primary selection:text-white">
      {/* 
         The Certificate component is always mounted but hidden (opacity-0, pointer-events-none).
         This allows html2canvas to find it in the DOM and render it.
      */}
      <Certificate 
        userName="Jan Kowalski" // In a real app, this would be dynamic
        completionDate={new Date().toLocaleDateString('pl-PL')}
        progress={progress}
        certificateId={certificateId}
      />

      {/* Loading Overlay for PDF Generation */}
      {isGeneratingPdf && (
        <div className="fixed inset-0 bg-black/80 z-[10000] flex flex-col items-center justify-center text-white">
            <Loader2 className="w-12 h-12 animate-spin text-primary mb-4" />
            <h2 className="text-xl font-bold">Generowanie Certyfikatu...</h2>
            <p className="text-gray-400">Proszę czekać, przygotowujemy plik PDF.</p>
        </div>
      )}

      {/* Sidebar */}
      <div className="hidden md:block print:hidden">
         <Sidebar 
            currentModuleId={activeModuleId} 
            onSelectModule={handleSelectModule} 
            progress={progress}
            onShowDashboard={() => {
                setCurrentView('dashboard');
                setActiveModuleId(null);
            }}
         />
      </div>

      {/* Main Content Area */}
      <main ref={mainContentRef} className="flex-1 h-screen overflow-y-auto print:hidden scroll-smooth">
        
        {/* Mobile Header */}
        <div className="md:hidden p-4 border-b border-border flex justify-between items-center bg-surface sticky top-0 z-10">
            <span className="font-extrabold tracking-tighter">CLEAN<span className="text-primary">SYSTEM</span></span>
            <button 
                onClick={() => {
                    if(currentView === 'module') {
                        setCurrentView('dashboard');
                        setActiveModuleId(null);
                    }
                }}
                className="text-xs font-bold text-gray-400"
            >
                {currentView === 'module' ? 'WRÓĆ' : 'MENU'}
            </button>
        </div>

        {/* View Switcher */}
        {currentView === 'dashboard' ? (
          <Dashboard 
            progress={progress} 
            onSelectModule={handleSelectModule} 
            onPrintCertificate={handleDownloadCertificate}
          />
        ) : (
          activeModule && (
            <div className="p-6 md:p-12 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-8 font-mono uppercase">
                    <button onClick={() => setCurrentView('dashboard')} className="hover:text-white flex items-center gap-1">
                        <Home size={12} /> Panel Główny
                    </button>
                    <ChevronRight size={12} />
                    <span className="text-primary">{activeModule.title}</span>
                </div>

                {!isQuizMode ? (
                    <>
                        <div className="flex items-center justify-between mb-8 border-b border-border pb-6">
                            <div>
                                <h1 className="text-3xl font-bold text-white mb-2">{activeModule.lessons[activeLessonIndex].title}</h1>
                                <p className="text-gray-400 text-sm">Lekcja {activeLessonIndex + 1} z {activeModule.lessons.length}</p>
                            </div>
                            <BookOpen size={32} className="text-gray-600" />
                        </div>

                        <div className="prose prose-invert prose-lg max-w-none mb-12">
                            {activeModule.lessons[activeLessonIndex].content}
                        </div>

                        <div className="flex justify-between items-center pt-8 border-t border-border">
                            <button
                                onClick={() => setActiveLessonIndex(prev => Math.max(0, prev - 1))}
                                disabled={activeLessonIndex === 0}
                                className={`px-6 py-2 rounded text-sm font-bold ${activeLessonIndex === 0 ? 'opacity-0' : 'bg-surface hover:bg-card text-gray-300'}`}
                            >
                                POPRZEDNIA
                            </button>

                            {/* Custom pagination dots */}
                            <div className="flex gap-2">
                                {activeModule.lessons.map((_, idx) => (
                                    <div 
                                        key={idx}
                                        className={`w-2 h-2 rounded-full ${idx === activeLessonIndex ? 'bg-primary' : 'bg-gray-700'}`}
                                    />
                                ))}
                                <div className={`w-2 h-2 rounded-full ${isQuizMode ? 'bg-primary' : 'border border-gray-700'}`} />
                            </div>

                            <button
                                onClick={() => handleLessonComplete(activeModule.id, activeLessonIndex)}
                                className="px-6 py-2 rounded bg-white text-black font-bold hover:bg-gray-200 transition-colors text-sm"
                            >
                                {activeLessonIndex === activeModule.lessons.length - 1 ? 'PRZEJDŹ DO TESTU' : 'NASTĘPNA LEKCJA'}
                            </button>
                        </div>
                    </>
                ) : (
                    <Quiz 
                        questions={activeModule.quiz} 
                        passingScore={activeModule.passingScore}
                        onComplete={handleQuizComplete}
                    />
                )}
            </div>
          )
        )}
      </main>
    </div>
  );
};

export default App;