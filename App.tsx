import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Quiz from './components/Quiz';
import Certificate from './components/Certificate';
import LoginScreen from './components/LoginScreen';
import AdminPanel from './components/AdminPanel';
import Resources from './components/Resources';
import SignatureModal from './components/SignatureModal';
import { MODULES } from './data';
import { User, UserProgress, TrainingLog, CompanyConfig } from './types';
import { ChevronRight, Home, BookOpen, Loader2 } from 'lucide-react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const App: React.FC = () => {
  // --- COMPANY STATE (Legal Entity) ---
  const [companyConfig, setCompanyConfig] = useState<CompanyConfig>(() => {
    const saved = localStorage.getItem('vivoCleanCompany');
    return saved ? JSON.parse(saved) : {
        companyName: 'VIVO CLEAN POLAND SP. Z O.O.',
        nip: '525-000-00-00',
        address: 'ul. Przemysłowa 1, 00-001 Warszawa',
        representative: 'Maksym Reshetnyk',
        city: 'Warszawa'
    };
  });

  // --- USER STATE ---
  const [users, setUsers] = useState<User[]>(() => {
    const saved = localStorage.getItem('vivoCleanUsers');
    if (saved) return JSON.parse(saved);
    
    const defaultProgress: UserProgress = {};
    MODULES.forEach(m => {
      defaultProgress[m.id] = { completedLessons: [], quizScore: null, passed: false };
    });

    return [
      {
        id: 'admin-001',
        name: 'Maksym Reshetnyk',
        role: 'admin',
        progress: defaultProgress,
        joinedDate: new Date().toISOString(),
        rodoAccepted: true,
        rodoAcceptedDate: new Date().toISOString()
      },
      {
        id: 'worker-001',
        name: 'Jan Kowalski',
        role: 'worker',
        password: '1234',
        progress: defaultProgress,
        joinedDate: new Date().toISOString(),
        certificateId: 'VIVO-2026-001',
        pesel: '85010112345',
        idNumber: 'ABC 123456',
        address: 'ul. Przykładowa 1, 00-001 Warszawa',
        phoneNumber: '500 600 700',
        rodoAccepted: true,
        rodoAcceptedDate: new Date().toISOString()
      }
    ];
  });

  // --- LEGAL LOGS STATE ---
  const [trainingLogs, setTrainingLogs] = useState<TrainingLog[]>(() => {
    const saved = localStorage.getItem('vivoCleanLogs');
    return saved ? JSON.parse(saved) : [];
  });

  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [currentView, setCurrentView] = useState<'dashboard' | 'module' | 'resources'>('dashboard');
  const [activeModuleId, setActiveModuleId] = useState<string | null>(null);
  const [activeLessonIndex, setActiveLessonIndex] = useState(0);
  const [isQuizMode, setIsQuizMode] = useState(false);
  
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [isSignatureModalOpen, setIsSignatureModalOpen] = useState(false);
  const [certificateSignature, setCertificateSignature] = useState<string | null>(null);
  const [certificateTarget, setCertificateTarget] = useState<User | null>(null);
  
  const mainContentRef = useRef<HTMLDivElement>(null);

  // --- EFFECTS ---
  useEffect(() => {
    localStorage.setItem('vivoCleanUsers', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem('vivoCleanLogs', JSON.stringify(trainingLogs));
  }, [trainingLogs]);

  useEffect(() => {
    localStorage.setItem('vivoCleanCompany', JSON.stringify(companyConfig));
  }, [companyConfig]);

  useEffect(() => {
    if (currentUser) {
      const updatedUser = users.find(u => u.id === currentUser.id);
      if (updatedUser && JSON.stringify(updatedUser) !== JSON.stringify(currentUser)) {
        setCurrentUser(updatedUser);
      }
    }
  }, [users]);

  useEffect(() => {
    if (mainContentRef.current) {
        mainContentRef.current.scrollTop = 0;
    }
  }, [activeLessonIndex, currentView, isQuizMode]);

  // --- ACTIONS ---

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    setCurrentView('dashboard');
    setActiveModuleId(null);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentView('dashboard');
    setActiveModuleId(null);
  };

  const handleRegisterUser = (userData: Partial<User>) => {
    const defaultProgress: UserProgress = {};
    MODULES.forEach(m => {
      defaultProgress[m.id] = { completedLessons: [], quizScore: null, passed: false };
    });

    const generatedPassword = Math.floor(1000 + Math.random() * 9000).toString();

    const newUser: User = {
      id: `worker-${Date.now()}`,
      name: userData.name || 'Nieznany',
      role: 'worker',
      password: generatedPassword,
      progress: defaultProgress,
      joinedDate: new Date().toISOString(),
      certificateId: `VIVO-${new Date().getFullYear()}-${Math.floor(Math.random() * 10000)}`,
      pesel: userData.pesel || '',
      idNumber: userData.idNumber || '',
      address: userData.address || '',
      phoneNumber: userData.phoneNumber || '',
      email: userData.email || '',
      rodoAccepted: true, // Registration by admin implies paper consent or immediate electronic acceptance
      rodoAcceptedDate: new Date().toISOString()
    };

    setUsers(prev => [...prev, newUser]);
  };

  const handleDeleteUser = (id: string) => {
    if (window.confirm('Czy na pewno chcesz usunąć tego pracownika? Ta operacja jest nieodwracalna.')) {
      setUsers(prev => prev.filter(u => u.id !== id));
    }
  };

  const handleUpdateCompany = (config: CompanyConfig) => {
    setCompanyConfig(config);
  };

  const handleRodoAccept = (user: User) => {
    const updatedUser = { ...user, rodoAccepted: true, rodoAcceptedDate: new Date().toISOString() };
    setUsers(prev => prev.map(u => u.id === user.id ? updatedUser : u));
    setCurrentUser(updatedUser);
  };

  const handleSelectModule = (id: string) => {
    setActiveModuleId(id);
    setCurrentView('module');
    setActiveLessonIndex(0);
    setIsQuizMode(false);
  };

  const handleShowResources = () => {
    setCurrentView('resources');
    setActiveModuleId(null);
  };

  const handleLessonComplete = (moduleId: string, lessonIndex: number) => {
    // Progress is local until quiz is passed legally
    const activeModule = MODULES.find(m => m.id === moduleId);
    if (activeModule) {
      if (lessonIndex < activeModule.lessons.length - 1) {
        setActiveLessonIndex(lessonIndex + 1);
      } else {
        setIsQuizMode(true);
      }
    }
  };

  // --- LEGAL QUIZ COMPLETION ---
  const handleQuizComplete = (score: number, passed: boolean, signatureData?: string) => {
    if (!currentUser || !activeModuleId) return;

    // 1. Update User Progress
    setUsers(prevUsers => {
      return prevUsers.map(user => {
        if (user.id === currentUser.id) {
          const currentModuleProgress = user.progress[activeModuleId];
          return {
            ...user,
            progress: {
              ...user.progress,
              [activeModuleId]: {
                ...currentModuleProgress,
                quizScore: score,
                passed: passed || currentModuleProgress.passed
              }
            }
          };
        }
        return user;
      });
    });

    // 2. CREATE IMMUTABLE LEGAL LOG (AUDIT TRAIL)
    if (passed) {
        const moduleTitle = MODULES.find(m => m.id === activeModuleId)?.title || activeModuleId;
        
        const newLog: TrainingLog = {
            id: `log-${Date.now()}`,
            userId: currentUser.id,
            userName: currentUser.name,
            userPesel: currentUser.pesel || 'BRAK DANYCH',
            moduleId: activeModuleId,
            moduleTitle: moduleTitle,
            score: score,
            timestamp: new Date().toISOString(),
            legalStatementAccepted: true,
            signatureData: signatureData || null, // STORE THE SIGNATURE
            userSnapshot: {
                address: currentUser.address || '',
                idNumber: currentUser.idNumber || ''
            },
            legalMeta: {
                userAgent: navigator.userAgent,
                ipPlaceholder: '192.168.x.x (Intranet)', // In real app, server-side IP
                employerNameSnapshot: companyConfig.companyName
            }
        };

        setTrainingLogs(prev => [newLog, ...prev]);
        
        setTimeout(() => {
            setCurrentView('dashboard');
            setActiveModuleId(null);
        }, 1000);
    }
  };

  // --- PDF GENERATION ---
  const handleInitiateCertificate = (targetUser: User) => {
    setCertificateTarget(targetUser);
    setIsSignatureModalOpen(true);
  };

  const handleSignatureConfirm = (signatureDataUrl: string) => {
    setCertificateSignature(signatureDataUrl);
    setIsSignatureModalOpen(false);
    if (certificateTarget) {
        generatePdf(certificateTarget, signatureDataUrl);
    }
  };

  const generatePdf = async (targetUser: User, signature: string) => {
    setTimeout(async () => {
      const element = document.getElementById('certificate-print-area');
      if (!element) return;
      try {
        setIsGeneratingPdf(true);
        const parent = element.parentElement;
        if (parent) {
            parent.style.opacity = '1';
            parent.style.zIndex = '9999';
            parent.style.background = '#fff';
        }
        const canvas = await html2canvas(element, { scale: 2, useCORS: true, logging: false, backgroundColor: '#ffffff' });
        if (parent) {
            parent.style.opacity = '0';
            parent.style.zIndex = '-1';
        }
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(`Zaswiadczenie_BHP_${targetUser.name.replace(/\s+/g, '_')}.pdf`);
      } catch (error) {
        console.error('PDF Generation Error:', error);
        alert('Wystąpił błąd podczas generowania pliku PDF. Sprawdź konsolę lub spróbuj ponownie.');
      } finally {
        setIsGeneratingPdf(false);
        setCertificateTarget(null);
        setCertificateSignature(null);
      }
    }, 200);
  };

  if (!currentUser) {
    return <LoginScreen users={users} onLogin={handleLogin} onRodoAccept={handleRodoAccept} />;
  }

  // --- ADMIN VIEW ---
  if (currentUser.role === 'admin') {
    return (
      <>
        <SignatureModal 
            isOpen={isSignatureModalOpen} 
            onClose={() => { setIsSignatureModalOpen(false); setCertificateTarget(null); }}
            onConfirm={handleSignatureConfirm}
        />
        {certificateTarget && (
          <Certificate 
            user={certificateTarget}
            completionDate={new Date().toLocaleDateString('pl-PL')}
            company={companyConfig}
            signatureImage={certificateSignature}
          />
        )}
        {isGeneratingPdf && (
          <div className="fixed inset-0 bg-black/80 z-[10000] flex flex-col items-center justify-center text-white">
              <Loader2 className="w-12 h-12 animate-spin text-primary mb-4" />
              <h2 className="text-xl font-bold">Generowanie Dokumentu Prawnego...</h2>
          </div>
        )}

        <AdminPanel 
          users={users} 
          logs={trainingLogs}
          companyConfig={companyConfig}
          onRegisterUser={handleRegisterUser} 
          onDeleteUser={handleDeleteUser}
          onUpdateCompany={handleUpdateCompany}
          onLogout={handleLogout}
          onGenerateCertificate={handleInitiateCertificate}
        />
      </>
    );
  }

  // --- WORKER VIEW ---
  const activeModule = MODULES.find(m => m.id === activeModuleId);

  return (
    <div className="flex min-h-screen bg-background text-white font-sans selection:bg-primary selection:text-white">
      {/* 
        Certificate Component for Screenshot Generation 
      */}
      <SignatureModal 
            isOpen={isSignatureModalOpen} 
            onClose={() => { setIsSignatureModalOpen(false); setCertificateTarget(null); }}
            onConfirm={handleSignatureConfirm}
      />
      <Certificate 
        user={certificateTarget || currentUser}
        completionDate={new Date().toLocaleDateString('pl-PL')}
        company={companyConfig}
        signatureImage={certificateSignature}
      />
      {isGeneratingPdf && (
        <div className="fixed inset-0 bg-black/80 z-[10000] flex flex-col items-center justify-center text-white">
            <Loader2 className="w-12 h-12 animate-spin text-primary mb-4" />
            <h2 className="text-xl font-bold">Generowanie Zaświadczenia...</h2>
        </div>
      )}

      <div className="hidden md:block print:hidden">
         <Sidebar 
            currentModuleId={activeModuleId} 
            currentView={currentView}
            onSelectModule={handleSelectModule} 
            onShowResources={handleShowResources}
            progress={currentUser.progress}
            onShowDashboard={() => { setCurrentView('dashboard'); setActiveModuleId(null); }}
            userName={currentUser.name}
            onLogout={handleLogout}
         />
      </div>

      <main ref={mainContentRef} className="flex-1 h-screen overflow-y-auto print:hidden scroll-smooth">
        <div className="md:hidden p-4 border-b border-border flex justify-between items-center bg-surface sticky top-0 z-10">
            <span className="font-extrabold tracking-tighter">VIVO<span className="text-primary">CLEAN</span></span>
            <div className="flex items-center gap-4">
              <button onClick={() => { if(currentView !== 'dashboard') { setCurrentView('dashboard'); setActiveModuleId(null); } }} className="text-xs font-bold text-gray-400">
                  {currentView !== 'dashboard' ? 'WRÓĆ' : 'MENU'}
              </button>
            </div>
        </div>

        {currentView === 'dashboard' ? (
          <Dashboard 
            progress={currentUser.progress} 
            onSelectModule={handleSelectModule} 
            onPrintCertificate={() => handleInitiateCertificate(currentUser)}
            onShowResources={handleShowResources}
          />
        ) : currentView === 'resources' ? (
          <Resources />
        ) : (
          activeModule && (
            <div className="p-6 md:p-12 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
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
                            <div className="flex gap-2">
                                {activeModule.lessons.map((_, idx) => (
                                    <div key={idx} className={`w-2 h-2 rounded-full ${idx === activeLessonIndex ? 'bg-primary' : 'bg-gray-700'}`} />
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