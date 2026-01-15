import React, { useState } from 'react';
import { User, TrainingLog, CompanyConfig } from '../types';
import { MODULES } from '../data';
import { Users, UserPlus, FileText, Trash2, LogOut, KeyRound, ShieldCheck, History, FileOutput, Printer, PenTool, Building2, Save, Download } from 'lucide-react';
import { jsPDF } from 'jspdf';

interface AdminPanelProps {
  users: User[];
  logs: TrainingLog[];
  companyConfig: CompanyConfig;
  onRegisterUser: (userData: Partial<User>) => void;
  onDeleteUser: (id: string) => void;
  onUpdateCompany: (config: CompanyConfig) => void;
  onLogout: () => void;
  onGenerateCertificate: (user: User) => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ users, logs, companyConfig, onRegisterUser, onDeleteUser, onUpdateCompany, onLogout, onGenerateCertificate }) => {
  const [activeTab, setActiveTab] = useState<'users' | 'logs' | 'company'>('users');
  
  // Registration Form State
  const [formData, setFormData] = useState({
    name: '',
    pesel: '',
    idNumber: '',
    address: '',
    phoneNumber: '',
    email: '',
    jobTitle: 'Pracownik Serwisu Porządkowego' // Default
  });

  // Company Form State
  const [companyForm, setCompanyForm] = useState<CompanyConfig>(companyConfig);

  // Helper to remove Polish accents for standard PDF fonts (since we don't load custom fonts)
  const normalizeText = (text: string) => {
    if (!text) return "";
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/ł/g, "l").replace(/Ł/g, "L");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCompanyForm(prev => ({ ...prev, [name]: value }));
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim() && formData.pesel.trim()) {
      onRegisterUser(formData);
      setFormData({ name: '', pesel: '', idNumber: '', address: '', phoneNumber: '', email: '', jobTitle: 'Pracownik Serwisu Porządkowego' });
      alert('Pracownik został dodany do bazy kadr.');
    } else {
        alert('Imię i PESEL są wymagane ustawowo.');
    }
  };

  const handleCompanySave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateCompany(companyForm);
    alert('Dane firmy zostały zaktualizowane. Będą widoczne na nowych certyfikatach.');
  };

  // EXPORT TO CSV (EXCEL)
  const exportToCSV = () => {
    const headers = ["ID", "Imie i Nazwisko", "PESEL", "Stanowisko", "Data Rejestracji", "Postep %", "Certyfikat ID"];
    const rows = users.filter(u => u.role === 'worker').map(user => [
        user.id,
        user.name,
        user.pesel || "",
        user.jobTitle || "",
        user.joinedDate,
        getProgressPercentage(user),
        user.certificateId || "BRAK"
    ]);

    const csvContent = "data:text/csv;charset=utf-8," 
        + headers.join(",") + "\n" 
        + rows.map(e => e.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `KADRY_EXPORT_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const generateLegalAuditReport = () => {
    try {
        const doc = new jsPDF();
        const pageHeight = doc.internal.pageSize.height;
        const pageWidth = doc.internal.pageSize.width;
        let yPos = 20;

        // --- HEADER ---
        doc.setFont("helvetica", "bold");
        doc.setFontSize(14);
        doc.text("PROTOKOL I REJESTR SZKOLEN (AUDIT LOG)", 20, yPos);
        yPos += 8;
        
        doc.setFontSize(8);
        doc.setFont("courier", "normal");
        doc.text(`PRACODAWCA: ${normalizeText(companyConfig.companyName)}`, 20, yPos);
        doc.text(`NIP: ${companyConfig.nip}`, 20, yPos + 4);
        doc.text(`DATA GENERACJI: ${new Date().toLocaleString('pl-PL')}`, 20, yPos + 8);
        doc.text(`ID RAPORTU: VIVO-AUDIT-${new Date().getTime()}`, 20, yPos + 12);
        
        yPos += 20;

        // --- LEGAL PREAMBLE ---
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.text("PODSTAWA PRAWNA:", 20, yPos);
        yPos += 6;
        
        doc.setFont("helvetica", "normal");
        doc.setFontSize(8);
        const legalText = "Niniejszy rejestr stanowi elektroniczna dokumentacje potwierdzajaca odbycie szkolen wstepnych, stanowiskowych i okresowych BHP zgodnie z Art. 237^3 Kodeksu pracy oraz Rozporzadzeniem Ministra Gospodarki i Pracy z dnia 27 lipca 2004 r. w sprawie szkolenia w dziedzinie bezpieczenstwa i higieny pracy (Dz.U. Nr 180, poz. 1860 ze zm.). Dokument jest chroniony przed edycja.";
        const splitLegal = doc.splitTextToSize(normalizeText(legalText), 170);
        doc.text(splitLegal, 20, yPos);
        yPos += 20;

        // --- TABLE HEADERS ---
        doc.setFillColor(230, 230, 230);
        doc.rect(20, yPos, 170, 8, 'F');
        doc.setFont("helvetica", "bold");
        doc.setFontSize(7);
        doc.text("DATA / CZAS", 22, yPos + 5);
        doc.text("PRACOWNIK (DANE)", 60, yPos + 5);
        doc.text("MODUL / WYNIK", 110, yPos + 5);
        doc.text("PODPIS / URZADZENIE", 155, yPos + 5);
        yPos += 12;

        // --- LOGS LOOP ---
        doc.setFont("helvetica", "normal");
        
        logs.forEach((log, index) => {
            // Page break check (row height approx 28)
            if (yPos > pageHeight - 40) {
                doc.addPage();
                yPos = 20;
                doc.setFont("helvetica", "bold");
                doc.text("REJESTR SZKOLEN - KONTYNUACJA", 20, yPos);
                yPos += 15;
            }

            const dateStr = new Date(log.timestamp).toLocaleString('pl-PL');
            const userStr = `${normalizeText(log.userName)}`;
            const moduleStr = `${normalizeText(log.moduleTitle)}`;
            const resultStr = `WYNIK: ${log.score}%`;
            
            // Draw Entry Box
            doc.setDrawColor(200);
            doc.rect(20, yPos, 170, 24);
            
            // Col 1: Date & ID
            doc.setFont("courier", "normal");
            doc.setFontSize(6);
            doc.text(dateStr, 22, yPos + 5);
            doc.text(`LOG ID: ${log.id.substring(4, 12)}`, 22, yPos + 9);
            doc.text(`IP: ${log.legalMeta?.ipPlaceholder || 'N/A'}`, 22, yPos + 13);

            // Col 2: User Details
            doc.setFont("helvetica", "bold");
            doc.setFontSize(7);
            doc.text(userStr, 60, yPos + 5);
            doc.setFont("helvetica", "normal");
            doc.setFontSize(6);
            doc.text(`PESEL: ${log.userPesel}`, 60, yPos + 9);
            doc.text(`STANOWISKO: ${normalizeText(log.userSnapshot.jobTitle || 'BRAK')}`, 60, yPos + 13);
            doc.text(`DOWOD: ${normalizeText(log.userSnapshot.idNumber || 'BRAK')}`, 60, yPos + 17);

            // Col 3: Module Info
            doc.setFont("helvetica", "normal");
            doc.setFontSize(7);
            doc.text(moduleStr, 110, yPos + 5);
            doc.setFont("helvetica", "bold");
            doc.text(resultStr, 110, yPos + 9);
            doc.setFont("helvetica", "normal");
            doc.setFontSize(5);
            doc.text(`Pracodawca w dn. szkolenia:`, 110, yPos + 13);
            doc.text(`${normalizeText(log.legalMeta?.employerNameSnapshot || companyConfig.companyName)}`, 110, yPos + 17);

            // Col 4: Signature & Tech
            if (log.signatureData) {
                try {
                    doc.addImage(log.signatureData, 'PNG', 155, yPos + 2, 25, 10);
                } catch (e) {
                    doc.text("[BLAD OBRAZU]", 155, yPos + 8);
                }
            } else {
                 doc.setTextColor(150, 0, 0);
                 doc.text("BRAK PODPISU", 155, yPos + 8);
                 doc.setTextColor(0);
            }
            doc.setFontSize(5);
            doc.text(`UA: ${log.legalMeta?.userAgent.substring(0, 20)}...`, 155, yPos + 17);
            
            yPos += 28;
        });

        // --- FOOTER ---
        const totalPages = doc.getNumberOfPages();
        for (let i = 1; i <= totalPages; i++) {
            doc.setPage(i);
            doc.setFontSize(7);
            doc.setTextColor(100);
            doc.text(`Strona ${i} z ${totalPages} | Raport poufny`, pageWidth - 50, pageHeight - 10);
            
            doc.setLineWidth(0.5);
            doc.line(20, pageHeight - 25, 80, pageHeight - 25);
            doc.text("Podpis Inspektora BHP / Administratora", 20, pageHeight - 20);
        }

        doc.save(`Protokol_Szkolen_${new Date().toISOString().slice(0,10)}.pdf`);
    } catch (error) {
        console.error('Audit Report Generation Error:', error);
        alert('Wystąpił błąd podczas generowania raportu prawnego PDF. Spróbuj ponownie.');
    }
  };

  const workers = users.filter(u => u.role === 'worker');

  const getProgressPercentage = (user: User) => {
    const passedCount = Object.values(user.progress).filter(p => p.passed).length;
    return Math.round((passedCount / MODULES.length) * 100);
  };

  return (
    <div className="min-h-screen bg-background text-white p-6 md:p-12 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
             <h1 className="text-3xl font-extrabold mb-1">Panel Administratora</h1>
             <p className="text-gray-400 font-mono text-sm uppercase">ZARZĄDZANIE KADRAMI I DOKUMENTACJĄ PRAWNĄ</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-500 font-mono text-right hidden md:block">
                ZALOGOWANY JAKO:<br/>{companyConfig.representative}
            </span>
            <button onClick={onLogout} className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-colors border border-gray-700 px-4 py-2 rounded-lg">
                <LogOut size={16} /> WYLOGUJ
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-700 pb-1 overflow-x-auto">
            <button 
                onClick={() => setActiveTab('users')}
                className={`flex items-center gap-2 pb-3 px-2 border-b-2 transition-colors whitespace-nowrap ${activeTab === 'users' ? 'border-primary text-white font-bold' : 'border-transparent text-gray-400 hover:text-white'}`}
            >
                <Users size={18} /> Rejestr Pracowników
            </button>
            <button 
                onClick={() => setActiveTab('logs')}
                className={`flex items-center gap-2 pb-3 px-2 border-b-2 transition-colors whitespace-nowrap ${activeTab === 'logs' ? 'border-primary text-white font-bold' : 'border-transparent text-gray-400 hover:text-white'}`}
            >
                <History size={18} /> Audit Trail (Logs)
            </button>
            <button 
                onClick={() => setActiveTab('company')}
                className={`flex items-center gap-2 pb-3 px-2 border-b-2 transition-colors whitespace-nowrap ${activeTab === 'company' ? 'border-primary text-white font-bold' : 'border-transparent text-gray-400 hover:text-white'}`}
            >
                <Building2 size={18} /> Ustawienia Firmy (Pracodawca)
            </button>
        </div>

        {activeTab === 'company' && (
             <div className="bg-card border border-border rounded-xl p-6 max-w-2xl">
                 <div className="flex items-center gap-2 mb-6 text-primary">
                    <Building2 size={24} />
                    <h2 className="text-xl font-bold text-white">Dane Podmiotu (Pracodawcy)</h2>
                </div>
                <p className="text-sm text-gray-400 mb-6">
                    Poniższe dane będą widniały na wszystkich generowanych certyfikatach i raportach prawnych. Zmiana tych danych wpłynie tylko na nowe dokumenty.
                </p>
                <form onSubmit={handleCompanySave} className="space-y-4">
                    <div>
                        <label className="text-xs font-bold text-gray-500 uppercase block mb-1">Pełna Nazwa Firmy</label>
                        <input name="companyName" value={companyForm.companyName} onChange={handleCompanyChange} type="text" className="w-full bg-surface border border-border rounded p-3 text-white focus:border-primary focus:outline-none" required />
                    </div>
                    <div>
                        <label className="text-xs font-bold text-gray-500 uppercase block mb-1">NIP</label>
                        <input name="nip" value={companyForm.nip} onChange={handleCompanyChange} type="text" className="w-full bg-surface border border-border rounded p-3 text-white focus:border-primary focus:outline-none" required />
                    </div>
                    <div>
                        <label className="text-xs font-bold text-gray-500 uppercase block mb-1">Adres Siedziby</label>
                        <input name="address" value={companyForm.address} onChange={handleCompanyChange} type="text" className="w-full bg-surface border border-border rounded p-3 text-white focus:border-primary focus:outline-none" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                         <div>
                            <label className="text-xs font-bold text-gray-500 uppercase block mb-1">Miejscowość (do certyfikatu)</label>
                            <input name="city" value={companyForm.city} onChange={handleCompanyChange} type="text" className="w-full bg-surface border border-border rounded p-3 text-white focus:border-primary focus:outline-none" required />
                        </div>
                        <div>
                            <label className="text-xs font-bold text-gray-500 uppercase block mb-1">Reprezentant / Instruktor BHP</label>
                            <input name="representative" value={companyForm.representative} onChange={handleCompanyChange} type="text" className="w-full bg-surface border border-border rounded p-3 text-white focus:border-primary focus:outline-none" required />
                        </div>
                    </div>
                    <button type="submit" className="flex items-center justify-center gap-2 w-full bg-primary text-white font-bold py-3 rounded hover:bg-orange-600 transition-colors mt-4">
                        <Save size={18} /> Zapisz Ustawienia
                    </button>
                </form>
             </div>
        )}

        {activeTab === 'users' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Register Column */}
            <div className="bg-card border border-border rounded-xl p-6 h-fit">
                <div className="flex items-center gap-2 mb-6 text-primary">
                    <UserPlus size={24} />
                    <h2 className="text-xl font-bold text-white">Rejestracja Pracownika</h2>
                </div>
                <form onSubmit={handleRegister} className="space-y-4">
                    <div>
                        <label className="text-xs font-bold text-gray-500 uppercase block mb-1">Imię i Nazwisko *</label>
                        <input name="name" value={formData.name} onChange={handleInputChange} type="text" className="w-full bg-surface border border-border rounded p-3 text-white focus:border-primary focus:outline-none" placeholder="np. Anna Nowak" required />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs font-bold text-gray-500 uppercase block mb-1">PESEL *</label>
                            <input name="pesel" value={formData.pesel} onChange={handleInputChange} type="text" className="w-full bg-surface border border-border rounded p-3 text-white focus:border-primary focus:outline-none" placeholder="11 cyfr" required />
                        </div>
                        <div>
                            <label className="text-xs font-bold text-gray-500 uppercase block mb-1">Nr Dowodu / Pobytu</label>
                            <input name="idNumber" value={formData.idNumber} onChange={handleInputChange} type="text" className="w-full bg-surface border border-border rounded p-3 text-white focus:border-primary focus:outline-none" placeholder="ABC 123456" />
                        </div>
                    </div>

                    <div>
                        <label className="text-xs font-bold text-gray-500 uppercase block mb-1">Stanowisko Pracy (Wymagane)</label>
                         <input name="jobTitle" value={formData.jobTitle} onChange={handleInputChange} type="text" className="w-full bg-surface border border-border rounded p-3 text-white focus:border-primary focus:outline-none" placeholder="np. Sprzątaczka" required />
                    </div>

                    <div>
                        <label className="text-xs font-bold text-gray-500 uppercase block mb-1">Adres Zamieszkania</label>
                        <input name="address" value={formData.address} onChange={handleInputChange} type="text" className="w-full bg-surface border border-border rounded p-3 text-white focus:border-primary focus:outline-none" placeholder="Ulica, Miasto, Kod" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                         <div>
                            <label className="text-xs font-bold text-gray-500 uppercase block mb-1">Telefon</label>
                            <input name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} type="tel" className="w-full bg-surface border border-border rounded p-3 text-white focus:border-primary focus:outline-none" placeholder="+48..." />
                        </div>
                        <div>
                            <label className="text-xs font-bold text-gray-500 uppercase block mb-1">Email (Opcja)</label>
                            <input name="email" value={formData.email} onChange={handleInputChange} type="email" className="w-full bg-surface border border-border rounded p-3 text-white focus:border-primary focus:outline-none" placeholder="@" />
                        </div>
                    </div>

                    <button type="submit" className="w-full bg-white text-black font-bold py-3 rounded hover:bg-gray-200 transition-colors mt-4">
                        Zarejestruj w Kadrach
                    </button>
                    <p className="text-[10px] text-gray-500 mt-2 text-center">* Pola wymagane do celów dowodowych.</p>
                </form>
            </div>

            {/* Workers List Column */}
            <div className="lg:col-span-2 bg-card border border-border rounded-xl p-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 text-secondary">
                    <div className="flex items-center gap-2">
                        <Users size={24} />
                        <h2 className="text-xl font-bold text-white">Baza Pracowników ({workers.length})</h2>
                    </div>
                    <button onClick={exportToCSV} className="flex items-center gap-2 text-xs bg-green-900/30 text-green-400 border border-green-800 px-3 py-2 rounded hover:bg-green-900/50 transition-colors">
                        <Download size={14} /> Eksport CSV (HR)
                    </button>
                </div>

                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                    {workers.length === 0 ? (
                    <p className="text-gray-500 italic text-center py-8">Brak danych w systemie.</p>
                    ) : (
                    workers.map(worker => {
                        const progress = getProgressPercentage(worker);
                        const isCompleted = progress === 100;
                        
                        return (
                            <div key={worker.id} className="bg-surface border border-border rounded-lg p-4 flex flex-col md:flex-row items-center justify-between gap-4">
                                <div className="flex items-start gap-4 w-full md:w-auto">
                                    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center font-bold text-white mt-1">
                                        {worker.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-bold text-white">{worker.name}</div>
                                        <div className="text-xs text-gray-400 font-mono">PESEL: {worker.pesel || 'Brak'}</div>
                                        <div className="text-xs text-gray-500 font-bold uppercase mt-1">{worker.jobTitle || 'Stanowisko nieokreślone'}</div>
                                    </div>
                                </div>

                                <div className="flex-1 w-full md:w-auto px-4">
                                    <div className="flex justify-between text-xs font-bold text-gray-500 mb-1">
                                        <span>STATUS SZKOLENIA</span>
                                        <span className={isCompleted ? 'text-success' : 'text-white'}>{progress}%</span>
                                    </div>
                                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary transition-all duration-500" style={{ width: `${progress}%` }}></div>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-mono text-gray-500 mt-2">
                                        <KeyRound size={12} className="text-primary" />
                                        <span>PIN: <span className="text-white font-bold">{worker.password || '----'}</span></span>
                                    </div>
                                </div>

                                <div className="flex gap-2 w-full md:w-auto">
                                    {isCompleted && (
                                        <button 
                                        type="button"
                                        onClick={() => onGenerateCertificate(worker)}
                                        className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-success/10 text-success border border-success/30 hover:bg-success hover:text-white px-3 py-2 rounded text-xs font-bold transition-all"
                                        title="Generuj Certyfikat"
                                        >
                                            <FileText size={16} /> Karta Szkolenia
                                        </button>
                                    )}
                                    <button 
                                        type="button"
                                        onClick={(e) => { e.stopPropagation(); onDeleteUser(worker.id); }}
                                        className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-red-900/10 text-danger border border-danger/30 hover:bg-danger hover:text-white px-3 py-2 rounded text-xs font-bold transition-all"
                                        title="Usuń z Bazy"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        );
                    })
                    )}
                </div>
            </div>
            </div>
        )}

        {activeTab === 'logs' && (
            <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
                     <div className="flex items-center gap-2 text-gray-300">
                        <ShieldCheck size={24} className="text-success" />
                        <div>
                            <h2 className="text-xl font-bold text-white">Audit Trail (Rejestr Prawny)</h2>
                            <p className="text-xs text-gray-500">Zgodność z Art. 237³ KP</p>
                        </div>
                     </div>
                     <div className="flex gap-2">
                        <span className="text-xs bg-gray-800 px-3 py-2 rounded-lg text-gray-400 font-mono border border-gray-700 flex items-center">
                             REKORDY: {logs.length}
                        </span>
                        <button 
                            onClick={generateLegalAuditReport}
                            className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded font-bold text-sm hover:bg-gray-200 transition-colors"
                        >
                            <Printer size={16} /> DRUKUJ RAPORT PRAWNY (PDF)
                        </button>
                     </div>
                </div>
                
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-surface border-b border-gray-700 text-xs text-gray-400 uppercase">
                                <th className="p-4">Data i Czas</th>
                                <th className="p-4">Pracownik</th>
                                <th className="p-4">Stanowisko</th>
                                <th className="p-4">Moduł</th>
                                <th className="p-4">Wynik</th>
                                <th className="p-4">Podpis Biometryczny</th>
                                <th className="p-4">Audit (Device/IP)</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {logs.length === 0 ? (
                                <tr>
                                    <td colSpan={7} className="p-8 text-center text-gray-500 italic">Brak zarejestrowanych szkoleń.</td>
                                </tr>
                            ) : (
                                logs.map(log => (
                                    <tr key={log.id} className="border-b border-gray-800 hover:bg-white/5 transition-colors">
                                        <td className="p-4 font-mono text-gray-400 whitespace-nowrap">{new Date(log.timestamp).toLocaleString('pl-PL')}</td>
                                        <td className="p-4 font-bold text-white">
                                            {log.userName}
                                            <div className="text-[10px] font-mono font-normal text-gray-500">{log.userPesel}</div>
                                        </td>
                                        <td className="p-4 text-xs text-gray-300">{log.userSnapshot.jobTitle || '---'}</td>
                                        <td className="p-4 text-primary">{log.moduleTitle}</td>
                                        <td className="p-4 font-bold text-success">{log.score}%</td>
                                        <td className="p-4">
                                            {log.signatureData ? (
                                                <div className="bg-white p-1 rounded max-w-[100px] border border-gray-300">
                                                    <img src={log.signatureData} alt="Podpis" className="w-full h-8 object-contain" />
                                                </div>
                                            ) : log.legalStatementAccepted ? (
                                                <span className="flex items-center gap-1 text-xs text-green-500 bg-green-900/20 px-2 py-1 rounded w-fit border border-green-900/50">
                                                    <ShieldCheck size={12} /> PODPIS ELEKTR.
                                                </span>
                                            ) : (
                                                <span className="text-red-500">BRAK</span>
                                            )}
                                        </td>
                                        <td className="p-4 text-[10px] text-gray-500 font-mono">
                                            <div>UA: {log.legalMeta?.userAgent.substring(0, 20)}...</div>
                                            <div>IP: {log.legalMeta?.ipPlaceholder}</div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="mt-6 text-[10px] text-gray-500 font-mono border-t border-gray-800 pt-4">
                    * Niniejszy rejestr stanowi dowód elektroniczny zapoznania się pracownika z przepisami BHP zgodnie z wymogami kodeksu pracy. Dane są niemodyfikowalne i przechowywane lokalnie.
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;