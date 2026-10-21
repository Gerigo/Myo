import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { MUSCLES_DATABASE, Muscle } from '../data/musclesData';
import { playSound } from '../utils/sound';
import { Check, ArrowRight, RotateCw, Volume2, VolumeX, Sparkles, Hand, MousePointerClick } from 'lucide-react';

interface FunctionCard {
  id: string;
  muscleId: string;
  functions: string[];
}

export function MatchingGame() {
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [roundKey, setRoundKey] = useState<number>(0);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Active round state (4 pairs per round for clarity)
  const [currentMuscles, setCurrentMuscles] = useState<Muscle[]>([]);
  const [currentFunctions, setCurrentFunctions] = useState<FunctionCard[]>([]);

  // Selection state for click / tap matching
  const [selectedMuscleId, setSelectedMuscleId] = useState<string | null>(null);
  const [selectedFuncId, setSelectedFuncId] = useState<string | null>(null);

  // Drag & drop state
  const [draggedMuscleId, setDraggedMuscleId] = useState<string | null>(null);
  const [dropTargetId, setDropTargetId] = useState<string | null>(null);

  // Progress
  const [matchedMuscleIds, setMatchedMuscleIds] = useState<string[]>([]);
  const [wrongPairAnimation, setWrongPairAnimation] = useState<{ muscleId: string; funcId: string } | null>(null);
  const [lastCorrection, setLastCorrection] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [roundSuccess, setRoundSuccess] = useState<boolean>(false);

  // Pool of muscles
  const musclePool = useMemo(() => {
    if (selectedRegion === 'all') return MUSCLES_DATABASE;
    return MUSCLES_DATABASE.filter(m => m.region === selectedRegion);
  }, [selectedRegion]);

  // Start new round
  const startRound = useCallback(() => {
    const pool = [...musclePool];
    if (pool.length === 0) return;

    // Pick 4 muscles randomly
    const shuffled = pool.sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(4, shuffled.length));

    // Prepare functions shuffled
    const funcs: FunctionCard[] = selected.map(m => ({
      id: `fn_${m.id}`,
      muscleId: m.id,
      functions: m.functions
    })).sort(() => Math.random() - 0.5);

    setCurrentMuscles(selected);
    setCurrentFunctions(funcs);
    setMatchedMuscleIds([]);
    setSelectedMuscleId(null);
    setSelectedFuncId(null);
    setDraggedMuscleId(null);
    setDropTargetId(null);
    setWrongPairAnimation(null);
    setLastCorrection(null);
    setRoundSuccess(false);
  }, [musclePool]);

  useEffect(() => {
    startRound();
  }, [startRound, roundKey, selectedRegion]);

  // Attempt matching
  const handleAttemptMatch = (muscleId: string, funcCard: FunctionCard) => {
    const isCorrect = muscleId === funcCard.muscleId;
    const muscle = MUSCLES_DATABASE.find(m => m.id === muscleId);
    const correctMuscleForThisFunc = MUSCLES_DATABASE.find(m => m.id === funcCard.muscleId);

    if (isCorrect) {
      playSound.success(soundEnabled);
      const newMatched = [...matchedMuscleIds, muscleId];
      setMatchedMuscleIds(newMatched);
      setScore(s => s + 10 + streak * 2);
      setStreak(st => st + 1);
      setLastCorrection(null);
      setSelectedMuscleId(null);
      setSelectedFuncId(null);

      if (newMatched.length === currentMuscles.length) {
        setRoundSuccess(true);
        playSound.celebrate(soundEnabled);
      }
    } else {
      playSound.error(soundEnabled);
      setStreak(0);
      setWrongPairAnimation({ muscleId, funcId: funcCard.id });
      setLastCorrection(
        `💡 Ces fonctions correspondent à ${correctMuscleForThisFunc?.latinName} (${correctMuscleForThisFunc?.frenchName}), pas à ${muscle?.latinName} !`
      );

      setTimeout(() => {
        setWrongPairAnimation(null);
        setSelectedMuscleId(null);
        setSelectedFuncId(null);
      }, 1000);
    }
  };

  // Click on Muscle
  const handleMuscleClick = (muscleId: string) => {
    if (matchedMuscleIds.includes(muscleId)) return;

    if (selectedFuncId) {
      const funcCard = currentFunctions.find(f => f.id === selectedFuncId);
      if (funcCard) handleAttemptMatch(muscleId, funcCard);
    } else {
      setSelectedMuscleId(prev => (prev === muscleId ? null : muscleId));
    }
  };

  // Click on Function
  const handleFunctionClick = (funcCard: FunctionCard) => {
    if (matchedMuscleIds.includes(funcCard.muscleId)) return;

    if (selectedMuscleId) {
      handleAttemptMatch(selectedMuscleId, funcCard);
    } else {
      setSelectedFuncId(prev => (prev === funcCard.id ? null : funcCard.id));
    }
  };

  // Drag & drop handlers
  const onDragStart = (e: React.DragEvent, muscleId: string) => {
    if (matchedMuscleIds.includes(muscleId)) return;
    setDraggedMuscleId(muscleId);
    e.dataTransfer.setData('text/plain', muscleId);
  };

  const onDragOver = (e: React.DragEvent, funcId: string) => {
    e.preventDefault();
    setDropTargetId(funcId);
  };

  const onDrop = (e: React.DragEvent, funcCard: FunctionCard) => {
    e.preventDefault();
    setDropTargetId(null);
    const sourceMuscleId = e.dataTransfer.getData('text/plain') || draggedMuscleId;
    if (sourceMuscleId) {
      handleAttemptMatch(sourceMuscleId, funcCard);
    }
    setDraggedMuscleId(null);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {/* Filters & Game Controls (Light theme) */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-3 sm:p-4 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Region Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
          {[
            { id: 'all', label: 'Tout le corps' },
            { id: 'tronc', label: 'Abdos & Tronc' },
            { id: 'dos', label: 'Dos & Rachis' },
            { id: 'membres_sup', label: 'Épaules & Bras' },
            { id: 'membres_inf', label: 'Bassin & Jambes' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedRegion(tab.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
                selectedRegion === tab.id
                  ? 'bg-teal-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Score & Audio */}
        <div className="flex items-center justify-between w-full sm:w-auto gap-4 text-xs font-medium text-slate-600">
          <div className="flex items-center gap-3">
            <span>Score : <strong className="text-teal-700 font-bold font-mono text-sm tabular-nums">{score}</strong></span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Série : <strong className="text-amber-600 font-bold font-mono text-sm tabular-nums">{streak}</strong> 🔥</span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setSoundEnabled(s => !s)}
              title="Son actif / muet"
              className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-teal-600" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
            </button>

            <button
              onClick={() => setRoundKey(k => k + 1)}
              title="Nouvelle manche"
              className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center gap-1 font-semibold text-xs px-2.5"
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>Changer</span>
            </button>
          </div>
        </div>
      </div>

      {/* Helper guide */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-2 py-0.5">
        <div className="flex items-center gap-1.5">
          <MousePointerClick className="w-3.5 h-3.5 text-teal-600" />
          <span><strong>Astuce :</strong> Cliquez sur un muscle puis sur sa fonction (ou glissez-déposez).</span>
        </div>
        <div className="font-semibold text-slate-700 font-mono">
          {matchedMuscleIds.length} / {currentMuscles.length} trouvés
        </div>
      </div>

      {/* Immediate Correction Message */}
      {lastCorrection && (
        <div className="p-3 bg-amber-50 border border-amber-300 rounded-xl text-xs text-amber-900 font-medium animate-fadeIn flex items-center gap-2 shadow-sm">
          <span>{lastCorrection}</span>
        </div>
      )}

      {/* Game Grid */}
      {!roundSuccess ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Column Left: Muscle Names */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">
              Muscles ({currentMuscles.length - matchedMuscleIds.length} à relier)
            </div>

            <div className="space-y-2.5">
              {currentMuscles.map(m => {
                const isMatched = matchedMuscleIds.includes(m.id);
                const isSelected = selectedMuscleId === m.id;
                const isWrong = wrongPairAnimation?.muscleId === m.id;

                if (isMatched) {
                  return (
                    <div
                      key={m.id}
                      className="p-4 rounded-xl bg-slate-100/80 border border-emerald-300 text-slate-400 flex items-center justify-between transition-all"
                    >
                      <div>
                        <div className="text-sm font-bold text-emerald-800 line-through">
                          {m.latinName}
                        </div>
                        <div className="text-xs text-slate-500">{m.frenchName}</div>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    key={m.id}
                    draggable
                    onDragStart={e => onDragStart(e, m.id)}
                    onClick={() => handleMuscleClick(m.id)}
                    className={`p-4 rounded-xl border select-none cursor-pointer transition-all duration-150 shadow-sm ${
                      isWrong
                        ? 'bg-rose-50 border-rose-400 text-rose-900 animate-shake ring-2 ring-rose-200'
                        : isSelected
                        ? 'bg-teal-50 border-teal-500 text-teal-950 ring-2 ring-teal-200 shadow-md scale-[1.01]'
                        : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800 hover:border-slate-300 hover:shadow'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-extrabold text-sm text-slate-900">
                        {m.latinName}
                      </div>
                      <span className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                        {m.regionLabel}
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 font-medium mt-0.5">
                      {m.frenchName}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column Right: Functions */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">
              Fonctions motrices officielles
            </div>

            <div className="space-y-2.5">
              {currentFunctions.map(card => {
                const isMatched = matchedMuscleIds.includes(card.muscleId);
                const isSelected = selectedFuncId === card.id;
                const isDropTarget = dropTargetId === card.id;
                const isWrong = wrongPairAnimation?.funcId === card.id;
                const targetMuscle = MUSCLES_DATABASE.find(m => m.id === card.muscleId);

                if (isMatched) {
                  return (
                    <div
                      key={card.id}
                      className="p-4 rounded-xl bg-slate-100/80 border border-emerald-300 flex items-start gap-2.5 text-slate-500"
                    >
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div className="text-xs">
                        <strong className="text-emerald-800 font-semibold">{targetMuscle?.latinName} :</strong>{' '}
                        <span className="text-slate-600">{card.functions.join(' · ')}</span>
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    key={card.id}
                    onDragOver={e => onDragOver(e, card.id)}
                    onDragLeave={() => setDropTargetId(null)}
                    onDrop={e => onDrop(e, card)}
                    onClick={() => handleFunctionClick(card)}
                    className={`p-4 rounded-xl border select-none cursor-pointer transition-all duration-150 shadow-sm ${
                      isWrong
                        ? 'bg-rose-50 border-rose-400 text-rose-900 animate-shake ring-2 ring-rose-200'
                        : isDropTarget
                        ? 'bg-teal-50 border-teal-500 ring-2 ring-teal-300 scale-[1.01]'
                        : isSelected
                        ? 'bg-teal-50 border-teal-500 text-teal-950 ring-2 ring-teal-200 shadow-md scale-[1.01]'
                        : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800 hover:border-slate-300 hover:shadow'
                    }`}
                  >
                    <ul className="space-y-1">
                      {card.functions.map((fn, idx) => (
                        <li key={idx} className="text-xs text-slate-800 flex items-start gap-2 font-medium">
                          <span className="text-teal-600 font-bold shrink-0">✓</span>
                          <span>{fn}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        /* Round Completed - Celebratory state */
        <div className="p-8 bg-white border border-slate-200 rounded-3xl text-center space-y-4 max-w-md mx-auto shadow-lg animate-scaleUp">
          <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mx-auto shadow-inner">
            <Sparkles className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-slate-900">Bravo ! 4/4 Paires Validées</h3>
            <p className="text-xs text-slate-500 mt-1">
              Toutes les fonctions musculaires ont été associées sans faute.
            </p>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-around text-xs font-semibold text-slate-700">
            <span>Score : <strong className="text-teal-600">{score} pts</strong></span>
            <span>Série : <strong className="text-amber-600">{streak} 🔥</strong></span>
          </div>

          <button
            onClick={() => setRoundKey(k => k + 1)}
            className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
          >
            <span>Manche suivante</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
