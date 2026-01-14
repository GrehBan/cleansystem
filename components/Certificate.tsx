import React from 'react';
import { MODULES } from '../data';

interface CertificateProps {
  userName: string;
  completionDate: string;
}

const Certificate: React.FC<CertificateProps> = ({ userName, completionDate }) => {
  return (
    <div id="certificate-print-area" className="hidden print:flex flex-col items-center justify-center min-h-screen bg-white text-black p-12 text-center border-[20px] border-double border-gray-800">
      
      <div className="mb-12">
        <h1 className="text-5xl font-extrabold uppercase tracking-[0.2em] mb-4 text-black">Certyfikat</h1>
        <div className="text-xl uppercase tracking-widest text-gray-600">Ukończenia Szkolenia Zawodowego</div>
      </div>

      <div className="mb-12 w-full max-w-2xl">
        <p className="text-lg italic text-gray-600 mb-4">Niniejszym zaświadcza się, że</p>
        <h2 className="text-4xl font-serif font-bold border-b-2 border-black pb-2 mb-8">{userName}</h2>
        <p className="text-lg text-gray-800 leading-relaxed">
          Ukończył(a) z wynikiem pozytywnym cykl szkoleń wewnętrznych w zakresie:
        </p>
      </div>

      <div className="grid grid-cols-1 w-full max-w-3xl gap-4 mb-16 text-left">
        {MODULES.map(m => (
            <div key={m.id} className="flex justify-between border-b border-gray-300 py-2">
                <span className="font-bold text-lg">{m.title}</span>
                <span className="text-sm font-mono text-gray-600">ZALICZONE</span>
            </div>
        ))}
      </div>

      <div className="mb-8">
        <p className="text-sm text-gray-600">Zgodnie z wymogami Dz.U. 2024 poz. 1327 oraz standardami wewnątrzzakładowymi.</p>
      </div>

      <div className="flex justify-between w-full max-w-4xl mt-12 px-12">
        <div className="text-center">
            <p className="font-bold mb-12">{completionDate}</p>
            <div className="border-t border-black w-48 pt-2 text-sm font-bold">Data</div>
        </div>
        <div className="text-center">
            <div className="h-12"></div> {/* Space for signature */}
            <div className="border-t border-black w-64 pt-2 text-sm font-bold">Instruktor / Kierownik Regionalny</div>
        </div>
      </div>
      
      <div className="mt-20 text-[10px] text-gray-400 font-mono">
        ID CERTYFIKATU: {Math.random().toString(36).substr(2, 9).toUpperCase()}-{new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Certificate;