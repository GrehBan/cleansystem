import React from 'react';
import { ShieldAlert, FlaskConical, Wrench, Zap, Layers, Users, Recycle, Droplets, HeartPulse, Sparkles, Stethoscope, Utensils, Flame, Maximize } from 'lucide-react';
import { Module, ResourceItem } from './types';

export const MODULES: Module[] = [
  {
    id: 'bhp',
    title: 'BHP, Prawodawstwo i Sygnaliści (2026)',
    description: 'Kompleksowe wymogi prawne: Kodeks Pracy, Ustawa o Sygnalistach, praca na wysokości, apteczka DIN 13157 i odpowiedzialność karna.',
    icon: ShieldAlert,
    priority: 'KRYTYCZNE',
    priorityColor: 'text-primary',
    passingScore: 100,
    lessons: [
      {
        title: 'Lekcja 1: Imperatyw Prawny i Odpowiedzialność',
        content: (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary font-mono border-b border-border pb-2">01 // KODEKS PRACY I KARNOŚĆ</h3>
            
            <p className="text-gray-300 leading-relaxed">
              W 2026 roku branża czystości podlega rygorystycznym kontrolom PIP. Zgodnie z Art. 237³ KP, pracodawca i pracownik ponoszą solidarną odpowiedzialność za bezpieczeństwo.
            </p>

            <div className="bg-surface p-6 rounded border-l-4 border-primary shadow-lg">
               <strong className="block text-white mb-4 text-lg border-b border-gray-700 pb-2">Hierarchia Odpowiedzialności</strong>
               <div className="space-y-4">
                 <div>
                    <span className="text-danger font-bold uppercase text-xs tracking-wider">Wypadek Ciężki / Śmiertelny</span>
                    <p className="text-sm text-gray-300 mt-1">
                      Prokurator wkracza z urzędu (Art. 220 KK). Jeśli pracownik nie przestrzegał procedur (np. nie użył znaku "Śliska Podłoga"), może zostać uznany za współwinnego, co blokuje wypłatę odszkodowania z ZUS.
                    </p>
                 </div>
                 <div>
                    <span className="text-secondary font-bold uppercase text-xs tracking-wider">Ochrona Sygnalistów (Whistleblowing)</span>
                    <p className="text-sm text-gray-300 mt-1">
                      Zgodnie z ustawą o ochronie sygnalistów, każdy pracownik zgłaszający naruszenie BHP (np. brak rękawic, uszkodzona maszyna) jest chroniony prawnie przed zwolnieniem. Zgłoszenia są anonimowe.
                    </p>
                 </div>
               </div>
            </div>

            <div className="bg-yellow-900/20 p-5 rounded border border-yellow-600 mt-4">
               <h4 className="font-bold text-yellow-500 mb-2 flex items-center gap-2">Procedura Wypadkowa</h4>
               <ol className="list-decimal pl-5 text-xs text-gray-400 space-y-2">
                 <li><strong>Zabezpiecz miejsce:</strong> Nikt inny nie może ucierpieć.</li>
                 <li><strong>Udziel pomocy:</strong> Apteczka DIN 13157.</li>
                 <li><strong>Zawiadom przełożonego:</strong> Natychmiast.</li>
                 <li><strong>Nie zmieniaj niczego:</strong> Do czasu przybycia zespołu powypadkowego nie wolno sprzątać śladów wypadku (chyba że zagrażają życiu).</li>
               </ol>
            </div>
          </div>
        )
      },
      {
        title: 'Lekcja 2: Praca na Wysokości i Badania',
        content: (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-danger font-mono border-b border-border pb-2">02 // PRACE WYSOKOŚCIOWE</h3>
            
            <div className="bg-danger/10 p-5 border border-danger rounded shadow-md">
              <strong className="text-danger block text-lg mb-2">Definicja Prawna (§105 Rozp. BHP)</strong>
              <p className="text-gray-300 leading-relaxed">
                Każda praca powyżej <strong>1,0 metra</strong> nad poziomem podłogi to praca na wysokości. Wymaga badań lekarskich z adnotacją "praca na wysokości".
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
               <div className="bg-card p-4 rounded border border-border">
                 <h4 className="font-bold text-white mb-3 text-lg border-b border-gray-700 pb-2">Orzecznictwo Lekarskie</h4>
                 <ul className="space-y-2 text-sm text-gray-300">
                    <li><span className="text-secondary font-bold">Do 3 metrów:</span> Badanie ogólne + błędnik. Częstotliwość: 3-5 lat.</li>
                    <li><span className="text-danger font-bold">Powyżej 3 metrów:</span> Specjalistyczne (okulista, neurolog, laryngolog). Częstotliwość: 2-3 lata.</li>
                 </ul>
               </div>
               
               <div className="bg-card p-4 rounded border border-border">
                 <h4 className="font-bold text-white mb-3 text-lg border-b border-gray-700 pb-2">Eliminacja Ryzyka</h4>
                 <div className="bg-green-900/20 p-2 rounded border border-green-600/50 text-xs text-green-200">
                     <strong>SYSTEM MOERMAN (3-4m):</strong> Używając kija teleskopowego, pracujesz z poziomu "zero". W świetle prawa <strong>nie jest to praca na wysokości</strong>, co eliminuje ryzyko upadku i wymóg szelek bezpieczeństwa.
                 </div>
               </div>
            </div>
          </div>
        )
      },
      {
        title: 'Lekcja 3: Apteczka i Ratownictwo Chemiczne',
        content: (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-success font-mono border-b border-border pb-2">03 // ZASADY DIN 13157</h3>
            <p className="text-gray-300">
              W przypadku oparzenia chemicznego liczą się sekundy. Zwykła woda może nie wystarczyć przy silnych kwasach.
            </p>

            <div className="bg-surface p-6 rounded border border-gray-700 shadow-xl">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm text-gray-400">
                  <div className="flex items-center gap-3 p-2 bg-card rounded border border-blue-500/30">
                     <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                     <div>
                        <strong className="text-white block">Płuczka do Oczu (Eye Wash)</strong>
                        <span className="text-xs">Buforowy roztwór fosforanowy. Neutralizuje pH w oku. Czas płukania: min. 15 minut.</span>
                     </div>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-card rounded">
                    <div className="w-3 h-3 bg-danger rounded-full"></div>
                    <div>
                        <strong className="text-white block">Karta Charakterystyki (MSDS)</strong>
                        <span className="text-xs">Dokument, który musisz pokazać ratownikowi medycznemu. Mówi, czym się zatrułeś.</span>
                    </div>
                  </div>
               </div>
               <div className="mt-4 p-3 bg-red-900/20 border border-red-500/50 rounded text-xs text-red-300">
                  <strong>Oparzenie Kwasem (WC Sani):</strong> Nie używaj mydła (reakcja egzotermiczna!). Płucz obficie chłodną wodą.
               </div>
            </div>
          </div>
        )
      }
    ],
    quiz: [
      { id: 1, question: "Kto odpowiada za BHP w miejscu pracy?", options: ["Tylko szef", "Tylko BHP-owiec", "Solidarnie pracodawca i pracownik", "Klient"], correctAnswer: 2 },
      { id: 2, question: "Co to jest ustawa o sygnalistach?", options: ["Ochrona osób zgłaszających naruszenia", "System alarmowy", "Nakaz gwizdania", "Przepis drogowy"], correctAnswer: 0 },
      { id: 3, question: "Jaka jest granica pracy na wysokości?", options: ["0.5 metra", "1.0 metr", "2.0 metry", "Drabina 3-stopniowa"], correctAnswer: 1 },
      { id: 4, question: "Co robisz najpierw przy oparzeniu chemicznym oka?", options: ["Jadę do domu", "Używam płuczki do oczu / wody przez 15 min", "Wycieram ręcznikiem", "Nakładam krem"], correctAnswer: 1 },
      { id: 5, question: "Czy za brak znaku 'Śliska Podłoga' grozi odpowiedzialność karna?", options: ["Tak, jeśli dojdzie do wypadku", "Nie, to tylko zalecenie", "Tylko finansowa", "Nie"], correctAnswer: 0 }
    ]
  },
  {
    id: 'ppoz',
    title: 'PPOŻ i Ewakuacja',
    description: 'Bezpieczeństwo Pożarowe. Klasy pożarów (A, B, F), rodzaje gaśnic i procedura ewakuacyjna w obiektach komercyjnych.',
    icon: Flame,
    priority: 'BEZPIECZEŃSTWO',
    priorityColor: 'text-primary',
    passingScore: 100,
    lessons: [
        {
            title: 'Lekcja 1: Klasy Pożarów i Gaśnice',
            content: (
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-primary font-mono border-b border-border pb-2">01 // NIE KAŻDY OGIEŃ JEST TAKI SAM</h3>
                    <p className="text-gray-300">
                        Użycie niewłaściwej gaśnicy może zabić (np. gaszenie frytkownicy wodą).
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-card p-4 rounded border border-border">
                            <strong className="text-white text-lg block mb-2">Klasy Pożarów</strong>
                            <ul className="list-disc pl-5 text-xs text-gray-400 space-y-2">
                                <li><strong>A (Ciała stałe):</strong> Papier, drewno, tkaniny.</li>
                                <li><strong>B (Ciecze):</strong> Paliwa, rozpuszczalniki, alkohole (Top Glass).</li>
                                <li><strong>C (Gazy):</strong> Gaz ziemny, propan.</li>
                                <li><strong>F (Tłuszcze jadalne):</strong> Olej w kuchni. <span className="text-danger font-bold">ZAKAZ UŻYWANIA WODY!</span></li>
                            </ul>
                        </div>
                        <div className="bg-card p-4 rounded border border-border">
                            <strong className="text-white text-lg block mb-2">Rodzaje Gaśnic</strong>
                            <ul className="list-disc pl-5 text-xs text-gray-400 space-y-2">
                                <li><strong>Proszkowa (ABC):</strong> Najpopularniejsza. Brudzi, ale gasi prawie wszystko.</li>
                                <li><strong>Śniegowa (CO2):</strong> Do elektroniki i serwerowni. Nie zostawia śladów. Uwaga: temperatura -78°C (ryzyko odmrożenia rąk).</li>
                                <li><strong>Płynowa (AF):</strong> Dedykowana do kuchni (tłuszcze).</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: 'Lekcja 2: Ewakuacja i Oznaczenia',
            content: (
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-success font-mono border-b border-border pb-2">02 // ZIELONE ZNAKI</h3>
                    <div className="bg-green-900/20 p-5 rounded border border-green-600">
                         <strong className="text-green-400 block mb-2">Zasady Ewakuacji</strong>
                         <ol className="list-decimal pl-5 text-sm text-gray-300 space-y-2">
                             <li>Zachowaj spokój. Nie biegnij.</li>
                             <li>Poruszaj się zgodnie z zielonymi znakami "Wyjście Ewakuacyjne".</li>
                             <li>Nie używaj wind! (Mogą stać się pułapką dymową).</li>
                             <li>Idź przy podłodze, jeśli jest dym (tam jest tlen).</li>
                         </ol>
                    </div>
                </div>
            )
        }
    ],
    quiz: [
        { id: 1, question: "Jaką gaśnicą ugasisz serwerownię lub komputer, aby go nie zniszczyć?", options: ["Wodną", "Proszkową (ABC)", "Śniegową (CO2)", "Kocem"], correctAnswer: 2 },
        { id: 2, question: "Czy wolno gasić płonący olej na patelni wodą?", options: ["Tak, to najszybsza metoda", "BEZWZGLĘDNIE NIE (Wybuch)", "Tylko zimną wodą", "Tak, ale powoli"], correctAnswer: 1 },
        { id: 3, question: "Co oznacza klasa pożaru F?", options: ["Gazy", "Tłuszcze jadalne (kuchnie)", "Metale", "Elektryka"], correctAnswer: 1 },
        { id: 4, question: "Czy podczas pożaru wolno używać windy?", options: ["Tak, jest szybciej", "Nie, windy mogą się zablokować lub wciągnąć dym", "Tylko towarowej", "Zależy od piętra"], correctAnswer: 1 }
    ]
  },
  {
    id: 'med_hygiene',
    title: 'Higiena Szpitalna (Medical)',
    description: 'Standardy sprzątania w placówkach medycznych. Strefy czystości, plan higieny, dezynfekcja i odpady medyczne.',
    icon: Stethoscope,
    priority: 'MEDYCZNE',
    priorityColor: 'text-blue-400',
    passingScore: 100,
    lessons: [
        {
            title: 'Lekcja 1: Strefy Czystości i Kolory',
            content: (
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-blue-400 font-mono border-b border-border pb-2">01 // STREFOWANIE EPIDEMIOLOGICZNE</h3>
                    <p className="text-gray-300">
                        W szpitalach i przychodniach obowiązuje ścisły podział na strefy, aby nie przenosić patogenów.
                    </p>
                    <div className="grid grid-cols-1 gap-4 mt-4">
                        <div className="border-l-4 border-white bg-gray-800 p-4">
                            <strong className="text-white">STREFA BIAŁA (Administracyjna)</strong>
                            <p className="text-xs text-gray-400">Biura, korytarze wejściowe. Standard sprzątania: biurowy.</p>
                        </div>
                        <div className="border-l-4 border-gray-500 bg-gray-800 p-4">
                            <strong className="text-gray-400">STREFA SZARA (Zabiegowa/Diagnostyczna)</strong>
                            <p className="text-xs text-gray-400">Gabinety lekarskie, EKG. Wymagana dezynfekcja powierzchni dotykowych.</p>
                        </div>
                        <div className="border-l-4 border-red-500 bg-gray-800 p-4">
                            <strong className="text-red-500">STREFA CZERWONA (Zakaźna/Operacyjna)</strong>
                            <p className="text-xs text-gray-400">Sale operacyjne, izolatki. Mopy jednorazowe lub dedykowane. Dezynfekcja o pełnym spektrum (B, F, V, Tba, Sp).</p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: 'Lekcja 2: Procedura Dezynfekcji i Odpady',
            content: (
                <div className="space-y-6">
                     <h3 className="text-xl font-bold text-blue-400 font-mono border-b border-border pb-2">02 // KONTAKT I CZAS</h3>
                     <div className="bg-card p-5 border border-blue-500/50 rounded">
                         <strong className="text-white block mb-2">Zasada Czasu Kontaktu (Contact Time)</strong>
                         <p className="text-sm text-gray-300 mb-4">
                             Środek dezynfekujący NIE działa natychmiast. Powierzchnia musi pozostać wilgotna przez czas określony przez producenta (zazwyczaj 5-15 min). Wytarcie do sucha od razu = brak dezynfekcji.
                         </p>
                     </div>
                     <div className="mt-6">
                         <h4 className="text-lg font-bold text-white mb-3">Odpady Medyczne (Kodowanie)</h4>
                         <div className="grid grid-cols-2 gap-4">
                             <div className="bg-red-900/30 border border-red-600 p-3 rounded text-center">
                                 <strong className="text-red-500 block">WOREK CZERWONY</strong>
                                 <span className="text-xs text-gray-300">Odpady zakaźne (krew, organy, zużyte opatrunki). Wysoce niebezpieczne.</span>
                             </div>
                             <div className="bg-yellow-900/30 border border-yellow-600 p-3 rounded text-center">
                                 <strong className="text-yellow-500 block">WOREK ŻÓŁTY</strong>
                                 <span className="text-xs text-gray-300">Chemia medyczna, leki.</span>
                             </div>
                         </div>
                     </div>
                </div>
            )
        }
    ],
    quiz: [
        { id: 1, question: "Jaki kolor worka jest przypisany do odpadów zakaźnych (krew)?", options: ["Czarny", "Niebieski", "Czerwony", "Żółty"], correctAnswer: 2 },
        { id: 2, question: "Co to jest 'czas kontaktu' przy dezynfekcji?", options: ["Czas pracy pracownika", "Czas, przez który powierzchnia musi być mokra od środka, aby zabić bakterie", "Czas przerwy", "Data ważności"], correctAnswer: 1 },
        { id: 3, question: "Czy mop ze strefy białej (korytarz) może być użyty w strefie czerwonej (sala operacyjna)?", options: ["Tak, jeśli jest czysty", "Absolutnie NIE", "Tylko w nocy", "Jeśli nikt nie widzi"], correctAnswer: 1 },
        { id: 4, question: "Jakie spektrum dezynfekcji jest wymagane w strefach wysokiego ryzyka?", options: ["Tylko B (Bakterie)", "Pełne (B, F, V, Tba, Sp) - Bakterie, Grzyby, Wirusy, Prątki, Spory", "Woda z mydłem", "Zapachowe"], correctAnswer: 1 }
    ]
  },
  {
    id: 'haccp',
    title: 'HACCP i Gastronomia',
    description: 'Bezpieczeństwo żywności. Krytyczne Punkty Kontroli (CCP), mycie vs dezynfekcja w kuchni, alergeny i szkodniki.',
    icon: Utensils,
    priority: 'SANITARNE',
    priorityColor: 'text-green-500',
    passingScore: 95,
    lessons: [
        {
            title: 'Lekcja 1: Mycie a Dezynfekcja w Kuchni',
            content: (
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-green-500 font-mono border-b border-border pb-2">01 // ETAPY PROCESU</h3>
                    <p className="text-gray-300">
                        W gastronomii "czyste" nie znaczy "bezpieczne". Proces musi przebiegać dwuetapowo.
                    </p>
                    <ol className="list-decimal pl-5 text-gray-300 space-y-4 mt-4">
                        <li>
                            <strong>Mycie Zasadnicze:</strong> Usunięcie widocznego brudu i tłuszczu (użycie detergentu, np. Gran Smog). To usuwa pożywkę dla bakterii.
                        </li>
                        <li>
                            <strong>Spłukiwanie:</strong> Usunięcie resztek chemii myjącej.
                        </li>
                        <li>
                            <strong>Dezynfekcja:</strong> Zabicie niewidocznych drobnoustrojów (Salmonella, Listeria) środkiem biobójczym.
                        </li>
                        <li>
                            <strong>Płukanie końcowe:</strong> Wymagane, jeśli środek dezynfekujący nie jest dopuszczony do kontaktu z żywnością bez płukania.
                        </li>
                    </ol>
                </div>
            )
        },
        {
            title: 'Lekcja 2: Zakażenia Krzyżowe i Alergeny',
            content: (
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-green-500 font-mono border-b border-border pb-2">02 // CROSS-CONTAMINATION</h3>
                    <div className="bg-card p-5 border border-green-600/50 rounded">
                        <strong className="text-white block mb-3">Złote Zasady HACCP</strong>
                        <ul className="list-disc pl-5 text-sm text-gray-300 space-y-3">
                            <li>
                                <strong>Deski do krojenia:</strong> Używaj odpowiednich kolorów (Czerwona - surowe mięso, Zielona - warzywa). Nigdy nie myj ich razem w tym samym zlewie w tym samym czasie.
                            </li>
                            <li>
                                <strong>Zlew porządkowy vs Zlew kuchenny:</strong> Mopa i ścierki do podłogi płuczemy TYLKO w zlewie porządkowym (brudownik). Nigdy w zlewie do mycia warzyw.
                            </li>
                            <li>
                                <strong>Szkodniki:</strong> Zauważenie karalucha, myszy lub ich odchodów musi być natychmiast zgłoszone (Księga Kontroli Szkodników).
                            </li>
                        </ul>
                    </div>
                </div>
            )
        }
    ],
    quiz: [
        { id: 1, question: "Jaka jest różnica między myciem a dezynfekcją?", options: ["To to samo", "Mycie usuwa brud, dezynfekcja zabija drobnoustroje", "Dezynfekcja jest do podłóg, mycie do naczyń", "Mycie jest ważniejsze"], correctAnswer: 1 },
        { id: 2, question: "Gdzie wolno myć mopa w restauracji?", options: ["W zlewie do warzyw", "W zmywarce do naczyń", "Tylko w zlewie porządkowym (brudowniku)", "W umywalce do rąk"], correctAnswer: 2 },
        { id: 3, question: "Co robisz, gdy zauważysz ślady szkodników (np. odchody myszy)?", options: ["Sprzątam i nic nie mówię", "Zgłaszam to natychmiast przełożonemu", "Zastawiam pułapkę sam", "Ignoruję"], correctAnswer: 1 },
        { id: 4, question: "Dlaczego używamy różnych desek do mięsa i warzyw?", options: ["Dla estetyki", "Aby uniknąć przeniesienia bakterii z surowego mięsa na warzywa (zakażenie krzyżowe)", "Bo kucharz tak lubi", "Nie ma to znaczenia"], correctAnswer: 1 }
    ]
  },
  {
    id: 'chem',
    title: 'Chemia Profesjonalna: Koło Sinnera i Tenzi',
    description: 'Zaawansowana chemia. Koło Sinnera, skala pH, zasady mieszania (ryzyko chloru) i karta charakterystyki.',
    icon: FlaskConical,
    priority: 'TECHNICZNE',
    priorityColor: 'text-secondary',
    passingScore: 90,
    lessons: [
      {
        title: 'Lekcja 1: Koło Sinnera - 4 Czynniki Czystości',
        content: (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-secondary font-mono border-b border-border pb-2">01 // TACT: TEORIA MYCIA</h3>
            <p className="text-gray-300">
              Każdy proces mycia składa się z 4 czynników. Jeśli odejmiesz jeden, musisz dodać inny.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
               <div className="bg-card p-4 rounded border border-blue-500/30">
                  <strong className="text-blue-400 block text-lg">T - Temperature</strong>
                  <p className="text-xs text-gray-400">Temperatura. Ciepła woda przyspiesza reakcje, ale wrzątek niszczy polimery i uwalnia opary chloru.</p>
               </div>
               <div className="bg-card p-4 rounded border border-green-500/30">
                  <strong className="text-green-400 block text-lg">A - Agitation</strong>
                  <p className="text-xs text-gray-400">Akcja mechaniczna. Szorowanie (pad, szczotka, mikrofibra). To robi maszyna lub Twoja ręka.</p>
               </div>
               <div className="bg-card p-4 rounded border border-purple-500/30">
                  <strong className="text-purple-400 block text-lg">C - Chemical</strong>
                  <p className="text-xs text-gray-400">Chemia. Rodzaj (pH) i stężenie. WC Sani, Gran Smog.</p>
               </div>
               <div className="bg-card p-4 rounded border border-yellow-500/30">
                  <strong className="text-yellow-400 block text-lg">T - Time</strong>
                  <p className="text-xs text-gray-400">Czas. Chemia musi "popracować". Np. 5-10 minut dla odkamieniacza.</p>
               </div>
            </div>
            <div className="mt-2 text-xs text-gray-500 italic">
               Przykład: Jeśli używasz słabszej chemii (C), musisz mocniej szorować (A) lub dłużej czekać (T).
            </div>
          </div>
        )
      },
      {
        title: 'Lekcja 2: Śmiertelne Błędy (Chlor + Kwas)',
        content: (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-danger font-mono border-b border-border pb-2">02 // NEVER MIX</h3>
            <div className="bg-red-900/30 border border-red-500 p-6 rounded text-center">
                <h4 className="text-3xl font-black text-white mb-4">CHLOR + KWAS = ŚMIERĆ</h4>
                <p className="text-gray-300 mb-4">
                    Nigdy nie łącz produktów chlorowych (wybielacze, Domestos, anty-pleśń) z produktami kwaśnymi (WC Sani, odkamieniacz).
                </p>
                <div className="bg-black/40 p-4 rounded text-left text-sm text-red-200 font-mono">
                    Reakcja: NaOCl + 2HCl → Cl2 + H2O + NaCl<br/>
                    Wynik: Wydziela się <strong>GAZOWY CHLOR (Bojowy środek trujący)</strong>. Powoduje poparzenie płuc, odmę i śmierć przez uduszenie.
                </div>
            </div>
          </div>
        )
      },
      {
        title: 'Lekcja 3: Produkty Tenzi (Zastosowanie)',
        content: (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-secondary font-mono border-b border-border pb-2">03 // KOSZYK PRODUKTOWY</h3>
            <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                    <span className="font-bold text-red-400">WC Sani (pH 1)</span>
                    <span className="text-xs text-gray-400 text-right">Toalety, Pisuary, Rdza.<br/>Czas działania: 10 min.</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                    <span className="font-bold text-green-400">TopEfekt Normal (pH 11)</span>
                    <span className="text-xs text-gray-400 text-right">Gres, Laminat, PCV.<br/>Bezpieczny, bez smug.</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                    <span className="font-bold text-purple-400">Gran Smog (pH 14)</span>
                    <span className="text-xs text-gray-400 text-right">Tłuszcz, Okapy, Piekarniki.<br/>WYMAGANE RĘKAWICE!</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                    <span className="font-bold text-blue-400">De-Foam (Odpieniacz)</span>
                    <span className="text-xs text-gray-400 text-right">Do maszyn (Karcher SE 4).<br/>Chroni turbinę.</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                    <span className="font-bold text-gray-400">Stal Nierdzewna (Olej)</span>
                    <span className="text-xs text-gray-400 text-right">Tylko konserwacja (nie mycie).<br/>Windy, drzwi matowe.</span>
                </div>
            </div>
          </div>
        )
      }
    ],
    quiz: [
      { id: 1, question: "Co się stanie po zmieszaniu chloru z kwasem?", options: ["Powstanie lepszy środek", "Wydzieli się trujący gazowy chlor", "Powstanie woda", "Nic"], correctAnswer: 1 },
      { id: 2, question: "Co oznacza litera 'A' w Kole Sinnera?", options: ["Agitation (Akcja mechaniczna)", "Alkohol", "Auto", "Agresja"], correctAnswer: 0 },
      { id: 3, question: "Jaki odczyn pH ma Gran Smog?", options: ["1 (Kwas)", "7 (Neutralny)", "14 (Zasada)", "0"], correctAnswer: 2 },
      { id: 4, question: "Dlaczego potrzebujemy czasu (Time) przy myciu toalet?", options: ["Żeby odpocząć", "Żeby kwas zdążył rozpuścić kamień", "Bo tak mówi szef", "Nie potrzebujemy"], correctAnswer: 1 },
      { id: 5, question: "Który produkt służy do codziennego mycia gresu?", options: ["WC Sani", "TopEfekt Normal", "Gran Smog", "Odpieniacz"], correctAnswer: 1 }
    ]
  },
  {
    id: 'sanitary_pro',
    title: 'Sanitariaty PRO: System 4 Kolorów',
    description: 'Zaawansowana higiena. Zapobieganie zakażeniom krzyżowym, kod kolorystyczny ścierek i procedura mycia toalety.',
    icon: Droplets,
    priority: 'KRYTYCZNE',
    priorityColor: 'text-danger',
    passingScore: 100,
    lessons: [
      {
        title: 'Lekcja 1: Kod Kolorystyczny (Cross-Contamination)',
        content: (
          <div className="space-y-6">
             <h3 className="text-xl font-bold text-danger font-mono border-b border-border pb-2">01 // BARIERA MIKROBIOLOGICZNA</h3>
             <p className="text-gray-300">
                Nie możesz wytrzeć deski sedesowej, a potem tą samą ścierką biurka. To przenoszenie bakterii kałowych (E.Coli). Używamy ścierek z mikrofibry w 4 kolorach.
             </p>
             
             <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-red-900/20 border border-red-500 p-4 rounded text-center">
                   <div className="w-8 h-8 bg-red-600 mx-auto rounded-full mb-2"></div>
                   <strong className="text-red-400 block">CZERWONY</strong>
                   <span className="text-xs text-gray-300">Obszar wysokiego ryzyka: Wnętrze muszli, deska sedesowa, pisuar.</span>
                </div>
                <div className="bg-yellow-900/20 border border-yellow-500 p-4 rounded text-center">
                   <div className="w-8 h-8 bg-yellow-500 mx-auto rounded-full mb-2"></div>
                   <strong className="text-yellow-400 block">ŻÓŁTY</strong>
                   <span className="text-xs text-gray-300">Reszta łazienki: Umywalki, kafelki ścienne, lustra, klamki łazienkowe.</span>
                </div>
                <div className="bg-blue-900/20 border border-blue-500 p-4 rounded text-center">
                   <div className="w-8 h-8 bg-blue-500 mx-auto rounded-full mb-2"></div>
                   <strong className="text-blue-400 block">NIEBIESKI</strong>
                   <span className="text-xs text-gray-300">Ogólny: Meble biurowe, biurka, parapety, szyby, poręcze.</span>
                </div>
                <div className="bg-green-900/20 border border-green-500 p-4 rounded text-center">
                   <div className="w-8 h-8 bg-green-500 mx-auto rounded-full mb-2"></div>
                   <strong className="text-green-400 block">ZIELONY</strong>
                   <span className="text-xs text-gray-300">Spożywczy: Blaty kuchenne, stoły w jadalni.</span>
                </div>
             </div>
          </div>
        )
      },
      {
        title: 'Lekcja 2: Procedura Mycia Toalety',
        content: (
          <div className="space-y-6">
             <h3 className="text-xl font-bold text-danger font-mono border-b border-border pb-2">02 // KROK PO KROKU</h3>
             <ol className="list-decimal pl-5 text-gray-300 space-y-3">
                <li><strong>Spłucz wodę:</strong> Usuń luźne zabrudzenia.</li>
                <li><strong>Aplikacja Chemii (Czerwony):</strong> Nanieś WC Sani (kwas) pod obrzeże muszli i do wnętrza. Zostaw na 10 minut.</li>
                <li><strong>Strefa czysta (Żółty):</strong> W czasie gdy kwas działa w muszli, umyj lustro, umywalkę i dozowniki ścierką żółtą.</li>
                <li><strong>Szorowanie:</strong> Użyj szczotki do toalet, szorując dokładnie pod obrzeżem.</li>
                <li><strong>Dezynfekcja (Czerwony):</strong> Przetrzyj deskę, spłuczkę i klamkę ścierką czerwoną z płynem dezynfekującym.</li>
                <li><strong>Podłoga:</strong> Na samym końcu umyj podłogę mopem (zaczynając od najdalszego rogu do wyjścia).</li>
             </ol>
             <div className="mt-4 bg-gray-800 p-3 rounded text-xs text-gray-400 italic border-l-2 border-red-500">
                Ważne: Nigdy nie wkładaj szczotki do toalety z powrotem do pojemnika, jeśli jest brudna. Spłucz ją wodą w muszli.
             </div>
          </div>
        )
      }
    ],
    quiz: [
      { id: 1, question: "Jaki kolor ścierki służy do mycia deski sedesowej?", options: ["Niebieski", "Żółty", "Czerwony", "Zielony"], correctAnswer: 2 },
      { id: 2, question: "Jaki kolor ścierki służy do mycia biurka?", options: ["Czerwony", "Niebieski", "Zielony", "Żółty"], correctAnswer: 1 },
      { id: 3, question: "Dlaczego stosujemy kolory ścierek?", options: ["Dla ładnego wyglądu", "Aby zapobiec przenoszeniu bakterii kałowych (zakażenia krzyżowe)", "Żeby się nie nudzić", "Bo są tańsze"], correctAnswer: 1 },
      { id: 4, question: "Co myjemy najpierw?", options: ["Podłogę", "Umywalkę i lustro", "Wnętrze muszli", "Klamki"], correctAnswer: 1 },
      { id: 5, question: "Do czego służy kolor zielony?", options: ["Do toalet", "Do obszarów spożywczych (kuchnia)", "Do okien", "Do podłóg"], correctAnswer: 1 }
    ]
  },
  {
    id: 'polymers',
    title: 'Polimeryzacja i Ochrona Podłóg',
    description: 'Poziom Ekspert: Rozpoznawanie podłóg, stripping (zdzieranie), neutralizacja i nakładanie powłok polimerowych (akryl).',
    icon: Sparkles,
    priority: 'EKSPERCKIE',
    priorityColor: 'text-purple-400',
    passingScore: 95,
    lessons: [
      {
        title: 'Lekcja 1: Rozpoznawanie Podłoża (Linoleum vs PCV)',
        content: (
          <div className="space-y-6">
             <h3 className="text-xl font-bold text-purple-400 font-mono border-b border-border pb-2">01 // DIAGNOZA</h3>
             <p className="text-gray-300">
                Zanim wylejesz silną chemię (Stripper pH 13), musisz wiedzieć, co to za podłoga. Pomyłka kosztuje tysiące złotych (zniszczona wykładzina).
             </p>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="bg-surface border border-gray-600 p-4 rounded">
                   <strong className="text-white text-lg">LINOLEUM (Naturalne)</strong>
                   <ul className="list-disc pl-5 text-xs text-gray-400 mt-2 space-y-1">
                      <li>Zapach oleju lnianego przy pocieraniu (test spinacza - rozgrzej spinacz, przyłóż w niewidocznym miejscu).</li>
                      <li>Wrażliwe na wysokie pH (>10).</li>
                      <li><strong>Zagrożenie:</strong> "Wypalenie" (żółte plamy) przy użyciu zbyt silnego strippera.</li>
                   </ul>
                </div>
                <div className="bg-surface border border-gray-600 p-4 rounded">
                   <strong className="text-white text-lg">PCV / WINYL (Sztuczne)</strong>
                   <ul className="list-disc pl-5 text-xs text-gray-400 mt-2 space-y-1">
                      <li>Zapach plastiku/chloru przy teście ognia.</li>
                      <li>Odporne na chemię zasadową.</li>
                      <li>Najpopularniejsze w szpitalach i szkołach.</li>
                   </ul>
                </div>
             </div>
          </div>
        )
      },
      {
        title: 'Lekcja 2: Proces Polimeryzacji (Akryl)',
        content: (
          <div className="space-y-6">
             <h3 className="text-xl font-bold text-purple-400 font-mono border-b border-border pb-2">02 // PROCES GLOSS</h3>
             <div className="bg-card p-5 rounded border border-border">
                <ol className="list-decimal pl-5 text-sm text-gray-300 space-y-4">
                   <li>
                      <strong>Stripping (Zdzieranie):</strong> Nałóż roztwór Strippera (czas: 15 min). Szoruj maszyną jednotarczową z czarnym padem. Zbierz brud odkurzaczem wodnym.
                   </li>
                   <li>
                      <strong>Neutralizacja (Kluczowe!):</strong> Umyj podłogę czystą wodą 2 razy. Jeśli pH podłogi pozostanie zasadowe (wysokie), nowy polimer się "zważy" (odpryśnie) po tygodniu.
                   </li>
                   <li>
                      <strong>Wysychanie:</strong> Podłoga musi być idealnie sucha.
                   </li>
                   <li>
                      <strong>Nakładanie:</strong> Nałóż 3 cienkie warstwy polimeru (akrylu) mopem z mikrofibry (ruchy ósemkowe). Czas schnięcia między warstwami: 45-60 min.
                   </li>
                </ol>
             </div>
          </div>
        )
      }
    ],
    quiz: [
      { id: 1, question: "Co się stanie, jeśli nałożysz silny stripper (pH 13) na naturalne Linoleum?", options: ["Nic", "Podłoga będzie czystsza", "Dojdzie do trwałego odbarwienia (zniszczenia)", "Będzie błyszczeć"], correctAnswer: 2 },
      { id: 2, question: "Dlaczego trzeba zneutralizować podłogę wodą po strippingu?", options: ["Żeby usunąć resztki chemii i obniżyć pH", "Żeby była mokra", "Nie trzeba", "Żeby ładnie pachniała"], correctAnswer: 0 },
      { id: 3, question: "Ile warstw polimeru zazwyczaj nakładamy?", options: ["1 grubą", "3 cienkie", "10", "Żadnej"], correctAnswer: 1 },
      { id: 4, question: "Czym nakładamy polimer?", options: ["Szmatą", "Czystym mopem z mikrofibry (baranek)", "Szczotką", "Ręką"], correctAnswer: 1 },
      { id: 5, question: "Jakim ruchem nakładamy polimer?", options: ["Góra-dół", "Ósemkowym", "Kolistym", "Byle jak"], correctAnswer: 1 }
    ]
  },
  {
      id: 'windows',
      title: 'Techniki Okienne i Elewacje',
      description: 'Mycie przeszkleń. Technika "S", obsługa skrobaka, praca na drabinie vs kij teleskopowy, woda demineralizowana.',
      icon: Maximize,
      priority: 'EKSPERCKIE',
      priorityColor: 'text-secondary',
      passingScore: 90,
      lessons: [
          {
              title: 'Lekcja 1: Narzędzia i Technika "S"',
              content: (
                  <div className="space-y-6">
                      <h3 className="text-xl font-bold text-secondary font-mono border-b border-border pb-2">01 // S-MOTION</h3>
                      <p className="text-gray-300">
                          Profesjonaliści nie myją okien "góra-dół", lecz techniką "S" (wężem), aby nie odrywać gumy od szyby i nie zostawiać smug.
                      </p>
                      <ul className="list-disc pl-5 text-gray-300 space-y-3 mt-4">
                          <li>
                              <strong>Baranek (Myjka):</strong> Służy do namydlenia szyby i wzruszenia brudu.
                          </li>
                          <li>
                              <strong>Ściągaczka (Rakla):</strong> Kluczowe narzędzie. Guma musi być ostra i wymienna (Soft na zimę, Hard na lato).
                          </li>
                          <li>
                              <strong>Skrobak:</strong> Używaj TYLKO na mokrej szybie. Służy do usuwania farby, kleju, ptasich odchodów. <span className="text-danger font-bold">UWAGA: Nigdy nie cofaj skrobaka po szybie (ryzyko porysowania drobinami piasku).</span>
                          </li>
                      </ul>
                  </div>
              )
          },
          {
              title: 'Lekcja 2: Bezpieczeństwo Pracy',
              content: (
                  <div className="space-y-6">
                      <h3 className="text-xl font-bold text-secondary font-mono border-b border-border pb-2">02 // DRABINA CZY KIJ?</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-card p-4 border border-border rounded">
                              <strong className="text-white block mb-2">Drabina</strong>
                              <p className="text-xs text-gray-400">
                                  Wymaga asekuracji drugiej osoby. Ryzyko upadku. Zawsze zachowuj 3 punkty podparcia.
                              </p>
                          </div>
                          <div className="bg-card p-4 border border-border rounded">
                              <strong className="text-white block mb-2">Kij Teleskopowy / Woda Demi</strong>
                              <p className="text-xs text-gray-400">
                                  Praca z ziemi (do 20m). Bezpieczniejsza. Systemy wody demineralizowanej (czysta H2O) nie wymagają ściągania wody - wysychają bez plam.
                              </p>
                          </div>
                      </div>
                  </div>
              )
          }
      ],
      quiz: [
          { id: 1, question: "Czy wolno używać skrobaka na suchej szybie?", options: ["Tak", "Nie, grozi to porysowaniem szkła", "Tylko w narożnikach", "Zależy od marki"], correctAnswer: 1 },
          { id: 2, question: "Jaka technika mycia okien jest profesjonalna?", options: ["Gazetą i octem", "Technika 'S' (ciągły ruch bez odrywania)", "Góra-dół", "Kolista"], correctAnswer: 1 },
          { id: 3, question: "Co daje woda demineralizowana?", options: ["Nic", "Pozwala myć bez chemii i nie trzeba ściągać wody (brak osadu)", "Lepiej pachnie", "Jest tańsza"], correctAnswer: 1 },
          { id: 4, question: "Ile punktów podparcia musisz mieć na drabinie?", options: ["Jeden", "Dwa", "Trzy (dwie nogi + ręka)", "Zero"], correctAnswer: 2 }
      ]
  },
  {
    id: 'ergonomics',
    title: 'Ergonomia i Zdrowie Zawodowe',
    description: 'Długofalowe zdrowie. Normy dźwigania (Rozp. 2025/26), zapobieganie bólom kręgosłupa i cieśni nadgarstka.',
    icon: HeartPulse,
    priority: 'ZDROWIE',
    priorityColor: 'text-success',
    passingScore: 100,
    lessons: [
      {
        title: 'Lekcja 1: Normy Dźwigania i Technika',
        content: (
          <div className="space-y-6">
             <h3 className="text-xl font-bold text-success font-mono border-b border-border pb-2">01 // KRĘGOSŁUP MASZ JEDEN</h3>
             <p className="text-gray-300">
                Większość urazów w sprzątaniu to nie upadki, ale przewlekłe zwyrodnienia kręgosłupa (L4-L5).
             </p>
             
             <div className="bg-surface p-5 border border-green-600 rounded mt-4">
                <strong className="text-white block mb-3 text-lg">Limity Prawne (Praca Stała)</strong>
                <div className="grid grid-cols-2 gap-4 text-center">
                   <div className="bg-card p-3 rounded">
                      <span className="text-gray-400 text-xs">KOBIETY</span>
                      <strong className="block text-2xl text-white">12 kg</strong>
                   </div>
                   <div className="bg-card p-3 rounded">
                      <span className="text-gray-400 text-xs">MĘŻCZYŹNI</span>
                      <strong className="block text-2xl text-white">30 kg</strong>
                   </div>
                </div>
                <p className="mt-4 text-xs text-gray-400">
                   *Praca dorywcza (do 4x na godzinę): Kobiety 20kg, Mężczyźni 50kg.
                </p>
             </div>
             
             <div className="bg-card p-5 mt-4 border-l-4 border-success">
                <strong className="text-white block mb-2">Technika Podnoszenia (Wiadro 20L)</strong>
                <ul className="list-disc pl-5 text-sm text-gray-300 space-y-2">
                   <li>Podejdź blisko obiektu.</li>
                   <li>Rozstaw nogi szeroko.</li>
                   <li><strong>Zegnij kolana, nie plecy!</strong></li>
                   <li>Podnoś pracą nóg, trzymając wiadro blisko ciała.</li>
                </ul>
             </div>
          </div>
        )
      },
      {
        title: 'Lekcja 2: Zespół Cieśni Nadgarstka',
        content: (
          <div className="space-y-6">
             <h3 className="text-xl font-bold text-success font-mono border-b border-border pb-2">02 // CHOROBA ZAWODOWA</h3>
             <p className="text-gray-300">
                Częste wyżymanie szmat i mopa ręcznie prowadzi do uszkodzenia nerwów w nadgarstku.
             </p>
             <div className="bg-blue-900/20 p-5 rounded border border-blue-500 mt-4">
                <strong className="text-blue-400 block mb-2">Prewencja Systemowa</strong>
                <ul className="list-disc pl-5 text-sm text-gray-300 space-y-2">
                   <li>
                      <strong>Używaj prasy w wózku Splast:</strong> Prasa została wymyślona po to, byś nie musiał wyżymać ręcznie. Używaj jej zawsze, nawet do małych mopów.
                   </li>
                   <li>
                      <strong>Technika Ósemkowa:</strong> Przy myciu podłogi nie "pychaj" mopa przód-tył (obciąża lędźwie), lecz prowadź go swobodnie po łuku (ósemki). Wykorzystuj pęd mopa.
                   </li>
                   <li>
                      <strong>Kij teleskopowy:</strong> Ustaw go tak, aby rączka była na wysokości Twojej brody. Zbyt krótki kij wymusza garbienie się.
                   </li>
                </ul>
             </div>
          </div>
        )
      }
    ],
    quiz: [
      { id: 1, question: "Jaki jest limit dźwigania dla kobiet przy pracy stałej?", options: ["50 kg", "12 kg", "30 kg", "20 kg"], correctAnswer: 1 },
      { id: 2, question: "Jak bezpiecznie podnieść ciężkie wiadro?", options: ["Na prostych nogach, zginając plecy", "Zginając kolana, plecy proste", "Szybkim szarpnięciem", "Nie podnosić wcale"], correctAnswer: 1 },
      { id: 3, question: "Co zapobiega cieśni nadgarstka?", options: ["Używanie prasy do wyciskania", "Ręczne wyżymanie", "Brak przerw", "Mocne ściskanie kija"], correctAnswer: 0 },
      { id: 4, question: "Na jakiej wysokości powinien kończyć się kij do mopa?", options: ["Na wysokości kolan", "Na wysokości brody/nosa", "Powyżej głowy", "Obojętnie"], correctAnswer: 1 },
      { id: 5, question: "Jaki ruch mopa jest najbardziej ergonomiczny?", options: ["Przód-tył", "Ósemkowy", "Szorujący w miejscu", "Skaczący"], correctAnswer: 1 }
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
  }
];

export const RESOURCES: ResourceItem[] = [
  // TECHNIKA
  {
    id: 'karcher-se4',
    category: 'Technika',
    name: 'Karcher SE 4',
    description: 'Odkurzacz piorący 1000W. Wielofunkcyjny 3w1. Pojemnik 4L/4L. Przeznaczony do czyszczenia powierzchni tekstylnych metodą ekstrakcji.',
    links: [
        'https://www.castorama.pl/odkurzacz-pioracy-karcher-se-4/4066529034540_CAPL.prd',
        'https://eodkurzacz.pl/pl/p/Zestaw-ssawek-do-odkurzacza-Karcher-wd3/3732'
    ],
    sdsConfig: {
        hazards: "Urządzenie elektryczne. Ryzyko porażenia prądem przy uszkodzonym przewodzie. Moc znamionowa: 1000W. Napięcie 220-240V.",
        firstAid: "W razie porażenia odłączyć zasilanie. Rozpocząć RKO jeśli brak oddechu. Nie używać, jeśli kabel jest uszkodzony.",
        ppe: "Obuwie na gumowej podeszwie, suche ręce. Stosować chemię (RM 519) zgodnie z instrukcją.",
        ph: "Nie dotyczy (Urządzenie)",
        contains: "Odkurzacz, Wąż 2w1, Dysza spryskująco-odsysająca",
        storage: "Przechowywać w suchym miejscu. Po pracy opróżnić zbiorniki wody brudnej i czystej. Pozostawić otwarte do wyschnięcia.",
        waste: "Zużyty sprzęt elektryczny (WEEE). Nie wyrzucać do śmieci komunalnych. Oddać do punktu zbiórki elektrośmieci.",
        fire: "W razie pożaru urządzenia odłączyć od prądu. Gasić gaśnicą proszkową (ABC) lub śniegową. Nie używać wody pod napięciem."
    }
  },
  {
    id: 'karcher-wd3',
    category: 'Technika',
    name: 'Karcher WD 3 Premium',
    description: 'Odkurzacz przemysłowy uniwersalny. 1000W. Zbiornik stal nierdzewna 17L. Praca na sucho i mokro. Funkcja wydmuchu.',
    links: [
        'https://erpixkarcher24.pl/karcher-wd3/2002-wd-3-premium-s-v-19620-car-odkurzacz-kaercher-1628-1510-4054278923789.html',
        'https://www.castorama.pl/departments/worki-do-odkurzaczy-przemys-owych-modeco-expert-karcher-wd-3-aqua-vac-einhell-opakowanie-kartonowe-3-szt-/5906675193304_CAPL.prd'
    ],
    sdsConfig: {
        hazards: "Urządzenie elektryczne 1000W. Hałas > 75dB. Ryzyko wciągnięcia luźnych części odzieży. Pył (przy pracy bez worka).",
        firstAid: "W przypadku porażenia odłączyć prąd. W przypadku zaprószenia oka pyłem - płukać wodą.",
        ppe: "Nauszniki przeciwhałasowe (przy długiej pracy), maska przeciwpyłowa (przy opróżnianiu zbiornika), odzież przylegająca.",
        usage: "Do pracy na sucho ZAWSZE używać worka filtracyjnego (Fleece). Do pracy na mokro wyjąć worek i używać filtra kartridżowego. Nie wciągać pyłów zapalnych (popiół).",
        storage: "Opróżnić zbiornik po każdym użyciu. Przechowywać z dala od wilgoci.",
        waste: "Elektrośmieci (WEEE). Oddać do utylizacji. Worki z pyłem: Odpady zmieszane (chyba że wciągano substancje niebezpieczne).",
        fire: "Nie odkurzać żarzących się niedopałków ani popiołu! Ryzyko pożaru wewnątrz zbiornika."
    }
  },
  {
      id: 'extinguisher-abc',
      category: 'PPOŻ',
      name: 'Gaśnica Proszkowa GP-6x ABC',
      description: 'Gaśnica 6kg. Skuteczna dla grup pożarów A (ciała stałe), B (ciecze), C (gazy). Może gasić urządzenia pod napięciem do 1000V.',
      links: ['https://www.ogniochron.eu/produkty/gasnice-proszkowe/gp-6x-abc'],
      sdsConfig: {
          hazards: "Proszek może podrażniać drogi oddechowe i oczy. Ogranicza widoczność podczas gaszenia.",
          firstAid: "Wyprowadzić na świeże powietrze. Przemyć oczy wodą.",
          ppe: "Maska przeciwpyłowa (przy sprzątaniu po użyciu).",
          usage: "Wyciągnąć zawleczkę, skierować wąż na źródło ognia, nacisnąć dźwignię. Gasić z wiatrem.",
          storage: "Miejsca widoczne, łatwo dostępne. Temp -30 do +60C. Przegląd co 12 miesięcy.",
          waste: "Oddać do serwisu ppoż. Zużyty proszek jest odpadem innym niż niebezpieczne.",
          fire: "Produkt gaśniczy."
      }
  },
  // SPRZĘT MANUALNY
  {
    id: 'moerman-excel',
    category: 'Sprzęt Manualny',
    name: 'Moerman Excelerator 2.0',
    description: 'Uchwyt + Szyna Liquidator 3.0 + Wkład F*LIQ (Do mycia okien). Regulacja kąta: 10°, 25°, 40°.',
    links: [
        'https://allegro.pl/oferta/moerman-excelerator-liquidator-3-0-f-liq-25-cm-12805881580'
    ],
    sdsConfig: {
        hazards: "Ryzyko skaleczenia o ostre krawędzie szyny (rzadkie). Ryzyko uderzenia przy pracy na wysokości.",
        firstAid: "Opatrzyć skaleczenia. Zdezynfekować ranę.",
        ppe: "Rękawice robocze (opcjonalnie).",
        usage: "Sprawdzić stan gumy przed użyciem. Ustawić kąt 25° lub 40° do pracy na kiju teleskopowym. Nie używać na sucho (rysuje szkło).",
        storage: "Przechowywać w pozycji wiszącej, aby nie odkształcić gumy Liquidator.",
        waste: "Guma i plastik - odpady zmieszane/tworzywa. Metal - złom.",
        fire: "Produkt palny (plastik, tekstylia). Gasić wodą, pianą."
    }
  },
  {
    id: 'telescope',
    category: 'Sprzęt Manualny',
    name: 'Kij Teleskopowy 3-4m',
    description: 'Kij kompatybilny z systemem Moerman (praca z ziemi). Redukcja kątowa.',
    links: [
        'https://allegro.pl/oferta/moerman-kij-teleskopowy-3-czesciowy-4m-z-redukcja-katowa-wytrzymaly-18003339238'
    ],
    sdsConfig: {
        hazards: "Ryzyko porażenia prądem przy zahaczeniu o linie energetyczne (aluminium przewodzi prąd!). Uderzenie osób postronnych.",
        firstAid: "W razie porażenia nie dotykać poszkodowanego przed odłączeniem napięcia.",
        ppe: "Kask ochronny (przy pracy powyżej głowy), okulary (kapiąca woda).",
        usage: "ZABRONIONE UŻYWANIE W POBLIŻU LINII ENERGETYCZNYCH. Blokować segmenty po rozsunięciu. Nie używać jako dźwigni.",
        storage: "Złożony, w suchym miejscu. Wyczyścić piasek z gwintów.",
        waste: "Aluminium - złom metali kolorowych.",
        fire: "Niepalny (Aluminium). Elementy plastikowe mogą się topić."
    }
  },
  {
    id: 'splast-ts',
    category: 'Sprzęt Manualny',
    name: 'Splast TS-0004',
    description: 'Wózek dwuwiaderkowy (2x25L) z prasą do wyciskania. Wiadro niebieskie (czyste), czerwone (brudne).',
    links: [
        'https://balmea.pl/pl/p/Wozek-do-sprzatania-Splast-TS-0004-dwuwiaderkowy-z-prasa-do-wyciskania/292'
    ],
    sdsConfig: {
        hazards: "Ryzyko przytrzaśnięcia palców w prasie. Ryzyko przewrócenia wózka z gorącą wodą.",
        firstAid: "Schłodzić oparzenia wodą. Opatrzyć zgniecenia.",
        ppe: "Obuwie antypoślizgowe.",
        usage: "Nie wkładać rąk do prasy podczas wyciskania. Prowadzić wózek, nie ciągnąć. Nie przeciążać.",
        storage: "Wiadra opróżnione i wymyte. Prasa otwarta.",
        waste: "Tworzywo PP - Recykling plastiku (Żółty pojemnik). Metalowe rączki - złom.",
        fire: "Produkt palny (Polipropylen). W razie pożaru tworzy gęsty, toksyczny dym. Gasić pianą, proszkiem."
    }
  },
  // CHEMIA (TENZI)
  {
    id: 'tenzi-normal',
    category: 'Chemia (Tenzi)',
    name: 'Tenzi TopEfekt Normal',
    description: 'Codzienne mycie posadzek twardych. Skoncentrowany preparat myjący. Nie pozostawia smug.',
    links: ['https://tenzi.pl/topefektr-normal-10l'],
    sdsConfig: {
        hazards: "H318 Powoduje poważne uszkodzenie oczu. H315 Działa drażniąco na skórę (w koncentracie).",
        ph: "11 (koncentrat), ok. 9 (roztwór roboczy)",
        contains: "Alkohole tłuszczowe C11-13 rozgałęzione oksyetylenowane, Kumenosulfonian sodu.",
        firstAid: "OCZY: Płukać wodą przez kilka minut. Wyjąć soczewki. SKÓRA: Zmyć wodą. POŁKNIĘCIE: Nie wywoływać wymiotów, pić wodę.",
        ppe: "Rękawice ochronne (nitryl/neopren), okulary ochronne (przy przelewaniu koncentratu).",
        storage: "Przechowywać w szczelnie zamkniętych opakowaniach w temp. 5-35°C. Chronić przed słońcem.",
        usage: "Stężenie robocze: 50-100ml / 10L wody. Nie mieszać z kwasami.",
        waste: "Kod 20 01 29* (Detergenty zawierające substancje niebezpieczne). Nie wylewać do wód gruntowych.",
        fire: "Produkt niepalny. W razie pożaru otoczenia chłodzić pojemniki wodą."
    }
  },
  {
    id: 'tenzi-glass',
    category: 'Chemia (Tenzi)',
    name: 'Tenzi Top Glass',
    description: 'Mycie szyb, luster i powierzchni szklanych. Preparat gotowy do użycia. Nie pozostawia smug.',
    links: ['https://tenzi.pl/top-glass-10l'],
    sdsConfig: {
        hazards: "H225 Wysoce łatwopalna ciecz i pary (zawiera Etanol). H319 Działa drażniąco na oczy.",
        ph: "9 (Zasadowy)",
        contains: "Etanol <4%, Rozpuszczalniki organiczne.",
        firstAid: "OCZY: Ostrożnie płukać wodą. WDECH: Wyprowadzić na świeże powietrze. POŁKNIĘCIE: Przepłukać usta wodą.",
        ppe: "Nie wymagane przy normalnym użyciu. Unikać wdychania rozpylonej mgły.",
        storage: "Z dala od źródeł ciepła, iskier i ognia. Temp < 30°C. Wentylacja.",
        usage: "Gotowy do użycia. Nanieść ze spryskiwacza, wytrzeć szmatką.",
        waste: "Opakowania po produkcie: Tworzywa sztuczne. Resztki: Punkt zbiórki odpadów niebezpiecznych.",
        fire: "Łatwopalny! Gasić pianą odporną na alkohole, CO2, proszkiem. Nie używać zwartego strumienia wody."
    }
  },
  {
    id: 'tenzi-wc',
    category: 'Chemia (Tenzi)',
    name: 'Tenzi WC Sani',
    description: 'Żel do mycia sanitariatów i odkamieniania. Usuwa kamień, rdzę i osady mydlane.',
    links: ['https://tenzi.pl/wc-sani-10l'],
    sdsConfig: {
        hazards: "H314 Powoduje poważne oparzenia skóry oraz uszkodzenia oczu. H290 Może powodować korozję metali. H412 Działa szkodliwie na organizmy wodne.",
        ph: "1 (Silny Kwas)",
        contains: "Kwas fosforowy, Kwas amidosulfonowy, Bis(2-hydroksyetylo)oleiloamina.",
        firstAid: "OCZY: Płukać natychmiast dużą ilością wody (min. 15 min). SKÓRA: Natychmiast zdjąć skażoną odzież, spłukać skórę. POŁKNIĘCIE: Wypłukać usta, NIE wywoływać wymiotów (ryzyko perforacji).",
        ppe: "Rękawice kwasoodporne (Butyl/Viton), gogle ochronne szczelne, odzież ochronna.",
        storage: "Przechowywać pod zamknięciem. Oryginalne opakowania. Nie przechowywać z metalami i alkaliami (chlorem).",
        usage: "Nanieść na powierzchnię, odczekać 10 min, spłukać. NIE MIESZAĆ Z CHLOREM (Domestos) - Ryzyko zatrucia chlorem.",
        waste: "Kod 20 01 14* (Kwasy). Nie wylewać do kanalizacji bez neutralizacji.",
        fire: "Niepalny. W ogniu wydziela toksyczne tlenki fosforu i siarki. Gasić środkami odpowiednimi dla otoczenia."
    }
  },
  {
    id: 'tenzi-gran',
    category: 'Chemia (Tenzi)',
    name: 'Tenzi Gran Smog',
    description: 'Usuwanie tłustych zabrudzeń, sadzy, przypaleń (komory wędzarnicze, grille, piekarniki). Bardzo silny.',
    links: ['https://tenzi.pl/gran-smog-extra-10l'],
    sdsConfig: {
        hazards: "H314 Powoduje poważne oparzenia skóry oraz uszkodzenia oczu. H290 Może powodować korozję metali (Aluminium).",
        ph: "14 (Silna Zasada)",
        contains: "Wodorotlenek potasu (KOH) > 10%, niejonowe środki powierzchniowo czynne.",
        firstAid: "OCZY: Płukać natychmiast wodą (min. 15 min) - chronić nieuszkodzone oko. SKÓRA: Zdjąć odzież, zmywać dużą ilością wody. Wezwać lekarza. POŁKNIĘCIE: Podać wodę, nie wywoływać wymiotów.",
        ppe: "Rękawice ochronne (neopren/nitryl - długie mankiety), osłona twarzy/przyłbica. Fartuch chemoodporny.",
        storage: "Wyłącznie w pojemnikach z tworzywa sztucznego. Z dala od kwasów i aluminium.",
        usage: "Rozcieńczać 500ml-1000ml / 10L wody. Nie stosować na aluminium i powierzchnie malowane proszkowo.",
        waste: "Kod 20 01 15* (Alkalia). Utylizować jako odpad niebezpieczny.",
        fire: "Niepalny. Reaguje z metalami lekkimi (Al, Zn) wydzielając Wodór (wybuchowy). Opakowania chłodzić wodą."
    }
  },
  {
    id: 'tenzi-ds1',
    category: 'Chemia (Tenzi)',
    name: 'Tenzi DS-1 GT',
    description: 'Gotowy preparat do dezynfekcji powierzchni (Biura, Szpitale). Spektrum: B, F, V, Tbc. Atest PZH.',
    links: ['https://tenzi.pl/ds-1-gt-5l'],
    sdsConfig: {
        hazards: "H226 Łatwopalna ciecz i pary. H319 Działa drażniąco na oczy.",
        ph: "7-8 (Neutralny)",
        contains: "Etanol, Propan-2-ol, Glukoprotamina.",
        firstAid: "Zapewnić dopływ świeżego powietrza. Przemyć oczy.",
        ppe: "Rękawice ochronne.",
        usage: "Spryskać powierzchnię (30ml/m2), pozostawić na 1 minutę. Nie wycierać do sucha przed upływem czasu kontaktu.",
        storage: "Z dala od ognia. Temp. pokojowa.",
        waste: "Nie wylewać do kanalizacji. Utylizacja jako odpad chemiczny.",
        fire: "Łatwopalny."
    }
  },
  {
    id: 'tenzi-textil',
    category: 'Chemia (Tenzi)',
    name: 'Tenzi Textil Wash',
    description: 'Pranie dywanów i tapicerki metodą ekstrakcyjną lub szamponowania. Nie zawiera wybielaczy.',
    links: ['https://tenzi.pl/textil-wash-10l'],
    sdsConfig: {
        hazards: "H319 Działa drażniąco na oczy. H315 Działa drażniąco na skórę.",
        ph: "7 (Neutralny)",
        contains: "Enzymy, Alkohole tłuszczowe, Kompozycje zapachowe.",
        firstAid: "OCZY: Płukać wodą przez kilka minut. SKÓRA: Umyć wodą z mydłem.",
        ppe: "Okulary ochronne (przy ryzyku rozprysku), rękawice ochronne gumowe.",
        storage: "Temp 5-30°C. Chronić przed zamarznięciem (niszczy enzymy).",
        usage: "100-400ml / 10L wody. Sprawdzić trwałość kolorów w niewidocznym miejscu.",
        waste: "Kod 20 01 30 (Detergenty inne niż wymienione w 20 01 29).",
        fire: "Produkt niepalny."
    }
  },
  {
    id: 'tenzi-steel',
    category: 'Chemia (Tenzi)',
    name: 'Tenzi Stal Nierdzewna',
    description: 'Odtłuszczanie i mycie stali nierdzewnej. Usuwa brud, tłuszcz i zacieki.',
    links: ['https://tenzi.pl/steel-dee-gt-06l'],
    sdsConfig: {
        hazards: "H304 Połknięcie i dostanie się przez drogi oddechowe może grozić śmiercią (Zagrożenie aspiracją). EUH066 Powtarzające się narażenie może powodować wysuszanie lub pękanie skóry.",
        ph: "N/D (Mieszanina olejowa)",
        contains: "Węglowodory, C10-C13, n-alkany, izoalkany, cykliczne.",
        firstAid: "POŁKNIĘCIE: NIE wywoływać wymiotów! Natychmiast wezwać lekarza. SKÓRA: Umyć wodą z mydłem. OCZY: Płukać wodą.",
        ppe: "Rękawice ochronne olejoodporne (Nitryl).",
        storage: "Z dala od źródeł ognia. Szczelnie zamknięte.",
        usage: "Stosować bez rozcieńczania. Nanieść na szmatkę, rozprowadzić równomiernie.",
        waste: "Kod 15 01 10* (Opakowania zawierające pozostałości substancji niebezpiecznych).",
        fire: "Produkt palny. Gasić pianą, proszkiem, CO2. Nie używać wody."
    }
  },
  {
    id: 'tenzi-foam',
    category: 'Chemia (Tenzi)',
    name: 'Tenzi De Foam',
    description: 'Środek zapobiegający powstawaniu piany w zbiornikach brudnej wody (odkurzacze, szorowarki).',
    links: ['https://tenzi.sklep.pl/tenzi-de-foam-srodek-do-usuwania-piany-defoam-10l-p-339.html'],
    sdsConfig: {
        hazards: "Produkt nie jest klasyfikowany jako stwarzający zagrożenie (zgodnie z rozp. 1272/2008).",
        ph: "7 (Neutralny)",
        contains: "Emulsja silikonowa, konserwanty.",
        firstAid: "OCZY: Płukać wodą profilaktycznie. SKÓRA: Zmyć wodą.",
        ppe: "Nie wymagane. Zalecane ogólne środki higieny.",
        storage: "Temp > 5°C. Chronić przed mrozem.",
        usage: "Wlać 50-100ml do zbiornika BRUDNEJ wody przed rozpoczęciem pracy.",
        waste: "Odpady komunalne (jeśli nie skażone innymi substancjami).",
        fire: "Niepalny."
    }
  },
  // BHP / PPE
  {
    id: 'kit-din',
    category: 'BHP i Apteczka',
    name: 'Apteczka DIN 13157',
    description: 'Przemysłowa apteczka pierwszej pomocy + Płuczka do oczu',
    links: [
        'https://icd.pl/apteczka-standard-din-13157.html',
        'https://icd.pl/plukanka-do-oczu-biophos74-500ml.html',
        'https://icd.pl/plukanka-do-oczu-actiomedic-eye-care-500ml.html'
    ],
    sdsConfig: {
        hazards: "Brak. Zestaw wyrobów medycznych.",
        firstAid: "Stosować zgodnie z przeznaczeniem do opatrywania ran. Płuczka do oczu: jednorazowego użytku.",
        ppe: "Używać rękawiczek jednorazowych z zestawu przy udzielaniu pomocy.",
        storage: "Miejsce suche, łatwo dostępne, oznaczone krzyżem. Kontrolować daty ważności.",
        waste: "Zużyte opatrunki traktować jako odpady medyczne/higieniczne.",
        fire: "Opakowanie (plastik) palne.",
        contains: "Plastry, bandaże, kompresy, koc ratunkowy, nożyczki, chusta trójkątna."
    }
  },
  {
    id: 'goggles',
    category: 'BHP i Apteczka',
    name: 'Gogle Ochronne (Zamknięte)',
    description: 'Norma EN 166, powłoka Scotchgard',
    links: ['https://www.3market-shop.pl/gg501sgaf-eu--przezroczyste--zamkniete-okulary-ochronne-z-powloka-scotchgard-/'],
    sdsConfig: {
        hazards: "Brak. Produkt ochronny.",
        firstAid: "Nie dotyczy.",
        ppe: "Stanowi środek ochrony wzroku klasy 1.",
        storage: "W etui, chronić przed zarysowaniem. Myć wodą z mydłem, nie rozpuszczalnikami.",
        waste: "Tworzywo sztuczne (Poliwęglan).",
        usage: "Zakładać przy pracy z chemikaliami (przelewanie, dozowanie) oraz przy ryzyku odprysków.",
        fire: "Polimer palny."
    }
  },
  {
    id: 'gloves-nitrile',
    category: 'BHP i Apteczka',
    name: 'Rękawice Nitrylowe',
    description: 'Pudełko 100 szt., bezpudrowe. EN 374 (Ochrona chemiczna - typ B lub C).',
    links: [
        'https://www.harborfreight.com/9-mil-nitrile-powder-free-gloves-large-50-pack-68511.html',
        'https://medimall.pl/en_US/p/Gloves-MAXSAFE-BLACK-size-L-nitrile-non-sterile-100-pcs/3385'
    ],
    sdsConfig: {
        hazards: "Brak. Produkt hypoalergiczny (brak lateksu).",
        firstAid: "W razie podrażnienia skóry dłoni zaprzestać używania, zastosować krem.",
        ppe: "Stanowi środek ochrony rąk.",
        storage: "Z dala od słońca i ozonu (niszczeją). Suche miejsce.",
        usage: "Jednorazowe. Wymieniać po uszkodzeniu lub kontakcie z silną chemią > 15 min.",
        waste: "Skażone chemią - zgodnie z kartą chemii. Nieskażone - zmieszane/tworzywa.",
        fire: "Palne. Wydzielają toksyczny dym."
    }
  },
  {
    id: 'gloves-chem',
    category: 'BHP i Apteczka',
    name: 'Rękawice Chemoodporne',
    description: 'Długie, do pracy z kwasami/zasadami (Gran Smog, WC Sani). Kategoria III. EN 388, EN 374.',
    links: [
        'https://bhp.pl/product/1118192196/rekawice-ochronne-rasolvex37-675-z-ansell'
    ],
    sdsConfig: {
        hazards: "Brak.",
        firstAid: "Nie dotyczy.",
        ppe: "Ochrona rąk przed ryzykiem chemicznym i mechanicznym.",
        usage: "Sprawdzić szczelność (nadmuchać) przed użyciem. Używać przy pracy z pH < 2 lub pH > 12.",
        storage: "Wieszać do wyschnięcia. Nie zostawiać na słońcu.",
        waste: "Utylizacja zgodnie z zanieczyszczeniem.",
        fire: "Guma syntetyczna/Neopren. Palne.",
        contains: "Neopren, bawełniana wyściółka."
    }
  },
  {
    id: 'masks',
    category: 'BHP i Apteczka',
    name: 'Maski FFP2 / FFP3',
    description: 'Ochrona dróg oddechowych przed pyłem. Norma EN 149.',
    links: [
        'https://icd.pl/polmaska-3m-8822.html'
    ],
    sdsConfig: {
        hazards: "Brak.",
        firstAid: "Zapewnić swobodne oddychanie. Wymienić maskę przy oporach oddechu.",
        ppe: "Ochrona układu oddechowego.",
        usage: "Jednorazowa (oznaczenie NR) lub wielorazowa (R). Dopasować blaszkę nosową. Używać przy opróżnianiu odkurzacza.",
        storage: "W oryginalnym opakowaniu, czyste miejsce.",
        waste: "Odpady zmieszane (chyba że skażone pyłem toksycznym - azbest, pleśń).",
        fire: "Palne."
    }
  },
  // INNE
  {
    id: 'sign',
    category: 'Inne',
    name: 'Znak "Śliska Podłoga"',
    description: 'Żółty potykacz ostrzegawczy. Wymagany przez przepisy BHP przy myciu podłóg w obiektach publicznych.',
    links: [
        'https://dla-przemyslu.pl/gabloty-i-powierzchnie-ekspozycyjne/1617-potykacz-ostrzegawczy-uwaga-sliska-podloga.html'
    ],
    sdsConfig: {
        hazards: "Ryzyko potknięcia o znak, jeśli ustawiony w przejściu.",
        firstAid: "Nie dotyczy.",
        ppe: "Stosowanie znaku jest środkiem ochrony zbiorowej.",
        usage: "Ustawiać ZAWSZE przed rozpoczęciem mycia podłogi na mokro. Usuwać dopiero po całkowitym wyschnięciu.",
        storage: "Złożony na płasko.",
        waste: "Tworzywo sztuczne (PP).",
        fire: "Palny."
    }
  },
  {
    id: 'cup',
    category: 'Inne',
    name: 'Menzurka (Miarka)',
    description: 'Do precyzyjnego dozowania chemii (100ml / 500ml). Polipropylen odporny na chemię.',
    links: [
        'https://mrcleaner.pl/en/bottles-and-washers/work-stuff-sizeer-measuring-cup-100ml'
    ],
    sdsConfig: {
        hazards: "Brak.",
        firstAid: "Nie dotyczy.",
        ppe: "Używać rękawic przy nalewaniu chemii.",
        usage: "Po użyciu wypłukać wodą. Nie mieszać różnych środków w jednej miarce bez płukania.",
        storage: "Czysta i sucha.",
        waste: "Plastik (PP).",
        fire: "Palny.",
        contains: "Polipropylen (PP)."
    }
  }
];