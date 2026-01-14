import React, { useState } from 'react';
import { RESOURCES } from '../data';
import { Search, ExternalLink, Package, Shield, FlaskConical, Wrench, FileText, Zap, FileOutput } from 'lucide-react';
import { jsPDF } from 'jspdf';
import { ResourceItem, SDSConfig } from '../types';

const Resources: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredResources = RESOURCES.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = Array.from(new Set(filteredResources.map(r => r.category)));

  const getCategoryIcon = (category: string) => {
    if (category.includes('Chemia')) return <FlaskConical size={20} className="text-secondary" />;
    if (category.includes('Technika')) return <Zap size={20} className="text-primary" />;
    if (category.includes('BHP')) return <Shield size={20} className="text-danger" />;
    if (category.includes('Sprzęt')) return <Wrench size={20} className="text-yellow-500" />;
    return <Package size={20} className="text-gray-400" />;
  };

  // Helper to remove Polish accents for standard PDF fonts
  const normalizeText = (text: string) => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/ł/g, "l").replace(/Ł/g, "L");
  };

  const getProductSafetyData = (item: ResourceItem): SDSConfig => {
    // Priority: Use explicit SDS config from data if available
    if (item.sdsConfig) {
        return item.sdsConfig;
    }

    // Fallback logic for items without specific config
    let hazards = "Brak specyficznych zagrozen. Stosowac ogolne zasady BHP.";
    let firstAid = "W razie watpliwosci skontaktowac sie z lekarzem.";
    let ppe = "Obuwie robocze.";
    let ph = "N/D";

    const nameLower = item.name.toLowerCase();
    const catLower = item.category.toLowerCase();

    if (catLower.includes('chemia')) {
        hazards = "Produkt chemiczny. Zapoznaj sie z etykieta. H319 Dziala drazniaco na oczy.";
        ppe = "Rekawice ochronne, okulary ochronne.";
        firstAid = "OCZY: Plukac woda przez kilka minut. SKORA: Umyc woda z mydlem.";
    } else if (catLower.includes('technika')) {
        hazards = "Urzadzenie elektryczne. Ryzyko porazenia pradem.";
        firstAid = "Odlaczyc zasilanie. W razie bezdechu RKO.";
    }

    return { hazards, firstAid, ppe, ph };
  };

  const handleGenerateSDS = (item: ResourceItem) => {
    const doc = new jsPDF();
    const safetyData = getProductSafetyData(item);
    const lineHeight = 5; // Reduced line height for density
    let yPos = 20;

    // Helper function for sections with page break check
    const addSection = (title: string, content: string | undefined) => {
        if (!content) return;
        
        // Check if we need a new page
        if (yPos > 250) {
            doc.addPage();
            yPos = 20;
        }

        doc.setFillColor(240, 240, 240);
        doc.rect(20, yPos - 5, 170, 10, 'F');
        doc.setFontSize(11);
        doc.setTextColor(0);
        doc.setFont("helvetica", "bold");
        doc.text(title, 25, yPos + 2);
        
        yPos += 10;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        const splitContent = doc.splitTextToSize(normalizeText(content), 170);
        doc.text(splitContent, 20, yPos);
        yPos += (splitContent.length * 5) + 8;
    };

    // Header
    doc.setFontSize(22);
    doc.setTextColor(255, 77, 0); // Primary Orange
    doc.text("VIVO CLEAN SYSTEM", 20, yPos);
    
    yPos += 10;
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text("KARTA CHARAKTERYSTYKI (SDS) / SAFETY DATA SHEET", 20, yPos);
    
    // Line separator
    yPos += 5;
    doc.setDrawColor(200);
    doc.line(20, yPos, 190, yPos);

    // Product Identity
    yPos += 15;
    doc.setFontSize(14);
    doc.setTextColor(0);
    doc.setFont("helvetica", "bold");
    doc.text(normalizeText(item.name), 20, yPos);
    
    yPos += 6;
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(80);
    doc.text(`Kategoria: ${normalizeText(item.category)}`, 20, yPos);

    // Parameters Section (Inline)
    yPos += 10;
    doc.setFontSize(9);
    doc.setTextColor(0);
    
    let paramText = "";
    if (safetyData.ph) paramText += `pH: ${safetyData.ph}   |   `;
    if (safetyData.contains) paramText += `Sklad: ${normalizeText(safetyData.contains)}`;
    
    if (paramText) {
        const splitParams = doc.splitTextToSize(paramText, 170);
        doc.text(splitParams, 20, yPos);
        yPos += (splitParams.length * 5) + 5;
    }

    // Add Sections
    addSection("1. IDENTYFIKACJA ZAGROZEN (HAZARDS)", safetyData.hazards);
    addSection("2. PIERWSZA POMOC (FIRST AID)", safetyData.firstAid);
    addSection("3. SRODKI OCHRONY INDYWIDUALNEJ (PPE)", safetyData.ppe);
    addSection("4. POSTEPOWANIE W PRZYPADKU POZARU (FIRE)", safetyData.fire);
    addSection("5. MAGAZYNOWANIE (STORAGE)", safetyData.storage);
    addSection("6. INSTRUKCJA UZYCIA (USAGE)", safetyData.usage);
    addSection("7. POSTEPOWANIE Z ODPADAMI (WASTE)", safetyData.waste);

    // Footer
    const date = new Date().toLocaleDateString();
    doc.setFontSize(8);
    doc.setTextColor(150);
    doc.text(`Wygenerowano automatycznie: ${date}`, 20, 285);
    doc.text("Dokument szkoleniowy. W naglych wypadkach dzwon 112.", 120, 285);

    // Open PDF in new tab
    const pdfBlob = doc.output('blob');
    const pdfUrl = URL.createObjectURL(pdfBlob);
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="p-6 md:p-12 max-w-7xl mx-auto animate-in fade-in duration-500">
      <div className="mb-12">
        <h1 className="text-3xl font-extrabold text-white mb-4">
          Baza Wiedzy i SDS
        </h1>
        <p className="text-gray-400 max-w-3xl">
          Scentralizowany rejestr wszystkich zatwierdzonych środków chemicznych, maszyn, sprzętu oraz środków ochrony indywidualnej (BHP). Kliknij "Generuj SDS", aby pobrać pełną kartę charakterystyki.
        </p>
      </div>

      <div className="mb-8 sticky top-0 z-10 bg-background/95 backdrop-blur py-4 border-b border-border">
        <div className="relative max-w-xl">
          <input 
            type="text" 
            placeholder="Szukaj produktu, chemii lub sprzętu..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-surface border border-border rounded-lg py-3 pl-12 pr-4 text-white focus:border-primary focus:outline-none placeholder-gray-500"
          />
          <Search className="absolute left-4 top-3.5 text-gray-500" size={20} />
        </div>
      </div>

      <div className="space-y-12">
        {categories.length > 0 ? (
          categories.map(category => (
            <div key={category} className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-surface rounded border border-border">
                  {getCategoryIcon(category)}
                </div>
                <h2 className="text-xl font-bold text-white uppercase tracking-wider">{category}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.filter(r => r.category === category).map(item => (
                  <div key={item.id} className="bg-card border border-border rounded-xl p-5 hover:border-gray-500 transition-colors flex flex-col h-full group">
                    <div className="mb-4">
                      <div className="flex justify-between items-start">
                         <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
                         {item.category.includes("Chemia") && (
                             <span className="bg-red-900/40 text-red-200 text-[10px] px-2 py-1 rounded font-mono uppercase border border-red-900">Chemia</span>
                         )}
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                    </div>
                    
                    <div className="mt-auto space-y-3 pt-4 border-t border-border/50">
                      
                      {/* Generate SDS Button */}
                      <button
                         onClick={() => handleGenerateSDS(item)}
                         className="w-full flex items-center justify-center gap-2 bg-primary/10 hover:bg-primary text-primary hover:text-white border border-primary/30 p-2 rounded transition-all font-bold text-xs"
                      >
                         <FileOutput size={16} />
                         GENERUJ KARTĘ (PDF)
                      </button>

                      <div className="text-xs font-bold text-gray-500 uppercase pt-2">Zewnętrzne Linki:</div>
                      {item.links.map((link, idx) => (
                        <a 
                          key={idx} 
                          href={link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-2 bg-surface hover:bg-gray-800 rounded border border-border/50 text-xs text-gray-300 transition-colors group/link"
                        >
                          <span className="truncate flex-1 mr-2">Źródło {idx + 1}</span>
                          <ExternalLink size={14} className="opacity-50 group-hover/link:opacity-100" />
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-24 text-gray-500">
            <Package size={48} className="mx-auto mb-4 opacity-20" />
            <p>Nie znaleziono produktów pasujących do wyszukiwania.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;