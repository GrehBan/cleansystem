import React from 'react';
import { MODULES } from '../data';
import { UserProgress, ModuleProgress } from '../types';
import { CheckCircle2, Circle, LogOut } from 'lucide-react';

interface SidebarProps {
  currentModuleId: string | null;
  onSelectModule: (id: string) => void;
  progress: UserProgress;
  onShowDashboard: () => void;
  userName: string;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentModuleId, onSelectModule, progress, onShowDashboard, userName, onLogout }) => {
  return (
    <div className="w-full md:w-72 bg-surface border-r border-border flex flex-col h-screen sticky top-0">
      <div className="p-6 border-b border-border cursor-pointer" onClick={onShowDashboard}>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-primary rounded-sm"></div>
          <h1 className="text-xl font-extrabold tracking-tighter text-white">
            VIVO<span className="text-primary">CLEAN</span>
          </h1>
        </div>
        <p className="text-xs text-gray-500 mt-1 font-mono">EDYCJA 2026</p>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        <div className="px-6 mb-2 text-xs font-bold text-gray-500 uppercase tracking-widest">Moduły Szkoleniowe</div>
        <nav className="space-y-1">
          {MODULES.map((module) => {
            const modProgress = progress[module.id];
            const isCompleted = modProgress?.passed;
            const isActive = currentModuleId === module.id;
            const Icon = module.icon;
            
            return (
              <button
                key={module.id}
                onClick={() => onSelectModule(module.id)}
                className={`w-full flex items-center gap-3 px-6 py-4 transition-colors text-left border-l-4 ${
                  isActive 
                    ? 'bg-card border-primary text-white' 
                    : 'border-transparent text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Icon size={20} className={isActive ? 'text-primary' : ''} />
                <div className="flex-1">
                  <div className="font-bold text-sm">{module.title}</div>
                  <div className="text-xs opacity-60 font-mono mt-1">{module.priority}</div>
                </div>
                {isCompleted ? (
                  <CheckCircle2 size={16} className="text-success" />
                ) : (
                  <Circle size={16} className="text-gray-600" />
                )}
              </button>
            );
          })}
        </nav>
      </div>

      <div className="p-6 border-t border-border bg-background/50">
        <div className="text-xs text-gray-500 mb-2 font-mono">POSTĘP CAŁKOWITY</div>
        <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden mb-4">
          <div 
            className="h-full bg-success transition-all duration-500"
            style={{ width: `${((Object.values(progress) as ModuleProgress[]).filter((p) => p.passed).length / MODULES.length) * 100}%` }}
          ></div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center font-bold text-xs text-white">
              {userName.charAt(0)}
            </div>
            <div className="overflow-hidden">
              <div className="text-sm font-bold text-white truncate w-32">{userName}</div>
              <div className="text-xs text-green-500">Zalogowany</div>
            </div>
          </div>
          <button onClick={onLogout} className="text-gray-500 hover:text-white transition-colors" title="Wyloguj">
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;