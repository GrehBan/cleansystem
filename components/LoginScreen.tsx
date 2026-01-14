import React, { useState } from 'react';
import { User } from '../types';
import { ShieldCheck, ArrowLeft, LogIn, Lock } from 'lucide-react';

interface LoginScreenProps {
  users: User[];
  onLogin: (user: User) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ users, onLogin }) => {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [selectedWorkerId, setSelectedWorkerId] = useState<string | null>(null);
  
  const [passwordInput, setPasswordInput] = useState('');
  const [error, setError] = useState('');

  const workers = users.filter(u => u.role === 'worker');
  const admin = users.find(u => u.role === 'admin');

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === 'admin123') {
       if (admin) onLogin(admin);
       else alert('Brak konta administratora w bazie.');
    } else {
       setError('Nieprawidłowe hasło');
    }
  };

  const handleWorkerLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const worker = workers.find(w => w.id === selectedWorkerId);
    if (!worker) return;

    if (worker.password && passwordInput === worker.password) {
      onLogin(worker);
    } else {
      setError('Nieprawidłowe hasło');
    }
  };

  const resetSelection = () => {
    setSelectedWorkerId(null);
    setPasswordInput('');
    setError('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-white p-4">
      <div className="w-full max-w-md bg-card border border-border rounded-2xl p-8 shadow-2xl animate-in fade-in zoom-in duration-300">
        <div className="text-center mb-8">
           <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-8 h-8 bg-primary rounded-sm"></div>
              <h1 className="text-2xl font-extrabold tracking-tighter">
                VIVO<span className="text-primary">CLEAN</span>
              </h1>
           </div>
           <p className="text-gray-400 text-sm font-mono">SYSTEM SZKOLENIOWY 2026</p>
        </div>

        {/* MODE SELECTION TABS (Hidden if specific worker selected) */}
        {!selectedWorkerId && (
          <div className="flex bg-surface rounded-lg p-1 mb-8">
             <button 
               onClick={() => { setIsAdminMode(false); resetSelection(); }}
               className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${!isAdminMode ? 'bg-primary text-white shadow' : 'text-gray-400 hover:text-white'}`}
             >
               PRACOWNIK
             </button>
             <button 
               onClick={() => { setIsAdminMode(true); resetSelection(); }}
               className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${isAdminMode ? 'bg-primary text-white shadow' : 'text-gray-400 hover:text-white'}`}
             >
               ADMINISTRATOR
             </button>
          </div>
        )}

        {/* VIEW: ADMIN LOGIN */}
        {isAdminMode && (
           <form onSubmit={handleAdminLogin} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase block mb-2">Hasło Administratora</label>
                <div className="relative">
                  <input 
                    type="password" 
                    value={passwordInput}
                    onChange={(e) => { setPasswordInput(e.target.value); setError(''); }}
                    className="w-full bg-surface border border-border rounded p-3 pl-10 text-white focus:border-primary focus:outline-none placeholder-gray-600"
                    placeholder="Wpisz hasło..."
                  />
                  <ShieldCheck size={18} className="absolute left-3 top-3.5 text-gray-500" />
                </div>
              </div>
              {error && <p className="text-danger text-xs font-bold">{error}</p>}
              <button type="submit" className="w-full bg-white text-black font-bold py-3 rounded hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                 <LogIn size={18} /> Zaloguj
              </button>
           </form>
        )}

        {/* VIEW: WORKER LIST */}
        {!isAdminMode && !selectedWorkerId && (
           <div className="space-y-3">
              <p className="text-xs font-bold text-gray-500 uppercase mb-2">Wybierz Swoje Imię</p>
              <div className="max-h-60 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                {workers.map(worker => (
                   <button
                     key={worker.id}
                     onClick={() => setSelectedWorkerId(worker.id)}
                     className="w-full flex items-center gap-3 p-3 bg-surface border border-border rounded hover:border-primary hover:bg-surface/80 transition-all text-left group"
                   >
                      <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold text-white group-hover:bg-primary transition-colors">
                         {worker.name.charAt(0)}
                      </div>
                      <span className="font-bold text-sm">{worker.name}</span>
                   </button>
                ))}
                {workers.length === 0 && (
                   <p className="text-gray-500 text-sm italic text-center py-4">Brak zarejestrowanych pracowników.</p>
                )}
              </div>
           </div>
        )}

        {/* VIEW: WORKER PASSWORD INPUT */}
        {selectedWorkerId && (
          <div className="animate-in fade-in slide-in-from-right duration-300">
             <button onClick={resetSelection} className="flex items-center gap-1 text-xs text-gray-500 hover:text-white mb-4 transition-colors">
                <ArrowLeft size={14} /> Wróć do listy
             </button>
             
             <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-white text-lg">
                   {workers.find(w => w.id === selectedWorkerId)?.name.charAt(0)}
                </div>
                <div>
                   <h3 className="font-bold text-lg">{workers.find(w => w.id === selectedWorkerId)?.name}</h3>
                   <p className="text-xs text-gray-400">Logowanie do systemu</p>
                </div>
             </div>

             <form onSubmit={handleWorkerLogin} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase block mb-2">Hasło (PIN)</label>
                  <div className="relative">
                    <input 
                      type="password" 
                      value={passwordInput}
                      onChange={(e) => { setPasswordInput(e.target.value); setError(''); }}
                      className="w-full bg-surface border border-border rounded p-3 pl-10 text-white focus:border-primary focus:outline-none placeholder-gray-600 tracking-widest font-mono"
                      placeholder="****"
                      autoFocus
                    />
                    <Lock size={18} className="absolute left-3 top-3.5 text-gray-500" />
                  </div>
                </div>
                {error && <p className="text-danger text-xs font-bold">{error}</p>}
                <button type="submit" className="w-full bg-white text-black font-bold py-3 rounded hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                   <LogIn size={18} /> Zaloguj
                </button>
             </form>
          </div>
        )}

      </div>
    </div>
  );
};

export default LoginScreen;