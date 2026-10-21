import React, { useState } from 'react';
import { MatchingGame } from './components/MatchingGame';
import { PracticeQuiz } from './components/PracticeQuiz';
import { QuickReference } from './components/QuickReference';
import { MUSCLES_DATABASE } from './data/musclesData';
import { Layers, Target, BookOpen, X } from 'lucide-react';

export default function App() {
  const [gameMode, setGameMode] = useState<'matching' | 'quiz'>('matching');
  const [showCheatSheet, setShowCheatSheet] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-teal-500 selection:text-white">
      {/* Light Clean Top Header */}
      <header className="border-b border-slate-200/90 bg-white/95 sticky top-0 z-20 backdrop-blur-md shadow-xs">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          {/* Logo & Brand */}
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-600 shadow-sm"></span>
            <div>
              <span className="font-extrabold text-sm sm:text-base text-slate-900 tracking-tight">
                PCA Muscles & Fonctions
              </span>
              <span className="hidden sm:inline text-[11px] text-slate-600 ml-2 font-medium">
                ({MUSCLES_DATABASE.length} muscles)
              </span>
            </div>
          </div>

          {/* Mode Tabs */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-semibold">
            <button
              onClick={() => setGameMode('matching')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                gameMode === 'matching'
                  ? 'bg-white text-teal-700 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Appariement</span>
            </button>

            <button
              onClick={() => setGameMode('quiz')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                gameMode === 'quiz'
                  ? 'bg-white text-teal-700 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Target className="w-3.5 h-3.5" />
              <span>QCM Fonctions</span>
            </button>
          </div>

          {/* Quick Memo Trigger */}
          <button
            onClick={() => setShowCheatSheet(true)}
            title="Consulter les fiches"
            className="px-2.5 py-1.5 rounded-lg bg-teal-50 hover:bg-teal-100 text-teal-800 text-xs font-semibold transition-colors flex items-center gap-1.5 border border-teal-200/60"
          >
            <BookOpen className="w-3.5 h-3.5 text-teal-600" />
            <span className="hidden sm:inline">Mémo complet</span>
            <span className="sm:hidden">Mémo</span>
          </button>
        </div>
      </header>

      {/* Main Game Stage */}
      <main className="flex-1 max-w-4xl w-full mx-auto p-4 sm:p-6 flex flex-col justify-start">
        {gameMode === 'matching' ? <MatchingGame /> : <PracticeQuiz />}
      </main>

      {/* Modal Quick Reference */}
      {showCheatSheet && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white border border-slate-200 rounded-3xl w-full max-w-3xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-slate-50/70">
              <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-teal-600" />
                <span>Mémo des {MUSCLES_DATABASE.length} Muscles & Leurs Fonctions</span>
              </h3>
              <button
                onClick={() => setShowCheatSheet(false)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 overflow-y-auto flex-1 bg-slate-50/40">
              <QuickReference />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
