import React, { useState } from 'react';
import { Question } from '../types';
import { AlertCircle, CheckCircle2, XCircle, RefreshCw } from 'lucide-react';

interface QuizProps {
  questions: Question[];
  passingScore: number;
  onComplete: (score: number, passed: boolean) => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, passingScore, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<{questionId: number, correct: boolean}[]>([]);

  const handleAnswer = () => {
    if (selectedOption === null) return;

    const isCorrect = selectedOption === questions[currentIndex].correctAnswer;
    if (isCorrect) setScore(prev => prev + 1);

    setAnswers(prev => [...prev, { questionId: questions[currentIndex].id, correct: isCorrect }]);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  const finalPercentage = Math.round((score / questions.length) * 100);
  const passed = finalPercentage >= passingScore;

  if (showResult) {
    return (
      <div className="bg-card border border-border rounded-xl p-8 text-center max-w-2xl mx-auto mt-8 animate-in fade-in zoom-in duration-300">
        <div className="mb-6 flex justify-center">
          {passed ? (
            <CheckCircle2 size={64} className="text-success" />
          ) : (
            <XCircle size={64} className="text-danger" />
          )}
        </div>
        
        <h2 className="text-3xl font-bold text-white mb-2">
          {passed ? 'Moduł Zaliczony!' : 'Niezaliczony'}
        </h2>
        
        <div className="text-6xl font-black text-white font-mono my-6">
          {finalPercentage}%
        </div>
        
        <p className="text-gray-400 mb-8">
          {passed 
            ? 'Gratulacje! Twoja wiedza została zweryfikowana pomyślnie.' 
            : `Wymagany próg to ${passingScore}%. Musisz powtórzyć materiał.`}
        </p>

        {passed ? (
          <button 
            onClick={() => onComplete(finalPercentage, true)}
            className="bg-success hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-colors w-full md:w-auto"
          >
            Zatwierdź Wynik
          </button>
        ) : (
          <button 
            onClick={() => {
              setCurrentIndex(0);
              setScore(0);
              setSelectedOption(null);
              setShowResult(false);
              setAnswers([]);
            }}
            className="flex items-center justify-center gap-2 bg-background border border-border hover:bg-surface text-white font-bold py-3 px-8 rounded-lg transition-colors w-full md:w-auto mx-auto"
          >
            <RefreshCw size={18} />
            Spróbuj Ponownie
          </button>
        )}
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <div className="mb-6 flex justify-between items-end">
        <h2 className="text-2xl font-bold text-white">Egzamin Końcowy</h2>
        <span className="text-primary font-mono text-sm">Pytanie {currentIndex + 1} / {questions.length}</span>
      </div>

      <div className="w-full bg-gray-800 h-1 rounded-full mb-8 overflow-hidden">
        <div 
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        ></div>
      </div>

      <div className="bg-card border border-border p-6 md:p-10 rounded-xl">
        <h3 className="text-xl text-white font-medium mb-8 leading-relaxed">
          {currentQuestion.question}
        </h3>

        <div className="space-y-3">
          {currentQuestion.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedOption(idx)}
              className={`w-full text-left p-4 rounded-lg border transition-all duration-200 flex items-center group ${
                selectedOption === idx 
                  ? 'border-primary bg-primary/10 text-white' 
                  : 'border-border bg-surface text-gray-300 hover:border-gray-500'
              }`}
            >
              <div className={`w-5 h-5 rounded-full border mr-4 flex items-center justify-center ${
                selectedOption === idx ? 'border-primary' : 'border-gray-500 group-hover:border-gray-300'
              }`}>
                {selectedOption === idx && <div className="w-2.5 h-2.5 bg-primary rounded-full" />}
              </div>
              {option}
            </button>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <button
            onClick={handleAnswer}
            disabled={selectedOption === null}
            className={`px-8 py-3 rounded-lg font-bold transition-all ${
              selectedOption !== null 
                ? 'bg-primary hover:bg-orange-600 text-white shadow-lg shadow-primary/20' 
                : 'bg-gray-700 text-gray-400 cursor-not-allowed'
            }`}
          >
            {currentIndex === questions.length - 1 ? 'Zakończ' : 'Następne'}
          </button>
        </div>
      </div>
      
      <div className="mt-4 flex items-start gap-2 text-xs text-gray-500">
        <AlertCircle size={14} className="mt-0.5" />
        <span>Wybierz jedną prawidłową odpowiedź. Nie ma możliwości powrotu do poprzedniego pytania.</span>
      </div>
    </div>
  );
};

export default Quiz;