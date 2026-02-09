const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
    <div className="max-w-[1160px] mx-auto px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-indigo-500 rounded-full animate-pulse shadow-[0_0_15px_#6366f1]"></div>
        <span className="font-bold tracking-widest text-white uppercase text-sm">Sleep.Bio</span>
      </div>
      <div className="hidden md:flex gap-8 text-xs font-mono text-slate-400 uppercase tracking-widest">
        <a href="#phases" className="hover:text-indigo-400 transition-colors">Фазы</a>
        <a href="#ritms" className="hover:text-indigo-400 transition-colors">Ритмы</a>
        <a href="#data" className="hover:text-indigo-400 transition-colors">Данные</a>
      </div>
    </div>
  </nav>
);
export default Navbar;