import React from 'react';
import { ShieldAlert, FlaskConical, Wrench, Zap, Layers, Users, Recycle, Droplets, HeartPulse, Sparkles, Stethoscope, Utensils, Flame, Maximize, Box, Truck, ClipboardList, Palette, Building, Briefcase } from 'lucide-react';
import { Module, ResourceItem } from './types';

export const MODULES: Module[] = [
  {
    id: 'bhp_safety',
    title: 'BHP: Ochrona Zdrowia i Ergonomia',
    description: 'Fundament bezpieczeństwa. PPE, pierwsza pomoc (Oczy/Skóra) oraz ergonomia pracy fizycznej (dźwiganie, praca z kijem teleskopowym).',
    icon: ShieldAlert,
    priority: 'KRYTYCZNE',
    priorityColor: 'text-primary',
    passingScore: 100,
    lessons: [
      {
        title: 'Lekcja 1: Środki Ochrony Indywidualnej (PPE)',
        content: (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary font-mono border-b border-border pb-2">01 // TARCZA OCHRONNA</h3>
            
            <p className="text-gray-300">
              W pracy z chemią profesjonalną (zakres pH 1-14) nie ma miejsca na błędy.
            </p>

            <div className="space-y-4 mt-6">
               <div className="bg-card p-5 rounded border-l-4 border-blue-500">
                  <strong className="text-blue-400 block text-lg mb-2">1. Rękawice Nitrylowe (Krótkie)</strong>
                  <ul className="list-disc pl-5 text-xs text-gray-400">
                    <li><strong>Zastosowanie:</strong> Mycie szyb (<em>Tenzi Top Glass</em>), kurzenie (<em>Uni Clean</em>), dezynfekcja klamek.</li>
                    <li><strong>Zasada:</strong> Wymieniaj co 45 minut.</li>
                  </ul>
               </div>

               <div className="bg-card p-5 rounded border-l-4 border-red-500">
                  <strong className="text-red-400 block text-lg mb-2">2. Rękawice Chemoodporne (Długie)</strong>
                  <p className="text-sm text-gray-300 mb-2">
                    <span className="text-red-500 font-bold uppercase">Wyposażenie obowiązkowe</span> przy koncentratach i skrajnym pH.
                  </p>
                  <ul className="list-disc pl-5 text-xs text-gray-400">
                    <li><strong>Zastosowanie:</strong> Kwasy (<em>WC Sani, Derast</em>), Zasady (<em>Gran Smog, GranClor</em>).</li>
                  </ul>
               </div>

               <div className="bg-card p-5 rounded border-l-4 border-yellow-500">
                  <strong className="text-yellow-400 block text-lg mb-2">3. Ochrona Oczu i Dróg Oddechowych</strong>
                  <ul className="list-disc pl-5 text-sm text-gray-300 space-y-2">
                    <li><strong>Gogle (EN 166):</strong> Przy przelewaniu chemii i myciu sufitów.</li>
                    <li><strong>Maska FFP2/FFP3:</strong> Przy opróżnianiu odkurzacza <em>Karcher WD 3</em> (pył kwarcowy).</li>
                  </ul>
               </div>
            </div>
          </div>
        )
      },
      {
        title: 'Lekcja 2: Procedury Ratunkowe',
        content: (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-success font-mono border-b border-border pb-2">02 // PROCEDURY AWARYJNE</h3>
            
            <div className="bg-surface p-6 rounded border border-gray-700 shadow-xl mb-6">
               <strong className="block text-white mb-4 text-xl border-b border-gray-600 pb-2">Scenariusz: Skażenie Oka</strong>
               <div className="bg-red-900/20 p-4 rounded mb-4 border border-red-500/50">
                 <p className="text-red-200 font-bold text-center">CZAS REAKCJI: 10 SEKUND</p>
               </div>
               <ol className="list-decimal pl-5 text-gray-300 space-y-2 text-sm">
                 <li>Nie panikuj. Sięgnij po płuczkę (Eye Wash).</li>
                 <li>Przekręć nakrętkę (złam plombę).</li>
                 <li>Płucz oko min. <strong>15 minut</strong> (płyn buforowy).</li>
                 <li>Wezwij pomoc. Pokaż ratownikom <strong>SDS</strong> produktu.</li>
               </ol>
            </div>
          </div>
        )
      },
      {
        title: 'Lekcja 3: Ergonomia Pracy Fizycznej',
        content: (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white font-mono border-b border-border pb-2">03 // ZDROWY KRĘGOSŁUP</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-surface p-4 rounded border border-gray-600">
                    <strong className="text-white block mb-2">Dźwiganie (Karcher, Wiadra)</strong>
                    <ul className="list-disc pl-5 text-sm text-gray-400 space-y-2">
                        <li>Nigdy nie podnoś wiadra Splast (25L) na prostych nogach i zgiętych plecach.</li>
                        <li><strong>Technika Przysiadu:</strong> Zegnij kolana, plecy proste, ciężar blisko ciała.</li>
                        <li>Unikaj rotacji tułowia z obciążeniem.</li>
                    </ul>
                </div>
                <div className="bg-surface p-4 rounded border border-gray-600">
                    <strong className="text-white block mb-2">Praca Kijem Teleskopowym (3-4m)</strong>
                    <ul className="list-disc pl-5 text-sm text-gray-400 space-y-2">
                        <li>Nie pracuj samymi rękami. Kij opieraj o biodro lub używaj pasa monterskiego jako wsparcia.</li>
                        <li>Kąt pracy: Stój blisko ściany, unikaj wychylenia powyżej 60 stopni (ryzyko urazu karku).</li>
                        <li>Co 20 minut rób przerwę na rozluźnienie karku.</li>
                    </ul>
                </div>
            </div>
          </div>
        )
      }
    ],
    quiz: [
      { id: 1, question: "Jak podnosimy ciężkie wiadro z wodą?", options: ["Na prostych nogach, schylając się", "Zginając kolana, plecy proste, ciężar blisko ciała", "Szybkim szarpnięciem", "Jedną ręką"], correctAnswer: 1 },
      { id: 2, question: "Co robisz przy skażeniu oka kwasem?", options: ["Płuczę wodą przez 30 sekund", "Używam płuczki do oczu przez min. 15 minut", "Trę oko ręką", "Czekam aż przestane piec"], correctAnswer: 1 },
      { id: 3, question: "Kiedy używamy maski FFP2?", options: ["Zawsze", "Przy opróżnianiu odkurzacza z pyłu", "Tylko w biurze", "Podczas przerwy"], correctAnswer: 1 },
      { id: 4, question: "Jaki jest limit czasu pracy ciągłej z kijem teleskopowym bez przerwy?", options: ["4 godziny", "20-30 minut (ryzyko przeciążenia karku)", "8 godzin", "Nie ma limitu"], correctAnswer: 1 }
    ]
  },
  {
    id: 'haccp_surfaces',
    title: 'HACCP i Inżynieria Materiałowa',
    description: 'System kodowania kolorystycznego (Vikan). Rozpoznawanie powierzchni (Marmur, Drewno, Stal) i unikanie kosztownych błędów.',
    icon: Palette,
    priority: 'KRYTYCZNE',
    priorityColor: 'text-primary',
    passingScore: 100,
    lessons: [
      {
        title: 'Lekcja 1: Kodowanie Kolorystyczne (System Vikan)',
        content: (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white font-mono border-b border-border pb-2">01 // STREFY HIGIENY</h3>
            <p className="text-gray-300">
              Użycie ścierki z toalety do mycia biurka to powód do natychmiastowego zwolnienia. Stosujemy rygorystyczny podział kolorów (narzędzia Vikan, ścierki, wiadra).
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
               <div className="bg-red-900/30 border-t-4 border-red-600 p-4 rounded">
                  <strong className="text-red-500 block text-lg">CZERWONY</strong>
                  <span className="text-xs text-gray-300 block uppercase font-bold mt-1">OBSZAR SKAŻONY</span>
                  <p className="text-xs text-gray-400 mt-2">Wnętrza muszli toaletowych, pisuary, bidety.</p>
               </div>
               <div className="bg-yellow-900/30 border-t-4 border-yellow-500 p-4 rounded">
                  <strong className="text-yellow-500 block text-lg">ŻÓŁTY</strong>
                  <span className="text-xs text-gray-300 block uppercase font-bold mt-1">SANITARIATY (OGÓLNE)</span>
                  <p className="text-xs text-gray-400 mt-2">Umywalki, kafelki, lustra w łazience, klamki łazienkowe.</p>
               </div>
               <div className="bg-green-900/30 border-t-4 border-green-600 p-4 rounded">
                  <strong className="text-green-500 block text-lg">ZIELONY</strong>
                  <span className="text-xs text-gray-300 block uppercase font-bold mt-1">GASTRONOMIA</span>
                  <p className="text-xs text-gray-400 mt-2">Kuchnie, blaty spożywcze, stołówki.</p>
               </div>
               <div className="bg-blue-900/30 border-t-4 border-blue-500 p-4 rounded">
                  <strong className="text-blue-500 block text-lg">NIEBIESKI</strong>
                  <span className="text-xs text-gray-300 block uppercase font-bold mt-1">OGÓLNY</span>
                  <p className="text-xs text-gray-400 mt-2">Biurka, meble, okna, korytarze (poza kuchnią i WC).</p>
               </div>
            </div>
          </div>
        )
      },
      {
        title: 'Lekcja 2: Wrażliwość Powierzchni (Unikaj Zniszczeń)',
        content: (
          <div className="space-y-6">
             <h3 className="text-xl font-bold text-white font-mono border-b border-border pb-2">02 // MATERIAŁOZNAWSTWO</h3>
             
             <div className="space-y-4">
                <div className="bg-surface p-4 border-l-4 border-red-500 rounded">
                   <strong className="text-white block mb-1">MARMUR / KAMIEŃ WAPIENNY (Lastryko)</strong>
                   <p className="text-sm text-gray-300">
                      <span className="text-red-500 font-bold">ZAKAZ KWASÓW!</span> Użycie <em>WC Sani</em> lub <em>Derast</em> (pH 1) na marmurze spowoduje jego natychmiastowe zmatowienie i "wyżarcie" dziur.
                      <br/><strong>Co stosować:</strong> Tylko środki neutralne (<em>Uni Clean</em>) lub zasadowe.
                   </p>
                </div>

                <div className="bg-surface p-4 border-l-4 border-yellow-500 rounded">
                   <strong className="text-white block mb-1">ALUMINIUM / CHROM</strong>
                   <p className="text-sm text-gray-300">
                      <span className="text-yellow-500 font-bold">ZAKAZ SILNYCH ZASAD!</span> Użycie <em>Gran Smog</em> (pH 14) na aluminiowym okapie lub listwie spowoduje sczernienie metalu.
                      <br/><strong>Co stosować:</strong> <em>Uni Clean</em> lub dedykowane mleczka.
                   </p>
                </div>

                <div className="bg-surface p-4 border-l-4 border-blue-500 rounded">
                   <strong className="text-white block mb-1">DREWNO / PANELE LAMINOWANE</strong>
                   <p className="text-sm text-gray-300">
                      <span className="text-blue-400 font-bold">ZAKAZ WODY!</span> Drewno puchnie od nadmiaru wilgoci.
                      <br/><strong>Co stosować:</strong> Mop Zflow musi być tylko wilgotny (odwirowany), nigdy ociekający. Używamy <em>TopEfekt Oranż</em>.
                   </p>
                </div>
             </div>
          </div>
        )
      }
    ],
    quiz: [
      { id: 1, question: "Jaki kolor ścierki stosujemy do mycia wewnątrz muszli klozetowej?", options: ["Niebieski", "Czerwony", "Zielony", "Żółty"], correctAnswer: 1 },
      { id: 2, question: "Co się stanie, jeśli użyjesz kwasu (WC Sani) na marmurowej posadzce?", options: ["Marmur będzie błyszczał", "Nic się nie stanie", "Marmur zostanie trwale zmatowiony i wyżarty (zniszczony)", "Marmur zmieni kolor na niebieski"], correctAnswer: 2 },
      { id: 3, question: "Jaki środek jest bezpieczny dla wszystkich powierzchni (pH 7)?", options: ["Tenzi Uni Clean", "Tenzi Gran Smog", "Tenzi Derast", "Tenzi WC Sani"], correctAnswer: 0 },
      { id: 4, question: "Czym grozi mycie paneli laminowanych zbyt mokrym mopem?", options: ["Szybszym wyschnięciem", "Spuchnięciem krawędzi i zniszczeniem podłogi", "Lepszym połyskiem", "Dezynfekcją"], correctAnswer: 1 }
    ]
  },
  {
    id: 'chem_system',
    title: 'Technologia Chemiczna: System Tenzi',
    description: 'Skala pH, dozowanie i tabela odplamiania. Kompendium wiedzy o usuwaniu plam (krew, guma, tłuszcz).',
    icon: FlaskConical,
    priority: 'TECHNICZNE',
    priorityColor: 'text-secondary',
    passingScore: 90,
    lessons: [
      {
        title: 'Lekcja 1: Skala pH i Dobór Produktu',
        content: (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-secondary font-mono border-b border-border pb-2">01 // KLASYFIKACJA pH</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
               <div className="bg-red-900/10 border border-red-500 p-5 rounded">
                  <strong className="text-red-400 block text-lg mb-2">KWASY (pH 0-4)</strong>
                  <p className="text-xs text-gray-400 mb-2 uppercase">USUWAJĄ: KAMIEŃ, RDZĘ</p>
                  <ul className="text-xs text-white list-disc pl-4 space-y-2">
                    <li><strong>WC Sani (pH 1):</strong> Toalety. Żrący!</li>
                    <li><strong>Derast (pH 1):</strong> Beton, rdza.</li>
                    <li><strong>Sanit Lux (pH 2):</strong> Codzienne mycie łazienek.</li>
                  </ul>
               </div>
               <div className="bg-blue-900/10 border border-blue-500 p-5 rounded">
                  <strong className="text-blue-400 block text-lg mb-2">NEUTRALNE (pH 6-8)</strong>
                  <p className="text-xs text-gray-400 mb-2 uppercase">BEZPIECZNE</p>
                  <ul className="text-xs text-white list-disc pl-4 space-y-2">
                    <li><strong>Top Glass:</strong> Szyby.</li>
                    <li><strong>Uni Clean:</strong> Meble.</li>
                  </ul>
               </div>
               <div className="bg-green-900/10 border border-green-500 p-5 rounded">
                  <strong className="text-green-400 block text-lg mb-2">ZASADY (pH 10-14)</strong>
                  <p className="text-xs text-gray-400 mb-2 uppercase">USUWAJĄ: TŁUSZCZ</p>
                  <ul className="text-xs text-white list-disc pl-4 space-y-2">
                    <li><strong>Gran Smog (pH 14):</strong> Przypalenia.</li>
                    <li><strong>GranClor (pH 14):</strong> Wybielanie.</li>
                  </ul>
               </div>
            </div>
          </div>
        )
      },
      {
        title: 'Lekcja 2: Bezpieczeństwo i Tabela Zgodności',
        content: (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-danger font-mono border-b border-border pb-2">02 // KOMPATYBILNOŚĆ</h3>
            <div className="bg-card p-6 border-l-4 border-danger rounded mb-6">
                <h4 className="font-bold text-white text-xl mb-4 flex items-center gap-3">
                   <Flame className="text-danger" size={28} /> ZAKAZ ŁĄCZENIA
                </h4>
                <p className="text-sm text-gray-300">
                    Tenzi GranClor (Chlor) + WC Sani (Kwas) = <strong>GAZOWY CHLOR (ŚMIERĆ)</strong>.
                </p>
            </div>
          </div>
        )
      },
      {
        title: 'Lekcja 3: Odplamianie (Spotting Guide)',
        content: (
          <div className="space-y-6">
             <h3 className="text-xl font-bold text-white font-mono border-b border-border pb-2">03 // VADEMECUM PLAM</h3>
             <p className="text-gray-300">
                Kluczem do usunięcia plamy jest rozpoznanie jej źródła.
             </p>
             
             <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-400">
                    <thead className="text-xs text-gray-200 uppercase bg-gray-700">
                        <tr>
                            <th className="px-4 py-2">Rodzaj Plamy</th>
                            <th className="px-4 py-2">Czego użyć?</th>
                            <th className="px-4 py-2">Metoda</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-surface border-b border-gray-700">
                            <td className="px-4 py-2 font-bold text-white">Tłuszcz / Olej</td>
                            <td className="px-4 py-2">Zasada (<em>Gran Smog</em>, <em>Uni Clean</em>)</td>
                            <td className="px-4 py-2">Rozpuszczanie. Ciepła woda pomaga.</td>
                        </tr>
                        <tr className="bg-surface border-b border-gray-700">
                            <td className="px-4 py-2 font-bold text-white">Kawa / Herbata</td>
                            <td className="px-4 py-2">Kwas / Utleniacz</td>
                            <td className="px-4 py-2"><em>Top Glass</em> często wystarcza. Przy dywanach: <em>Textil Wash</em>.</td>
                        </tr>
                        <tr className="bg-surface border-b border-gray-700">
                            <td className="px-4 py-2 font-bold text-white">Guma do żucia</td>
                            <td className="px-4 py-2">Zamrażacz / Skrobak</td>
                            <td className="px-4 py-2">Zamrozić, wykruszyć, resztę zeskrobać <em>Skrobakiem Ergotec</em> (tylko twarde podłoża).</td>
                        </tr>
                        <tr className="bg-surface border-b border-gray-700">
                            <td className="px-4 py-2 font-bold text-white">Krew (Białko)</td>
                            <td className="px-4 py-2">ZIMNA WODA + Chlor</td>
                            <td className="px-4 py-2">Nigdy ciepła woda (zetnie białko!). Użyj <em>GranClor</em> (dezynfekcja).</td>
                        </tr>
                        <tr className="bg-surface border-b border-gray-700">
                            <td className="px-4 py-2 font-bold text-white">Ślady butów</td>
                            <td className="px-4 py-2">Mechanika</td>
                            <td className="px-4 py-2"><em>Vileda Miraclean</em> (na mokro) lub gumka do mazania.</td>
                        </tr>
                    </tbody>
                </table>
             </div>
          </div>
        )
      }
    ],
    quiz: [
      { id: 1, question: "Co się stanie po zmieszaniu Chloru z Kwasem?", options: ["Wydzieli się trujący gaz", "Powstanie piana", "Nic", "Lepszy środek"], correctAnswer: 0 },
      { id: 2, question: "Jakiej wody używamy do zmywania świeżej krwi?", options: ["Gorącej", "Zimnej (aby nie ściąć białka)", "Wrzątku", "Obojętnie"], correctAnswer: 1 },
      { id: 3, question: "Czym usuniesz czarne ślady gumy (od butów) na ścianie?", options: ["Magiczną gąbką (Miraclean) na mokro", "Skrobakiem metalowym", "Kwasem", "Młotkiem"], correctAnswer: 0 },
      { id: 4, question: "Który środek jest silną zasadą (pH 14) do tłuszczu?", options: ["Tenzi Gran Smog", "Tenzi Top Glass", "Tenzi Sanit Lux", "Woda"], correctAnswer: 0 }
    ]
  },
  {
    id: 'karcher_machine',
    title: 'Park Maszynowy: Karcher WD 3 & SE 4',
    description: 'Instrukcja obsługi. Filtry (sucho/mokro) i procedura prania ekstrakcyjnego (4 kroki).',
    icon: Zap,
    priority: 'EKSPERCKIE',
    priorityColor: 'text-purple-400',
    passingScore: 95,
    lessons: [
      {
        title: 'Lekcja 1: Karcher WD 3 (Sucho/Mokro)',
        content: (
          <div className="space-y-6">
             <h3 className="text-xl font-bold text-purple-400 font-mono border-b border-border pb-2">01 // FILTRACJA</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="bg-card p-5 rounded border border-gray-600">
                   <strong className="text-white block mb-2">TRYB SUCHO</strong>
                   <ul className="list-disc pl-5 text-sm text-gray-400">
                      <li><strong>Worek Flizelinowy:</strong> <span className="text-green-500 font-bold">OBOWIĄZKOWY</span>. Chroni silnik.</li>
                      <li><strong>Filtr Cartridge:</strong> Zamontowany.</li>
                   </ul>
                </div>
                <div className="bg-card p-5 rounded border border-gray-600">
                   <strong className="text-white block mb-2">TRYB MOKRO</strong>
                   <ul className="list-disc pl-5 text-sm text-gray-400">
                      <li><strong>Worek Flizelinowy:</strong> <span className="text-red-500 font-bold">WYJĄĆ</span>. Rozmoknie!</li>
                      <li><strong>Filtr Cartridge:</strong> Zamontowany.</li>
                   </ul>
                </div>
             </div>
          </div>
        )
      },
      {
        title: 'Lekcja 2: Pranie Ekstrakcyjne (4 Kroki)',
        content: (
          <div className="space-y-6">
             <h3 className="text-xl font-bold text-purple-400 font-mono border-b border-border pb-2">02 // KLUCZ DO SUKCESU</h3>
             <ol className="list-decimal pl-5 text-gray-300 space-y-3">
                <li><strong>Odkurzanie (WD 3):</strong> Usuń piasek na sucho.</li>
                <li><strong>Pre-spray (Textil Wash):</strong> Rozpuść brud (10-15 min).</li>
                <li><strong>Ekstrakcja (SE 4):</strong> Wypierz (wtrysk/odsysanie).</li>
                <li><strong>Płukanie (Textil-Ex):</strong> Zneutralizuj chemię samą wodą z płukanką.</li>
             </ol>
             <div className="bg-red-900/20 p-4 border border-red-500 rounded mt-4">
                <strong>PIANA = ŚMIERĆ TURBINY.</strong> Użyj <em>De-Foam</em> w brudnym zbiorniku.
             </div>
          </div>
        )
      }
    ],
    quiz: [
      { id: 1, question: "Co robimy przed praniem na mokro?", options: ["Odkurzamy na sucho", "Moczymy dywan", "Nic", "Pijemy kawę"], correctAnswer: 0 },
      { id: 2, question: "Czy przy pracy na mokro (WD 3) używamy worka?", options: ["Nie, trzeba go wyjąć", "Tak, zawsze", "Obojętnie", "Dwa worki"], correctAnswer: 0 },
      { id: 3, question: "Do czego służy Tenzi De-Foam?", options: ["Do usuwania piany w zbiorniku brudnym", "Do prania dywanów", "Do mycia szyb", "Do smarowania kół"], correctAnswer: 0 },
      { id: 4, question: "Jaki jest ostatni etap prania?", options: ["Płukanie (Textil-Ex) w celu neutralizacji", "Suszenie suszarką", "Posypanie proszkiem", "Ponowne odkurzanie"], correctAnswer: 0 }
    ]
  },
  {
      id: 'windows_tech',
      title: 'Techniki Okienne: Moerman & Ergotec',
      description: 'System Moerman Excelerator 2.0, bezpieczne skrobanie szyb i techniki pracy na wysokości (kij teleskopowy).',
      icon: Maximize,
      priority: 'EKSPERCKIE',
      priorityColor: 'text-blue-400',
      passingScore: 90,
      lessons: [
          {
              title: 'Lekcja 1: System Moerman (Flip Concept)',
              content: (
                  <div className="space-y-6">
                      <h3 className="text-xl font-bold text-blue-400 font-mono border-b border-border pb-2">01 // FLIP & CLEAN</h3>
                      <p className="text-gray-300">
                          Mycie i ściąganie jednym narzędziem bez zmiany ręki.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-400 space-y-2">
                          <li><strong>Washer:</strong> Mycie barankiem.</li>
                          <li><strong>Flip:</strong> Szybki obrót nadgarstkiem.</li>
                          <li><strong>Squeegee:</strong> Ściąganie gumą Liquidator (ścięte boki = brak detalowania).</li>
                      </ul>
                  </div>
              )
          },
          {
              title: 'Lekcja 2: Praca na Wysokości i Skrobak',
              content: (
                  <div className="space-y-6">
                      <h3 className="text-xl font-bold text-blue-400 font-mono border-b border-border pb-2">02 // NARZĘDZIA SPECJALNE</h3>
                      
                      <div className="bg-card p-4 rounded border border-blue-500/30">
                          <strong className="text-white block mb-2">Kij Teleskopowy (3-4m) - Technika</strong>
                          <p className="text-sm text-gray-300 mb-2">Praca powyżej 1. piętra bez drabiny.</p>
                          <ul className="list-disc pl-5 text-xs text-gray-400 space-y-1">
                              <li>Ustaw uchwyt Moerman na kąt <strong>-20° (negatyw)</strong>. To kluczowe dla docisku.</li>
                              <li>Prowadź kij płynnie, nie "szarp". Wykorzystaj długość kija do długich pociągnięć.</li>
                              <li>Uważaj na linie energetyczne!</li>
                          </ul>
                      </div>

                      <div className="bg-card p-4 rounded border border-red-500/30 mt-4">
                          <strong className="text-white block mb-2">Skrobak Unger Ergotec</strong>
                          <div className="bg-red-900/20 p-2 rounded text-xs text-red-200 font-bold border-l-2 border-red-500">
                              TYLKO NA MOKRO!
                          </div>
                          <p className="text-xs text-gray-400 mt-2">
                              Ruch tylko do przodu. Nigdy nie cofaj ostrza po szkle (ryzyko rys).
                          </p>
                      </div>
                  </div>
              )
          }
      ],
      quiz: [
          { id: 1, question: "Jaki jest warunek użycia skrobaka?", options: ["Szyba musi być mokra", "Szyba musi być sucha", "Skrobak musi być ciepły", "Brak warunków"], correctAnswer: 0 },
          { id: 2, question: "Jaki kąt ustawiamy na uchwycie Moerman przy pracy na kiju?", options: ["-20 stopni (negatyw)", "0 stopni", "40 stopni", "90 stopni"], correctAnswer: 0 },
          { id: 3, question: "Co daje szyna Liquidator (ścięte końce)?", options: ["Brak konieczności wycierania krawędzi (detalowania)", "Ładny wygląd", "Jest tańsza", "Lepiej zbiera lód"], correctAnswer: 0 },
          { id: 4, question: "Dlaczego nie cofamy skrobaka po szybie?", options: ["Można wciągnąć piasek pod ostrze i porysować szkło", "To przynosi pecha", "Ostrze się tępi", "Uchwyt pęknie"], correctAnswer: 0 }
      ]
  },
  {
    id: 'facility_protocols',
    title: 'Procedury Obiektowe i Klient',
    description: 'Checklisty (Toaleta 7 kroków, Biuro, Kuchnia) oraz protokoły komunikacji z klientem i zgłaszania szkód.',
    icon: Building,
    priority: 'PODSTAWOWE',
    priorityColor: 'text-gray-400',
    passingScore: 100,
    lessons: [
      {
        title: 'Lekcja 1: Checklisty Obiektowe',
        content: (
            <div className="space-y-6">
                <h3 className="text-xl font-bold text-white font-mono border-b border-border pb-2">01 // PROCEDURY SPRZĄTANIA</h3>
                
                <div className="space-y-4">
                    <div className="bg-surface p-4 border border-gray-600 rounded">
                        <strong className="text-white block mb-2 text-lg">TOALETA - 7 KROKÓW (Czerwona/Żółta)</strong>
                        <ol className="list-decimal pl-5 text-sm text-gray-300 space-y-1">
                            <li>Spuść wodę. Nanieś chemię (<em>WC Sani</em>) pod obrzeże muszli. Zostaw na 10 min.</li>
                            <li>Wymień worki w koszach, uzupełnij papier/mydło.</li>
                            <li>Umyj strefę czystą (Lustro, Umywalka) - Ścierka Żółta.</li>
                            <li>Wyszoruj wnętrze muszli szczotką.</li>
                            <li>Umyj z zewnątrz muszlę, deskę, spłuczkę - Ścierka Czerwona.</li>
                            <li>Zdezynfekuj klamki i włączniki.</li>
                            <li>Umyj podłogę mopem (wychodząc tyłem). Znak "Śliska Podłoga"!</li>
                        </ol>
                    </div>

                    <div className="bg-surface p-4 border border-gray-600 rounded">
                        <strong className="text-white block mb-2 text-lg">KUCHNIA (Zielona)</strong>
                        <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
                            <li>Zasada: Od najczystszego do najbrudniejszego.</li>
                            <li>Góra szafek (często tłuste) -> Blaty -> Zlew -> Sprzęt AGD -> Podłoga.</li>
                            <li>Używaj <em>Gran Smog</em> na tłuszcz (zmyj wodą!). <em>Uni Clean</em> na fronty.</li>
                            <li>Zlew ze stali nierdzewnej: Umyj i wytrzyj do sucha (brak plam).</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
      },
      {
        title: 'Lekcja 2: Komunikacja i Szkody',
        content: (
            <div className="space-y-6">
                <h3 className="text-xl font-bold text-white font-mono border-b border-border pb-2">02 // S-O-S</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-card p-4 rounded border border-gray-600">
                        <strong className="text-white block mb-2">Uszkodzenie Mienia</strong>
                        <p className="text-sm text-gray-400 mb-2">
                            Jeśli coś stłuczesz lub zepsujesz:
                        </p>
                        <ol className="list-decimal pl-5 text-sm text-gray-300">
                            <li><strong>Nie ukrywaj tego.</strong></li>
                            <li>Zabezpiecz miejsce (np. szkło).</li>
                            <li>Zrób zdjęcie uszkodzenia.</li>
                            <li>Natychmiast wyślij info do Koordynatora.</li>
                            <li>Zostaw kartkę "Przepraszamy, serwis poinformowany" jeśli to widoczne miejsce.</li>
                        </ol>
                    </div>
                    <div className="bg-card p-4 rounded border border-gray-600">
                        <strong className="text-white block mb-2">Kontakt z Klientem</strong>
                        <p className="text-sm text-gray-400">
                            Jeśli pracownik biura ma pretensje:
                            <br/>1. Nie dyskutuj, nie kłóć się.
                            <br/>2. Powiedz: "Rozumiem, przekażę to przełożonemu i poprawimy to."
                            <br/>3. Zgłoś to Koordynatorowi.
                        </p>
                    </div>
                </div>
            </div>
        )
      }
    ],
    quiz: [
      { id: 1, question: "Jaki jest pierwszy krok w sprzątaniu toalety?", options: ["Nanieść chemię do muszli, by miała czas zadziałać", "Umyć podłogę", "Umyć lustro", "Wyjść"], correctAnswer: 0 },
      { id: 2, question: "Co robisz, gdy stłuczesz wazon klienta?", options: ["Wyrzucam kawałki i udaję, że go nie było", "Zabezpieczam miejsce, robię zdjęcie i zgłaszam przełożonemu", "Sklejam taśmą", "Płaczę"], correctAnswer: 1 },
      { id: 3, question: "Jaką ścierką myjemy deskę sedesową?", options: ["Czerwoną", "Niebieską", "Żółtą", "Dowolną"], correctAnswer: 0 },
      { id: 4, question: "Czy w kuchni myjemy najpierw podłogę?", options: ["Nie, podłogę myjemy na samym końcu", "Tak, żeby się nie poślizgnąć", "Zależy od humoru", "Tak, w połowie pracy"], correctAnswer: 0 }
    ]
  },
  {
    id: 'logistics_workplan',
    title: 'Logistyka i Organizacja Wózka',
    description: 'Procedura pakowania wózka Splast i torby JKAOO. Zasada Góra-Dół. Mop Zflow.',
    icon: ClipboardList,
    priority: 'PODSTAWOWE',
    priorityColor: 'text-gray-400',
    passingScore: 85,
    lessons: [
      {
        title: 'Lekcja 1: Organizacja Mobilna (Pakowanie)',
        content: (
            <div className="space-y-6">
                <h3 className="text-xl font-bold text-white font-mono border-b border-border pb-2">01 // ŁADUNEK</h3>
                <p className="text-gray-300">
                  Dobra organizacja to 30% szybciej wykonana praca.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                   <div className="bg-surface p-5 border border-gray-600 rounded">
                     <strong className="text-white block mb-3 text-lg border-b border-gray-700 pb-2">Wózek Splast (Mokry)</strong>
                     <div className="space-y-2">
                        <div className="text-sm text-gray-300"><strong>Wiadro Niebieskie:</strong> Woda + Chemia (np. <em>TopEfekt Oranż</em>).</div>
                        <div className="text-sm text-gray-300"><strong>Wiadro Czerwone:</strong> Ścieki z prasy.</div>
                        <div className="text-xs text-gray-500 mt-2 italic">Mop Zflow płuczemy, wyciskamy do czerwonego, namaczamy w niebieskim.</div>
                     </div>
                   </div>

                   <div className="bg-surface p-5 border border-gray-600 rounded">
                     <strong className="text-white block mb-3 text-lg border-b border-gray-700 pb-2">JKAOO Caddy / X Block (Suchy)</strong>
                     <ul className="list-disc pl-5 text-xs text-gray-400 space-y-2">
                        <li><strong>Kieszenie Zewnętrzne:</strong> Butelki najczęściej używane (<em>Uni Clean, Top Glass</em>). Szybki dostęp.</li>
                        <li><strong>Komora Główna:</strong> Zapas ręczników papierowych, worki na śmieci, zapas chemii.</li>
                        <li><strong>Separacja:</strong> Czyste mikrofibry w osobnym woreczku strunowym. Brudne WRZUCAMY DO worka na brudy (np. boczna kieszeń), nigdy luzem do torby!</li>
                     </ul>
                   </div>
                </div>
            </div>
        )
      },
      {
        title: 'Lekcja 2: Workflow i Mop Zflow',
        content: (
            <div className="space-y-6">
                <h3 className="text-xl font-bold text-white font-mono border-b border-border pb-2">02 // TECHNIKA</h3>
                
                <div className="bg-card p-6 rounded border border-gray-700 mb-6">
                    <strong className="text-white block mb-4">Zasada "Góra-Dół"</strong>
                    <ol className="list-decimal pl-5 text-sm text-gray-300 space-y-2">
                        <li>Sufit (Pajęczyny).</li>
                        <li>Piony (Szafy, Okna, Drzwi).</li>
                        <li>Poziomy (Biurka - Uni Clean).</li>
                        <li>Podłoga (Koniec).</li>
                    </ol>
                </div>

                <div className="bg-surface p-5 rounded border border-gray-700">
                    <strong className="text-white block mb-3">Mop Zflow 18"</strong>
                    <ul className="list-disc pl-5 text-xs text-gray-400 space-y-2">
                        <li><strong>Technika Ósemkowa (∞):</strong> Zbiera brud do środka mopa.</li>
                        <li><strong>Wilgotność:</strong> Mop ma być wilgotny, nie mokry (szczególnie na panelach!).</li>
                    </ul>
                </div>
            </div>
        )
      }
    ],
    quiz: [
      { id: 1, question: "Gdzie w wózku Splast odkładamy brudną wodę z mopa?", options: ["Do czerwonego wiadra", "Do niebieskiego wiadra", "Na podłogę", "Do kieszeni"], correctAnswer: 0 },
      { id: 2, question: "Gdzie trzymamy brudne ścierki w torbie JKAOO?", options: ["Luzem z czystymi", "W odseparowanym worku/kieszeni na brudy", "Wyrzucamy do śmieci", "Na wierzchu"], correctAnswer: 1 },
      { id: 3, question: "Jaka jest prawidłowa technika mycia mopem płaskim?", options: ["Ósemkowa (rysowanie ósemek)", "Przód-tył", "Kółka", "Byle jak"], correctAnswer: 0 },
      { id: 4, question: "Co myjemy na samym końcu?", options: ["Podłogę", "Sufit", "Okna", "Biurka"], correctAnswer: 0 }
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