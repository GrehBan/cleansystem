import React from 'react';
import { MODULES } from '../data';
import { User, CompanyConfig } from '../types';

interface CertificateProps {
  user: User;
  completionDate: string;
  company: CompanyConfig;
  signatureImage?: string | null;
}

const Certificate: React.FC<CertificateProps> = ({ user, completionDate, company, signatureImage }) => {
  return (
    // We position this absolute and off-screen initially, but ensure it has A4 dimensions for the screenshot
    <div className="absolute top-0 left-0 w-full flex justify-center pointer-events-none opacity-0 overflow-hidden z-[-1]">
      <div 
        id="certificate-print-area" 
        className="relative bg-white text-black flex flex-col p-16 box-border font-serif"
        style={{ width: '794px', height: '1123px' }} // Exact A4 dimensions at 96DPI
      >
        {/* Header - Organizator */}
        <div className="flex justify-between items-start mb-8 text-xs border-b border-gray-300 pb-4">
            <div className="w-1/2">
                <strong>Organizator szkolenia (Pracodawca):</strong><br/>
                {company.companyName}<br/>
                {company.address}<br/>
                NIP: {company.nip}
            </div>
            <div className="w-1/2 text-right">
                <span className="text-gray-500">Miejsce, data:</span><br/>
                {company.city}, {completionDate}
            </div>
        </div>

        {/* Title */}
        <div className="text-center mt-8 mb-12">
            <h1 className="text-2xl font-bold uppercase tracking-widest mb-4">ZAŚWIADCZENIE</h1>
            <h2 className="text-lg font-bold">o ukończeniu instruktażu stanowiskowego BHP oraz szkolenia kompetencyjnego</h2>
        </div>

        {/* Content */}
        <div className="mb-8 text-sm leading-8 text-justify">
            <p>
                Zaświadcza się, że Pan/Pani: <strong className="text-lg px-2">{user.name}</strong>
            </p>
            <p>
                Urodzony/a: ......................................., PESEL: <strong>{user.pesel || '________________'}</strong>
            </p>
            <p className="mt-6">
                ukończył(a) szkolenie w formie instruktażu stanowiskowego / samokształcenia kierowanego
                w zakresie: <strong>Technologii utrzymania czystości, Bezpieczeństwa pracy z czynnikami chemicznymi oraz Ergonomii pracy.</strong>
            </p>
        </div>

        <div className="mb-4">
            <strong className="block mb-2 border-b border-gray-800 w-full">Program szkolenia obejmował tematykę:</strong>
            <ul className="list-disc pl-6 text-xs space-y-1">
                {MODULES.map(m => (
                    <li key={m.id}>
                        {m.title} - <span className="font-bold">{user.progress[m.id]?.quizScore || 0}%</span> (Zaliczono)
                    </li>
                ))}
            </ul>
        </div>

        <div className="mt-8 text-xs text-gray-600 mb-12">
            <p>Celem szkolenia było uzyskanie przez pracownika wiedzy i umiejętności niezbędnych do wykonywania pracy zgodnie z przepisami oraz zasadami bezpieczeństwa i higieny pracy, zapoznanie z zagrożeniami występującymi na konkretnym stanowisku pracy oraz sposobami ochrony przed tymi zagrożeniami.</p>
        </div>

        {/* Footer / Signatures - 3 Columns */}
        <div className="flex justify-between items-end w-full mt-auto mb-16 px-4 gap-8">
            
            {/* Employee Signature */}
            <div className="text-center w-1/3">
                <div className="h-20 flex items-end justify-center mb-2">
                    {signatureImage ? (
                         <img src={signatureImage} alt="Podpis" className="max-h-20 max-w-full object-contain" />
                    ) : (
                         <span className="text-gray-300 text-xs italic">Brak podpisu</span>
                    )}
                </div>
                <div className="border-t border-gray-800 pt-2 text-[10px] font-bold uppercase tracking-widest">
                    Podpis szkolonego pracownika
                </div>
            </div>

            {/* Instructor Signature (Static) */}
            <div className="text-center w-1/3">
                <div className="h-20 flex items-end justify-center mb-0 pb-2">
                    <span className="font-script text-xl italic">{company.representative}</span>
                </div>
                <div className="border-t border-gray-800 pt-2 text-[10px] font-bold uppercase tracking-widest">
                    Osoba prowadząca instruktaż<br/>
                    (Przełożony / Instruktor)
                </div>
            </div>

             {/* Stamp Space */}
             <div className="text-center w-1/3">
                <div className="h-20 flex items-center justify-center mb-2 border-2 border-dashed border-gray-200 rounded-full text-gray-200 font-bold rotate-12">
                    PIECZĘĆ
                </div>
                <div className="border-t border-gray-800 pt-2 text-[10px] font-bold uppercase tracking-widest">
                    Pieczęć Pracodawcy
                </div>
            </div>
        </div>

        {/* Verification Code */}
        <div className="absolute bottom-6 left-16 right-16 text-center border-t border-gray-300 pt-2">
             <p className="text-[9px] text-gray-500 font-mono">
                Podstawa prawna: Rozporządzenie Ministra Gospodarki i Pracy z dnia 27 lipca 2004 r. w sprawie szkolenia w dziedzinie bezpieczeństwa i higieny pracy (Dz.U. Nr 180, poz. 1860, z późn. zm.).
             </p>
             <p className="text-[9px] text-gray-400 font-mono mt-1">
                ID CERTYFIKATU: <span className="font-bold">{user.certificateId}</span>
             </p>
        </div>
      </div>
    </div>
  );
};

export default Certificate;