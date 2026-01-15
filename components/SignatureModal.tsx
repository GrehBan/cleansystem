import React, { useRef, useState, useEffect } from 'react';
import { X, Eraser, Check } from 'lucide-react';

interface SignatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (signatureDataUrl: string) => void;
  title?: string;
}

const SignatureModal: React.FC<SignatureModalProps> = ({ isOpen, onClose, onConfirm, title = "Podpisz Dokument" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSignature, setHasSignature] = useState(false);

  // Initialize Canvas with proper DPI scaling
  useEffect(() => {
    if (isOpen && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      
      // Get the display size of the canvas
      const rect = canvas.getBoundingClientRect();
      
      // Handle High DPI (Retina) displays
      const dpr = window.devicePixelRatio || 1;
      
      // Set actual size in memory (scaled to account for extra pixel density)
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      if (ctx) {
          // Normalize coordinate system to use css pixels
          ctx.scale(dpr, dpr);
          ctx.lineWidth = 2;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.strokeStyle = '#000000';
      }
    }
  }, [isOpen]);

  // Helper to get correct coordinates relative to canvas
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
    // Prevent scrolling on touch devices
    if (e.type === 'touchstart') {
        document.body.style.overflow = 'hidden';
    }
    
    setIsDrawing(true);
    const { x, y } = getCoordinates(e);
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) {
      ctx.beginPath();
      ctx.moveTo(x, y);
    }
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    
    // Crucial for touch: prevent page scrolling while drawing
    if(e.cancelable) e.preventDefault();
    
    const { x, y } = getCoordinates(e);
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) {
      ctx.lineTo(x, y);
      ctx.stroke();
      setHasSignature(true);
    }
  };

  const stopDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDrawing(false);
    // Re-enable scrolling
    if (e.type === 'touchend' || e.type === 'touchcancel') {
        document.body.style.overflow = '';
    }
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (canvas && ctx) {
      // Clear entire canvas (use width/height which are scaled)
      ctx.clearRect(0, 0, canvas.width, canvas.height); 
      
      // Need to beginPath again to avoid connecting old lines if we draw again
      ctx.beginPath();
      setHasSignature(false);
    }
  };

  const handleConfirm = () => {
    if (canvasRef.current && hasSignature) {
      // Export signature
      const dataUrl = canvasRef.current.toDataURL('image/png');
      onConfirm(dataUrl);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="bg-white text-black w-full max-w-lg rounded-xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
          <div>
              <h3 className="text-lg font-bold text-gray-900">{title}</h3>
              <p className="text-[10px] text-gray-500 uppercase tracking-wide">Wymagany podpis biometryczny</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-black transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Canvas Area */}
        <div className="p-6 bg-white flex flex-col items-center">
            <div className="relative w-full h-48 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 touch-none select-none">
                <canvas
                    ref={canvasRef}
                    className="w-full h-full cursor-crosshair touch-none block"
                    style={{ touchAction: 'none' }} // Modern CSS property to disable browser handling of gestures
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                    onTouchStart={startDrawing}
                    onTouchMove={draw}
                    onTouchEnd={stopDrawing}
                    onTouchCancel={stopDrawing}
                />
                {!hasSignature && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                        <span className="text-4xl font-serif text-gray-400 italic">Podpis tutaj</span>
                    </div>
                )}
            </div>
            <p className="text-[11px] text-gray-400 mt-3 text-center">
                Składając podpis potwierdzasz prawdziwość danych pod rygorem odpowiedzialności karnej (Art. 233 KK).<br/>
                Użyj palca (dotyk) lub myszki.
            </p>
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-between gap-4">
            <button 
                onClick={clearSignature}
                className="flex items-center gap-2 px-4 py-3 rounded text-sm font-bold text-gray-600 hover:bg-gray-200 transition-colors"
            >
                <Eraser size={16} /> Wyczyść
            </button>
            <button 
                onClick={handleConfirm}
                disabled={!hasSignature}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded text-sm font-bold text-white transition-all shadow-lg ${
                    hasSignature 
                    ? 'bg-blue-600 hover:bg-blue-700' 
                    : 'bg-gray-400 cursor-not-allowed opacity-70'
                }`}
            >
                <Check size={16} /> ZATWIERDZAM PODPIS
            </button>
        </div>
      </div>
    </div>
  );
};

export default SignatureModal;