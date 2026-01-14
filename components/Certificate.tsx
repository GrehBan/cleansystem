import React from 'react';
import { MODULES } from '../data';
import { UserProgress } from '../types';

interface CertificateProps {
  userName: string;
  completionDate: string;
  progress: UserProgress;
  certificateId: string;
}

const Certificate: React.FC<CertificateProps> = ({ userName, completionDate, progress, certificateId }) => {
  return (
    // We position this absolute and off-screen initially, but ensure it has A4 dimensions for the screenshot
    <div className="absolute top-0 left-0 w-full flex justify-center pointer-events-none opacity-0 overflow-hidden z-[-1]">
      <div 
        id="certificate-print-area" 
        className="relative bg-white text-black text-center flex flex-col items-center p-16 box-border"
        style={{ width: '794px', height: '1123px' }} // Exact A4 dimensions at 96DPI
      >
        {/* Decorative Border */}
        <div className="absolute inset-4 border-[4px] border-double border-gray-800 pointer-events-none"></div>
        <div className="absolute inset-6 border-[1px] border-gray-400 pointer-events-none"></div>

        {/* Header */}
        <div className="mt-12 mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-6 h-6 bg-primary"></div>
                <span className="font-extrabold tracking-tighter text-2xl">VIVO<span className="text-primary">CLEAN</span></span>
            </div>
            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">Profesjonalny System Szkoleniowy</p>
        </div>

        <h1 className="text-5xl font-serif font-bold uppercase tracking-wider mb-2 text-gray-900">Certyfikat</h1>
        <div className="text-xl uppercase tracking-[0.3em] text-primary font-bold mb-12">Kompetencji Zawodowych</div>

        <div className="mb-8 w-full max-w-xl">
            <p className="text-lg italic text-gray-600 mb-2 font-serif">Niniejszym zaświadcza się, że:</p>
            <div className="text-4xl font-bold border-b-2 border-gray-300 pb-2 mb-2 font-serif text-gray-900">{userName}</div>
        </div>

        <p className="text-md text-gray-700 leading-relaxed mb-8 max-w-2xl">
            Ukończył(a) z wynikiem pozytywnym kompleksowy cykl szkoleń teoretycznych i praktycznych
            w zakresie profesjonalnego utrzymania czystości, zgodnie z wymogami prawnymi (Dz.U. 2024 poz. 1327)
            oraz standardami technologicznymi na rok 2026.
        </p>

        {/* Modules Grid */}
        <div className="w-full max-w-2xl mb-12">
            <div className="bg-gray-100 px-4 py-2 flex justify-between text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-gray-300">
                <span>Moduł Szkoleniowy</span>
                <span>Wynik Egzaminu</span>
            </div>
            {MODULES.map(m => {
                const score = progress[m.id]?.quizScore;
                return (
                    <div key={m.id} className="flex justify-between border-b border-gray-200 py-3 text-sm">
                        <span className="font-bold text-gray-800 text-left">{m.title}</span>
                        <span className="font-mono font-bold text-gray-900">
                            {score ? `${score}%` : '---'}
                        </span>
                    </div>
                );
            })}
        </div>

        {/* Footer / Signatures */}
        <div className="flex justify-between w-full max-w-3xl mt-auto mb-16 px-8">
            <div className="text-center">
                <p className="font-bold text-lg mb-8">{completionDate}</p>
                <div className="border-t border-gray-800 w-48 pt-2 text-xs font-bold uppercase tracking-widest">Data Wydania</div>
            </div>
            
            <div className="text-center">
                {/* Signature */}
                <div className="h-8 font-serif italic text-2xl text-primary mb-0">Maksym Reshetnyk</div>
                <div className="border-t border-gray-800 w-64 pt-2 text-xs font-bold uppercase tracking-widest">
                    Główny Instruktor BHP<br/>
                    VivoClean Poland
                </div>
            </div>
        </div>

        {/* Verification Code */}
        <div className="absolute bottom-6 left-0 w-full text-center">
             <p className="text-[10px] text-gray-400 font-mono">
                ID CERTYFIKATU: <span className="text-gray-600 font-bold">{certificateId}</span> | DOKUMENT WYGENEROWANY ELEKTRONICZNIE
             </p>
        </div>
      </div>
    </div>
  );
};

export default Certificate;