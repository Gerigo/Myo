import React, { useState, useMemo } from 'react';
import { MUSCLES_DATABASE } from '../data/musclesData';
import { Search } from 'lucide-react';

export function QuickReference() {
  const [search, setSearch] = useState<string>('');
  const [filterRegion, setFilterRegion] = useState<string>('all');

  const filtered = useMemo(() => {
    return MUSCLES_DATABASE.filter(m => {
      const matchSearch =
        m.latinName.toLowerCase().includes(search.toLowerCase()) ||
        m.frenchName.toLowerCase().includes(search.toLowerCase()) ||
        m.functions.some(f => f.toLowerCase().includes(search.toLowerCase()));

      const matchRegion = filterRegion === 'all' || m.region === filterRegion;
      return matchSearch && matchRegion;
    });
  }, [search, filterRegion]);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3 p-3 bg-white border border-slate-200 rounded-2xl shadow-sm">
        <div className="flex-1 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Rechercher par nom ou fonction (ex: rotation, extension, fessier, coude...)"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:bg-white transition-all"
          />
        </div>

        <select
          value={filterRegion}
          onChange={e => setFilterRegion(e.target.value)}
          className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 font-medium focus:outline-none focus:border-teal-500"
        >
          <option value="all">Tous ({MUSCLES_DATABASE.length} muscles)</option>
          <option value="tronc">Abdos & Tronc</option>
          <option value="dos">Dos & Rachis</option>
          <option value="membres_sup">Épaules & Bras</option>
          <option value="membres_inf">Bassin & Jambes</option>
          <option value="cou_tete">Cou & Tête</option>
        </select>
      </div>

      {/* Muscle list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {filtered.map(m => (
          <div
            key={m.id}
            className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-2 hover:border-slate-300 transition-all"
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-extrabold text-sm text-slate-900">{m.latinName}</h4>
                <div className="text-xs text-teal-700 font-medium">{m.frenchName}</div>
              </div>
              <span className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                {m.regionLabel}
              </span>
            </div>

            <div className="pt-1">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Fonctions :</div>
              <ul className="space-y-1">
                {m.functions.map((fn, idx) => (
                  <li key={idx} className="text-xs text-slate-700 flex items-start gap-1.5 font-medium">
                    <span className="text-teal-600 font-bold shrink-0">✓</span>
                    <span>{fn}</span>
                  </li>
                ))}
              </ul>
            </div>

            {m.examNote && (
              <div className="pt-2 border-t border-slate-100 text-[11px] text-amber-800">
                💡 {m.examNote}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
