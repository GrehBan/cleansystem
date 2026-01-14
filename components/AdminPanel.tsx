import React, { useState } from 'react';
import { User } from '../types';
import { MODULES } from '../data';
import { Users, UserPlus, FileText, Trash2, LogOut, KeyRound } from 'lucide-react';

interface AdminPanelProps {
  users: User[];
  onRegisterUser: (name: string) => void;
  onDeleteUser: (id: string) => void;
  onLogout: () => void;
  onGenerateCertificate: (user: User) => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ users, onRegisterUser, onDeleteUser, onLogout, onGenerateCertificate }) => {
  const [newUserName, setNewUserName] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (newUserName.trim()) {
      onRegisterUser(newUserName.trim());
      setNewUserName('');
    }
  };

  const workers = users.filter(u => u.role === 'worker');

  const getProgressPercentage = (user: User) => {
    const passedCount = Object.values(user.progress).filter(p => p.passed).length;
    return Math.round((passedCount / MODULES.length) * 100);
  };

  return (
    <div className="min-h-screen bg-background text-white p-6 md:p-12 animate-in fade-in duration-500">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
             <h1 className="text-3xl font-extrabold mb-1">Panel Administratora</h1>
             <p className="text-gray-400 font-mono text-sm">ZARZĄDZANIE KADRAMI VIVOCLEAN</p>
          </div>
          <button onClick={onLogout} className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-colors">
             <LogOut size={16} /> WYLOGUJ
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Register Column */}
          <div className="bg-card border border-border rounded-xl p-6 h-fit">
             <div className="flex items-center gap-2 mb-6 text-primary">
                <UserPlus size={24} />
                <h2 className="text-xl font-bold text-white">Rejestracja</h2>
             </div>
             <form onSubmit={handleRegister} className="space-y-4">
                <div>
                   <label className="text-xs font-bold text-gray-500 uppercase block mb-2">Imię i Nazwisko</label>
                   <input 
                     type="text" 
                     value={newUserName}
                     onChange={(e) => setNewUserName(e.target.value)}
                     className="w-full bg-surface border border-border rounded p-3 text-white focus:border-primary focus:outline-none placeholder-gray-600"
                     placeholder="np. Anna Nowak"
                   />
                </div>
                <button 
                  type="submit" 
                  disabled={!newUserName.trim()}
                  className="w-full bg-white text-black font-bold py-3 rounded hover:bg-gray-200 transition-colors disabled:opacity-50"
                >
                  Dodaj Pracownika
                </button>
             </form>
          </div>

          {/* Workers List Column */}
          <div className="lg:col-span-2 bg-card border border-border rounded-xl p-6">
             <div className="flex items-center gap-2 mb-6 text-secondary">
                <Users size={24} />
                <h2 className="text-xl font-bold text-white">Lista Pracowników ({workers.length})</h2>
             </div>

             <div className="space-y-4">
                {workers.length === 0 ? (
                  <p className="text-gray-500 italic text-center py-8">Brak zarejestrowanych pracowników.</p>
                ) : (
                  workers.map(worker => {
                     const progress = getProgressPercentage(worker);
                     const isCompleted = progress === 100;
                     
                     return (
                        <div key={worker.id} className="bg-surface border border-border rounded-lg p-4 flex flex-col md:flex-row items-center justify-between gap-4">
                           <div className="flex items-center gap-4 w-full md:w-auto">
                              <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center font-bold text-white">
                                 {worker.name.charAt(0)}
                              </div>
                              <div>
                                 <div className="font-bold text-white">{worker.name}</div>
                                 <div className="flex items-center gap-2 text-xs font-mono text-gray-400 mt-1">
                                    <KeyRound size={12} className="text-primary" />
                                    <span>HASŁO: <span className="text-white font-bold">{worker.password || '----'}</span></span>
                                 </div>
                              </div>
                           </div>

                           <div className="flex-1 w-full md:w-auto px-4">
                              <div className="flex justify-between text-xs font-bold text-gray-500 mb-1">
                                 <span>POSTĘP</span>
                                 <span className={isCompleted ? 'text-success' : 'text-white'}>{progress}%</span>
                              </div>
                              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                                 <div className="h-full bg-primary transition-all duration-500" style={{ width: `${progress}%` }}></div>
                              </div>
                           </div>

                           <div className="flex gap-2 w-full md:w-auto">
                              {isCompleted && (
                                 <button 
                                   type="button"
                                   onClick={() => onGenerateCertificate(worker)}
                                   className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-success/10 text-success border border-success/30 hover:bg-success hover:text-white px-3 py-2 rounded text-xs font-bold transition-all"
                                   title="Generuj Certyfikat"
                                 >
                                    <FileText size={16} />
                                 </button>
                              )}
                              <button 
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onDeleteUser(worker.id);
                                }}
                                className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-red-900/10 text-danger border border-danger/30 hover:bg-danger hover:text-white px-3 py-2 rounded text-xs font-bold transition-all"
                                title="Usuń Pracownika"
                              >
                                 <Trash2 size={16} />
                              </button>
                           </div>
                        </div>
                     );
                  })
                )}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;