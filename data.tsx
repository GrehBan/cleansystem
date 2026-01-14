import React from 'react';
import { ShieldAlert, FlaskConical, Wrench, Zap, Layers, Users, Recycle, FileText } from 'lucide-react';
import { Module } from './types';

export const MODULES: Module[] = [
  {
    id: 'bhp',
    title: 'BHP i Pierwsza Pomoc (2026)',
    description: 'Kompleksowe wymogi prawne: Kodeks Pracy 2026, praca na wysokości, apteczka DIN 13157, środki ochrony indywidualnej (SUI) i dokumentacja RODO.',
    icon: ShieldAlert,
    priority: 'KRYTYCZNE',
    priorityColor: 'text-primary',
    passingScore: 100,
    lessons: [
      {
        title: 'Lekcja 1: Podstawy Prawne i Oznakowanie (Dz.U. 2024 poz. 1327)',
        content: (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary font-mono border-b border-border pb-2">01 // IMPERATYW PRAWNY 2026</h3>
            
            <p className="text-gray-300 leading-relaxed">
              W 2026 roku szkolenie BHP nie jest formalnością, lecz fundamentem legalności działania przedsiębiorstwa sprzątającego. Zgodnie ze znowelizowanym Art. 237³ Kodeksu Pracy, pracodawca ponosi pełną odpowiedzialność karną i finansową (kary PIP od 1 000 do 30 000 PLN) za dopuszczenie pracownika do pracy bez ważnego certyfikatu.
            </p>

            <div className="bg-surface p-6 rounded border-l-4 border-primary shadow-lg">
               <strong className="block text-white mb-4 text-lg border-b border-gray-700 pb-2">Matryca Szkoleń Obowiązkowych</strong>
               <div className="space-y-4">
                 <div>
                    <span className="text-secondary font-bold uppercase text-xs tracking-wider">Stanowiska Robotnicze (Sprzątanie)</span>
                    <p className="text-sm text-gray-300 mt-1">
                      Szkolenie okresowe wymagane co <strong className="text-white">3 lata</strong>. Pierwsze szkolenie okresowe musi odbyć się w ciągu 12 miesięcy od daty zatrudnienia.
                    </p>
                 </div>
                 <div>
                    <span className="text-danger font-bold uppercase text-xs tracking-wider">Prace Szczególnie Niebezpieczne</span>
                    <p className="text-sm text-gray-300 mt-1">
                      Wykonywanie prac na wysokości powyżej 1 metra (np. mycie okien z drabiny) obliguje do szkolenia okresowego <strong className="text-white">co 1 rok</strong>.
                    </p>
                 </div>
               </div>
            </div>

            <div className="bg-yellow-900/20 p-5 rounded border border-yellow-600 mt-4">
               <h4 className="font-bold text-yellow-500 mb-2 flex items-center gap-2">Oznakowanie Strefy Pracy</h4>
               <p className="text-sm text-gray-300 mb-3">
                 Zgodnie z przepisami, każda mokra powierzchnia w miejscu publicznym musi być oznaczona.
               </p>
               <ul className="list-disc pl-5 text-xs text-gray-400 space-y-1">
                 <li><strong>Potykacz "UWAGA ŚLISKA PODŁOGA":</strong> Żółty znak ostrzegawczy jest prawnym wymogiem. Jego brak w momencie wypadku (poślizgnięcia się osoby postronnej) skutkuje automatyczną przegraną w sądzie i wypłatą odszkodowania z OC firmy.</li>
               </ul>
            </div>
          </div>
        )
      },
      {
        title: 'Lekcja 2: Praca na Wysokości i Badania Lekarskie',
        content: (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-danger font-mono border-b border-border pb-2">02 // PRACE WYSOKOŚCIOWE</h3>
            
            <div className="bg-danger/10 p-5 border border-danger rounded shadow-md">
              <strong className="text-danger block text-lg mb-2">Definicja Prawna (§105 Rozp. BHP)</strong>
              <p className="text-gray-300 leading-relaxed">
                Za pracę na wysokości uznaje się każdą czynność wykonywaną na powierzchni znajdującej się co najmniej <strong>1,0 metr</strong> nad poziomem podłogi lub ziemi. 
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
               <div className="bg-card p-4 rounded border border-border">
                 <h4 className="font-bold text-white mb-3 text-lg border-b border-gray-700 pb-2">Badania Wysokościowe</h4>
                 <ul className="space-y-2 text-sm text-gray-300">
                    <li><span className="text-secondary font-bold">Do 3 metrów:</span> Badanie ogólne + orzeczenie o braku przeciwwskazań (częstotliwość co 3-5 lat).</li>
                    <li><span className="text-danger font-bold">Powyżej 3 metrów:</span> Pełne badania specjalistyczne: okulista, neurolog, laryngolog (błędnik). Częstotliwość co 2-3 lata.</li>
                 </ul>
               </div>
               
               <div className="bg-card p-4 rounded border border-border">
                 <h4 className="font-bold text-white mb-3 text-lg border-b border-gray-700 pb-2">Hierarchia Zabezpieczeń</h4>
                 <p className="text-sm text-gray-400 mb-2">
                     Najlepszym sposobem na uniknięcie ryzyka upadku jest... <strong>nie odrywanie stóp od ziemi</strong>.
                 </p>
                 <div className="bg-green-900/20 p-2 rounded border border-green-600/50 text-xs text-green-200">
                     <strong>ROZWIĄZANIE SYSTEMOWE:</strong> Używanie kija teleskopowego Moerman (3m-4m) pozwala myć okna na I piętrze stojąc na ziemi. Eliminuje to konieczność pracy na drabinie i badań wysokościowych dla tej czynności.
                 </div>
               </div>
            </div>
          </div>
        )
      },
      {
        title: 'Lekcja 3: Apteczka Zakładowa (Standard DIN 13157)',
        content: (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-success font-mono border-b border-border pb-2">03 // RATOWNICTWO CHEMICZNE</h3>
            <p className="text-gray-300 leading-relaxed">
              W profesjonalnym sprzątaniu (ryzyko chemiczne) apteczka musi spełniać normę <strong>DIN 13157</strong>. Kluczowym dodatkiem w "Ultimate Basket" jest dedykowana płuczka do oczu.
            </p>

            <div className="bg-surface p-6 rounded border border-gray-700 shadow-xl">
               <div className="flex justify-between items-center mb-4 border-b border-gray-600 pb-2">
                  <h4 className="text-lg font-bold text-white">Zawartość Dedykowana</h4>
                  <span className="text-xs font-mono text-gray-500">ZGODNOŚĆ: DIN 13157 + Płuczka</span>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm text-gray-400">
                  <div className="flex items-center gap-3 p-2 bg-card rounded border border-blue-500/30">
                     <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                     <div>
                        <strong className="text-white block">Płuczka do Oczu (500ml)</strong>
                        <span className="text-xs">Neutralizator kwasów/zasad. Czas użycia: natychmiast po zachlapaniu oka chemią (np. WC Sani).</span>
                     </div>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-card rounded">
                    <div className="w-3 h-3 bg-danger rounded-full"></div>
                    <div>
                        <strong className="text-white block">Koc Termiczny (NRC)</strong>
                        <span className="text-xs">Ochrona przed wstrząsem.</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-card rounded">
                     <div className="w-3 h-3 bg-success rounded-full"></div>
                     <span>Zestaw plastrów wodoodpornych</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-card rounded">
                     <div className="w-3 h-3 bg-success rounded-full"></div>
                     <span>Rękawiczki nitrylowe (min. 4 pary)</span>
                  </div>
               </div>
            </div>
          </div>
        )
      },
      {
        title: 'Lekcja 4: Środki Ochrony Indywidualnej (SUI)',
        content: (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary font-mono border-b border-border pb-2">04 // PPE: OSTATNIA LINIA OBRONY</h3>
            <div className="space-y-6 mt-4">
              <div className="bg-card p-5 rounded border border-border">
                <h4 className="font-bold text-white mb-3 text-lg text-secondary">Ochrona Rąk (EN 374)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-surface p-3 rounded">
                        <strong className="text-blue-400 block mb-1">Nitryl Czarny/Niebieski (Krótkie)</strong>
                        <p className="text-xs text-gray-400">Podstawowa ochrona higieniczna. Odporne na wirusy i słabą chemię (TopEfekt, Top Glass).</p>
                    </div>
                    <div className="bg-surface p-3 rounded border border-secondary/30">
                        <strong className="text-purple-400 block mb-1">Rękawice Chemoodporne (Długie)</strong>
                        <p className="text-xs text-gray-400"><strong>Wymagane</strong> przy pracy z koncentratami pH 1 (WC Sani) i pH 14 (Gran Smog). Długi mankiet chroni przedramię przed zalaniem.</p>
                    </div>
                </div>
              </div>

              <div className="bg-card p-5 rounded border border-border">
                <h4 className="font-bold text-white mb-3 text-lg text-secondary">Ochrona Oczu i Twarzy (EN 166)</h4>
                <ul className="list-disc pl-5 text-sm text-gray-400 space-y-2">
                  <li>
                    <strong>Gogle Ochronne (Zamknięte):</strong> Chronią przed mgłą chemiczną przy spryskiwaniu powierzchni pionowych (ściany, okna) i przelewaniu koncentratów.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )
      }
    ],
    quiz: [
      { id: 1, question: "Co ile lat należy odnawiać szkolenie BHP na stanowisku robotniczym?", options: ["Co rok", "Co 3 lata", "Co 5 lat", "Tylko raz"], correctAnswer: 1 },
      { id: 2, question: "Jaki sprzęt pozwala uniknąć pracy na drabinie przy myciu okien na wysokości 3m?", options: ["Podest roboczy", "Kij teleskopowy (3-4m)", "Stołek", "Krzesło obrotowe"], correctAnswer: 1 },
      { id: 3, question: "Co należy zrobić natychmiast po zachlapaniu oka chemią?", options: ["Trzeć ręką", "Użyć płuczki do oczu z apteczki", "Zamknąć oko i czekać", "Iść do domu"], correctAnswer: 1 },
      { id: 4, question: "Do czego służą długie rękawice chemoodporne?", options: ["Do mycia naczyń", "Do pracy z silnymi kwasami i zasadami (ochrona przedramienia)", "Do odkurzania", "Dla ozdoby"], correctAnswer: 1 },
      { id: 5, question: "Gdzie należy postawić znak 'Uwaga Śliska Podłoga'?", options: ["W magazynie", "W miejscu mycia podłogi na mokro", "Na zewnątrz budynku", "Nigdzie"], correctAnswer: 1 },
      { id: 6, question: "Jaka kara grozi za brak ważnego szkolenia BHP?", options: ["Pouczenie", "Brak kary", "Grzywna od 1 000 do 30 000 PLN", "Nagana"], correctAnswer: 2 }
    ]
  },
  {
    id: 'chem',
    title: 'Chemia Profesjonalna Tenzi & Dozowanie',
    description: 'Niezbędnik Profesjonalisty Tenzi. Precyzyjne dozowanie (menzurka), skala pH, karta charakterystyki i zastosowanie produktów.',
    icon: FlaskConical,
    priority: 'TECHNICZNE',
    priorityColor: 'text-secondary',
    passingScore: 90,
    lessons: [
      {
        title: 'Lekcja 1: Teoria Mycia i Skala pH',
        content: (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-secondary font-mono border-b border-border pb-2">01 // FUNDAMENTY WIEDZY</h3>
            <p className="text-gray-300">
              Profesjonalne sprzątanie opiera się na 4 filarach (Koło Sinnera) i chemicznym odczynie pH.
            </p>
            <div className="bg-card p-5 rounded border border-gray-600 mt-4">
                <strong className="text-white block mb-3 text-lg">Skala pH (0-14)</strong>
                <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                        <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold w-16 text-center">pH 1</span>
                        <span className="text-red-400 font-bold">WC Sani:</span>
                        <span className="text-gray-400">KWAS. Usuwa kamień, rdzę, osady z toalet.</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-bold w-16 text-center">pH 7</span>
                        <span className="text-green-400 font-bold">TopEfekt / Top Glass:</span>
                        <span className="text-gray-400">NEUTRALNE. Codzienne mycie podłóg i szyb.</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold w-16 text-center">pH 9</span>
                        <span className="text-orange-400 font-bold">Textil Wash:</span>
                        <span className="text-gray-400">ENZYMY. Pranie dywanów.</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs font-bold w-16 text-center">pH 14</span>
                        <span className="text-purple-400 font-bold">Gran Smog:</span>
                        <span className="text-gray-400">ZASADA. Usuwa tłuszcz, przypalenia (kuchnia).</span>
                    </div>
                </div>
            </div>
          </div>
        )
      },
      {
        title: 'Lekcja 2: Produkty Specjalistyczne Tenzi',
        content: (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-secondary font-mono border-b border-border pb-2">02 // SPECJAŁY "KORZINY"</h3>
            <div className="space-y-4 mt-4">
              {/* Tenzi Stal Nierdzewna */}
              <div className="border border-gray-500 rounded bg-gray-900/5 overflow-hidden">
                <div className="bg-gray-700/50 p-3 border-b border-gray-500 flex justify-between items-center">
                   <strong className="text-gray-200 text-lg">Tenzi Stal Nierdzewna</strong>
                   <span className="bg-gray-600 text-white text-xs px-2 py-1 rounded font-bold">OLEJOWANIE</span>
                </div>
                <div className="p-4">
                    <p className="text-sm text-gray-300 mb-2"><strong>Zastosowanie:</strong> Konserwacja stali matowej (windy, okapy).</p>
                    <ul className="list-disc pl-5 text-xs text-gray-400 space-y-1">
                        <li>Nie czyści, lecz <strong>konserwuje</strong>.</li>
                        <li>Nadaje jednolity połysk, zapobiega "palcowaniu".</li>
                        <li>Nigdy nie stosuj na podłogach (poślizg!).</li>
                    </ul>
                </div>
              </div>

              {/* Tenzi Odpieniacz */}
              <div className="border border-blue-400 rounded bg-blue-900/5 overflow-hidden">
                <div className="bg-blue-600/20 p-3 border-b border-blue-400 flex justify-between items-center">
                   <strong className="text-blue-200 text-lg">Tenzi Odpieniacz (De-Foam)</strong>
                   <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded font-bold">TECHNICZNY</span>
                </div>
                <div className="p-4">
                    <p className="text-sm text-gray-300 mb-2"><strong>Zastosowanie:</strong> Dodatek do zbiornika brudnego w Karcher SE 4.</p>
                    <ul className="list-disc pl-5 text-xs text-gray-400 space-y-1">
                        <li>Wlewasz 50-100ml do zbiornika na brudną wodę.</li>
                        <li><strong>Kluczowy dla maszyn:</strong> Zapobiega przedostaniu się piany do turbiny ssącej (ochrona silnika przed spaleniem).</li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        title: 'Lekcja 3: Precyzyjne Dozowanie (Menzurka)',
        content: (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary font-mono border-b border-border pb-2">03 // MATEMATYKA CZYSTOŚCI</h3>
            <div className="bg-card p-5 rounded border border-border">
               <strong className="text-white block mb-2 text-lg">Menzurka / Miarka (Measuring Cup)</strong>
               <p className="text-sm text-gray-400 mb-3">
                 "Lanie na oko" to amatorszczyzna. Zbyt mało chemii = brud zostaje. Zbyt dużo chemii = smugi, klejąca podłoga i strata pieniędzy.
               </p>
               <div className="bg-surface border border-gray-600 p-4 rounded text-sm text-gray-300">
                 <strong className="block mb-2 text-secondary">Zasada Przeliczania (1:100):</strong>
                 <ul className="list-disc pl-5 space-y-2">
                    <li>Dla TopEfekt Normal (stężenie 50-100ml / 10L wody):</li>
                    <li>Odmierz <strong>100ml</strong> w menzurce.</li>
                    <li>Wlej do wiadra NIEBIESKIEGO (Splast).</li>
                    <li>Dopełnij wodą do 10L.</li>
                 </ul>
                 <p className="mt-3 text-xs text-gray-500 italic">
                   Przy pracy z silnymi koncentratami (Gran Smog) użycie miarki jest obowiązkowe dla bezpieczeństwa.
                 </p>
               </div>
            </div>
          </div>
        )
      }
    ],
    quiz: [
      { id: 1, question: "Który środek Tenzi ma pH 1 i służy do mycia toalet?", options: ["Top Glass", "WC Sani", "Gran Smog", "Stal Nierdzewna"], correctAnswer: 1 },
      { id: 2, question: "Do czego służy Tenzi Odpieniacz?", options: ["Do mycia okien", "Do usuwania piany w zbiorniku brudnym (ochrona turbiny)", "Do dezynfekcji", "Do polerowania"], correctAnswer: 1 },
      { id: 3, question: "Czym dozujemy chemię, aby zachować idealne proporcje?", options: ["Na oko", "Szklanką", "Menzurką / Miarką", "Wlewamy całą butelkę"], correctAnswer: 2 },
      { id: 4, question: "Jaki odczyn pH ma Gran Smog (do tłuszczu)?", options: ["1 (Kwas)", "7 (Neutralny)", "14 (Silna Zasada)", "0 (Woda)"], correctAnswer: 2 },
      { id: 5, question: "Na jakich powierzchniach stosujemy Tenzi Stal Nierdzewna?", options: ["Podłogi", "Szyby", "Powierzchnie pionowe INOX (windy, okapy)", "Toalety"], correctAnswer: 2 },
      { id: 6, question: "Co robimy przed użyciem chemii?", options: ["Wąchamy", "Czytamy etykietę i Kartę Charakterystyki", "Mieszamy z inną", "Podgrzewamy"], correctAnswer: 1 }
    ]
  },
  {
    id: 'equip',
    title: 'Logistyka i Sprzęt: Splast & Moerman',
    description: 'Obsługa profesjonalnego wózka Splast TS-0004 oraz systemu Moerman Excelerator 2.0 z kijem teleskopowym.',
    icon: Wrench,
    priority: 'PODSTAWOWE',
    priorityColor: 'text-secondary',
    passingScore: 85,
    lessons: [
      {
        title: 'Lekcja 1: Splast TS-0004 (System Dwuwiaderkowy)',
        content: (
            <div className="space-y-6">
                <h3 className="text-xl font-bold text-secondary font-mono border-b border-border pb-2">01 // SPLAST TS-0004</h3>
                <p className="text-gray-300">
                  Model TS-0004 to klasyk profesjonalnego sprzątania: dwa wiadra po 25 litrów i prasa wyciskająca.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                   <div className="bg-blue-900/20 p-5 border border-blue-500 rounded relative overflow-hidden">
                     <strong className="text-blue-400 block text-lg mb-2">WIADRO NIEBIESKIE</strong>
                     <p className="text-sm text-gray-300">
                       Tu znajduje się <strong>roztwór roboczy</strong> (Woda + TopEfekt).
                     </p>
                     <div className="mt-4 p-2 bg-blue-900/40 rounded text-xs text-blue-200 font-mono">
                        AKCJA: Tutaj namaczamy czystego mopa.
                     </div>
                   </div>

                   <div className="bg-red-900/20 p-5 border border-red-500 rounded relative overflow-hidden">
                     <strong className="text-red-400 block text-lg mb-2">WIADRO CZERWONE</strong>
                     <p className="text-sm text-gray-300">
                       Tu trafia <strong>brudna woda</strong> wyciśnięta z mopa.
                     </p>
                     <div className="mt-4 p-2 bg-red-900/40 rounded text-xs text-red-200 font-mono">
                        AKCJA: Tutaj spływa brud z prasy.
                     </div>
                   </div>
                </div>

                <div className="bg-card p-5 rounded border border-gray-600 mt-4">
                  <strong className="text-white block mb-3 text-lg">Technika Pracy</strong>
                  <ol className="list-decimal pl-5 text-sm text-gray-400 space-y-2">
                    <li>Namocz mop w niebieskim wiadrze.</li>
                    <li>Umyj fragment podłogi (ok. 10-15 m2).</li>
                    <li>Wypłucz/Wyciśnij mop nad czerwonym wiadrem (brud spływa do czerwonego).</li>
                    <li>Dopiero czysty, odciśnięty mop zanurz ponownie w niebieskim.</li>
                  </ol>
                </div>
            </div>
        )
      },
      {
        title: 'Lekcja 2: Moerman Excelerator 2.0 + Kij Teleskopowy',
        content: (
            <div className="space-y-6">
                <h3 className="text-xl font-bold text-secondary font-mono border-b border-border pb-2">02 // ZASIĘG Z ZIEMI</h3>
                <p className="text-gray-300">
                  Zestaw zawiera uchwyt Excelerator 2.0, szynę Liquidator 3.0, wkład F*LIQ oraz <strong>kij teleskopowy 3-4m</strong>.
                </p>
                
                <div className="space-y-6 mt-4">
                   <div className="border border-border p-5 rounded bg-surface">
                     <h4 className="font-bold text-white mb-3 border-b border-gray-700 pb-2">Praca na Kiju (Tele-pole)</h4>
                     <ul className="list-disc pl-5 text-sm text-gray-400 space-y-3">
                       <li>
                         <strong>Bezpieczeństwo:</strong> Używając kija 3-4 metry, możesz umyć wysokie witryny lub okna na 1. piętrze bez użycia drabiny. Jest to bezpieczniejsze i szybsze.
                       </li>
                       <li>
                         <strong>Ustawienie Narzędzia:</strong> Ustaw kąt uchwytu Excelerator na <strong>10° lub -20°</strong>. To kluczowe, aby guma przylegała do szyby pod odpowiednim kątem, gdy stoisz na dole.
                       </li>
                       <li>
                         <strong>Technika:</strong> Namydlasz wkładem F*LIQ (pozycja "dół"). Następnie uderzasz o ramę, by obrócić narzędzie ("Flip") i ściągasz wodę gumą Liquidator.
                       </li>
                     </ul>
                   </div>
                </div>
            </div>
        )
      }
    ],
    quiz: [
      { id: 1, question: "Do którego wiadra wózka Splast wyciskamy brudną wodę?", options: ["Do niebieskiego", "Do czerwonego", "Na podłogę", "Obojętnie"], correctAnswer: 1 },
      { id: 2, question: "Jaki kąt uchwytu Moerman ustawiamy przy pracy z kijem teleskopowym?", options: ["10 stopni (płasko)", "40 stopni", "90 stopni", "0 stopni"], correctAnswer: 0 },
      { id: 3, question: "Co daje użycie kija teleskopowego 4m?", options: ["Możliwość mycia wysokich okien bez drabiny", "Ładniejszy wygląd", "Większe zużycie wody", "Nic"], correctAnswer: 0 },
      { id: 4, question: "W jakim wiadrze znajduje się czysty roztwór TopEfekt?", options: ["W czerwonym", "W niebieskim", "W obu", "W żadnym"], correctAnswer: 1 },
      { id: 5, question: "Co to jest Liquidator 3.0?", options: ["Środek chemiczny", "Specjalna szyna ze ściętymi końcówkami (brak detalowania)", "Wiadro", "Ścierka"], correctAnswer: 1 },
      { id: 6, question: "Czy wkład F*LIQ pozwala myć i ściągać tym samym narzędziem?", options: ["Tak", "Nie", "Tylko myć", "Tylko ściągać"], correctAnswer: 0 }
    ]
  },
  {
    id: 'machinery',
    title: 'Maszyny Karcher: SE 4 & WD 3',
    description: 'Obsługa Karcher SE 4 (pranie) z użyciem odpieniacza oraz Karcher WD 3 (odkurzanie) z workami fizelinowymi.',
    icon: Zap,
    priority: 'ZAAWANSOWANE',
    priorityColor: 'text-primary',
    passingScore: 90,
    lessons: [
      {
        title: 'Lekcja 1: Karcher SE 4 + Odpieniacz',
        content: (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary font-mono border-b border-border pb-2">01 // EKSTRAKCJA I OCHRONA</h3>
            <p className="text-gray-300">
              Karcher SE 4 służy do prania dywanów i tapicerki. Aby maszyna działała latami, musisz używać <strong>Tenzi Odpieniacz</strong>.
            </p>
            
            <div className="bg-card p-5 rounded border border-border">
                <strong className="text-white block mb-3 text-lg border-b border-gray-700 pb-2">Proces Prania</strong>
                <ol className="list-decimal pl-5 text-sm text-gray-400 space-y-4">
                    <li>
                        <strong>Przygotowanie:</strong> Odkurz powierzchnię na sucho (WD 3).
                    </li>
                    <li>
                        <strong>Zbiornik Czysty:</strong> Wlej wodę z <strong>Textil Wash</strong> (pH 9, Enzymy).
                    </li>
                    <li>
                        <strong>Zbiornik Brudny (KLUCZOWE):</strong> Do pustego wiadra maszyny wlej 50ml <strong>Tenzi Odpieniacz</strong>. Brudna woda z dywanu zawiera resztki starych szamponów, które potwornie się pienią. Piana zassie się do turbiny i ją spali. Odpieniacz to likwiduje.
                    </li>
                    <li>
                        <strong>Praca:</strong> Natryskujesz i odsysasz ruchem do siebie.
                    </li>
                </ol>
            </div>
          </div>
        )
      },
      {
        title: 'Lekcja 2: Karcher WD 3 - Worki Fleece',
        content: (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary font-mono border-b border-border pb-2">02 // ODKURZANIE PRZEMYSŁOWE</h3>
            <p className="text-gray-300">
              Karcher WD 3 to odkurzacz warsztatowy. W "Ultimate Basket" znajdują się do niego <strong>Worki Fizelinowe (Fleece)</strong>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
               <div className="bg-surface p-5 border border-gray-600 rounded">
                  <strong className="text-white block mb-2 text-lg">Worki Fizelinowe (Fleece)</strong>
                  <p className="text-sm text-gray-400 mb-3">
                    Białe, materiałowe worki z zestawu.
                  </p>
                  <ul className="list-disc pl-5 text-xs text-gray-300 space-y-2">
                     <li><strong>Wytrzymałość:</strong> Nie pękają przy wciągnięciu gruzu, śrubek czy wilgotnego piasku (w przeciwieństwie do papierowych).</li>
                     <li><strong>Filtracja:</strong> Zatrzymują drobny pył, chroniąc silnik i filtr główny.</li>
                     <li><strong>Nigdy bez worka:</strong> Przy suchym odkurzaniu praca bez worka to śmierć dla silnika.</li>
                  </ul>
               </div>
               
               <div className="bg-surface p-5 border border-gray-600 rounded">
                  <strong className="text-white block mb-2 text-lg">Konserwacja</strong>
                  <ul className="list-disc pl-5 text-xs text-gray-300 space-y-2">
                     <li>Po pracy opróżnij zbiornik.</li>
                     <li>Wytrzep filtr harmonijkowy (na zewnątrz!).</li>
                     <li>Sprawdź, czy wąż nie jest zatkany.</li>
                  </ul>
               </div>
            </div>
          </div>
        )
      }
    ],
    quiz: [
      { id: 1, question: "Co musisz wlać do zbiornika brudnego w SE 4?", options: ["Więcej wody", "Tenzi Odpieniacz (Defoamer)", "Mydło", "Nic"], correctAnswer: 1 },
      { id: 2, question: "Dlaczego używamy worków fizelinowych (Fleece) w WD 3?", options: ["Są ładniejsze", "Są wytrzymałe na rozerwanie i lepiej filtrują pył", "Są tańsze", "Nie trzeba ich używać"], correctAnswer: 1 },
      { id: 3, question: "Do czego służy Textil Wash?", options: ["Do mycia okien", "Do prania dywanów i tapicerki (Enzymy)", "Do toalet", "Do stali"], correctAnswer: 1 },
      { id: 4, question: "Co się stanie, jeśli piana dostanie się do turbiny odkurzacza?", options: ["Maszyna będzie lepiej prać", "Silnik może się spalić", "Nic", "Piana wyleci górą"], correctAnswer: 1 },
      { id: 5, question: "Czy WD 3 można używać bez worka do suchego pyłu?", options: ["Tak", "Nie, to uszkodzi silnik", "Tylko w piątki", "Obojętnie"], correctAnswer: 1 },
      { id: 6, question: "Jaka jest pierwsza faza prania dywanu?", options: ["Moczenie", "Odkurzanie na sucho (WD 3)", "Szorowanie", "Suszenie"], correctAnswer: 1 }
    ]
  },
  {
    id: 'surfaces',
    title: 'Materiałoznawstwo: Powierzchnie',
    description: 'Specyfika i rozpoznawanie materiałów. Stal Nierdzewna (konserwacja olejem), Chrom (odkamienianie) i podłogi.',
    icon: Layers,
    priority: 'EKSPERCKIE',
    priorityColor: 'text-secondary',
    passingScore: 90,
    lessons: [
      {
        title: 'Lekcja 1: Stal Nierdzewna (INOX) vs Chrom',
        content: (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-secondary font-mono border-b border-border pb-2">01 // INOX CZY CHROM?</h3>
            <p className="text-gray-300">
              W "Ultymatywnej Korzinie" masz dwa różne produkty do dwóch różnych metali. Nie pomyl ich!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="bg-surface p-5 border border-gray-600 rounded">
                <strong className="text-white block mb-2 text-lg">Stal Nierdzewna (INOX)</strong>
                <p className="text-sm text-gray-400 mb-2">Matowa (windy, lodówki, zmywarki).</p>
                <div className="bg-gray-800 p-3 rounded text-xs text-gray-300">
                  <strong>Produkt:</strong> Tenzi Stal Nierdzewna (Olej).
                  <br/><br/>
                  <strong>Procedura:</strong>
                  1. Umyj powierzchnię (np. Top Glass) i wysusz.<br/>
                  2. Natryśnij odrobinę oleju na ścierkę.<br/>
                  3. Wetrzyj w stal zgodnie ze szlifem.<br/>
                  Efekt: Jednolity kolor, brak śladów palców.
                </div>
              </div>
              <div className="bg-surface p-5 border border-gray-600 rounded">
                <strong className="text-white block mb-2 text-lg">Chrom</strong>
                <p className="text-sm text-gray-400 mb-2">Błyszczący (krany, baterie).</p>
                <div className="bg-gray-800 p-3 rounded text-xs text-gray-300">
                   <strong>Produkt:</strong> WC Sani (Kwas) - tylko przy silnym kamieniu, lub Top Glass.<br/><br/>
                   <strong>Procedura:</strong> Usuń kamień kwasem, spłucz wodą, wypoleruj do sucha. <strong className="text-danger">NIE OLEJUJ CHROMU!</strong> Będzie tłusty i matowy.
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
         title: 'Lekcja 2: Podłogi (Gres, Laminat)',
         content: (
             <div className="space-y-6">
                 <h3 className="text-xl font-bold text-secondary font-mono border-b border-border pb-2">02 // PODŁOGI</h3>
                 <div className="space-y-4 mt-4">
                   <div className="bg-card p-4 rounded border-l-4 border-green-500">
                      <strong className="text-white block mb-2">Codzienne Mycie</strong>
                      <p className="text-sm text-gray-400">
                        Używaj <strong>TopEfekt Normal</strong>. Jest neutralny, szybko wysycha i nie pozostawia smug na gresie polerowanym.
                        <br/>
                        Ważne: Mop musi być czysty (płukany w czerwonym wiadrze Splast).
                      </p>
                   </div>
                 </div>
             </div>
         )
      }
    ],
    quiz: [
      { id: 1, question: "Co robimy ze stalą nierdzewną (Inox) w windzie?", options: ["Myjemy kwasem", "Konserwujemy olejem (Tenzi Stal Nierdzewna)", "Szorujemy druciakiem", "Zostawiamy"], correctAnswer: 1 },
      { id: 2, question: "Czy wolno olejować błyszczące krany chromowane?", options: ["Tak", "Nie, będą tłuste i matowe", "Tylko w soboty", "Zawsze"], correctAnswer: 1 },
      { id: 3, question: "Jaki produkt służy do codziennego mycia podłóg?", options: ["TopEfekt Normal", "Gran Smog", "Stal Nierdzewna", "WC Sani"], correctAnswer: 0 },
      { id: 4, question: "Co trzeba zrobić przed nałożeniem oleju na stal?", options: ["Umyć i wysuszyć powierzchnię", "Polać wodą", "Posypać piaskiem", "Nic"], correctAnswer: 0 },
      { id: 5, question: "Czym grozi użycie kwasu (WC Sani) na marmurze?", options: ["Wyżarciem dziur (zniszczeniem)", "Lepiej umyje", "Niczym", "Będzie błyszczeć"], correctAnswer: 0 }
    ]
  }
];