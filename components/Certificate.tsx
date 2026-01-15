import React from 'react';
import { MODULES } from '../data';
import { User, CompanyConfig } from '../types';

interface CertificateProps {
  user: User;
  completionDate: string;
  company: CompanyConfig;
  signatureImage?: string | null; // Kept in interface but ignored for print layout
}

const Certificate: React.FC<CertificateProps> = ({ user, completionDate, company }) => {
  // Styles for the A4 container to ensure it renders correctly off-screen for html2canvas
  const printAreaStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: '-9999px', // Move off-screen
    width: '794px', // A4 width at 96 DPI
    height: '1123px', // A4 height at 96 DPI
    backgroundColor: 'white',
    zIndex: -1,
    color: 'black',
    fontFamily: 'Times New Roman, serif', // More formal font for print
    padding: '48px', // ~12mm padding
    boxSizing: 'border-box',
    display: 'block'
  };

  return (
    <div style={printAreaStyle} id="certificate-print-area">
        {/* Official Header */}
        <div className="text-center mb-8 border-b-2 border-black pb-4">
            <h1 className="text-2xl font-bold uppercase tracking-wide text-black">KARTA SZKOLENIA WSTĘPNEGO</h1>
            <h2 className="text-lg font-bold uppercase mt-2 text-black">W DZIEDZINIE BEZPIECZEŃSTWA I HIGIENY PRACY</h2>
        </div>

        {/* 1. Dane Pracownika */}
        <div className="mb-8">
            <table className="w-full text-base border-collapse">
                <tbody>
                    <tr>
                        <td className="py-2 w-[35%] font-bold align-bottom text-black">1. Imię i Nazwisko:</td>
                        <td className="py-2 border-b border-black font-mono text-xl text-black pl-2 align-bottom">
                            {user.name}
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2 w-[35%] font-bold align-bottom text-black">2. PESEL:</td>
                        <td className="py-2 border-b border-black font-mono text-xl text-black pl-2 align-bottom">
                            {user.pesel || '---------------------'}
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2 w-[35%] font-bold align-bottom text-black">3. Dział / Wydział:</td>
                        <td className="py-2 border-b border-black text-black pl-2 align-bottom">
                            Utrzymanie Czystości / Serwis Sprzątający
                        </td>
                    </tr>
                     <tr>
                        <td className="py-2 w-[35%] font-bold align-bottom text-black">4. Stanowisko pracy:</td>
                        <td className="py-2 border-b border-black font-bold text-lg uppercase text-black pl-2 align-bottom">
                            {user.jobTitle || 'PRACOWNIK SERWISU PORZĄDKOWEGO'}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        {/* 2. Instruktaż Ogólny */}
        <div className="mb-6 border-2 border-black p-4">
            <h3 className="font-bold text-center uppercase bg-gray-200 border-b-2 border-black p-2 mb-4 text-base text-black">
                I. Instruktaż Ogólny
            </h3>
            <p className="text-sm text-justify mb-2 leading-relaxed text-black">
                Odbyłem(am) szkolenie wstępne ogólne w dniu <span className="font-mono font-bold">{completionDate}</span>.
                Szkolenie obejmowało przepisy Kodeksu pracy, regulamin pracy, zasady bezpieczeństwa i higieny pracy obowiązujące w zakładzie, zasady pierwszej pomocy oraz ochrony przeciwpożarowej.
            </p>
            <div className="flex justify-between items-end mt-12 px-4">
                 <div className="text-center w-5/12">
                    <div className="h-12 flex items-end justify-center text-black tracking-widest">
                        ..................................................
                    </div>
                    <div className="text-xs text-black font-bold uppercase">
                        (podpis pracownika)
                    </div>
                 </div>
                 <div className="text-center w-5/12">
                    <div className="h-12 flex items-end justify-center text-black tracking-widest">
                         ..................................................
                    </div>
                    <div className="text-xs text-black font-bold uppercase">
                        (podpis instruktora / inspektora BHP)
                    </div>
                 </div>
            </div>
        </div>

        {/* 3. Instruktaż Stanowiskowy */}
        <div className="flex-1 border-2 border-black p-4 mb-4 flex flex-col min-h-[400px]">
             <h3 className="font-bold text-center uppercase bg-gray-200 border-b-2 border-black p-2 mb-4 text-base text-black">
                II. Instruktaż Stanowiskowy
             </h3>
             <p className="text-sm text-justify mb-4 leading-relaxed text-black">
                Odbyłem(am) instruktaż stanowiskowy na stanowisku wymienionym w pkt 4, zapoznałem(am) się z:
             </p>
             <ul className="list-disc pl-8 text-sm space-y-1 mb-4 text-black">
                <li>Oceną ryzyka zawodowego na stanowisku pracy.</li>
                <li>Kartami charakterystyki substancji chemicznych (SDS) stosowanych w procesie.</li>
                <li>Instrukcjami obsługi maszyn i urządzeń (Karcher, systemy myjące).</li>
                <li>Zasadami ergonomii oraz stosowania środków ochrony indywidualnej (PPE).</li>
             </ul>

             <div className="border border-gray-400 p-3 mb-6 bg-gray-50">
                 <strong className="block text-xs mb-2 underline text-black">ZAKRES TEMATYCZNY (MODUŁY):</strong>
                 <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-[10px] list-decimal pl-4 text-black">
                    {MODULES.map(m => (
                        <li key={m.id}>
                            {m.title} <span className="font-bold">({user.progress[m.id]?.passed ? 'ZALICZONO' : 'BRAK'})</span>
                        </li>
                    ))}
                 </ul>
             </div>

             <div className="mt-auto">
                 <p className="text-sm font-bold mb-8 text-black leading-snug">
                    Oświadczam, że zostałem(am) poinformowany(a) o ryzyku zawodowym, posiadam wymagane kwalifikacje i umiejętności do wykonywania pracy oraz zobowiązuję się do przestrzegania przepisów i zasad BHP.
                 </p>

                 <div className="flex justify-between items-end gap-8 px-4">
                     {/* Signature Employee */}
                     <div className="text-center w-5/12 relative">
                        <div className="h-12 flex items-end justify-center mb-1 text-black tracking-widest">
                             ..................................................
                        </div>
                        <div className="text-xs text-black font-bold uppercase">
                            (Data i podpis pracownika)
                        </div>
                     </div>

                     {/* Instructor */}
                     <div className="text-center w-5/12">
                        <div className="h-12 flex items-end justify-center mb-1 text-black tracking-widest">
                             ..................................................
                        </div>
                        <div className="text-xs text-black font-bold uppercase">
                            (Podpis Kierownika / Instruktora)
                        </div>
                     </div>
                 </div>
                 
                 {/* Admission */}
                 <div className="mt-10 border-t-2 border-black pt-4 text-center">
                    <p className="text-sm font-bold text-black">
                        Dopuszczam pracownika do pracy na ww. stanowisku.
                    </p>
                    <div className="text-xs mt-6 text-black flex justify-center gap-2">
                        <span>Data: {completionDate}</span>
                        <span>.......................................................................................</span>
                    </div>
                    <div className="text-[10px] mt-1 text-black">(Podpis Kierownika Komórki Organizacyjnej)</div>
                 </div>
             </div>
        </div>

        {/* Footer info */}
        <div className="text-[8px] text-gray-500 text-center mt-2">
             Wersja do druku (Akta Osobowe Część B). System VIVO CLEAN 2026.
        </div>
    </div>
  );
};

export default Certificate;