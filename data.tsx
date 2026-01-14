import React from 'react';
import { ShieldAlert, FlaskConical, Wrench, Zap, Layers, Users, Recycle, Droplets, HeartPulse, Sparkles } from 'lucide-react';
import { Module } from './types';

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
                    <span className="font-bold text-green-400">TopEfekt Normal (pH 7)</span>
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
               W modelu JEDG SOLO nie konkurujemy ceną, ale jakością i sprzętem. Klient widzi Twój profesjonalny sprzęt (Splast, Karcher, Moerman) i czuje się bezpiecznie.
             </p>
             
             <div className="bg-card p-5 rounded border border-border mt-4">
               <strong className="text-white block mb-3 text-lg">Złote Zasady "Solo Pro":</strong>
               <ul className="list-disc pl-5 text-sm text-gray-400 space-y-3">
                 <li><strong>Wizerunek:</strong> Używaj tylko profesjonalnych narzędzi z listy. Żadnych domowych wiader czy szmat.</li>
                 <li><strong>Uczciwość:</strong> Posiadamy polisę OC. Jeśli stłuczesz wazon lub uszkodzisz chrom kwasem – <strong>zgłoś to natychmiast</strong>.</li>
                 <li><strong>Klucze i Alarmy:</strong> Kodów alarmowych nie zapisuj w telefonie w jawnej formie. Klucze oznaczaj kodem, nie adresem.</li>
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
                    Jako personel sprzątający masz dostęp do tajemnic przedsiębiorstwa.
                 </p>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div className="bg-surface p-5 border border-red-500 rounded">
                        <strong className="text-red-500 block text-lg mb-2">ZAKAZY</strong>
                        <ul className="list-disc pl-5 text-sm text-gray-300 space-y-2">
                           <li><strong>Zero zdjęć:</strong> Zakaz fotografowania biur, dokumentów i ekranów.</li>
                           <li><strong>Zero czytania:</strong> Dokumenty na biurku to puste kartki dla Ciebie.</li>
                           <li><strong>Nie wyrzucaj dokumentów:</strong> Kartka na podłodze to nie śmieć (chyba że jest w koszu). Połóż ją na biurku.</li>
                        </ul>
                    </div>
                    <div className="bg-surface p-5 border border-green-500 rounded">
                        <strong className="text-green-500 block text-lg mb-2">DOBRE PRAKTYKI</strong>
                        <ul className="list-disc pl-5 text-sm text-gray-300 space-y-2">
                           <li><strong>Clean Desk Policy:</strong> Podnieś przedmiot, przetrzyj, odłóż w to samo miejsce.</li>
                           <li><strong>Dyskrecja:</strong> "Co widziałeś u klienta, zostaje u klienta".</li>
                        </ul>
                    </div>
                 </div>
             </div>
         )
      },
      {
         title: 'Lekcja 3: Logistyka Sprzątania',
         content: (
             <div className="space-y-6">
                 <h3 className="text-xl font-bold text-primary font-mono border-b border-border pb-2">03 // EFEKTYWNOŚĆ</h3>
                 <div className="bg-surface p-5 border border-gray-600 rounded">
                   <strong className="text-white block mb-3 text-lg">Kolejność Stref</strong>
                   <ol className="list-decimal pl-5 text-sm text-gray-300 space-y-3">
                     <li>
                        <strong>Strefy Czyste (Biura):</strong> Zaczynamy tutaj świeżym mopem.
                     </li>
                     <li>
                        <strong>Strefy Socjalne (Kuchnie):</strong> Średni brud.
                     </li>
                     <li>
                        <strong>Strefy Brudne (Toalety):</strong> Sprzątamy na końcu. Mop po toalecie idzie do prania.
                     </li>
                   </ol>
                   <div className="mt-4 pt-4 border-t border-gray-700">
                      <strong className="text-white block mb-2">Zasada "Góra-Dół":</strong>
                      <p className="text-sm text-gray-400">
                        Najpierw kurze z szaf, na końcu odkurzanie (WD 3) i mycie podłóg (Splast).
                      </p>
                   </div>
                 </div>
             </div>
         )
      }
    ],
    quiz: [
      { id: 1, question: "Co robisz, gdy stłuczesz przedmiot u klienta?", options: ["Chowam do kosza", "Zgłaszam to natychmiast (OC)", "Sklejam", "Uciekam"], correctAnswer: 1 },
      { id: 2, question: "Jaka jest kolejność sprzątania?", options: ["Toalety -> Biura", "Biura (Czyste) -> Kuchnie -> Toalety (Brudne)", "Obojętnie", "Od wejścia"], correctAnswer: 1 },
      { id: 3, question: "Czy wolno czytać dokumenty leżące na biurku?", options: ["Tak, z ciekawości", "Nie, to naruszenie RODO", "Tylko nagłówki", "Jeśli leżą na podłodze to tak"], correctAnswer: 1 },
      { id: 4, question: "Czy wolno robić zdjęcia w firmie klienta?", options: ["Tak", "Bezwzględnie NIE (chyba że jest zgoda)", "Tylko selfie", "Jak nikt nie widzi"], correctAnswer: 1 },
      { id: 5, question: "Gdzie ląduje papier leżący na podłodze obok kosza?", options: ["W koszu", "Na biurku (to może być ważny dokument)", "W niszczarce", "W kieszeni"], correctAnswer: 1 }
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
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-sm mt-4">
                 <div className="border border-blue-500 p-4 rounded bg-blue-900/10">
                    <strong className="text-blue-400 block text-lg mb-2">PAPIER (Niebieski)</strong>
                    <p className="text-gray-300 mb-2">Czysty papier, karton.</p>
                    <div className="text-xs text-gray-500 bg-black/20 p-2 rounded">
                        <strong>ZAKAZ:</strong> Tłusty papier, ręczniki, paragony.
                    </div>
                 </div>
                 <div className="border border-yellow-500 p-4 rounded bg-yellow-900/10">
                    <strong className="text-yellow-400 block text-lg mb-2">METALE I TWORZYWA (Żółty)</strong>
                    <p className="text-gray-300 mb-2">Butelki PET, puszki, TetraPak (karton po mleku).</p>
                 </div>
                 <div className="border border-green-500 p-4 rounded bg-green-900/10">
                    <strong className="text-green-500 block text-lg mb-2">SZKŁO (Zielony)</strong>
                    <p className="text-gray-300 mb-2">Butelki i słoiki.</p>
                 </div>
                 <div className="border border-gray-500 p-4 rounded bg-gray-800">
                    <strong className="text-gray-400 block text-lg mb-2">ZMIESZANE (Czarny)</strong>
                    <p className="text-gray-300 mb-2">Zabrudzone, higieniczne, potłuczone szkło.</p>
                 </div>
             </div>
          </div>
        )
      },
      {
         title: 'Lekcja 2: BHP przy Obsłudze Koszy',
         content: (
             <div className="space-y-6">
                 <h3 className="text-xl font-bold text-danger font-mono border-b border-border pb-2">02 // UWAGA: OSTRZE!</h3>
                 
                 <div className="bg-danger/10 border border-danger p-5 rounded shadow-lg">
                   <strong className="text-danger block text-xl mb-3">ZŁOTA ZASADA: "NIE DOCISKAJ"</strong>
                   <p className="text-gray-300 leading-relaxed">
                     Nigdy nie dociskaj śmieci w worku ręką ani nogą.
                     <br/>W środku może być rozbite szkło lub igła.
                   </p>
                 </div>

                 <div className="bg-card p-5 rounded border border-gray-600 mt-4">
                   <strong className="text-white block mb-3">Procedura:</strong>
                   <ol className="list-decimal pl-5 text-sm text-gray-400 space-y-2">
                     <li>Wywiń krawędzie worka i zawiąż przed wyjęciem (nie wdychasz kurzu).</li>
                     <li>Wyjmij worek, trzymając go z dala od nóg.</li>
                     <li>Nie przesypuj śmieci między koszami (wzbijasz kurz).</li>
                   </ol>
                 </div>
             </div>
         )
      }
    ],
    quiz: [
      { id: 1, question: "Gdzie wyrzucisz zużyty ręcznik papierowy?", options: ["Do papieru", "Do zmieszanych (Czarny)", "Do bio", "Do szkła"], correctAnswer: 1 },
      { id: 2, question: "Gdzie wyrzucisz karton po mleku (TetraPak)?", options: ["Do papieru", "Do metali i tworzyw (Żółty)", "Do zmieszanych", "Do bio"], correctAnswer: 1 },
      { id: 3, question: "Dlaczego nie wolno dociskać śmieci ręką?", options: ["To niehigieniczne", "Ryzyko skaleczenia (szkło, igły)", "Worek pęknie", "Szef zabrania"], correctAnswer: 1 },
      { id: 4, question: "Gdzie wyrzucisz paragon?", options: ["Do papieru", "Do zmieszanych (druk termiczny)", "Do plastiku", "Do bio"], correctAnswer: 1 },
      { id: 5, question: "Gdzie wyrzucisz potłuczoną szklankę?", options: ["Do szkła", "Do zmieszanych (inne szkło niż butelkowe)", "Do plastiku", "Do bio"], correctAnswer: 1 }
    ]
  }
];