import React from 'react';
import { ShieldAlert, FlaskConical, Wrench, Zap, Layers, Users, Recycle, Droplets, HeartPulse, Sparkles, Stethoscope, Utensils, Flame, Maximize, Box, Truck, ClipboardList } from 'lucide-react';
import { Module, ResourceItem } from './types';

export const MODULES: Module[] = [
  {
    id: 'bhp_safety',
    title: 'BHP: Ochrona Zdrowia i Procedury Awaryjne',
    description: 'Fundament pracy profesjonalisty. Zasady doboru Środków Ochrony Indywidualnej (PPE), obsługa apteczki przemysłowej DIN 13157 oraz procedury postępowania w razie skażeń chemicznych.',
    icon: ShieldAlert,
    priority: 'KRYTYCZNE',
    priorityColor: 'text-primary',
    passingScore: 100,
    lessons: [
      {
        title: 'Lekcja 1: Środki Ochrony Indywidualnej (PPE) - Dobór i Stosowanie',
        content: (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary font-mono border-b border-border pb-2">01 // TARCZA OCHRONNA</h3>
            
            <p className="text-gray-300">
              W pracy z chemią profesjonalną (zakres pH 1-14) nie ma miejsca na błędy. Twoje zdrowie zależy od rygorystycznego stosowania odpowiednich środków ochrony.
            </p>

            <div className="space-y-4 mt-6">
               <div className="bg-card p-5 rounded border-l-4 border-blue-500">
                  <strong className="text-blue-400 block text-lg mb-2">1. Rękawice Nitrylowe (Krótkie)</strong>
                  <p className="text-sm text-gray-300 mb-2">
                    Podstawowa ochrona dłoni. Używamy ich do prac "lekkich", gdzie ryzyko poparzenia jest minimalne, ale wymagana jest higiena i bariera od brudu.
                  </p>
                  <ul className="list-disc pl-5 text-xs text-gray-400">
                    <li><strong>Zastosowanie:</strong> Mycie szyb (<em>Tenzi Top Glass</em>), kurzenie mebli (<em>Uni Clean</em>), dezynfekcja klamek (<em>Alcovirex</em>).</li>
                    <li><strong>Zasada:</strong> Wymieniaj co 45 minut lub natychmiast po uszkodzeniu mechanicznym.</li>
                  </ul>
               </div>

               <div className="bg-card p-5 rounded border-l-4 border-red-500">
                  <strong className="text-red-400 block text-lg mb-2">2. Rękawice Chemoodporne (Długie/Pancerne)</strong>
                  <p className="text-sm text-gray-300 mb-2">
                    <span className="text-red-500 font-bold uppercase">Wyposażenie obowiązkowe</span> przy pracy z koncentratami oraz skrajnym pH. Chronią przedramiona przed chlapnięciem żrącą substancją.
                  </p>
                  <ul className="list-disc pl-5 text-xs text-gray-400">
                    <li><strong>Zastosowanie:</strong> Kwasy silne (<em>Tenzi WC Sani, Derast</em>), Zasady silne (<em>Gran Smog, GranClor 2006</em>).</li>
                    <li><strong>Zagrożenie:</strong> Kontakt skóry z pH 1 lub pH 14 powoduje natychmiastową martwicę tkanek.</li>
                  </ul>
               </div>

               <div className="bg-card p-5 rounded border-l-4 border-yellow-500">
                  <strong className="text-yellow-400 block text-lg mb-2">3. Ochrona Oczu i Dróg Oddechowych</strong>
                  <ul className="list-disc pl-5 text-sm text-gray-300 space-y-2">
                    <li><strong>Gogle zamknięte (EN 166):</strong> Zakładamy ZAWSZE podczas przelewania chemii z kanistrów oraz przy myciu powierzchni powyżej poziomu głowy (ryzyko ściekania kwasu na twarz).</li>
                    <li><strong>Półmaska FFP2/FFP3:</strong> Zakładamy podczas opróżniania odkurzacza <em>Karcher WD 3</em> (ochrona przed pyłem kwarcowym) oraz w strefach o dużym zapyleniu.</li>
                  </ul>
               </div>
            </div>
          </div>
        )
      },
      {
        title: 'Lekcja 2: Procedury Ratunkowe i Organizacja Miejsca Pracy',
        content: (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-success font-mono border-b border-border pb-2">02 // PROCEDURY AWARYJNE</h3>
            
            <div className="bg-surface p-6 rounded border border-gray-700 shadow-xl mb-6">
               <strong className="block text-white mb-4 text-xl border-b border-gray-600 pb-2">Scenariusz: Skażenie Oka Chemią</strong>
               <div className="bg-red-900/20 p-4 rounded mb-4 border border-red-500/50">
                 <p className="text-red-200 font-bold text-center">CZAS REAKCJI JEST KLUCZOWY: MASZ 10 SEKUND</p>
               </div>

               <ol className="list-decimal pl-5 text-gray-300 space-y-4 text-sm">
                 <li>
                    <strong>Nie panikuj, nie biegnij:</strong> Natychmiast sięgnij po butelkę z płuczką do oczu (Eye Wash) z zestawu BHP.
                 </li>
                 <li>
                    <strong>Aktywacja:</strong> Przekręć energicznie nakrętkę płuczki, aby zerwać plombę.
                 </li>
                 <li>
                    <strong>Płukanie:</strong> Przyłóż wyprofilowaną końcówkę do oka. Odchyl głowę do tyłu. Ściskaj butelkę, zapewniając ciągły strumień płynu.
                 </li>
                 <li>
                    <strong>Czas trwania:</strong> Płucz oko nieprzerwanie przez minimum <strong>15 minut</strong>. Płyn buforowy neutralizuje pH znacznie skuteczniej niż zwykła woda.
                 </li>
                 <li>
                    <strong>Pomoc medyczna:</strong> Wezwij pogotowie. Przekaż ratownikom <strong>Kartę Charakterystyki (SDS)</strong> produktu, który spowodował wypadek.
                 </li>
               </ol>
            </div>

            <div className="bg-card p-5 rounded border border-yellow-600/50">
                <h4 className="font-bold text-yellow-500 mb-2 flex items-center gap-2">
                    <ShieldAlert size={20} />
                    Oznakowanie Strefy Pracy
                </h4>
                <p className="text-sm text-gray-300">
                    Rozstawienie żółtego znaku ostrzegawczego <strong>"Uwaga Śliska Podłoga" (Potykacz)</strong> jest prawnym obowiązkiem przed rozpoczęciem mycia posadzek.
                    <br/><br/>
                    <strong>Brak znaku = Pełna odpowiedzialność cywilna i karna pracownika</strong> w przypadku poślizgnięcia się osoby trzeciej. Znak zdejmujemy dopiero po całkowitym wyschnięciu podłogi.
                </p>
            </div>
          </div>
        )
      }
    ],
    quiz: [
      { id: 1, question: "Jakich rękawic użyjesz do mycia piekarnika preparatem Gran Smog (pH 14)?", options: ["Zwykłych nitrylowych", "Długich chemoodpornych", "Bawełnianych", "Żadnych"], correctAnswer: 1 },
      { id: 2, question: "Co jest najważniejszym działaniem przy dostaniu się chemii do oka?", options: ["Pocieranie oka ręką", "Natychmiastowe użycie płuczki i płukanie przez 15 min", "Zamknięcie oka i czekanie", "Przemycie wodą utlenioną"], correctAnswer: 1 },
      { id: 3, question: "W jakiej sytuacji użycie maski FFP2 jest obowiązkowe?", options: ["Podczas mycia okien", "Podczas opróżniania odkurzacza WD 3 z pyłu", "Zawsze w pracy", "Tylko w toalecie"], correctAnswer: 1 },
      { id: 4, question: "Kiedy można zdjąć znak 'Śliska Podłoga'?", options: ["Zaraz po umyciu", "Gdy podłoga jest całkowicie sucha", "Gdy kończę zmianę", "Nigdy"], correctAnswer: 1 }
    ]
  },
  {
    id: 'chem_system',
    title: 'Technologia Chemiczna: System Tenzi',
    description: 'Zaawansowana wiedza o produktach Tenzi. Skala pH w praktyce, zasady bezpiecznego dozowania (Menzurka) oraz tablica kompatybilności materiałowej.',
    icon: FlaskConical,
    priority: 'TECHNICZNE',
    priorityColor: 'text-secondary',
    passingScore: 90,
    lessons: [
      {
        title: 'Lekcja 1: Skala pH - Kompas Profesjonalisty',
        content: (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-secondary font-mono border-b border-border pb-2">01 // DOBÓR CHEMII</h3>
            <p className="text-gray-300">
              Dobór środka o niewłaściwym pH to najszybsza droga do trwałego zniszczenia powierzchni. Zapamiętaj poniższy podział asortymentu:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
               {/* ACID */}
               <div className="bg-red-900/10 border border-red-500 p-5 rounded hover:bg-red-900/20 transition-colors">
                  <strong className="text-red-400 block text-lg mb-2">KWASY (pH 0-4)</strong>
                  <p className="text-xs text-gray-400 mb-3 font-bold uppercase tracking-wider">ZASTOSOWANIE: KAMIENIE, RDZA, OSADY</p>
                  <ul className="text-xs text-white list-disc pl-4 space-y-2 leading-relaxed">
                    <li><strong>WC Sani (pH 1):</strong> Gruntowne mycie toalet. Rozpuszcza kamień wodny i moczowy. <em>Uwaga: Żrący!</em></li>
                    <li><strong>Derast (pH 1):</strong> Ekstremalne odkamienianie, usuwanie betonu i rdzy.</li>
                    <li><strong>Sanit Lux (pH 2):</strong> Codzienne mycie łazienek, armatury (bezpieczniejszy dla chromu).</li>
                    <li><strong>Copper Cleaner:</strong> Specjalistyczny kwas do rozjaśniania miedzi i mosiądzu.</li>
                    <li><strong>Textil-Ex:</strong> Płukanie ekstrakcyjne – neutralizuje zasadowe pozostałości po praniu.</li>
                  </ul>
               </div>

               {/* NEUTRAL */}
               <div className="bg-blue-900/10 border border-blue-500 p-5 rounded hover:bg-blue-900/20 transition-colors">
                  <strong className="text-blue-400 block text-lg mb-2">NEUTRALNE (pH 6-8)</strong>
                  <p className="text-xs text-gray-400 mb-3 font-bold uppercase tracking-wider">ZASTOSOWANIE: CODZIENNE MYCIE, DELIKATNE</p>
                  <ul className="text-xs text-white list-disc pl-4 space-y-2 leading-relaxed">
                    <li><strong>Top Glass (pH 7):</strong> Szyby, lustra, ekrany. Nie pozostawia smug.</li>
                    <li><strong>Uni Clean (pH 7):</strong> Uniwersalny – meble, biurka, ramy okienne, plastiki.</li>
                    <li><strong>Alcovirex:</strong> Szybka dezynfekcja alkoholowa (nie wymaga spłukiwania).</li>
                    <li><strong>Odor Off Nano:</strong> Neutralizacja przykrych zapachów (nie maskowanie, lecz usuwanie).</li>
                  </ul>
               </div>

               {/* ALKALI */}
               <div className="bg-green-900/10 border border-green-500 p-5 rounded hover:bg-green-900/20 transition-colors">
                  <strong className="text-green-400 block text-lg mb-2">ZASADY (pH 10-14)</strong>
                  <p className="text-xs text-gray-400 mb-3 font-bold uppercase tracking-wider">ZASTOSOWANIE: TŁUSZCZ, BIAŁKO, SMARY</p>
                  <ul className="text-xs text-white list-disc pl-4 space-y-2 leading-relaxed">
                    <li><strong>Gran Smog (pH 14):</strong> Usuwanie przypaleń, tłuszczu w kuchni, sadzy. <em>Niszczy aluminium!</em></li>
                    <li><strong>GranClor 2006 (pH 14):</strong> Podchloryn sodu. Wybielanie, pleśń, dezynfekcja sanitarna.</li>
                    <li><strong>Textil Wash (pH 9):</strong> Enzymatyczne pranie dywanów. Rozpuszcza białka.</li>
                    <li><strong>TopEfekt Oranż:</strong> Mycie podłóg. Zawiera alkohole, szybko odparowuje, nabłyszcza.</li>
                  </ul>
               </div>
            </div>
          </div>
        )
      },
      {
        title: 'Lekcja 2: Zasady Krytyczne i Dozowanie',
        content: (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-danger font-mono border-b border-border pb-2">02 // ŚMIERTELNE ZAGROŻENIA</h3>
            
            <div className="bg-card p-6 border-l-4 border-danger rounded mb-6">
                <h4 className="font-bold text-white text-xl mb-4 flex items-center gap-3">
                   <Flame className="text-danger" size={28} /> ZAKAZ ŁĄCZENIA PRODUKTÓW
                </h4>
                <div className="bg-black/40 p-5 rounded font-mono text-sm text-red-100 border border-red-900/50">
                    <p className="mb-2 font-bold">RÓWNANIE REAKCJI:</p>
                    Tenzi GranClor 2006 (Chlor) + Tenzi WC Sani (Kwas) <br/>
                    = <strong className="text-red-500 text-lg">GAZOWY CHLOR (Cl₂)</strong>
                </div>
                <p className="text-sm text-gray-300 mt-4">
                    Powstały gaz jest bojowym środkiem trującym. Powoduje natychmiastowe chemiczne poparzenie płuc, obrzęk i śmierć przez uduszenie. Nigdy nie wlewaj kwasu do toalety, w której jest już chlor (np. kostka toaletowa z chlorem).
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="bg-surface p-5 rounded border border-gray-700">
                  <strong className="text-white block mb-3 text-lg">Konserwacja Stali (Inox)</strong>
                  <p className="text-sm text-gray-400 mb-3">
                     Preparat <strong>Tenzi Stal Nierdzewna</strong> to NIE jest środek myjący. To olej konserwujący.
                  </p>
                  <ul className="list-disc pl-5 text-xs text-gray-400 space-y-1">
                     <li>Stosujemy go <strong>tylko</strong> na czystą, suchą i odtłuszczoną powierzchnię.</li>
                     <li>Tworzy warstwę hydrofobową (zabezpiecza przed "palcowaniem").</li>
                     <li>Nigdy nie zmywaj go wodą – powstaną tłuste plamy.</li>
                  </ul>
               </div>
               
               <div className="bg-surface p-5 rounded border border-gray-700">
                  <strong className="text-white block mb-3 text-lg">Precyzja Dozowania</strong>
                  <div className="flex items-start gap-4">
                      <Utensils className="text-gray-500 mt-1" />
                      <div>
                          <p className="text-sm text-gray-400 mb-2">
                             Dozowanie "na oko" jest zabronione. Używaj menzurki (100ml / 500ml).
                          </p>
                          <p className="text-xs text-gray-500 italic">
                             Zasada BHP: "Pamiętaj chemiku młody, wlewaj zawsze kwas do wody." (Unikasz pryskania wrzącego koncentratu).
                          </p>
                      </div>
                  </div>
               </div>
            </div>
          </div>
        )
      }
    ],
    quiz: [
      { id: 1, question: "Co się stanie po zmieszaniu GranClor (Chlor) z WC Sani (Kwas)?", options: ["Nic groźnego", "Wydzieli się śmiertelnie trujący gazowy chlor", "Powstanie lepszy środek czyszczący", "Powstanie duża piana"], correctAnswer: 1 },
      { id: 2, question: "Jaki odczyn pH ma preparat Tenzi Gran Smog?", options: ["Kwaśny (pH 1)", "Neutralny (pH 7)", "Silnie Zasadowy (pH 14)", "Lekko kwaśny"], correctAnswer: 2 },
      { id: 3, question: "Do czego służy Tenzi Stal Nierdzewna?", options: ["Do mycia brudnych garnków", "Tylko do konserwacji i nabłyszczania czystej stali (olejowanie)", "Do usuwania kamienia", "Do dezynfekcji rąk"], correctAnswer: 1 },
      { id: 4, question: "Dlaczego bezwzględnie używamy menzurki?", options: ["Aby zachować właściwe stężenie roztworu i bezpieczeństwo", "Bo tak jest ładniej", "Żeby płyn starczył na dłużej", "Nie trzeba jej używać"], correctAnswer: 0 }
    ]
  },
  {
    id: 'karcher_machine',
    title: 'Park Maszynowy: Karcher WD 3 & SE 4',
    description: 'Instrukcja obsługi sprzętu Karcher. Procedura pracy na sucho (filtry) oraz pełny proces prania ekstrakcyjnego dywanów metodą 4 kroków.',
    icon: Zap,
    priority: 'EKSPERCKIE',
    priorityColor: 'text-purple-400',
    passingScore: 95,
    lessons: [
      {
        title: 'Lekcja 1: Karcher WD 3 - Odkurzacz Przemysłowy',
        content: (
          <div className="space-y-6">
             <h3 className="text-xl font-bold text-purple-400 font-mono border-b border-border pb-2">01 // PRACA SUCHO / MOKRO</h3>
             <p className="text-gray-300">
                Karcher WD 3 to jednostka uniwersalna. Kluczem do jej trwałości jest odpowiednie zarządzanie systemem filtracji w zależności od trybu pracy.
             </p>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="bg-card p-5 rounded border border-gray-600">
                   <strong className="text-white block mb-3 text-lg border-b border-gray-700 pb-1">TRYB SUCHO (Pył, Piasek, Gruz)</strong>
                   <ul className="list-disc pl-5 text-sm text-gray-400 space-y-3">
                      <li>
                          <strong>Worek Flizelinowy (Fleece):</strong> <span className="text-green-500 font-bold bg-green-900/20 px-1 rounded">OBOWIĄZKOWY</span>. 
                          Worek stanowi pierwszą barierę filtracyjną. Praca bez worka spowoduje natychmiastowe zatkanie filtra głównego (Cartridge) i przegrzanie silnika.
                      </li>
                      <li><strong>Filtr Cartridge:</strong> Zamontowany i suchy.</li>
                   </ul>
                </div>
                <div className="bg-card p-5 rounded border border-gray-600">
                   <strong className="text-white block mb-3 text-lg border-b border-gray-700 pb-1">TRYB MOKRO (Woda, Błoto, Awaria)</strong>
                   <ul className="list-disc pl-5 text-sm text-gray-400 space-y-3">
                      <li>
                          <strong>Worek Flizelinowy:</strong> <span className="text-red-500 font-bold bg-red-900/20 px-1 rounded">DEMONTAŻ</span>. 
                          Praca z workiem przy wodzie doprowadzi do jego rozmoczenia i rozerwania wewnątrz zbiornika.
                      </li>
                      <li><strong>Filtr Cartridge:</strong> Pozostaje zamontowany (po pracy należy go wyjąć i wysuszyć).</li>
                      <li><strong>Pływak:</strong> Gdy zbiornik (17L) się napełni, pływak odetnie ssanie (zmieni się dźwięk silnika). Należy wtedy opróżnić zbiornik.</li>
                   </ul>
                </div>
             </div>
             
             <div className="bg-purple-900/10 p-4 rounded text-xs text-purple-200 border-l-2 border-purple-500 mt-4">
                <strong>Funkcja Wydmuchu:</strong> Przełóż wąż ssący do otworu wylotowego z tyłu odkurzacza. Użyj tej funkcji do wydmuchania kurzu z żeberek kaloryferów lub trudno dostępnych miejsc PRZED rozpoczęciem odkurzania/mycia podłogi.
             </div>
          </div>
        )
      },
      {
        title: 'Lekcja 2: Pranie Ekstrakcyjne (Karcher SE 4)',
        content: (
          <div className="space-y-6">
             <h3 className="text-xl font-bold text-purple-400 font-mono border-b border-border pb-2">02 // PROCES PRANIA (4 KROKI)</h3>
             <p className="text-gray-300">
                Profesjonalne pranie to proces chemiczny, a nie tylko mechaniczny. Aby skutecznie usunąć brud, musisz przestrzegać procedury "4 Kroków".
             </p>

             <div className="space-y-4 mt-6">
                <div className="flex gap-4 p-4 bg-surface rounded border border-gray-700">
                   <div className="min-w-[32px] h-[32px] rounded-full bg-gray-600 flex items-center justify-center text-white font-bold border border-gray-400">1</div>
                   <div>
                      <strong className="text-white block text-lg">Odkurzanie Wstępne (Na sucho)</strong>
                      <p className="text-sm text-gray-400 mt-1">
                         Użyj Karcher WD 3, aby usunąć piasek, włosy i luźny brud. <span className="text-red-400">Pominięcie tego kroku spowoduje powstanie błota, które zatka dyszę piorącą SE 4.</span>
                      </p>
                   </div>
                </div>

                <div className="flex gap-4 p-4 bg-surface rounded border border-gray-700">
                   <div className="min-w-[32px] h-[32px] rounded-full bg-purple-600 flex items-center justify-center text-white font-bold border border-purple-400">2</div>
                   <div>
                      <strong className="text-white block text-lg">Pre-spray (Rozpuszczanie Brudu)</strong>
                      <p className="text-sm text-gray-400 mt-1">
                         Sporządź roztwór <strong>Tenzi Textil Wash</strong> w ciepłej wodzie (max 50°C - wyższa temperatura zabije enzymy).
                         Nanies oprysk na dywan używając SE 4 (włączona tylko pompa, wyłączona turbina).
                         <strong>Odczekaj 10-15 minut.</strong> To czas dla chemii na zadziałanie.
                      </p>
                   </div>
                </div>

                <div className="flex gap-4 p-4 bg-surface rounded border border-gray-700">
                   <div className="min-w-[32px] h-[32px] rounded-full bg-purple-600 flex items-center justify-center text-white font-bold border border-purple-400">3</div>
                   <div>
                      <strong className="text-white block text-lg">Ekstrakcja (Pranie Właściwe)</strong>
                      <p className="text-sm text-gray-400 mt-1">
                         Włącz pompę i turbinę ssącą. Przesuwaj ssawkę powoli po dywanie (do siebie), wtryskując roztwór i natychmiast go odsysając. Powtórz w miejscach silnie zabrudzonych.
                      </p>
                   </div>
                </div>

                <div className="flex gap-4 p-4 bg-surface rounded border border-gray-700">
                   <div className="min-w-[32px] h-[32px] rounded-full bg-blue-500 flex items-center justify-center text-white font-bold border border-blue-400">4</div>
                   <div>
                      <strong className="text-white block text-lg">Płukanie (Rinse / Neutralizacja)</strong>
                      <p className="text-sm text-gray-400 mt-1">
                         Wylej resztki płynu piorącego z czystego zbiornika. Wlej czystą wodę z dodatkiem <strong>Tenzi Textil-Ex</strong>.
                         Przepłucz dywan samą wodą z Textil-Ex. Proces ten usuwa resztki detergentu, przywraca właściwe pH włókna i zapobiega szybkiemu ponownemu brudzeniu się dywanu.
                      </p>
                   </div>
                </div>
             </div>

             <div className="bg-red-900/20 p-5 border border-red-500 rounded mt-6">
                <strong className="text-red-400 block mb-2 flex items-center gap-2"><ShieldAlert size={18}/> OCHRONA TURBINY (Odpienianie)</strong>
                <p className="text-sm text-gray-300">
                   Jeśli w zbiorniku brudnej wody pojawi się piana (częste przy dywanach pranych wcześniej domowymi sposobami), natychmiast wlej do <strong>brudnego zbiornika</strong> 50ml <strong>Tenzi De-Foam</strong>. Piana zassana przez turbinę trwale uszkodzi silnik odkurzacza.
                </p>
             </div>
          </div>
        )
      }
    ],
    quiz: [
      { id: 1, question: "Jaki jest pierwszy krok przy praniu dywanu?", options: ["Zmoczenie go wodą", "Dokładne odkurzenie na sucho (WD 3)", "Posypanie proszkiem", "Nałożenie odplamiacza"], correctAnswer: 1 },
      { id: 2, question: "Jaka jest rola Tenzi Textil-Ex w procesie prania?", options: ["Służy do prania głównego", "Służy do płukania (Rinse) i neutralizacji pH włókna", "Służy do mycia szyb", "Jest to odpieniacz"], correctAnswer: 1 },
      { id: 3, question: "Gdzie wlewamy preparat odpieniający (De-Foam)?", options: ["Na dywan", "Do zbiornika z czystą wodą", "Do zbiornika z brudną wodą", "Do zlewu"], correctAnswer: 2 },
      { id: 4, question: "Czy przy pracy na mokro odkurzaczem WD 3 używamy worka?", options: ["Tak, zawsze", "Nie, worek należy wyjąć", "Tylko jeśli woda jest brudna", "Obojętnie"], correctAnswer: 1 }
    ]
  },
  {
      id: 'windows_tech',
      title: 'Techniki Okienne: Moerman & Ergotec',
      description: 'System Moerman Excelerator 2.0 (F*LIQ), bezpieczna praca skrobakiem na mokro oraz obsługa kija teleskopowego.',
      icon: Maximize,
      priority: 'EKSPERCKIE',
      priorityColor: 'text-blue-400',
      passingScore: 90,
      lessons: [
          {
              title: 'Lekcja 1: System Moerman Excelerator 2.0 (Flip Concept)',
              content: (
                  <div className="space-y-6">
                      <h3 className="text-xl font-bold text-blue-400 font-mono border-b border-border pb-2">01 // FLIP & CLEAN</h3>
                      <p className="text-gray-300">
                          Pracujesz na najnowocześniejszym sprzęcie na rynku. Zestaw składa się z: Uchwytu Excelerator 2.0, Szyny Liquidator 3.0 (ścięte końce) oraz wkładu myjącego F*LIQ.
                      </p>

                      <div className="bg-surface p-5 border border-gray-600 rounded">
                          <strong className="text-white block mb-3 text-lg">Procedura Pracy F*LIQ:</strong>
                          <ol className="list-decimal pl-5 text-sm text-gray-400 space-y-3">
                              <li><strong>Namaczanie (Washer):</strong> Ustaw wkład F*LIQ pod szyną. Namocz obficie szybę roztworem <em>Tenzi Top Glass</em>.</li>
                              <li><strong>FLIP (Obrót):</strong> Wykonaj szybki ruch nadgarstkiem (lub uderz lekko o ramę okna), aby wkład przeskoczył na drugą stronę ("Squeegee").</li>
                              <li><strong>Ściąganie (Squeegee):</strong> Ściągnij wodę gumą Liquidator. Dzięki unikalnym, ściętym końcówkom szyny, woda nie zostaje przy uszczelkach, co eliminuje konieczność docierania szmatką ("detalowania").</li>
                          </ol>
                      </div>

                      <div className="mt-6 p-4 bg-blue-900/10 rounded border border-blue-500/30">
                          <strong className="text-white block mb-2">Konfiguracja Kątów Uchwytu:</strong>
                          <ul className="list-disc pl-5 text-sm text-gray-400 space-y-2">
                              <li><strong>10° / 25°:</strong> Ustawienia do standardowej pracy ręcznej ("z ręki").</li>
                              <li><strong>-20° (Kąt Negatywny):</strong> <span className="text-blue-400 font-bold">USTAWIENIE KLUCZOWE</span> do pracy na kiju teleskopowym. Pozwala na idealny docisk gumy do szyby podczas stania pod oknem.</li>
                          </ul>
                      </div>
                  </div>
              )
          },
          {
              title: 'Lekcja 2: Narzędzia Specjalne - Skrobak i Kij',
              content: (
                  <div className="space-y-6">
                      <h3 className="text-xl font-bold text-blue-400 font-mono border-b border-border pb-2">02 // NARZĘDZIA DODATKOWE</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-card p-5 rounded border border-red-500/30 hover:border-red-500/70 transition-colors">
                              <strong className="text-white block mb-3 text-lg border-b border-gray-700 pb-1">Skrobak Unger Ergotec 10cm</strong>
                              <p className="text-sm text-gray-300 mb-3">
                                  Narzędzie ostre jak żyletka. Służy do usuwania naklejek, resztek farby, kleju i ptasich odchodów.
                              </p>
                              <div className="bg-red-900/20 p-3 rounded text-xs text-red-200 font-bold border-l-4 border-red-500 mb-3">
                                  ZASADA KARDYNALNA: SKROBIEMY TYLKO MOKRĄ SZYBĘ!
                              </div>
                              <ul className="list-disc pl-5 text-xs text-gray-400 space-y-1">
                                  <li>Skrobanie suchego szkła = TRWAŁE RYSY.</li>
                                  <li>Ruch tylko w jedną stronę (do przodu).</li>
                                  <li>Nigdy nie cofaj skrobaka po szybie (ryzyko wciągnięcia drobiny piasku pod ostrze, która porysuje szkło).</li>
                              </ul>
                          </div>

                          <div className="bg-card p-5 rounded border border-blue-500/30 hover:border-blue-500/70 transition-colors">
                              <strong className="text-white block mb-3 text-lg border-b border-gray-700 pb-1">Kij Teleskopowy (3-4m)</strong>
                              <p className="text-sm text-gray-300 mb-3">
                                  Umożliwia bezpieczną pracę z poziomu "zero" (bez drabiny) do wysokości 1. piętra.
                              </p>
                              <ul className="list-disc pl-5 text-xs text-gray-400 mt-2 space-y-2">
                                  <li>Zawsze sprawdzaj blokady segmentów przed podniesieniem kija.</li>
                                  <li>Używaj uchwytu Moerman w ustawieniu -20°.</li>
                                  <li><strong>BHP:</strong> Bezwzględny zakaz pracy w pobliżu napowietrznych linii energetycznych (Aluminium i woda przewodzą prąd!).</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              )
          }
      ],
      quiz: [
          { id: 1, question: "Jaki jest główny warunek użycia skrobaka do szyb?", options: ["Szyba musi być sucha", "Szyba musi być mocno namoczona", "Skrobak musi być plastikowy", "Skrobiemy tylko w nocy"], correctAnswer: 1 },
          { id: 2, question: "Co umożliwia wkład F*LIQ w systemie Moerman?", options: ["Mycie i ściąganie wody jednym narzędziem bez jego zmiany (Flip)", "Tylko polerowanie", "Służy jako uchwyt", "Chroni szybę przed słońcem"], correctAnswer: 0 },
          { id: 3, question: "Jaki kąt uchwytu ustawiasz do pracy na kiju teleskopowym?", options: ["40 stopni", "-20 stopni (negatyw)", "0 stopni", "90 stopni"], correctAnswer: 1 },
          { id: 4, question: "Dlaczego końcówki szyny Liquidator są ścięte pod kątem?", options: ["Dla oszczędności materiału", "Aby eliminować konieczność wycierania krawędzi przy uszczelkach", "To wada fabryczna", "Dla ozdoby"], correctAnswer: 1 }
      ]
  },
  {
    id: 'logistics_workplan',
    title: 'Logistyka i Organizacja Pracy',
    description: 'Zarządzanie sprzętem (Wózek Splast, Skrzynie Kistenberg). Procedury higieny i techniki pracy (Mop Zflow, Góra-Dół).',
    icon: ClipboardList,
    priority: 'PODSTAWOWE',
    priorityColor: 'text-gray-400',
    passingScore: 85,
    lessons: [
      {
        title: 'Lekcja 1: Logistyka Mobilna (Splast & Kistenberg)',
        content: (
            <div className="space-y-6">
                <h3 className="text-xl font-bold text-white font-mono border-b border-border pb-2">01 // ORGANIZACJA SPRZĘTU</h3>
                <p className="text-gray-300">
                  Profesjonalista nie biega po sprzęt. Sprzęt jeździ z nim. Odpowiednia organizacja wózka to 30% szybciej wykonana praca.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                   <div className="bg-surface p-5 border border-gray-600 rounded">
                     <strong className="text-white block mb-3 text-lg border-b border-gray-700 pb-2">Wózek Splast TS-0004 (Strefa Mokra)</strong>
                     <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-blue-500 rounded-full mt-1 border border-white/20"></div>
                            <div>
                                <strong className="text-white text-sm">Wiadro Niebieskie (Czyste)</strong>
                                <p className="text-xs text-gray-400">Tu wlewamy wodę z chemią (np. <em>TopEfekt Oranż</em> lub <em>Uni Clean</em>). W tym wiadrze namaczamy czystego mopa.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-red-500 rounded-full mt-1 border border-white/20"></div>
                            <div>
                                <strong className="text-white text-sm">Wiadro Czerwone (Brudne)</strong>
                                <p className="text-xs text-gray-400">Tu trafiają ścieki wyciśnięte z prasy. Nigdy nie maczamy mopa w czerwonym wiadrze!</p>
                            </div>
                        </div>
                     </div>
                   </div>

                   <div className="bg-surface p-5 border border-gray-600 rounded">
                     <strong className="text-white block mb-3 text-lg border-b border-gray-700 pb-2">System Kistenberg (Strefa Sucha)</strong>
                     <p className="text-sm text-gray-400 mb-3">
                        Skrzynia <em>X Block PRO 30</em> oraz wózek <em>Heavy Mobile</em> służą do transportu "suchych" zasobów.
                     </p>
                     <ul className="list-disc pl-5 text-xs text-gray-400 space-y-2">
                        <li><strong>Poziom Górny:</strong> Rękawice nitrylowe, czyste ścierki z mikrofibry, worki na śmieci, menzurka.</li>
                        <li><strong>Poziom Dolny:</strong> Butelki z chemią (zabezpieczone przed przewróceniem).</li>
                        <li><strong>Kluczowa Zasada Higieny:</strong> Brudne ścierki i pady trafiają do dedykowanego worka, <span className="text-red-400 font-bold">nigdy luzem z powrotem do skrzyni z czystymi!</span></li>
                     </ul>
                   </div>
                </div>
            </div>
        )
      },
      {
        title: 'Lekcja 2: Workflow i Technika Pracy',
        content: (
            <div className="space-y-6">
                <h3 className="text-xl font-bold text-white font-mono border-b border-border pb-2">02 // TECHNIKA SPRZĄTANIA</h3>
                
                <div className="bg-card p-6 rounded border border-gray-700 mb-6">
                    <strong className="text-white block mb-4 text-xl flex items-center gap-2"><Layers size={24}/> Zasada "Góra-Dół" (Top-to-Bottom)</strong>
                    <p className="text-sm text-gray-400 mb-4">Brud spada w dół zgodnie z grawitacją. Sprzątanie w odwrotnej kolejności to strata czasu.</p>
                    <ol className="list-decimal pl-5 text-sm text-gray-300 space-y-3">
                        <li><strong>Sufit i Wysokie Partie:</strong> Omiatanie pajęczyn, czyszczenie kratek wentylacyjnych (użyj <em>Pędzelka Work Stuff</em>).</li>
                        <li><strong>Powierzchnie Pionowe i Meble:</strong> Mycie biurek, szaf, klamek (<em>Uni Clean</em> + Ścierka Niebieska). Detale czyścimy pędzelkiem.</li>
                        <li><strong>Plamy na Ścianach:</strong> Użyj <em>Vileda Miraclean</em> (magiczna gąbka) zwilżonej samą wodą. Uwaga: gąbka jest ścierna, testuj w niewidocznym miejscu.</li>
                        <li><strong>Sanitariaty:</strong> Mycie toalet, umywalek i armatury (<em>Sanit Lux / WC Sani</em>). Fugi szorujemy <em>Szczotką Vikan</em>.</li>
                        <li><strong>Podłoga (Koniec Procesu):</strong> Mycie mopem. Zawsze wychodzisz z pomieszczenia "do tyłu", nie depcząc po umytej powierzchni.</li>
                    </ol>
                </div>

                <div className="bg-surface p-5 rounded border border-gray-700">
                    <strong className="text-white block mb-3 text-lg">Obsługa Mopa Zflow 18" (45cm)</strong>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <p className="text-sm text-gray-400 mb-2">Profesjonalny mop płaski z mikrofibry o wysokiej gęstości.</p>
                            <ul className="list-disc pl-5 text-xs text-gray-400 space-y-1">
                                <li>Mocowanie na rzep (szybka wymiana bez schylania).</li>
                                <li><strong>Technika Ósemkowa:</strong> Prowadź mopa rysując na podłodze leżące ósemki (∞). Dzięki temu brud zbierany jest "do środka" mopa, a nie rozmazywany na boki.</li>
                            </ul>
                        </div>
                        <div className="bg-gray-800 p-3 rounded text-xs text-gray-500 italic border-l-2 border-gray-600">
                            "Mop ma być wilgotny, a nie ociekający wodą. Zbyt mokry mop niszczy panele i zostawia smugi po wyschnięciu."
                        </div>
                    </div>
                </div>
            </div>
        )
      }
    ],
    quiz: [
      { id: 1, question: "Co wlewasz do niebieskiego wiadra w wózku Splast?", options: ["Wodę brudną", "Czystą wodę z płynem", "Śmieci", "Piasek"], correctAnswer: 1 },
      { id: 2, question: "Jaka jest prawidłowa kolejność sprzątania pomieszczenia?", options: ["Od dołu do góry", "Od góry do dołu", "Od środka do ścian", "Losowa"], correctAnswer: 1 },
      { id: 3, question: "Gdzie należy odkładać brudne ścierki i mopy?", options: ["Luzem do czystej skrzyni z narzędziami", "Do dedykowanego worka (izolacja od czystych)", "Na biurko klienta", "Do kieszeni spodni"], correctAnswer: 1 },
      { id: 4, question: "Jaką techniką prowadzimy mopa płaskiego Zflow?", options: ["Ruchami przód-tył", "Techniką ósemkową (rysowanie ósemek)", "Ruchami kolistymi w miejscu", "Byle jak"], correctAnswer: 1 }
    ]
  }
];

