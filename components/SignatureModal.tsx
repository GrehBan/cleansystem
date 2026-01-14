import React, { useRef, useState, useEffect } from 'react';
import { X, Eraser, Check } from 'lucide-react';

interface SignatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (signatureDataUrl: string) => void;
  title?: string;
}

const SignatureModal: React.FC<SignatureModalProps> = ({ isOpen, onClose, onConfirm, title = "Podpisz Certyfikat" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSignature, setHasSignature] = useState(false);

  useEffect(() => {
    if (isOpen && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Set canvas resolution for high DPI screens
        const ratio = Math.max(window.devicePixelRatio || 1, 1);
        canvas.width = canvas.offsetWidth * ratio;
        canvas.height = canvas.offsetHeight * ratio;
        ctx.scale(ratio, ratio);
        
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#000000';
      }
    }
  }, [isOpen]);

  const getCoordinates = (event: React.MouseEvent | React.TouchEvent) => {
    if (!canvasRef.current) return { x: 0, y: 0 };
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    
    let clientX, clientY;
    
    if ('touches' in event) {
      clientX = event.touches[0].clientX;
      clientY = event.touches[0].clientY;
    } else {
      clientX = (event as React.MouseEvent).clientX;
      clientY = (event as React.MouseEvent).clientY;
    }

    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  };

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault(); // Prevent scrolling on touch
    setIsDrawing(true);
    const { x, y } = getCoordinates(e);
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) {
      ctx.beginPath();
      ctx.moveTo(x, y);
    }
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    if (!isDrawing) return;
    const { x, y } = getCoordinates(e);
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) {
      ctx.lineTo(x, y);
      ctx.stroke();
      setHasSignature(true);
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (canvas && ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Note: width/height are scaled
      setHasSignature(false);
    }
  };

  const handleConfirm = () => {
    if (canvasRef.current && hasSignature) {
      const dataUrl = canvasRef.current.toDataURL('image/png');
      onConfirm(dataUrl);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-card border border-border w-full max-w-lg rounded-xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-border flex justify-between items-center bg-surface">
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Canvas Area */}
        <div className="p-6 bg-white flex flex-col items-center">
            <p className="text-gray-500 text-xs mb-2 uppercase tracking-wide font-bold w-full text-left">
                Złóż podpis w polu poniżej:
            </p>
            <div className="relative w-full aspect-[2/1] border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 touch-none">
                <canvas
                    ref={canvasRef}
                    className="w-full h-full cursor-crosshair touch-none"
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                    onTouchStart={startDrawing}
                    onTouchMove={draw}
                    onTouchEnd={stopDrawing}
                />
                {!hasSignature && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                        <span className="text-4xl font-serif text-gray-400 italic">Podpis</span>
                    </div>
                )}
            </div>
            <p className="text-[10px] text-gray-400 mt-2 text-center">
                Myszka lub palec (urządzenia dotykowe).
            </p>
        </div>

        {/* Footer */}
        <div className="p-4 bg-surface border-t border-border flex justify-between gap-4">
            <button 
                onClick={clearSignature}
                className="flex items-center gap-2 px-4 py-2 rounded text-sm font-bold text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            >
                <Eraser size={16} /> Wyczyść
            </button>
            <button 
                onClick={handleConfirm}
                disabled={!hasSignature}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded text-sm font-bold text-white transition-all ${
                    hasSignature 
                    ? 'bg-primary hover:bg-orange-600 shadow-lg shadow-primary/20' 
                    : 'bg-gray-700 cursor-not-allowed opacity-50'
                }`}
            >
                <Check size={16} /> Zatwierdź i Pobierz
            </button>
        </div>
      </div>
    </div>
  );
};

export default SignatureModal;