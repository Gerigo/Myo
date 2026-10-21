import React, { useState, useEffect, useMemo } from 'react';
import { MUSCLES_DATABASE, ALL_UNIQUE_FUNCTIONS, Muscle } from '../data/musclesData';
import { playSound } from '../utils/sound';
import { Check, X, ArrowRight, Sparkles } from 'lucide-react';

export function PracticeQuiz() {
  const [mode, setMode] = useState<'muscle_to_fn' | 'fn_to_muscle'>('muscle_to_fn');
  const [index, setIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  // Mode A: Muscle -> Select all functions
  const [selectedFunctions, setSelectedFunctions] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [optionsA, setOptionsA] = useState<string[]>([]);

  // Mode B: Functions -> Select muscle
  const [selectedMuscleId, setSelectedMuscleId] = useState<string | null>(null);

  const currentMuscle: Muscle = MUSCLES_DATABASE[index % MUSCLES_DATABASE.length];

  // Generate options for Mode A (correct functions + 3-4 distractors)
  useEffect(() => {
    if (mode === 'muscle_to_fn') {
      const correct = currentMuscle.functions;
      const others = ALL_UNIQUE_FUNCTIONS.filter(f => !correct.includes(f));
      const distractors = others.sort(() => Math.random() - 0.5).slice(0, 3);
      const allOptions = [...correct, ...distractors].sort(() => Math.random() - 0.5);
      setOptionsA(allOptions);
      setSelectedFunctions([]);
      setIsSubmitted(false);
    } else {
      setSelectedMuscleId(null);
      setIsSubmitted(false);
    }
  }, [currentMuscle, mode]);

  // Options for Mode B (current muscle + 3 other muscles)
  const optionsB = useMemo(() => {
    if (mode !== 'fn_to_muscle') return [];
    const others = MUSCLES_DATABASE.filter(m => m.id !== currentMuscle.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    return [currentMuscle, ...others].sort(() => Math.random() - 0.5);
  }, [currentMuscle, mode]);

  const handleValidateA = () => {
    setIsSubmitted(true);
    const correct = currentMuscle.functions;
    const isSuccess =
      correct.length === selectedFunctions.length &&
      correct.every(f => selectedFunctions.includes(f));

    if (isSuccess) {
      playSound.success(true);
      setScore(s => s + 1);
    } else {
      playSound.error(true);
    }
  };

  const handleSelectB = (muscleId: string) => {
    if (isSubmitted) return;
    setSelectedMuscleId(muscleId);
    setIsSubmitted(true);

    if (muscleId === currentMuscle.id) {
      playSound.success(true);
      setScore(s => s + 1);
    } else {
      playSound.error(true);
    }
  };

  const handleNext = () => {
    setIndex(i => i + 1);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      {/* Mode Switcher */}
      <div className="flex items-center justify-between p-2.5 bg-white border border-slate-200/80 rounded-2xl shadow-sm">
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => { setMode('muscle_to_fn'); setIndex(0); }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ${
              mode === 'muscle_to_fn' ? 'bg-teal-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            Muscle ➔ Ses Fonctions
          </button>
          <button
            onClick={() => { setMode('fn_to_muscle'); setIndex(0); }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ${
              mode === 'fn_to_muscle' ? 'bg-teal-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            Fonctions ➔ Quel Muscle ?
          </button>
        </div>

        <div className="text-xs text-slate-500 font-medium px-2">
          Score : <strong className="text-teal-700 font-bold font-mono">{score}</strong>
        </div>
      </div>

      {/* MODE A: Muscle -> Find its functions */}
      {mode === 'muscle_to_fn' ? (
        <div className="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm space-y-5">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-teal-700 font-bold bg-teal-50 px-2 py-0.5 rounded">
              {currentMuscle.regionLabel}
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 mt-2">
              {currentMuscle.latinName}
            </h2>
            <div className="text-xs text-slate-500 font-medium">
              {currentMuscle.frenchName}
            </div>
            <p className="text-xs text-slate-600 mt-3 font-medium">
              Cochez <strong>toutes</strong> les fonctions motrices officielles de ce muscle :
            </p>
          </div>

          <div className="space-y-2">
            {optionsA.map((fn, idx) => {
              const isChecked = selectedFunctions.includes(fn);
              const isCorrect = currentMuscle.functions.includes(fn);

              let style = 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700 hover:border-slate-300';

              if (isSubmitted) {
                if (isCorrect && isChecked) {
                  style = 'bg-emerald-50 border-emerald-400 text-emerald-900 font-semibold ring-1 ring-emerald-200';
                } else if (isCorrect && !isChecked) {
                  style = 'bg-amber-50 border-amber-400 text-amber-900 font-semibold';
                } else if (!isCorrect && isChecked) {
                  style = 'bg-rose-50 border-rose-400 text-rose-900 font-semibold';
                } else {
                  style = 'opacity-40 border-slate-100 text-slate-400';
                }
              } else if (isChecked) {
                style = 'bg-teal-50 border-teal-500 text-teal-950 font-semibold ring-2 ring-teal-200';
              }

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    if (isSubmitted) return;
                    setSelectedFunctions(prev =>
                      prev.includes(fn) ? prev.filter(f => f !== fn) : [...prev, fn]
                    );
                  }}
                  className={`w-full p-3.5 rounded-xl border text-left text-xs transition-all flex items-center justify-between ${style}`}
                >
                  <span>{fn}</span>
                  {isSubmitted && isCorrect && <Check className="w-4 h-4 text-emerald-600" />}
                  {isSubmitted && !isCorrect && isChecked && <X className="w-4 h-4 text-rose-600" />}
                </button>
              );
            })}
          </div>

          {!isSubmitted ? (
            <div className="flex justify-end pt-2">
              <button
                onClick={handleValidateA}
                disabled={selectedFunctions.length === 0}
                className="px-6 py-2.5 bg-teal-600 hover:bg-teal-700 disabled:opacity-40 text-white font-bold text-xs rounded-xl transition-all shadow-sm"
              >
                Valider ma réponse
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
              <div className="text-xs text-slate-500">
                {currentMuscle.functions.length} fonction(s) requise(s)
              </div>
              <button
                onClick={handleNext}
                className="px-6 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl transition-all flex items-center gap-1.5 shadow-sm"
              >
                <span>Muscle suivant</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      ) : (
        /* MODE B: Functions -> Muscle */
        <div className="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm space-y-5">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-teal-700 font-bold bg-teal-50 px-2 py-0.5 rounded">
              Muscle mystère
            </span>
            <h2 className="text-base font-bold text-slate-900 mt-2">
              Quel muscle assure ces fonctions spécifiques ?
            </h2>
            <div className="mt-3 p-4 bg-teal-50/70 border border-teal-200/80 rounded-2xl space-y-1.5">
              {currentMuscle.functions.map((fn, idx) => (
                <div key={idx} className="text-xs text-teal-950 font-semibold flex items-center gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span>{fn}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2.5">
            {optionsB.map(m => {
              const isSelected = selectedMuscleId === m.id;
              const isCorrect = m.id === currentMuscle.id;

              let style = 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700 hover:border-slate-300';

              if (isSubmitted) {
                if (isCorrect) {
                  style = 'bg-emerald-50 border-emerald-400 text-emerald-900 font-semibold ring-1 ring-emerald-200';
                } else if (isSelected && !isCorrect) {
                  style = 'bg-rose-50 border-rose-400 text-rose-900 font-semibold';
                } else {
                  style = 'opacity-40 border-slate-100 text-slate-400';
                }
              }

              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => handleSelectB(m.id)}
                  disabled={isSubmitted}
                  className={`w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between ${style}`}
                >
                  <div>
                    <div className="text-sm font-bold text-slate-900">{m.latinName}</div>
                    <div className="text-xs text-slate-500">{m.frenchName}</div>
                  </div>
                  {isSubmitted && isCorrect && <Check className="w-4 h-4 text-emerald-600" />}
                  {isSubmitted && isSelected && !isCorrect && <X className="w-4 h-4 text-rose-600" />}
                </button>
              );
            })}
          </div>

          {isSubmitted && (
            <div className="flex justify-end pt-2 border-t border-slate-100">
              <button
                onClick={handleNext}
                className="px-6 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl transition-all flex items-center gap-1.5 shadow-sm"
              >
                <span>Question suivante</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
