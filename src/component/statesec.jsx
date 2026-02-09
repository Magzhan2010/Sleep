const StatsSection = () => (
  <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-10 py-20 border-y border-slate-800/50 my-20">
    {[
      { label: "Циклов за ночь", value: "5-6" },
      { label: "Очистка мозга", value: "60%", desc: "эффективнее ночью" },
      { label: "Мелатонин пик", value: "02:00" },
      { label: "Длительность REM", value: "90мин", desc: "суммарно" }
    ].map((stat, i) => (
      <div key={i} className="text-center group">
        <div className="text-4xl md:text-6xl font-black text-white text-glow mb-2 group-hover:scale-110 transition-transform">{stat.value}</div>
        <div className="text-xs font-mono text-indigo-400 uppercase tracking-tighter mb-1">{stat.label}</div>
        <div className="text-[10px] text-slate-500 uppercase tracking-widest">{stat.desc}</div>
      </div>
    ))}
  </div>
);
export default StatsSection;