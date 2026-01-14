import React from 'react';
import { MODULES } from '../data';
import { UserProgress, ModuleProgress } from '../types';
import { PlayCircle, CheckCircle, FileText } from 'lucide-react';

interface DashboardProps {
  progress: UserProgress;
  onSelectModule: (id: string) => void;
  onPrintCertificate: () => void;
  onShowResources?: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ progress, onSelectModule, onPrintCertificate, onShowResources }) => {
  const completedCount = (Object.values(progress) as ModuleProgress[]).filter((p) => p.passed).length;
  const totalCount = MODULES.length;
  const isAllCompleted = completedCount === totalCount;

  return (
    <div className="p-6 md:p-12 max-w-7xl mx-auto animate-in fade-in duration-500">
      <div className="mb-12">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
          Witaj w systemie szkoleniowym.
        </h1>
        <p className="text-gray-400 max-w-2xl text-lg">
          OBIEKT: BIELSKO-BIAŁA / ROK: 2026 / WYMAGANIA: DZ.U. 2024 POZ. 1327
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {MODULES.map((module) => {
          const modProgress = progress[module.id];
          const isCompleted = modProgress?.passed;
          const Icon = module.icon;
          
          return (
            <div 
              key={module.id} 
              className={`relative group bg-card border border-border rounded-xl p-8 transition-all duration-300 hover:border-gray-500 flex flex-col justify-between
                ${isCompleted ? 'border-success/30 bg-success/5' : ''}
              `}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                   <div className={`p-3 rounded-lg ${isCompleted ? 'bg-success text-white' : 'bg-surface text-gray-300'}`}>
                     <Icon size={24} />
                   </div>
                   <span className={`text-xs font-mono font-bold px-2 py-1 rounded ${
                       module.priorityColor.includes('primary') ? 'text-primary bg-primary/10' : 'text-secondary bg-secondary/10'
                   }`}>
                     {module.priority}
                   </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{module.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  {module.description}
                </p>
              </div>

              <div className="pt-6 border-t border-border/50">
                 {isCompleted ? (
                   <div className="flex items-center gap-2 text-success font-bold">
                     <CheckCircle size={20} />
                     <span>UKOŃCZONE ({modProgress.quizScore}%)</span>
                   </div>
                 ) : (
                   <button 
                     onClick={() => onSelectModule(module.id)}
                     className="w-full flex items-center justify-center gap-2 bg-white text-black font-bold py-3 px-4 rounded hover:bg-gray-200 transition-colors"
                   >
                     <PlayCircle size={18} />
                     ROZPOCZNIJ
                   </button>
                 )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Action Buttons Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Resources Card */}
          <div className="p-8 rounded-xl border bg-surface border-border flex items-center justify-between gap-6 hover:border-primary/50 transition-colors group cursor-pointer" onClick={onShowResources}>
              <div>
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                      <FileText size={20} className="text-primary" />
                      Baza Wiedzy & SDS
                  </h3>
                  <p className="text-gray-400 text-sm">
                      Karty charakterystyki, instrukcje maszyn, wykaz chemii Tenzi i sprzętu.
                  </p>
              </div>
              <div className="bg-primary/10 p-3 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <PlayCircle size={24} />
              </div>
          </div>

          {/* Certificate Card */}
          <div className={`p-8 rounded-xl border ${isAllCompleted ? 'bg-success/10 border-success' : 'bg-surface border-border'}`}>
             <div className="flex flex-col md:flex-row items-center justify-between gap-6 h-full">
                <div>
                   <h3 className={`text-xl font-bold mb-2 ${isAllCompleted ? 'text-success' : 'text-white'}`}>
                      {isAllCompleted ? 'Certyfikacja Dostępna' : 'Status Certyfikacji'}
                   </h3>
                   <p className="text-gray-400 text-sm">
                      {isAllCompleted 
                        ? 'Wszystkie moduły zaliczone. Pobierz certyfikat.'
                        : `Ukończono ${completedCount} z ${totalCount} modułów.`
                      }
                   </p>
                </div>
                
                <button 
                   disabled={!isAllCompleted}
                   onClick={onPrintCertificate}
                   className={`px-6 py-3 rounded font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
                      isAllCompleted 
                      ? 'bg-success text-white hover:bg-green-600 shadow-lg shadow-green-500/20' 
                      : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                   }`}
                >
                   POBIERZ
                </button>
             </div>
          </div>
      </div>
    </div>
  );
};

export default Dashboard;