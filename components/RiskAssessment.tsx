import React from 'react';
import { User, CompanyConfig } from '../types';

interface RiskAssessmentProps {
  user: User;
  company: CompanyConfig;
  date: string;
}

const RiskAssessment: React.FC<RiskAssessmentProps> = ({ user, company, date }) => {
  // Styles for the A4 container (off-screen)
  const printAreaStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: '-9999px',
    width: '794px', // A4
    height: '1123px', // A4
    backgroundColor: 'white',
    zIndex: -1,
    color: 'black',
    fontFamily: 'Times New Roman, serif',
    padding: '48px',
    boxSizing: 'border-box',
    display: 'block'
  };

  return (
    <div style={printAreaStyle} id="risk-print-area">
       {/* Header */}
       <div className="flex justify-between items-start mb-12">
           <div className="text-xs">
               <p className="font-bold">{company.companyName}</p>
               <p>{company.address}</p>
               <p>NIP: {company.nip}</p>
           </div>
           <div className="text-xs text-right">
               <p>{company.city}, dnia {date}</p>
           </div>
       </div>

       <div className="text-center mb-12">
           <h1 className="text-xl font-bold uppercase mb-2">OŚWIADCZENIE PRACOWNIKA</h1>
           <h2 className="text-lg uppercase">O ZAPOZNANIU SIĘ Z OCENĄ RYZYKA ZAWODOWEGO</h2>
       </div>

       {/* Worker Data */}
       <div className="mb-12">
           <p className="mb-2">Ja, niżej podpisany(a):</p>
           <div className="border-b border-black text-xl font-mono py-1 mb-1">{user.name}</div>
           <p className="text-[10px] text-gray-500 mb-6">(Imię i Nazwisko)</p>

           <p className="mb-2">Zatrudniony(a) na stanowisku:</p>
           <div className="border-b border-black text-xl font-bold uppercase py-1 mb-1">{user.jobTitle || 'PRACOWNIK SERWISU PORZĄDKOWEGO'}</div>
           <p className="text-[10px] text-gray-500">(Nazwa stanowiska pracy)</p>
       </div>

       {/* Content */}
       <div className="text-sm text-justify leading-relaxed mb-12">
           <p className="mb-6">
               Na podstawie <strong>art. 226 pkt 2 Kodeksu pracy</strong> oświadczam, że w dniu dzisiejszym zostałem(am) zapoznany(a) z:
           </p>
           <ol className="list-decimal pl-8 space-y-4 mb-8">
               <li>
                   <strong>Oceną ryzyka zawodowego</strong> występującego na moim stanowisku pracy, w tym z zagrożeniami chemicznymi (środki czystości), biologicznymi (odpady sanitarne), fizycznymi (hałas maszyn, praca na wysokości do 3m, obciążenie układu mięśniowo-szkieletowego).
               </li>
               <li>
                   <strong>Niezbędnymi środkami profilaktycznymi</strong> zmniejszającymi to ryzyko, w tym z zasadami stosowania Środków Ochrony Indywidualnej (rękawice, gogle ochronne, obuwie robocze).
               </li>
               <li>
                   <strong>Kartami Charakterystyki (SDS)</strong> stosowanych mieszanin chemicznych oraz procedurami pierwszej pomocy.
               </li>
           </ol>
           <p>
               Jednocześnie zobowiązuję się do wykonywania pracy w sposób zgodny z przepisami i zasadami BHP oraz do stosowania się do wydanych poleceń i wskazówek przełożonych w tym zakresie.
           </p>
       </div>

       {/* Signatures */}
       <div className="mt-24 flex justify-end">
           <div className="text-center w-1/2">
                <div className="h-12 flex items-end justify-center text-black tracking-widest border-b border-dotted border-black">
                     
                </div>
                <div className="text-xs text-black font-bold uppercase mt-2">
                    (Czytelny podpis pracownika)
                </div>
           </div>
       </div>

       {/* Footer */}
       <div className="absolute bottom-12 left-12 right-12 border-t border-gray-300 pt-2 text-[10px] text-center text-gray-500">
           Podstawa prawna: Art. 226 k.p. Pracodawca ocenia i dokumentuje ryzyko zawodowe związane z wykonywaną pracą oraz stosuje niezbędne środki profilaktyczne zmniejszające ryzyko, a także informuje pracowników o ryzyku zawodowym.
       </div>
    </div>
  );
};

export default RiskAssessment;