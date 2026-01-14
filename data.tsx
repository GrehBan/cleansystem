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
        title: 'Lekcja 1: Podstawy Prawne i Odpowiedzialność (Dz.U. 2024 poz. 1327)',
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
                 <div>
                    <span className="text-success font-bold uppercase text-xs tracking-wider">Instruktaż Wstępny</span>
                    <p className="text-sm text-gray-300 mt-1">
                      Bezwzględnie przed dopuszczeniem do pracy. Składa się z instruktażu ogólnego (przepisy prawa) oraz stanowiskowego (zagrożenia konkretnego obiektu). Minimum 3 godziny lekcyjne (135 min).
                    </p>
                 </div>
               </div>
            </div>

            <div className="bg-card p-5 rounded border border-border mt-4">
               <h4 className="font-bold text-white mb-2 flex items-center gap-2"><FileText size={18}/> Archiwizacja Dokumentacji (Retencja)</h4>
               <p className="text-sm text-gray-400 mb-3">
                 Dla wszystkich pracowników zatrudnionych po 31 grudnia 2018 r., okres obowiązkowego przechowywania dokumentacji pracowniczej (w tym szkoleń BHP) wynosi <strong>10 lat</strong>, licząc od końca roku kalendarzowego, w którym ustał stosunek pracy.
               </p>
               <ul className="list-disc pl-5 text-xs text-gray-500 space-y-1">
                 <li>Dokumenty przechowujemy w Części B akt osobowych.</li>
                 <li>Wymagane: Karta szkolenia wstępnego (oryginał), kopie certyfikatów szkoleń okresowych, potwierdzenie zapoznania z oceną ryzyka zawodowego.</li>
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
                <br/><br/>
                Oznacza to, że wejście na drabinę 3-stopniową w celu umycia górnej części okna lub odkurzenia szafy jest w świetle prawa pracą szczególnie niebezpieczną, wymagającą nadzoru i zabezpieczeń.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
               <div className="bg-card p-4 rounded border border-border">
                 <h4 className="font-bold text-white mb-3 text-lg border-b border-gray-700 pb-2">Badania Wysokościowe</h4>
                 <p className="text-sm text-gray-400 mb-2">
                   Skierowanie na badania medycyny pracy musi precyzyjnie określać pułap pracy:
                 </p>
                 <ul className="space-y-2 text-sm text-gray-300">
                    <li><span className="text-secondary font-bold">Do 3 metrów:</span> Badanie ogólne + orzeczenie o braku przeciwwskazań (częstotliwość co 3-5 lat).</li>
                    <li><span className="text-danger font-bold">Powyżej 3 metrów:</span> Pełne badania specjalistyczne: okulista, neurolog, laryngolog (błędnik). Częstotliwość co 2-3 lata.</li>
                 </ul>
               </div>
               
               <div className="bg-card p-4 rounded border border-border">
                 <h4 className="font-bold text-white mb-3 text-lg border-b border-gray-700 pb-2">Hierarchia Zabezpieczeń</h4>
                 <ol className="list-decimal pl-5 text-sm text-gray-400 space-y-3">
                   <li>
                     <strong>Środki Ochrony Zbiorowej (Priorytet):</strong> 
                     Zawsze stosuj w pierwszej kolejności. Przykłady: Balustrady ochronne (min. 1.1m wysokości), krawężniki (min. 0.15m), siatki bezpieczeństwa, rusztowania systemowe.
                   </li>
                   <li>
                     <strong>Środki Ochrony Indywidualnej (Ostateczność):</strong> 
                     Stosowane, gdy ochrony zbiorowe są technicznie niemożliwe. Wymagane: Szelki bezpieczeństwa (PN-EN 361) z punktem kotwiczącym, amortyzatory bezpieczeństwa, kaski ochronne (PN-EN 397).
                   </li>
                 </ol>
               </div>
            </div>
          </div>
        )
      },
      {
        title: 'Lekcja 3: Apteczka Zakładowa (Standard DIN 13157)',
        content: (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-success font-mono border-b border-border pb-2">03 // STANDARDY RATOWNICTWA</h3>
            <p className="text-gray-300 leading-relaxed">
              Zgodnie z §44 przepisów ogólnych BHP, pracodawca ma obowiązek zapewnić sprawny system pierwszej pomocy. W profesjonalnym sprzątaniu (ryzyko chemiczne, skaleczenia) sama obecność apteczki "samochodowej" jest niewystarczająca. Obowiązującym standardem branżowym jest norma przemysłowa <strong>DIN 13157</strong>.
            </p>

            <div className="bg-surface p-6 rounded border border-gray-700 shadow-xl">
               <div className="flex justify-between items-center mb-4 border-b border-gray-600 pb-2">
                  <h4 className="text-lg font-bold text-white">Zawartość Apteczki "Solo Pro"</h4>
                  <span className="text-xs font-mono text-gray-500">ZGODNOŚĆ: DIN 13157</span>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm text-gray-400">
                  <div className="flex items-center gap-3 p-2 bg-card rounded">
                    <div className="w-3 h-3 bg-danger rounded-full animate-pulse"></div>
                    <div>
                        <strong className="text-white block">Koc Termiczny (Folia NRC)</strong>
                        <span className="text-xs">Ochrona przed wstrząsem/wychłodzeniem. Złota strona na zewnątrz = ogrzewanie.</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-card rounded">
                    <div className="w-3 h-3 bg-success rounded-full"></div>
                    <div>
                        <strong className="text-white block">Kompresy na oko</strong>
                        <span className="text-xs">Sterylne opatrunki przy zachlapaniu chemią.</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-card rounded">
                     <div className="w-3 h-3 bg-success rounded-full"></div>
                     <span>Zestaw plastrów (wodoodporne, elastyczne)</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-card rounded">
                     <div className="w-3 h-3 bg-success rounded-full"></div>
                     <span>Chusta trójkątna (temblak)</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-card rounded">
                     <div className="w-3 h-3 bg-success rounded-full"></div>
                     <span>Nożyczki ratownicze (tępo zakończone)</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-card rounded">
                     <div className="w-3 h-3 bg-success rounded-full"></div>
                     <span>Płuczka do oczu (neutralizacja pH)</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-card rounded">
                     <div className="w-3 h-3 bg-success rounded-full"></div>
                     <span>Rękawiczki nitrylowe (min. 4 pary)</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-card rounded">
                     <div className="w-3 h-3 bg-success rounded-full"></div>
                     <span>Maska do sztucznego oddychania</span>
                  </div>
               </div>

               <div className="mt-6 p-4 bg-gray-800/50 border border-gray-600 rounded text-sm text-gray-300 flex gap-4 items-start">
                 <div className="bg-green-600 text-white font-bold p-2 rounded text-xl">+</div>
                 <p>
                   <strong>Oznakowanie:</strong> Miejsce przechowywania apteczki oraz wykaz osób przeszkolonych muszą być oznaczone znakiem zgodnym z normą <strong>PN-EN ISO 7010</strong> (Biały krzyż na zielonym tle). Apteczka musi być przenośna (walizka), odporna na kurz i wilgoć.
                 </p>
               </div>
            </div>
          </div>
        )
      },
      {
        title: 'Lekcja 4: Środki Ochrony Indywidualnej (SUI) i Normy',
        content: (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary font-mono border-b border-border pb-2">04 // PPE: OSTATNIA LINIA OBRONY</h3>
            <p className="text-gray-300">
              Dobór Środków Ochrony Indywidualnej (SUI/PPE) nie jest dowolny – wynika wprost z Sekcji 8 Karty Charakterystyki (SDS) każdej używanej substancji chemicznej.
            </p>

            <div className="space-y-6 mt-4">
              <div className="bg-card p-5 rounded border border-border">
                <h4 className="font-bold text-white mb-3 text-lg text-secondary">Ochrona Rąk (EN 374)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-surface p-3 rounded">
                        <strong className="text-blue-400 block mb-1">Rękawice Nitrylowe (Jednorazowe)</strong>
                        <p className="text-xs text-gray-400">Do prac ogólnych, higienicznych, lekkiego sprzątania. Odporne na wirusy, tłuszcze i słabą chemię. Hypoalergiczne (brak lateksu).</p>
                    </div>
                    <div className="bg-surface p-3 rounded border border-secondary/30">
                        <strong className="text-purple-400 block mb-1">Rękawice Chemoodporne (Neopren/Nitryl)</strong>
                        <p className="text-xs text-gray-400"><strong>Wymagane</strong> przy pracy z koncentratami (Derast, Gran Smog) oraz przy głębokim doczyszczaniu. Muszą posiadać długi mankiet chroniący przedramię przed zalaniem.</p>
                    </div>
                </div>
                <div className="mt-3 text-xs text-danger font-bold bg-danger/10 p-2 rounded">
                    OSTRZEŻENIE: Rękawice lateksowe ulegają szybkiej degradacji w kontakcie z kwasami i olejami. Nie stosować w profesjonalnym sprzątaniu.
                </div>
              </div>

              <div className="bg-card p-5 rounded border border-border">
                <h4 className="font-bold text-white mb-3 text-lg text-secondary">Ochrona Oczu i Twarzy (EN 166)</h4>
                <ul className="list-disc pl-5 text-sm text-gray-400 space-y-2">
                  <li>
                    <strong>Gogle Ochronne (Typ Zamknięty):</strong> Z pośrednią wentylacją. Chronią przed mgłą chemiczną i rozbryzgiem. <strong>Obowiązkowe</strong> przy:
                    <ul className="list-circle pl-4 mt-1 text-gray-500">
                        <li>Przelewaniu koncentratów z kanistrów.</li>
                        <li>Spryskiwaniu powierzchni powyżej poziomu oczu (mycie ścian, luster).</li>
                        <li>Używaniu środków żrących (pH &lt; 2 lub pH &gt; 12).</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-5 rounded border border-border">
                <h4 className="font-bold text-white mb-3 text-lg text-secondary">Ochrona Dróg Oddechowych (EN 149)</h4>
                <ul className="list-disc pl-5 text-sm text-gray-400 space-y-2">
                  <li><strong>Półmaski filtrujące FFP2 / FFP3:</strong> Konieczne przy pracy z odkurzaczem przemysłowym WD 3 w środowisku zapylonym (pył gipsowy, cementowy po remoncie). Chronią płuca przed pylicą.</li>
                  <li><strong>Maski z pochłaniaczem węglowym:</strong> Zalecane w małych, źle wentylowanych pomieszczeniach przy pracy z rozpuszczalnikami lub silnym chlorem.</li>
                </ul>
              </div>
            </div>
          </div>
        )
      }
    ],
    quiz: [
      { id: 1, question: "Co ile lat należy odnawiać szkolenie BHP na stanowisku robotniczym (sprzątanie)?", options: ["Co rok", "Co 3 lata", "Co 5 lat", "Tylko raz przy zatrudnieniu"], correctAnswer: 1 },
      { id: 2, question: "Od jakiej wysokości zaczyna się prawna definicja 'pracy na wysokości', wymagająca badań specjalistycznych (do 3m)?", options: ["0.5 metra", "1.0 metra", "2.0 metry", "3.0 metry"], correctAnswer: 1 },
      { id: 3, question: "Jaki element apteczki DIN 13157 jest kluczowy dla ochrony poszkodowanego przed wychłodzeniem?", options: ["Woda utleniona", "Koc termiczny (Folia NRC)", "Tabletki przeciwbólowe", "Chusta trójkątna"], correctAnswer: 1 },
      { id: 4, question: "Jak długo pracodawca musi przechowywać dokumentację szkoleniową pracownika zatrudnionego w 2026 roku?", options: ["3 lata", "10 lat", "50 lat", "Do momentu zwolnienia"], correctAnswer: 1 },
      { id: 5, question: "Które rękawice zapewniają najlepszą ochronę przy pracy z silnymi koncentratami chemicznymi?", options: ["Lateksowe cienkie", "Winylowe", "Chemoodporne z długim mankietem (Neopren/Nitryl)", "Bawełniane"], correctAnswer: 2 },
      { id: 6, question: "Jaka kara grozi pracodawcy za dopuszczenie pracownika do pracy bez ważnego szkolenia BHP?", options: ["Pouczenie ustne", "Mandat 500 PLN", "Grzywna od 1 000 do 30 000 PLN", "Brak kary"], correctAnswer: 2 }
    ]
  },
  {
    id: 'chem',
    title: 'Chemia Profesjonalna Tenzi & REACH',
    description: 'Niezbędnik Profesjonalisty Tenzi. Teoria Mycia (Koło Sinnera), skala pH, procedury REACH, diizocyjaniany i bezpieczeństwo chemiczne.',
    icon: FlaskConical,
    priority: 'TECHNICZNE',
    priorityColor: 'text-secondary',
    passingScore: 90,
    lessons: [
      {
        title: 'Lekcja 1: Teoria Mycia: Koło Sinnera i Skala pH',
        content: (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-secondary font-mono border-b border-border pb-2">01 // FUNDAMENTY WIEDZY</h3>
            <p className="text-gray-300">
              Zanim dotkniesz jakiegokolwiek środka, musisz zrozumieć <strong>mechanikę mycia</strong>. Profesjonalne sprzątanie opiera się na 4 filarach (Koło Sinnera) i chemicznym odczynie pH.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="bg-card p-5 rounded border border-gray-600">
                    <strong className="text-white block mb-3 text-lg">Koło Sinnera (4 Czynniki)</strong>
                    <p className="text-sm text-gray-400 mb-2">Aby usunąć brud, musisz użyć kombinacji 4 elementów. Jeśli zmniejszysz jeden, musisz zwiększyć inny.</p>
                    <ul className="list-disc pl-5 text-sm text-gray-300 space-y-2">
                        <li><span className="text-secondary font-bold">Chemia:</span> Odpowiedni środek rozpuszczający brud.</li>
                        <li><span className="text-danger font-bold">Temperatura:</span> Ciepła woda przyspiesza reakcje (ale uwaga na enzymy!).</li>
                        <li><span className="text-warning font-bold">Czas:</span> Chemia potrzebuje czasu, by zadziałać (namaczanie).</li>
                        <li><span className="text-success font-bold">Mechanika:</span> Szorowanie, tarcie mopem, ciśnienie maszyny.</li>
                    </ul>
                </div>

                <div className="bg-card p-5 rounded border border-gray-600">
                    <strong className="text-white block mb-3 text-lg">Skala pH (0-14)</strong>
                    <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                            <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold w-16 text-center">pH 0-6</span>
                            <span className="text-red-400 font-bold">KWASY:</span>
                            <span className="text-gray-400">Usuwają kamień, rdzę, osady mineralne (WC, krany).</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-bold w-16 text-center">pH 7</span>
                            <span className="text-green-400 font-bold">NEUTRALNE:</span>
                            <span className="text-gray-400">Bezpieczne dla wszystkiego. Codzienne mycie.</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs font-bold w-16 text-center">pH 8-14</span>
                            <span className="text-purple-400 font-bold">ZASADY:</span>
                            <span className="text-gray-400">Usuwają tłuszcz, smary, oleje (Kuchnia, garaż).</span>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        )
      },
      {
        title: 'Lekcja 2: Procedury REACH i Rejestr Chemiczny',
        content: (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-secondary font-mono border-b border-border pb-2">02 // BEZPIECZEŃSTWO PRAWNE</h3>
            
            <p className="text-gray-300">
              W Unii Europejskiej praca z chemią profesjonalną jest ściśle regulowana przez rozporządzenia <strong>REACH</strong> oraz <strong>CLP</strong>. Stosowanie środków "domowych" (bez SDS) w profesjonalnej usłudze jest zabronione.
            </p>

            <div className="bg-card p-5 rounded border border-border space-y-4">
               <div>
                   <strong className="text-white block mb-2 text-lg">Karty Charakterystyki (SDS)</strong>
                   <p className="text-sm text-gray-400">
                     Pracodawca ma prawny obowiązek zapewnić stały dostęp do Kart Charakterystyki (Safety Data Sheets) dla <strong>każdej</strong> substancji chemicznej używanej w firmie.
                   </p>
                   <ul className="list-disc pl-5 text-sm text-gray-400 mt-2">
                     <li>Muszą być w języku polskim.</li>
                     <li>Muszą być aktualne (aktualizacja co 2-3 lata).</li>
                     <li>Muszą być dostępne fizycznie lub cyfrowo w miejscu wykonywania pracy.</li>
                   </ul>
               </div>

               <div className="border-t border-gray-700 pt-4">
                   <strong className="text-white block mb-2 text-lg">Szkolenie Diizocyjaniany (Nowość 2023)</strong>
                   <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-3 rounded">
                       <p className="text-sm text-gray-300">
                         Od 24 sierpnia 2023 r., każdy pracownik mający styczność z produktami zawierającymi &gt;0.1% diizocyjanianów (np. <strong>pianki montażowe, kleje budowlane, uszczelniacze</strong> - częste przy sprzątaniu pobudowlanym) musi przejść certyfikowane szkolenie z bezpiecznego ich stosowania.
                       </p>
                       <p className="text-xs text-yellow-500 mt-1 font-bold">
                         Szkolenie jest ważne 5 lat. Brak certyfikatu = Zakaz pracy z tymi substancjami.
                       </p>
                   </div>
               </div>
            </div>
          </div>
        )
      },
      {
        title: 'Lekcja 3: "Niezbędnik Profesjonalisty" Tenzi - Specyfikacja',
        content: (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-secondary font-mono border-b border-border pb-2">03 // TECHNOLOGIA MYCIA TENZI</h3>
            <p className="text-gray-300">
              Strategia materiałowa JEDG SOLO 2026 opiera się na 5 wyselekcjonowanych produktach marki Tenzi. Zrozumienie ich pH i zastosowania jest kluczowe dla uniknięcia zniszczeń mienia.
            </p>

            <div className="space-y-6 mt-4">
              {/* TopEfekt Normal */}
              <div className="border border-green-600 rounded bg-green-900/5 overflow-hidden">
                <div className="bg-green-600/20 p-3 border-b border-green-600 flex justify-between items-center">
                   <strong className="text-green-400 text-lg">1. TopEfekt Normal</strong>
                   <span className="bg-green-600 text-white text-xs px-2 py-1 rounded font-bold">pH 7 (NEUTRAL)</span>
                </div>
                <div className="p-4">
                    <p className="text-sm text-gray-300 mb-2"><strong>Zastosowanie:</strong> Codzienne mycie wszystkich posadzek wodoodpornych.</p>
                    <ul className="list-disc pl-5 text-xs text-gray-400 space-y-1">
                        <li>Bezpieczny dla kamienia naturalnego, gresu, PCV, lakierowanego drewna.</li>
                        <li>Niskopieniący (Low-Foam) - idealny do mopów i maszyn myjących.</li>
                        <li>Nie wymaga spłukiwania (No-Rinse). Szybko wysycha, nie zostawia smug.</li>
                    </ul>
                </div>
              </div>

              {/* Top Glass */}
              <div className="border border-blue-500 rounded bg-blue-900/5 overflow-hidden">
                <div className="bg-blue-600/20 p-3 border-b border-blue-600 flex justify-between items-center">
                   <strong className="text-blue-400 text-lg">2. Top Glass</strong>
                   <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded font-bold">pH 7 (NEUTRAL)</span>
                </div>
                <div className="p-4">
                    <p className="text-sm text-gray-300 mb-2"><strong>Zastosowanie:</strong> Mycie szyb, luster, przeszkleń.</p>
                    <ul className="list-disc pl-5 text-xs text-gray-400 space-y-1">
                        <li>Formuła alkoholowa - błyskawicznie odparowuje.</li>
                        <li>Właściwości antystatyczne (zapobiega osiadaniu kurzu).</li>
                        <li>Idealny do systemu Moerman Excelerator.</li>
                    </ul>
                </div>
              </div>

              {/* WC Sani */}
              <div className="border border-red-600 rounded bg-red-900/5 overflow-hidden">
                <div className="bg-red-600/20 p-3 border-b border-red-600 flex justify-between items-center">
                   <strong className="text-red-400 text-lg">3. WC Sani</strong>
                   <span className="bg-red-600 text-white text-xs px-2 py-1 rounded font-bold">pH 1 (SILNY KWAS)</span>
                </div>
                <div className="p-4">
                    <p className="text-sm text-gray-300 mb-2"><strong>Zastosowanie:</strong> Gruntowne mycie sanitariatów, odkamienianie, usuwanie rdzy.</p>
                    <ul className="list-disc pl-5 text-xs text-gray-400 space-y-1">
                        <li>Żelowa konsystencja (dłuższy czas kontaktu z pionowymi powierzchniami).</li>
                        <li>Skutecznie usuwa osady wapienne i urynowe.</li>
                        <li><strong className="text-danger">ZAKAZ STOSOWANIA:</strong> Powierzchnie emaliowane, armatura chromowana (jeśli uszkodzona), MARMUR, TRAWERTYN.</li>
                    </ul>
                </div>
              </div>

              {/* Gran Smog */}
              <div className="border border-purple-600 rounded bg-purple-900/5 overflow-hidden">
                <div className="bg-purple-600/20 p-3 border-b border-purple-600 flex justify-between items-center">
                   <strong className="text-purple-400 text-lg">4. Gran Smog</strong>
                   <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded font-bold">pH 14 (SILNA ZASADA)</span>
                </div>
                <div className="p-4">
                    <p className="text-sm text-gray-300 mb-2"><strong>Zastosowanie:</strong> Odtłuszczanie (Degreaser) w kuchniach i przemyśle.</p>
                    <ul className="list-disc pl-5 text-xs text-gray-400 space-y-1">
                        <li>Usuwa przypalony tłuszcz, smary, sadzę (po pożarach).</li>
                        <li>Działa agresywnie na skórę - <strong>Rękawice i okulary OBOWIĄZKOWE.</strong></li>
                        <li>Może uszkodzić aluminium i linoleum przy zbyt dużym stężeniu.</li>
                    </ul>
                </div>
              </div>

              {/* Textil Wash */}
              <div className="border border-orange-500 rounded bg-orange-900/5 overflow-hidden">
                <div className="bg-orange-600/20 p-3 border-b border-orange-600 flex justify-between items-center">
                   <strong className="text-orange-400 text-lg">5. Textil Wash</strong>
                   <span className="bg-orange-600 text-white text-xs px-2 py-1 rounded font-bold">pH 9 (ENZYMY)</span>
                </div>
                <div className="p-4">
                    <p className="text-sm text-gray-300 mb-2"><strong>Zastosowanie:</strong> Pranie ekstrakcyjne dywanów i tapicerki (Karcher SE 4).</p>
                    <ul className="list-disc pl-5 text-xs text-gray-400 space-y-1">
                        <li>Zawiera enzymy proteolityczne (rozkładają białka, krew, trawę).</li>
                        <li>Nie zawiera wybielaczy optycznych (bezpieczny dla kolorów).</li>
                        <li>Wymaga czasu reakcji (pre-spray) ok. 5-10 minut przed odessaniem.</li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        title: 'Lekcja 4: Krytyczne Inkompatybilności (Wypadki)',
        content: (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-danger font-mono border-b border-border pb-2">04 // ZAGROŻENIA ŻYCIA</h3>
            
            <div className="bg-danger/20 p-6 border-l-8 border-danger rounded shadow-xl animate-pulse">
              <strong className="text-danger block text-2xl mb-3 font-mono">ŚMIERTELNE ZAGROŻENIE</strong>
              <p className="text-white text-lg font-bold">PODCHLORYN SODU (Chlor) + KWAS = GAZOWY CHLOR (Cl₂)</p>
              <p className="text-sm text-gray-300 mt-4 leading-relaxed">
                Nigdy, pod żadnym pozorem nie mieszaj środków zawierających aktywny chlor (wybielacze, Domestos, środki pleśniobójcze) ze środkami kwaśnymi (WC Sani, Derast, odkamieniacze, ocet).
                <br/><br/>
                Reakcja ta jest gwałtowna i powoduje wydzielenie się <strong>zielono-żółtego gazowego chloru</strong>. Gaz ten jest bojowym środkiem trującym (używanym podczas I WŚ). Powoduje natychmiastowe poparzenie dróg oddechowych, obrzęk płuc i śmierć przez uduszenie.
              </p>
            </div>

            <div className="bg-card p-5 rounded border border-border mt-6">
               <strong className="text-white block mb-2">Procedura Mieszania (Rozcieńczania)</strong>
               <ol className="list-decimal pl-5 text-sm text-gray-400 space-y-2">
                 <li>Zawsze wlewaj <strong>CHEMIĘ DO WODY</strong>, nigdy odwrotnie. Zapobiega to gwałtownemu pienieniu się i rozpryskowi koncentratu.</li>
                 <li>Stosuj dokładne proporcje (np. 100ml na 10L wody). "Lanie na oko" to strata pieniędzy i ryzyko uszkodzenia powierzchni (np. smugi na podłodze od nadmiaru detergentu).</li>
                 <li>Używaj tylko zimnej lub letniej wody (max 30-40°C). Wrzątek powoduje parowanie szkodliwych substancji i niszczy enzymy.</li>
               </ol>
            </div>
          </div>
        )
      }
    ],
    quiz: [
      { id: 1, question: "Co usuwamy za pomocą kwasów (pH < 7)?", options: ["Tłuszcze", "Kamień wodny i rdzę", "Kurz", "Białka"], correctAnswer: 1 },
      { id: 2, question: "Który produkt Tenzi służy do prania ekstrakcyjnego dywanów?", options: ["Gran Smog", "WC Sani", "Textil Wash", "Top Glass"], correctAnswer: 2 },
      { id: 3, question: "Jaka reakcja zachodzi po zmieszaniu chloru z kwasem?", options: ["Neutralizacja", "Wydziela się trujący gazowy chlor (Cl₂)", "Powstaje aktywna piana", "Nic"], correctAnswer: 1 },
      { id: 4, question: "Jakie 4 czynniki składają się na Koło Sinnera?", options: ["Woda, Mydło, Szczotka, Wiadro", "Chemia, Temperatura, Czas, Mechanika", "Chęci, Czas, Pieniądze, Siła", "Kwas, Zasada, Chlor, Alkohol"], correctAnswer: 1 },
      { id: 5, question: "Czy wolno używać gorącej wody (>60°C) do chemii profesjonalnej?", options: ["Tak", "Nie, niszczy to enzymy i powoduje parowanie szkodliwych substancji", "Obojętnie", "Tylko zimą"], correctAnswer: 1 },
      { id: 6, question: "Do czego służy TopEfekt Normal?", options: ["Do mycia silników", "Do usuwania rdzy", "Do codziennego mycia podłóg (neutralny)", "Do dezynfekcji"], correctAnswer: 2 }
    ]
  },
  {
    id: 'equip',
    title: 'Logistyka i Ergonomia: Splast & Moerman',
    description: 'Obsługa profesjonalnego wózka Splast TSZ-0003 oraz zaawansowane techniki mycia okien systemem Moerman Excelerator 2.0 (Technologia E.A.S.E.).',
    icon: Wrench,
    priority: 'PODSTAWOWE',
    priorityColor: 'text-secondary',
    passingScore: 85,
    lessons: [
      {
        title: 'Lekcja 1: System Dwuwiaderkowy Splast TSZ-0003',
        content: (
            <div className="space-y-6">
                <h3 className="text-xl font-bold text-secondary font-mono border-b border-border pb-2">01 // HIGIENA I ERGONOMIA</h3>
                <p className="text-gray-300">
                  Wózek Splast TSZ-0003 to nie tylko "wiadro na kółkach", ale system zapobiegający zakażeniom krzyżowym (przenoszeniu brudu z miejsca na miejsce).
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                   <div className="bg-blue-900/20 p-5 border border-blue-500 rounded relative overflow-hidden">
                     <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs px-2 py-1 font-bold">20 LITRÓW</div>
                     <strong className="text-blue-400 block text-lg mb-2">WIADRO NIEBIESKIE</strong>
                     <p className="text-sm text-gray-300">
                       Zawiera <strong>czystą wodę z roztworem roboczym</strong> (np. TopEfekt Normal).
                     </p>
                     <div className="mt-4 p-2 bg-blue-900/40 rounded text-xs text-blue-200 font-mono">
                        ZASADA: Tutaj ZAWSZE namaczamy czystego mopa przed myciem podłogi.
                     </div>
                   </div>

                   <div className="bg-red-900/20 p-5 border border-red-500 rounded relative overflow-hidden">
                     <div className="absolute top-0 right-0 bg-red-600 text-white text-xs px-2 py-1 font-bold">20 LITRÓW</div>
                     <strong className="text-red-400 block text-lg mb-2">WIADRO CZERWONE</strong>
                     <p className="text-sm text-gray-300">
                       Przeznaczone na <strong>brudną wodę (ściek)</strong> wyciśniętą z mopa.
                     </p>
                     <div className="mt-4 p-2 bg-red-900/40 rounded text-xs text-red-200 font-mono">
                        ZASADA: Tutaj spływa brud z prasy. NIGDY nie maczaj tu mopa!
                     </div>
                   </div>
                </div>

                <div className="bg-card p-5 rounded border border-gray-600 mt-4">
                  <strong className="text-white block mb-3 text-lg">Obsługa Prasy Szczękowej (Wyciskarki)</strong>
                  <p className="text-sm text-gray-400 mb-4">
                    Klucz do bezpiecznego mycia różnych powierzchni leży w sile docisku prasy.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="border-l-4 border-yellow-500 pl-3">
                          <strong className="text-white block">Płytki / Gres / Kamień</strong>
                          <span className="text-gray-400">Średni docisk. Mop powinien być wilgotny, aby rozpuścić brud.</span>
                      </div>
                      <div className="border-l-4 border-orange-500 pl-3">
                          <strong className="text-white block">Drewno / Laminat / Panele</strong>
                          <span className="text-gray-400">MAKSYMALNY docisk. Mop musi być "pół-suchy" (wilgotny jedynie w dotyku). Nadmiar wody zniszczy podłogę.</span>
                      </div>
                  </div>
                </div>
            </div>
        )
      },
      {
        title: 'Lekcja 2: Mycie Okien - Moerman Excelerator 2.0',
        content: (
            <div className="space-y-6">
                <h3 className="text-xl font-bold text-secondary font-mono border-b border-border pb-2">02 // REWOLUCJA E.A.S.E.</h3>
                <p className="text-gray-300">
                  System Moerman Excelerator 2.0 z wkładem F*LIQ to narzędzie hybrydowe, pozwalające na mycie i ściąganie wody jednym ruchem, bez konieczności zmiany narzędzi.
                </p>
                
                <div className="space-y-6 mt-4">
                   <div className="border border-border p-5 rounded bg-surface">
                     <h4 className="font-bold text-white mb-3 border-b border-gray-700 pb-2">Konfiguracja i Mechanika</h4>
                     <ul className="list-disc pl-5 text-sm text-gray-400 space-y-3">
                       <li>
                         <strong>Baranek F*LIQ (Wkład myjący):</strong> 
                         Posiada dwa tryby pracy przełączane "pstryknięciem" (click).
                         <br/><span className="text-success font-bold">ON (Na gumie):</span> Do namydlania szyby.
                         <br/><span className="text-danger font-bold">OFF (Nad gumą):</span> Do ściągania wody.
                       </li>
                       <li>
                         <strong>Regulacja Kąta Natarcia (10° / 25° / 40°):</strong>
                         <br/>- <strong>10°:</strong> Praca na kiju teleskopowym (wysokie, trudno dostępne okna).
                         <br/>- <strong>25° / 40°:</strong> Klasyczna praca z ręki ("z bliska"), zapewniająca optymalny docisk do szyby.
                       </li>
                       <li>
                         <strong>Guma Liquidator 3.0:</strong>
                         Specjalnie ścięte końcówki gumy idealnie dopasowują się do uszczelek, eliminując konieczność "detalowania" (wycierania krawędzi szmatką) po ściągnięciu wody.
                       </li>
                     </ul>
                   </div>

                   <div className="border border-border p-5 rounded bg-surface">
                     <h4 className="font-bold text-white mb-3 border-b border-gray-700 pb-2">Technika Pracy "S" (Wężyk)</h4>
                     <ol className="list-decimal pl-5 text-sm text-gray-400 space-y-3">
                       <li><strong>Namydlanie:</strong> Ustaw F*LIQ w pozycji "dół" (na gumie). Obficie rozprowadź roztwór Top Glass na całej szybie.</li>
                       <li><strong>Flip (Obrót):</strong> Jednym ruchem nadgarstka lub uderzeniem o ramę "przełącz" F*LIQ do góry, odsłaniając gumę ściągającą.</li>
                       <li><strong>Ściąganie:</strong> Zacznij od górnego rogu. Prowadź gumę płynnym ruchem "S" (wężykiem) od góry do dołu, zakręcając przy ramach. Nie odrywaj gumy od szyby w trakcie ruchu.</li>
                       <li><strong>Zamknięcie:</strong> Zakończ ruch w dolnym rogu, zbierając resztę wody.</li>
                     </ol>
                   </div>
                   
                   <div className="bg-primary/10 border border-primary p-4 rounded text-sm text-primary flex gap-3 items-center">
                     <div className="font-bold text-2xl">!</div>
                     <div>
                        <strong>Bezpieczeństwo (Kij Teleskopowy):</strong> 
                        Dzięki regulacji kąta 10°, Excelerator pozwala myć wysokie witryny i okna (do 3-4 metrów) stojąc pewnie na ziemi. Eliminuje to ryzyko upadku z drabiny i konieczność posiadania badań wysokościowych dla tego zakresu prac.
                     </div>
                   </div>
                </div>
            </div>
        )
      }
    ],
    quiz: [
      { id: 1, question: "Do którego wiadra w systemie Splast TSZ-0003 wyciskamy brudną wodę z mopa?", options: ["Do niebieskiego", "Do czerwonego", "Wylewamy na posadzkę", "Do kieszeni wózka"], correctAnswer: 1 },
      { id: 2, question: "Co umożliwia system Moerman F*LIQ w uchwycie Excelerator?", options: ["Tylko mycie", "Tylko ściąganie", "Mycie i ściąganie jednym narzędziem (przełączanie 'flip')", "Automatyczne suszenie"], correctAnswer: 2 },
      { id: 3, question: "Jaki kąt uchwytu Moerman jest dedykowany do pracy na kiju teleskopowym?", options: ["10 stopni", "40 stopni", "90 stopni", "0 stopni"], correctAnswer: 0 },
      { id: 4, question: "Dlaczego używamy dwóch wiader zamiast jednego?", options: ["Żeby wózek był cięższy", "Aby zapobiec zakażeniom krzyżowym (myciu podłogi brudną wodą)", "Dla estetyki", "Jedno jest na śmieci"], correctAnswer: 1 },
      { id: 5, question: "Jak wilgotny powinien być mop do mycia paneli laminowanych?", options: ["Ociekający wodą", "Pół-suchy (mocno wyciśnięty)", "Suchy", "Gorący"], correctAnswer: 1 },
      { id: 6, question: "Co daje ścięta końcówka w gumie Liquidator 3.0?", options: ["Ładniejszy wygląd", "Brak konieczności wycierania krawędzi przy uszczelkach (detalowania)", "Większe zużycie wody", "Trudniejsze prowadzenie"], correctAnswer: 1 }
    ]
  },
  {
    id: 'machinery',
    title: 'Maszyny Karcher: Ekstrakcja i Odkurzanie',
    description: 'Zaawansowana obsługa maszyn: Karcher SE 4 (pranie ekstrakcyjne dywanów/tapicerki) oraz Karcher WD 3 (odkurzanie budowlane i praca z pyłami).',
    icon: Zap,
    priority: 'ZAAWANSOWANE',
    priorityColor: 'text-primary',
    passingScore: 90,
    lessons: [
      {
        title: 'Lekcja 1: Karcher SE 4 - Pranie Ekstrakcyjne (Ekstrakcja)',
        content: (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary font-mono border-b border-border pb-2">01 // GŁĘBOKIE CZYSZCZENIE TEKSTYLIÓW</h3>
            <p className="text-gray-300">
              Model SE 4 to strategiczne aktywo firmy, umożliwiające świadczenie wysokomarżowych usług prania tapicerki meblowej i wykładzin. Urządzenie działa w systemie <strong>Spray-Extraction</strong> (Natrysk-Odsysanie).
            </p>
            
            <div className="bg-card p-5 rounded border border-border">
                <strong className="text-white block mb-3 text-lg border-b border-gray-700 pb-2">Anatomia Procesu (4 Fazy)</strong>
                <ol className="list-decimal pl-5 text-sm text-gray-400 space-y-4">
                    <li>
                        <strong>Odkurzanie na sucho (Kluczowe!):</strong>
                        Przed praniem należy bezwzględnie dokładnie odkurzyć powierzchnię (najlepiej turboszczotką). Usunięcie piasku, sierści i kurzu na sucho zapobiega powstaniu błota po zmoczeniu.
                    </li>
                    <li>
                        <strong>Wstępne Rozpuszczanie (Prespray):</strong>
                        Nanieś roztwór (Woda + Textil Wash) na plamy i mocne zabrudzenia. Pozostaw na 5-10 minut, aby enzymy zadziałały. Nie dopuść do wyschnięcia!
                    </li>
                    <li>
                        <strong>Ekstrakcja Właściwa:</strong>
                        Praca właściwa. Pompa natryskuje roztwór płuczący pod ciśnieniem, a turbina (1000W) natychmiast go odsysa wraz z rozpuszczonym brudem.
                    </li>
                    <li>
                        <strong>Suszenie (Odsysanie końcowe):</strong>
                        Wykonaj kilka przejazdów samą ssawką (bez natrysku), aby maksymalnie osuszyć materiał. Wilgotność resztkowa powinna być minimalna.
                    </li>
                </ol>
            </div>

            <div className="bg-surface p-5 mt-4 rounded border border-gray-600">
               <h4 className="font-bold text-white mb-3">Technika Pracy i "System 2-w-1"</h4>
               <ul className="list-disc pl-5 text-sm text-gray-400 space-y-2">
                 <li><strong>Wąż 2-w-1:</strong> W modelu SE 4 wężyk doprowadzający wodę jest zintegrowany z wężem ssącym. Ułatwia to manewrowanie i zmniejsza ryzyko zahaczenia o meble.</li>
                 <li><strong>Ruch Ssawki:</strong> Zawsze ciągnij ssawkę <strong>DO SIEBIE</strong>, powolnym, jednostajnym ruchem. Dociśnij ssawkę do materiału, aby uszczelnić przepływ powietrza (lepsze ssanie).</li>
                 <li><strong>Zbiorniki (4L/4L):</strong> Regularnie kontroluj poziom piany w zbiorniku brudnym. Piana może dostać się do turbiny i ją spalić! Używaj odpieniacza, jeśli to konieczne.</li>
               </ul>
            </div>
          </div>
        )
      },
      {
        title: 'Lekcja 2: Karcher WD 3 - Odkurzacz do Zadań Specjalnych',
        content: (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary font-mono border-b border-border pb-2">02 // BUDOWA I PRZEMYSŁ</h3>
            <p className="text-gray-300">
              Karcher WD 3 to "wół roboczy" przeznaczony do pracy w trudnych warunkach, gdzie zwykły odkurzacz domowy uległby natychmiastowej awarii. Obsługuje gruz, pył poremontowy i wilgoć.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
               <div className="bg-surface p-5 border border-gray-600 rounded">
                  <strong className="text-white block mb-2 text-lg">Worki Fizelinowe (Fleece)</strong>
                  <p className="text-sm text-gray-400 mb-3">
                    Jest to najważniejszy element eksploatacyjny przy sprzątaniu pobudowlanym (gips, gładzie, cement).
                  </p>
                  <ul className="list-disc pl-5 text-xs text-gray-300 space-y-2">
                     <li><strong>Papier vs Fizelina:</strong> Papierowy worek pęknie pod wpływem ostrych kamyków lub wilgoci. Fizelina jest odporna na rozerwanie i zapewnia znacznie lepszą filtrację pyłów.</li>
                     <li><strong>Konsekwencje:</strong> Praca bez worka przy pyle gipsowym w kilka minut trwale zniszczy łożyska turbiny.</li>
                  </ul>
               </div>
               
               <div className="bg-surface p-5 border border-gray-600 rounded">
                  <strong className="text-white block mb-2 text-lg">Funkcja Wydmuchu (Blow)</strong>
                  <p className="text-sm text-gray-400 mb-3">
                    WD 3 potrafi odwrócić przepływ powietrza. Funkcja ta jest nieoceniona w miejscach, gdzie ssanie jest niemożliwe.
                  </p>
                  <ul className="list-disc pl-5 text-xs text-gray-300 space-y-2">
                     <li>Wydmuchiwanie liści ze żwirowych ścieżek.</li>
                     <li>Przedmuchiwanie zakurzonych kaloryferów (żeberek) przed ich umyciem.</li>
                     <li>Usuwanie pyłu z elektroniki/klawiatur.</li>
                  </ul>
               </div>
            </div>
            
            <div className="bg-danger/10 border border-danger p-4 rounded mt-4">
              <strong className="text-danger block mb-2 text-lg">BHP przy Pyle Kwarcowym</strong>
              <p className="text-sm text-gray-300">
                Pył budowlany (cement, gips) zawiera krzemionkę, która jest szkodliwa dla płuc. Podczas opróżniania odkurzacza WD 3 oraz pracy w dużym zapyleniu, operator <strong>bezwzględnie</strong> musi stosować półmaskę filtrującą klasy <strong>FFP2</strong> lub <strong>FFP3</strong>.
              </p>
            </div>
          </div>
        )
      },
      {
        title: 'Lekcja 3: Konserwacja Codzienna (DTR)',
        content: (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary font-mono border-b border-border pb-2">03 // DBAŁOŚĆ O SPRZĘT</h3>
            <p className="text-gray-300">
              Profesjonalistę poznaje się po tym, w jakim stanie zostawia swój sprzęt. Brudna maszyna to źródło smrodu i awarii.
            </p>

            <div className="bg-card p-5 rounded border border-gray-600">
               <strong className="text-white block mb-3 text-lg">Procedura "Po Pracy" (SE 4 / WD 3)</strong>
               <ol className="list-decimal pl-5 text-sm text-gray-400 space-y-3">
                 <li>
                    <strong>Opróżnianie:</strong> Wylej brudną wodę wyłącznie do toalety lub kratki ściekowej. Nigdy do zlewu kuchennego!
                 </li>
                 <li>
                    <strong>Płukanie zbiornika:</strong> Przepłucz zbiornik brudnej wody czystą wodą, aby usunąć osad (piasek, błoto). Zostaw otwarty do wyschnięcia.
                 </li>
                 <li>
                    <strong>Czyszczenie filtra (WD 3):</strong> Jeśli pracowałeś z pyłem, wytrzep filtr harmonijkowy na zewnątrz. Jeśli jest mokry - wysusz go przed kolejnym użyciem.
                 </li>
                 <li>
                    <strong>Kabel:</strong> Zwiń kabel starannie na haku. Nie wiąż go w supły, bo popękają żyły w środku.
                 </li>
               </ol>
            </div>
          </div>
        )
      }
    ],
    quiz: [
      { id: 1, question: "Jaka jest najważniejsza czynność przed rozpoczęciem prania dywanu na mokro?", options: ["Polać go wodą", "Dokładnie odkurzyć na sucho", "Wysuszyć suszarką", "Posypać proszkiem"], correctAnswer: 1 },
      { id: 2, question: "Jakich worków należy używać w WD 3 do odkurzania pyłu gipsowego/budowlanego?", options: ["Zwykłych papierowych", "Fizelinowych (Fleece) o wysokiej filtracji", "Żadnych (bez worka)", "Foliowych na śmieci"], correctAnswer: 1 },
      { id: 3, question: "W jakim kierunku należy prowadzić ssawkę piorącą w Karcher SE 4?", options: ["Szybko, w kółko", "Powoli, ciągnąc ją do siebie (tyłem)", "Popychając do przodu", "Z góry na dół"], correctAnswer: 1 },
      { id: 4, question: "Do czego przydaje się funkcja wydmuchu w WD 3?", options: ["Do suszenia włosów", "Do przedmuchiwania kaloryferów i miejsc trudno dostępnych", "Do chłodzenia silnika", "Do pompowania kół"], correctAnswer: 1 },
      { id: 5, question: "Co robisz z brudną wodą po skończonej pracy?", options: ["Zostawiam w maszynie na jutro", "Wylewam do zlewu w kuchni", "Wylewam do toalety, płuczę zbiornik i zostawiam do wyschnięcia", "Wylewam przez okno"], correctAnswer: 2 },
      { id: 6, question: "Co zagraża turbinie SE 4 podczas prania?", options: ["Zbyt czysta woda", "Nadmiar piany w zbiorniku brudnym", "Zimna woda", "Brak prądu"], correctAnswer: 1 }
    ]
  },
  {
    id: 'surfaces',
    title: 'Materiałoznawstwo: Powierzchnie',
    description: 'Specyfika i rozpoznawanie materiałów (kamień, drewno, metal) w kontekście doboru chemii i technik mycia. Zapobieganie szkodom.',
    icon: Layers,
    priority: 'EKSPERCKIE',
    priorityColor: 'text-secondary',
    passingScore: 90,
    lessons: [
      {
        title: 'Lekcja 1: Kamień Naturalny i Chemiczna Wrażliwość',
        content: (
          <div className="space-y-6">
             <h3 className="text-xl font-bold text-secondary font-mono border-b border-border pb-2">01 // PUŁAPKI KAMIENIA</h3>
             <p className="text-gray-300">
               Rozróżnienie rodzaju kamienia jest kluczowe. Pomyłka (użycie kwasu na marmurze) skutkuje trwałym zniszczeniem posadzki i olbrzymim odszkodowaniem.
             </p>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                 <div className="border border-red-500 p-5 rounded bg-red-900/10">
                     <strong className="text-red-500 block text-lg mb-2">MARMUR / TRAWERTYN / WAPIEŃ</strong>
                     <p className="text-sm text-gray-300 mb-3">Skały pochodzenia wapiennego. Są miękkie i chłonne.</p>
                     <div className="bg-red-900/30 p-3 rounded text-xs text-red-200">
                        <strong className="block mb-1">ZAGROŻENIE: KWASY (pH &lt; 7)</strong>
                        Nawet słaby kwas (ocet, cytryna) lub środek do WC (WC Sani, Derast) natychmiast reaguje z wapniem, powodując nieodwracalne wżery i zmatowienie ("wypalenie"). 
                        <br/><strong>Zalecenie:</strong> Myć wyłącznie środkami neutralnymi (TopEfekt Normal) lub lekko zasadowymi.
                     </div>
                 </div>
                 <div className="border border-green-500 p-5 rounded bg-green-900/10">
                     <strong className="text-green-500 block text-lg mb-2">GRANIT / ŁUPEK</strong>
                     <p className="text-sm text-gray-300 mb-3">Skały magmowe. Bardzo twarde, odporne na ścieranie i chemię.</p>
                     <div className="bg-green-900/30 p-3 rounded text-xs text-green-200">
                        <strong className="block mb-1">ODPORNOŚĆ</strong>
                        Można stosować (okresowo) środki kwaśne do usuwania osadów wapiennych, ale zawsze należy wykonać próbę w niewidocznym miejscu.
                     </div>
                 </div>
             </div>

             <div className="bg-surface p-5 rounded border border-gray-600 mt-4">
               <strong className="text-white block mb-3 text-lg">Procedura Ochrony Fug Cementowych</strong>
               <p className="text-sm text-gray-400 mb-3">
                 Fugi są mineralne (wapienne) i porowate. Kwas używany do odkamieniania płytek może je rozpuścić lub odbarwić.
               </p>
               <ol className="list-decimal pl-5 text-sm text-gray-300 space-y-2">
                 <li><strong>Zmoczenie wstępne:</strong> Przed nałożeniem kwasu (Derast), ZAWSZE obficie polej fugi czystą wodą. Woda wypełni pory fugi.</li>
                 <li><strong>Mycie:</strong> Nałóż roztwór kwaśny. Kwas zadziała wtedy tylko powierzchniowo na brud, nie wnikając w strukturę fugi.</li>
                 <li><strong>Neutralizacja:</strong> Po myciu dokładnie spłucz powierzchnię wodą, aby usunąć resztki kwasu.</li>
               </ol>
             </div>
          </div>
        )
      },
      {
         title: 'Lekcja 2: Drewno, Laminat i Woda',
         content: (
             <div className="space-y-6">
                 <h3 className="text-xl font-bold text-secondary font-mono border-b border-border pb-2">02 // WODA TO WRÓG NR 1</h3>
                 <p className="text-gray-300">
                   Najczęstszą przyczyną roszczeń z ubezpieczenia OC (tzw. "czyste straty finansowe") w biurach i domach są spuchnięte panele podłogowe.
                 </p>
                 
                 <div className="space-y-4 mt-4">
                   <div className="bg-card p-4 rounded border-l-4 border-orange-500">
                      <strong className="text-white block mb-2">Podłogi Laminowane (Panele)</strong>
                      <p className="text-sm text-gray-400">
                        Zbudowane z płyty wiórowej (HDF) pokrytej laminatem. Wierzchnia warstwa jest wodoodporna, ale <strong>łączenia (zamki) nie są</strong>.
                        <br/><br/>
                        <strong>Technika mycia:</strong> Mop musi być "pół-suchy" (wilgotny tylko w dotyku). Wyciskaj go z maksymalną siłą w prasie Splast. Pozostawienie kałuży wody spowoduje wniknięcie jej w szczeliny i nieodwracalne spuchnięcie krawędzi ("łódkowanie").
                      </p>
                   </div>
                   
                   <div className="bg-card p-4 rounded border-l-4 border-yellow-600">
                      <strong className="text-white block mb-2">Drewno Olejowane i Lakierowane</strong>
                      <p className="text-sm text-gray-400">
                         <strong>Drewno Olejowane:</strong> Wymaga specjalnej pielęgnacji. Użycie silnej zasady (pH &gt; 10) lub gorącej wody "wyługuje" (wypłucze) olej, pozostawiając szare, suche plamy. Używaj tylko dedykowanych środków lub neutralnego TopEfekt Normal.
                         <br/>
                         <strong>Drewno Lakierowane:</strong> Bardziej odporne, ale pęknięcia w lakierze mogą chłonąć wodę, powodując szarzenie drewna pod spodem.
                      </p>
                   </div>
                 </div>
             </div>
         )
      },
      {
        title: 'Lekcja 3: Metale: Stal Nierdzewna vs Chrom',
        content: (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-secondary font-mono border-b border-border pb-2">03 // INOX CZY CHROM?</h3>
            <p className="text-gray-300">
              Rozróżnienie stali nierdzewnej (Inox) od powierzchni chromowanych jest kluczowe w kuchniach i windach. Błąd oznacza trwałe smugi lub zniszczenie powłoki.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="bg-surface p-5 border border-gray-600 rounded">
                <strong className="text-white block mb-2 text-lg">Stal Nierdzewna (INOX)</strong>
                <p className="text-sm text-gray-400 mb-2">Matowa lub szczotkowana (np. windy, lodówki, okapy).</p>
                <div className="bg-gray-800 p-3 rounded text-xs text-gray-300">
                  <strong>Pielęgnacja:</strong> Wymaga okresowego <strong>olejowania</strong>. Używamy specjalnych preparatów na bazie oliwy (np. Tenzi Stal Nierdzewna), aby nadać jednolity połysk i zabezpieczyć przed "palcowaniem".
                  <br/><br/>
                  <span className="text-danger font-bold">ZAKAZ:</span> Środków z chlorem (powodują wżery korozyjne) oraz mleczek do szorowania (rysują powierzchnię).
                </div>
              </div>
              <div className="bg-surface p-5 border border-gray-600 rounded">
                <strong className="text-white block mb-2 text-lg">Chrom</strong>
                <p className="text-sm text-gray-400 mb-2">Błyszcząca powłoka (np. krany, baterie łazienkowe).</p>
                <div className="bg-gray-800 p-3 rounded text-xs text-gray-300">
                   <strong>Pielęgnacja:</strong> Wymaga usuwania osadów wapiennych kwasami (np. WC Sani - ostrożnie, lub kwasek cytrynowy). Po umyciu należy spłukać i wypolerować do sucha, aby uniknąć zacieków. Nie wolno olejować!
                </div>
              </div>
            </div>
          </div>
        )
      }
    ],
    quiz: [
      { id: 1, question: "Jakim środkiem NIE WOLNO myć posadzki z marmuru?", options: ["Wodą", "Środkiem kwaśnym (np. WC Sani, ocet)", "Środkiem neutralnym", "Środkiem lekko zasadowym"], correctAnswer: 1 },
      { id: 2, question: "Dlaczego należy zmoczyć fugi wodą przed użyciem kwasu?", options: ["Żeby kwas nie wsiąkł w fugę i jej nie zniszczył", "Żeby lepiej się pieniło", "Żeby zużyć mniej chemii", "To niepotrzebne"], correctAnswer: 0 },
      { id: 3, question: "Jaka jest najważniejsza zasada przy myciu paneli laminowanych?", options: ["Używać dużo wody", "Mop musi być pół-suchy (mocno wyciśnięty)", "Używać wrzątku", "Myć tylko na kolanach"], correctAnswer: 1 },
      { id: 4, question: "Jak pielęgnujemy matową stal nierdzewną (Inox) w windzie?", options: ["Szorujemy mleczkiem", "Olejujemy specjalnym preparatem", "Myjemy kwasem solnym", "Zostawiamy brudną"], correctAnswer: 1 },
      { id: 5, question: "Czym różni się granit od marmuru w kontekście mycia?", options: ["Niczym", "Granit jest odporny na kwasy, marmur nie", "Marmur jest twardszy", "Granit rozpuszcza się w wodzie"], correctAnswer: 1 }
    ]
  },
  {
    id: 'softskills',
    title: 'Model Operacyjny "Solo Pro" i RODO',
    description: 'Standardy obsługi klienta Premium, etykieta pracy, ochrona danych osobowych (RODO) i logistyka sprzątania.',
    icon: Users,
    priority: 'BIZNESOWE',
    priorityColor: 'text-primary',
    passingScore: 100,
    lessons: [
      {
        title: 'Lekcja 1: Standard Obsługi i Etykieta Premium',
        content: (
          <div className="space-y-6">
             <h3 className="text-xl font-bold text-primary font-mono border-b border-border pb-2">01 // KLIENT PŁACI ZA ZAUFANIE</h3>
             <p className="text-gray-300">
               W modelu JEDG SOLO nie konkurujemy ceną, ale jakością, dyskrecją i poczuciem bezpieczeństwa. Klient powierza nam swój majątek i prywatność.
             </p>
             
             <div className="bg-card p-5 rounded border border-border mt-4">
               <strong className="text-white block mb-3 text-lg">Złote Zasady "Solo Pro":</strong>
               <ul className="list-disc pl-5 text-sm text-gray-400 space-y-3">
                 <li><strong>Wizerunek:</strong> Zawsze czysta, firmowa odzież robocza. Profesjonalny sprzęt (żółty Karcher, niebieski Splast) buduje autorytet. Nigdy nie przychodź z "domowym wiaderkiem".</li>
                 <li><strong>Uczciwość (Polisa OC):</strong> Posiadamy polisę OC na kwotę 500 000 PLN, obejmującą szkody w mieniu powierzonym. Jeśli cokolwiek uszkodzisz (np. zbijesz wazon) – <strong>zgłoś to natychmiast</strong>. Ukrywanie szkody to najgorsze przewinienie, skutkujące utratą klienta i reputacji.</li>
                 <li><strong>Klucze i Alarmy:</strong> Klucze klienta to świętość. Nigdy ich nie opisuj adresem! (Tylko kodem). Kodów alarmowych nie zapisuj w telefonie w jawnej formie.</li>
               </ul>
             </div>
          </div>
        )
      },
      {
         title: 'Lekcja 2: RODO i Prywatność (Polityka Czystego Biurka)',
         content: (
             <div className="space-y-6">
                 <h3 className="text-xl font-bold text-primary font-mono border-b border-border pb-2">02 // OCHRONA DANYCH</h3>
                 <p className="text-gray-300">
                    Jako personel sprzątający masz dostęp do tajemnic przedsiębiorstwa i danych wrażliwych. Obowiązują żelazne zasady.
                 </p>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div className="bg-surface p-5 border border-red-500 rounded">
                        <strong className="text-red-500 block text-lg mb-2">ZAKAZY</strong>
                        <ul className="list-disc pl-5 text-sm text-gray-300 space-y-2">
                           <li><strong>Zero zdjęć:</strong> Całkowity zakaz fotografowania wnętrz biur, dokumentów, ekranów komputerów. Zdjęcia "przed/po" tylko za pisemną zgodą!</li>
                           <li><strong>Zero czytania:</strong> Nie czytaj dokumentów leżących na biurkach. Traktuj je jak puste kartki papieru.</li>
                           <li><strong>Nie wyrzucaj dokumentów:</strong> Kartka z pieczątką leżąca na podłodze to nie śmieć! Połóż ją na biurku. Wyrzucaj tylko to, co jest w koszu.</li>
                        </ul>
                    </div>
                    <div className="bg-surface p-5 border border-green-500 rounded">
                        <strong className="text-green-500 block text-lg mb-2">DOBRE PRAKTYKI</strong>
                        <ul className="list-disc pl-5 text-sm text-gray-300 space-y-2">
                           <li><strong>Clean Desk Policy:</strong> Jeśli klient ma politykę czystego biurka, nie przestawiaj jego rzeczy. Podnieś, przetrzyj pod spodem, odłóż w to samo miejsce.</li>
                           <li><strong>Dyskrecja:</strong> "Co widziałeś w firmie klienta, zostaje w firmie klienta". Nie rozmawiaj o klientach z osobami postronnymi.</li>
                        </ul>
                    </div>
                 </div>
             </div>
         )
      },
      {
         title: 'Lekcja 3: Logistyka Sprzątania (Od Czystego Do Brudnego)',
         content: (
             <div className="space-y-6">
                 <h3 className="text-xl font-bold text-primary font-mono border-b border-border pb-2">03 // EFEKTYWNOŚĆ I HIGIENA</h3>
                 <div className="bg-surface p-5 border border-gray-600 rounded">
                   <strong className="text-white block mb-3 text-lg">Kolejność Stref (Zapobieganie Zakażeniom Krzyżowym)</strong>
                   <p className="text-sm text-gray-400 mb-3">
                     Aby uniknąć przenoszenia bakterii z toalety na biurko prezesa, zawsze zachowuj kolejność:
                   </p>
                   <ol className="list-decimal pl-5 text-sm text-gray-300 space-y-3">
                     <li>
                        <strong>Strefy Czyste (Biura, Sale konferencyjne):</strong> 
                        Zaczynamy tutaj, gdy mopy i ścierki są świeże.
                     </li>
                     <li>
                        <strong>Strefy Socjalne (Kuchnie, Jadalnie):</strong> 
                        Średni stopień zabrudzenia. Wymiana ścierek na dedykowane (Zielone).
                     </li>
                     <li>
                        <strong>Strefy Brudne (Toalety, Magazyny, Wejścia):</strong> 
                        Sprzątamy na samym końcu. Używamy chemii dezynfekującej i ścierek Czerwonych. Po skończeniu toalet, sprzęt trafia do prania/dezynfekcji.
                     </li>
                   </ol>
                   <div className="mt-4 pt-4 border-t border-gray-700">
                      <strong className="text-white block mb-2">Zasada "Góra-Dół" (Top-to-Bottom):</strong>
                      <p className="text-sm text-gray-400">
                        Zawsze sprzątaj od najwyższych partii (szafy, lampy) do najniższych. Kurz opada na dół. Odkurzanie i mycie podłóg to zawsze OSTATNIA czynność w pomieszczeniu.
                      </p>
                   </div>
                 </div>
             </div>
         )
      }
    ],
    quiz: [
      { id: 1, question: "Co robisz, gdy przypadkowo stłuczesz cenny przedmiot u klienta?", options: ["Chowam szczątki do kosza i milczę", "Zgłaszam to natychmiast klientowi i przełożonemu (uruchamiamy OC)", "Próbuję skleić", "Wychodzę z pracy"], correctAnswer: 1 },
      { id: 2, question: "Jaka jest prawidłowa kolejność sprzątania stref, aby zachować higienę?", options: ["Toalety -> Biura -> Kuchnia", "Biura (Czyste) -> Kuchnie -> Toalety (Brudne)", "Obojętnie", "Od wejścia do wyjścia"], correctAnswer: 1 },
      { id: 3, question: "Znalazłeś ważną umowę leżącą na podłodze pod biurkiem. Co robisz?", options: ["Wyrzucam do śmieci", "Kładę na biurku (nie czytam!)", "Czytam i robię zdjęcie", "Zabieram do domu"], correctAnswer: 1 },
      { id: 4, question: "Czy wolno robić zdjęcia pomieszczeń klienta na swoje social media?", options: ["Tak, to darmowa reklama", "Nie, to naruszenie prywatności i RODO (chyba że jest pisemna zgoda)", "Tak, jeśli nie ma ludzi", "Tylko selfie w lustrze"], correctAnswer: 1 },
      { id: 5, question: "Dlaczego najpierw ścieramy kurzem z szaf, a potem odkurzamy?", options: ["Bo tak jest trudniej", "Bo kurz opada na dół (grawitacja)", "Nie ma to znaczenia", "Żeby się bardziej zmęczyć"], correctAnswer: 1 }
    ]
  },
  {
    id: 'waste',
    title: 'Gospodarka Odpadami (Segregacja)',
    description: 'Szczegółowe zasady segregacji 5 frakcji, BHP przy obsłudze koszy i ekologia w biurze.',
    icon: Recycle,
    priority: 'PODSTAWOWE',
    priorityColor: 'text-success',
    passingScore: 90,
    lessons: [
      {
        title: 'Lekcja 1: Jednolity System Segregacji (5 Frakcji)',
        content: (
          <div className="space-y-6">
             <h3 className="text-xl font-bold text-success font-mono border-b border-border pb-2">01 // KOLORY RECYKLINGU</h3>
             <p className="text-gray-300">
               W Polsce obowiązuje Jednolity System Segregacji Odpadów. Jako profesjonaliści, musimy korygować błędy pracowników biurowych i sami przestrzegać zasad.
             </p>

             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-sm mt-4">
                 <div className="border border-blue-500 p-4 rounded bg-blue-900/10">
                    <strong className="text-blue-400 block text-lg mb-2">PAPIER (Niebieski)</strong>
                    <p className="text-gray-300 mb-2">Czysty, suchy papier, karton, tektura, zeszyty.</p>
                    <div className="text-xs text-gray-500 bg-black/20 p-2 rounded">
                        <strong>ZAKAZ:</strong> Tłusty papier po pizzy, zużyte chusteczki/ręczniki (to bio-zagrożenie), papier lakierowany/foliowany, paragony (druk termiczny).
                    </div>
                 </div>
                 <div className="border border-yellow-500 p-4 rounded bg-yellow-900/10">
                    <strong className="text-yellow-400 block text-lg mb-2">METALE I TWORZYWA (Żółty)</strong>
                    <p className="text-gray-300 mb-2">Zgniecione butelki PET, puszki, kartony po mleku/soku (TetraPak - wielomateriałowe), folia aluminiowa.</p>
                    <div className="text-xs text-gray-500 bg-black/20 p-2 rounded">
                        <strong>ZAKAZ:</strong> Butelki z zawartością, puszki po farbach/lakierach (odpad niebezpieczny), zużyte baterie.
                    </div>
                 </div>
                 <div className="border border-green-500 p-4 rounded bg-green-900/10">
                    <strong className="text-green-500 block text-lg mb-2">SZKŁO (Zielony)</strong>
                    <p className="text-gray-300 mb-2">Szklane butelki i słoiki (bez nakrętek).</p>
                    <div className="text-xs text-gray-500 bg-black/20 p-2 rounded">
                        <strong>ZAKAZ:</strong> Ceramika, doniczki, porcelana, szkło żaroodporne, lustra, szyby, żarówki (elektrośmieci).
                    </div>
                 </div>
                 <div className="border border-orange-500 p-4 rounded bg-orange-900/10">
                    <strong className="text-orange-400 block text-lg mb-2">BIO (Brązowy)</strong>
                    <p className="text-gray-300 mb-2">Odpadki warzywne i owocowe, fusy z kawy/herbaty.</p>
                    <div className="text-xs text-gray-500 bg-black/20 p-2 rounded">
                        <strong>ZAKAZ:</strong> Mięso, kości, tłuszcze zwierzęce, odchody zwierząt, ziemia, kamienie.
                    </div>
                 </div>
                 <div className="border border-gray-500 p-4 rounded bg-gray-800">
                    <strong className="text-gray-400 block text-lg mb-2">ZMIESZANE (Czarny)</strong>
                    <p className="text-gray-300 mb-2">Wszystko, czego nie da się odzyskać, a nie jest odpadem niebezpiecznym.</p>
                    <ul className="list-disc pl-4 text-xs text-gray-500 space-y-1">
                        <li>Zużyte środki higieniczne, ręczniki papierowe.</li>
                        <li>Mięso i kości.</li>
                        <li>Potłuczone szklanki/talerze.</li>
                        <li>Brudny, tłusty papier.</li>
                        <li>Żwirek z kuwety.</li>
                    </ul>
                 </div>
             </div>
          </div>
        )
      },
      {
         title: 'Lekcja 2: BHP przy Obsłudze Koszy (Ryzyko Zranienia)',
         content: (
             <div className="space-y-6">
                 <h3 className="text-xl font-bold text-danger font-mono border-b border-border pb-2">02 // UWAGA: OSTRZE!</h3>
                 
                 <div className="bg-danger/10 border border-danger p-5 rounded shadow-lg">
                   <strong className="text-danger block text-xl mb-3">ZŁOTA ZASADA: "NIE DOCISKAJ"</strong>
                   <p className="text-gray-300 leading-relaxed">
                     Nigdy, pod żadnym pozorem nie dociskaj śmieci w worku ręką ani nogą (upychanie).
                     <br/><br/>
                     W biurowym koszu, ukryte pod papierem, mogą znajdować się:
                   </p>
                   <ul className="list-disc pl-5 text-gray-300 mt-2 font-bold">
                       <li>Rozbite szkło (np. po butelce wina).</li>
                       <li>Otwarte puszki o ostrych krawędziach.</li>
                       <li>Igły (używane przez diabetyków).</li>
                       <li>Spinacze i zszywki.</li>
                   </ul>
                   <p className="text-sm text-gray-400 mt-4">
                     Skaleczenie w takim środowisku grozi nie tylko bólem, ale poważnym zakażeniem (tężec, WZW, HIV).
                   </p>
                 </div>

                 <div className="bg-card p-5 rounded border border-gray-600 mt-4">
                   <strong className="text-white block mb-3">Procedura Bezpiecznej Wymiany:</strong>
                   <ol className="list-decimal pl-5 text-sm text-gray-400 space-y-2">
                     <li>Chwyć krawędzie worka, wywiń je i zawiąż, zanim wyjmiesz worek z kosza (zmniejsza ryzyko pylenia).</li>
                     <li>Wyjmij worek, trzymając go z dala od ciała (nie opieraj o nogi!).</li>
                     <li>Jeśli worek jest ciężki lub dziwny w dotyku – nie ryzykuj, użyj drugiego worka jako osłony (double-bagging).</li>
                     <li>Nie przesypuj śmieci między koszami. Unosisz wtedy chmurę kurzu, zarodników pleśni i bakterii prosto w swoje drogi oddechowe.</li>
                   </ol>
                 </div>
             </div>
         )
      }
    ],
    quiz: [
      { id: 1, question: "Gdzie wyrzucisz zużyty, brudny ręcznik papierowy?", options: ["Do papieru (Niebieski)", "Do zmieszanych (Czarny)", "Do bio (Brązowy)", "Do szkła"], correctAnswer: 1 },
      { id: 2, question: "Gdzie wyrzucisz karton po mleku (TetraPak)?", options: ["Do papieru", "Do metali i tworzyw (Żółty)", "Do zmieszanych", "Do bio"], correctAnswer: 1 },
      { id: 3, question: "Dlaczego nie wolno dociskać śmieci ręką w koszu?", options: ["Bo to niehigieniczne", "Bo można się skaleczyć ukrytym szkłem lub igłą", "Bo worek pęknie", "Bo szef zabrania"], correctAnswer: 1 },
      { id: 4, question: "Gdzie wyrzucisz paragon ze sklepu?", options: ["Do papieru", "Do zmieszanych (to papier termiczny, nie makulatura)", "Do plastiku", "Do bio"], correctAnswer: 1 },
      { id: 5, question: "Gdzie wyrzucisz potłuczoną szklankę?", options: ["Do szkła (Zielony)", "Do zmieszanych (Czarny) - to inna temperatura topnienia niż butelki", "Do plastiku", "Do bio"], correctAnswer: 1 }
    ]
  }
];