export const RESOURCES: ResourceItem[] = [
  // TECHNIKA (Karcher)
  {
    id: 'karcher-se4',
    category: 'Technika',
    name: 'Karcher SE 4',
    description: 'Odkurzacz piorący 1000W + Ssawka do mebli. Ekstrakcja spryskująco-odsysająca. Pojemniki 4L/4L.',
    links: [
        'https://www.castorama.pl/odkurzacz-pioracy-karcher-se-4/4066529034540_CAPL.prd',
        'https://eodkurzacz.pl/pl/p/Zestaw-ssawek-do-odkurzacza-Karcher-wd3/3732'
    ],
    sdsConfig: {
        hazards: "Urządzenie elektryczne. Ryzyko porażenia.",
        firstAid: "Odłączyć zasilanie.",
        ppe: "Obuwie gumowe.",
        usage: "Pre-spray -> Ekstrakcja -> Płukanie."
    }
  },
  {
    id: 'karcher-wd3',
    category: 'Technika',
    name: 'Karcher WD 3',
    description: 'Odkurzacz przemysłowy uniwersalny + Worki Fleece. Praca sucho/mokro. Wydmuch.',
    links: [
        'https://erpixkarcher24.pl/karcher-wd3/2002-wd-3-premium-s-v-19620-car-odkurzacz-kaercher-1628-1510-4054278923789.html',
        'https://www.castorama.pl/departments/worki-do-odkurzaczy-przemys-owych-modeco-expert-karcher-wd-3-aqua-vac-einhell-opakowanie-kartonowe-3-szt-/5906675193304_CAPL.prd'
    ],
    sdsConfig: {
        hazards: "Pył, Hałas > 75dB.",
        firstAid: "Świeże powietrze.",
        ppe: "Maska FFP2 przy opróżnianiu.",
        usage: "Sucho: Worek OBOWIĄZKOWY. Mokro: Bez worka."
    }
  },

  // OKNA (Moerman & Unger)
  {
    id: 'moerman-excel',
    category: 'Okna',
    name: 'Moerman Excelerator 2.0',
    description: 'Uchwyt + Szyna Liquidator 3.0 + Wkład F*LIQ. System Flip (Mycie+Ściąganie). Regulacja kąta: 10°, 25°, 40°.',
    links: ['https://allegro.pl/oferta/moerman-excelerator-liquidator-3-0-f-liq-25-cm-12805881580'],
    sdsConfig: {
        hazards: "Uderzenie, Skaleczenie.",
        firstAid: "Opatrunek.",
        ppe: "Rękawice.",
        usage: "Technika Flip. Kąt -20st na kiju."
    }
  },
  {
    id: 'telescope',
    category: 'Okna',
    name: 'Kij Teleskopowy 3-4m',
    description: 'Kompatybilny z Moerman. Redukcja kątowa. Praca z poziomu zero.',
    links: ['https://allegro.pl/oferta/moerman-kij-teleskopowy-3-czesciowy-4m-z-redukcja-katowa-wytrzymaly-18003339238'],
    sdsConfig: {
        hazards: "Porażenie prądem (Linie WN).",
        firstAid: "RKO.",
        ppe: "Kask (opcjonalnie).",
        usage: "Zablokować segmenty."
    }
  },
  {
    id: 'ergotec-scraper',
    category: 'Okna',
    name: 'Unger ERGOTEC 10 cm',
    description: 'Skrobak do szyb profesjonalny. Ostre wymienne ostrza.',
    links: ['https://www.unger.com.pl/skrobaczka-ergotec-do-szkla-10-cm.html'],
    sdsConfig: {
        hazards: "Głębokie skaleczenia.",
        firstAid: "Tamowanie krwotoku, Opatrunek.",
        ppe: "Ostrożność.",
        usage: "TYLKO NA MOKRO! Nigdy nie cofać po szybie."
    }
  },

  // LOGISTYKA
  {
    id: 'splast-ts',
    category: 'Logistyka',
    name: 'Splast TS-0004',
    description: 'Wózek dwuwiaderkowy (2x25L) z prasą. Niebieskie (Czyste) / Czerwone (Brudne).',
    links: ['https://balmea.pl/pl/p/Wozek-do-sprzatania-Splast-TS-0004-dwuwiaderkowy-z-prasa-do-wyciskania/292'],
  },
  {
    id: 'xblock',
    category: 'Logistyka',
    name: 'Kistenberg X Block PRO 30',
    description: 'Skrzynia narzędziowa modułowa. Transport chemii i narzędzi suchych.',
    links: ['https://plantet.pl/kosz-narzedziowy-x-block-pro-30-plus-cs-kxb604030cs-kistenberg'],
  },
  {
    id: 'heavy-mobile',
    category: 'Logistyka',
    name: 'HEAVY MOBILE TROLLEY',
    description: 'Wózek narzędziowy modułowy KHVWM.',
    links: ['https://www.kistenberg.com/en/toolboxes/toolboxes/heavy/heavy-mobile-tool-trolley-khvwm'],
  },
  {
    id: 'jkaoo-bag',
    category: 'Logistyka',
    name: 'JKAOO Cleaning Caddy',
    description: 'Torba organizer na środki czystości.',
    links: ['https://www.amazon.com/JKAOO-Rolling-Cleaning-Caddy-Bag/dp/B0DHGLQHNK'],
  },

  // NARZĘDZIA DROBNE
  {
    id: 'menzurka',
    category: 'Narzędzia',
    name: 'Menzurka (Miarka)',
    description: 'Kubek do dozowania chemii (100ml / 500ml). Polipropylen.',
    links: [
        'https://mrcleaner.pl/en/bottles-and-washers/work-stuff-sizeer-measuring-cup-100ml',
        'https://mrcleaner.pl/butelki-i-spryskiwacze/work-stuff-sizeer-measuring-cup-miarka-odporna-na-chemie-500ml'
    ]
  },
  {
    id: 'vileda-miraclean',
    category: 'Narzędzia',
    name: 'Vileda Miraclean',
    description: 'Magiczna gąbka. Usuwa plamy, ślady butów. Działa ściernie!',
    links: ['https://www.kruse.pl/artykul/841142/vileda-miraclean-magiczna-gabka-do-usuwania-zabrudzen-duza'],
  },
  {
    id: 'vikan-brush',
    category: 'Narzędzia',
    name: 'Vikan 6440 130 mm',
    description: 'Szczotka twarda do szorowania (fugi, narożniki).',
    links: ['https://www.centrumhigieny.pl/pl/p/Szczotka-do-mycia-rak-Vikan-6440-130-mm-twarda-rozne-kolory/171'],
  },
  {
    id: 'work-stuff-brush',
    category: 'Narzędzia',
    name: 'Work Stuff Detailing Brush',
    description: 'Pędzelek detailingowy 30mm. Do kratek i zakamarków.',
    links: ['https://sklep.motogo.pl/work-stuff-detailing-brush-short-30mm-pedzelek-detailingowy'],
  },
  {
    id: 'sign',
    category: 'Narzędzia',
    name: 'Znak "Śliska Podłoga"',
    description: 'Potykacz ostrzegawczy żółty. Obowiązkowy.',
    links: ['https://dla-przemyslu.pl/gabloty-i-powierzchnie-ekspozycyjne/1617-potykacz-ostrzegawczy-uwaga-sliska-podloga.html'],
  },
  {
    id: 'zflow-mop',
    category: 'Narzędzia',
    name: 'Zflow 18" Microfiber Mop',
    description: 'Profesjonalny mop płaski z mikrofibry 45cm. Rzep.',
    links: ['https://www.amazon.com/Zflow-Professional-Microfiber-Adjustable-Stainless/dp/B073B7373K'],
  },

  // CHEMIA (TENZI - COMPREHENSIVE)
  {
    id: 'tenzi-top-glass',
    category: 'Chemia',
    name: 'Tenzi Top Glass',
    description: 'Okna (pH 7). Mycie szyb i luster. Gotowy do użycia. Nie zostawia smug.',
    links: ['https://tenzi.pl/top-glass-10l'],
    sdsConfig: { hazards: "H225 Łatwopalny.", ppe: "Rękawice nitrylowe.", ph: "7", usage: "Bez spłukiwania.", firstAid: "Oczy: Płukać wodą." }
  },
  {
    id: 'tenzi-wc-sani',
    category: 'Chemia',
    name: 'Tenzi WC Sani',
    description: 'Toalety (pH 1, Kwas). Gruntowne mycie, odkamienianie muszli i pisuarów.',
    links: ['https://tenzi.pl/wc-sani-10l'],
    sdsConfig: { hazards: "H314 Poważne oparzenia. Kwas.", ppe: "Rękawice chemoodporne, Gogle.", ph: "1", usage: "10 min kontaktu. Spłukać. NIE MIESZAĆ Z CHLOREM.", firstAid: "Oczy: Płukać 15 min." }
  },
  {
    id: 'tenzi-sanit-lux',
    category: 'Chemia',
    name: 'Tenzi Sanit Lux',
    description: 'Sanitariaty (pH 2). Codzienne mycie łazienek, delikatny kwas, zapach kwiatowy.',
    links: ['https://tenzi.pl/sanit-lux-5l'],
    sdsConfig: { hazards: "H319 Drażniący.", ppe: "Rękawice gumowe.", ph: "2", usage: "Rozcieńczać.", firstAid: "Oczy: Płukać wodą." }
  },
  {
    id: 'tenzi-gran-smog',
    category: 'Chemia',
    name: 'Tenzi Gran Smog',
    description: 'Kuchnia (pH 14, Zasada). Przypalenia, tłuszcz, okapy. Agresywny.',
    links: ['https://tenzi.pl/gran-smog-extra-10l'],
    sdsConfig: { hazards: "H314 Oparzenia. Zasada. Niszczy Aluminium.", ppe: "Rękawice chemoodporne, Gogle.", ph: "14", usage: "Rozcieńczać. Nie na aluminium.", firstAid: "Oczy: Płukać 15 min." }
  },
  {
    id: 'tenzi-textil-wash',
    category: 'Chemia',
    name: 'Tenzi Textil Wash',
    description: 'Dywany (pH 9, Enzymy). Pranie ekstrakcyjne i bonetowanie.',
    links: ['https://tenzi.pl/textil-wash-10l'],
    sdsConfig: { hazards: "H319 Drażniący.", ppe: "Rękawice.", ph: "9", usage: "Max 50°C. Pre-spray.", firstAid: "Oczy: Płukać wodą." }
  },
  {
    id: 'tenzi-textil-ex',
    category: 'Chemia',
    name: 'Tenzi Textil-Ex',
    description: 'Płukanie (Rinse). Neutralizacja po praniu, do zbiornika czystego.',
    links: ['https://tenzi.pl/textil-ex-1l'],
    sdsConfig: { hazards: "H319 Drażniący.", ppe: "Rękawice.", ph: "Kwaśny", usage: "Do zbiornika czystej wody.", firstAid: "Oczy: Płukać wodą." }
  },
  {
    id: 'tenzi-stal',
    category: 'Chemia',
    name: 'Tenzi Stal Nierdzewna',
    description: 'Olej do INOX. Konserwacja stali (windy, drzwi). Nie zmywać wodą!',
    links: ['https://tenzi.pl/steel-dee-gt-06l'],
    sdsConfig: { hazards: "H304 Połknięcie-śmierć. Palny.", ppe: "Rękawice nitrylowe.", ph: "N/D (Olej)", usage: "Na sucho, polerować.", firstAid: "NIE wywoływać wymiotów." }
  },
  {
    id: 'tenzi-defoam',
    category: 'Chemia',
    name: 'Odpieniacz (De-Foam)',
    description: 'Anty-piana. Do zbiornika brudnego w Karcherze.',
    links: ['https://tenzi.sklep.pl/tenzi-de-foam-srodek-do-usuwania-piany-defoam-10l-p-339.html'],
  },
  {
    id: 'tenzi-alcovirex',
    category: 'Chemia',
    name: 'Tenzi Alcovirex',
    description: 'Dezynfekcja. Alkoholowy, szybki, wirusobójczy.',
    links: ['https://tenzi.pl/alcovirex-1l'],
    sdsConfig: { hazards: "H225 Łatwopalny.", ppe: "Ostrożnie.", ph: "7", usage: "Bez spłukiwania.", firstAid: "Świeże powietrze." }
  },
  {
    id: 'tenzi-granclor',
    category: 'Chemia',
    name: 'Tenzi GranClor 2006',
    description: 'Dezynfekcja (Chlor). Wybielanie, pleśń, krew. Uwaga na opary!',
    links: ['https://tenzi.pl/granclor-2006-5l'],
    sdsConfig: { hazards: "H314 Oparzenia. Toksyczny gaz z kwasami.", ppe: "Rękawice chemoodporne, Maska.", ph: "14", usage: "NIE ŁĄCZYĆ Z KWASAMI.", firstAid: "Oczy: Płukać 15 min." }
  },
  {
    id: 'tenzi-copper',
    category: 'Chemia',
    name: 'Tenzi Copper Cleaner',
    description: 'Miedź i Mosiądz. Usuwa naloty tlenkowe. Kwaśny.',
    links: ['https://tenzi.pl/copper-cleaner-gt-06l'],
  },
  {
    id: 'tenzi-uni',
    category: 'Chemia',
    name: 'Tenzi Uni Clean',
    description: 'Uniwersalny. Szybkie mycie mebli, ram, plastików.',
    links: ['https://tenzi.pl/uni-clean-1l'],
  },
  {
    id: 'tenzi-oran',
    category: 'Chemia',
    name: 'Tenzi TopEfekt Oranż',
    description: 'Podłogi. Mycie bieżące, połysk, zapach pomarańczy.',
    links: ['https://tenzi.sklep.pl/tenzi-topefekt-oranz-plyn-do-mycia-plytek-paneli-parkietu-mebli-1l-p-187.html'],
  },
  {
    id: 'tenzi-derast',
    category: 'Chemia',
    name: 'Tenzi Derast',
    description: 'Rdza i Beton (pH 1). Odkamienianie silne.',
    links: ['https://tenzi.pl/derastr-1l'],
    sdsConfig: { hazards: "H314 Żrący.", ppe: "Rękawice kwasoodporne.", ph: "1", usage: "Rozcieńczać. Punktowo.", firstAid: "Oczy: Płukać 15 min." }
  },
  {
    id: 'tenzi-odor',
    category: 'Chemia',
    name: 'Tenzi Odor Off Nano',
    description: 'Neutralizator zapachów. Usuwa przykre wonie.',
    links: ['https://tenzi.pl/odor-off-nano-06l'],
  },
  {
    id: 'mikrozid',
    category: 'Chemia',
    name: 'Mikrozid AF Liquid',
    description: 'Medyczna Dezynfekcja. Szybka dezynfekcja małych powierzchni (alkohol).',
    links: ['https://medimall.pl/pl/Schulke-MIKROZID-AF-LIQUID-1L-plyn-do-dezynfekcji-powierzchni-BEZ-SPRYSKIWACZA'],
    sdsConfig: { hazards: "H226 Łatwopalny.", ppe: "Rękawice.", ph: "7", usage: "Spryskać i czekać.", firstAid: "Oczy: Płukać wodą." }
  },

  // BHP
  {
    id: 'apteczka',
    category: 'BHP',
    name: 'Apteczka DIN 13157 + Płuczka',
    description: 'Zestaw przemysłowy + Płukanka do oczu (Eye Wash). Ratunek chemiczny.',
    links: [
        'https://icd.pl/apteczka-standard-din-13157.html',
        'https://icd.pl/plukanka-do-oczu-biophos74-500ml.html'
    ],
  },
  {
    id: 'gogle',
    category: 'BHP',
    name: 'Gogle Ochronne (EN 166)',
    description: 'Gogle zamknięte 3M/Scotchgard. Chronią przed chlapnięciem.',
    links: ['https://www.3market-shop.pl/gg501sgaf-eu--przezroczyste--zamkniete-okulary-ochronne-z-powloka-scotchgard-/'],
  },
  {
    id: 'rekawice-nitryl',
    category: 'BHP',
    name: 'Rękawice Nitrylowe',
    description: 'Czarne/Niebieskie. Pudełko 100 szt. Prace lekkie.',
    links: ['https://medimall.pl/en_US/p/Gloves-MAXSAFE-BLACK-size-L-nitrile-non-sterile-100-pcs/3385'],
  },
  {
    id: 'rekawice-chem',
    category: 'BHP',
    name: 'Rękawice Chemoodporne',
    description: 'Długie (Ansell/H-Gear). Do kwasów i zasad (Gran Smog, WC Sani).',
    links: ['https://bhp.pl/product/1118192196/rekawice-ochronne-rasolvex37-675-z-ansell'],
  },
  {
    id: 'maski',
    category: 'BHP',
    name: 'Maski FFP2/FFP3',
    description: 'Ochrona przed pyłem (3M/Delta Plus). Do odkurzacza.',
    links: ['https://icd.pl/polmaska-3m-8822.html'],
  }
];