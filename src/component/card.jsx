import { motion } from 'framer-motion';

const PhaseCard = ({ title, time, text, color, delay }) => (
  <motion.div 
    initial={{ y: 100, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: delay }}
    className="group relative p-10 rounded-[2.5rem] border border-slate-700 bg-slate-800/30 backdrop-blur-md hover:bg-slate-800/60 transition-all duration-500"
  >
    <div className={`absolute -top-10 -left-10 w-40 h-40 blur-[80px] opacity-10 group-hover:opacity-30 transition-opacity rounded-full ${color}`}></div>
    
    <div className="mb-8 overflow-hidden rounded-3xl h-64 bg-slate-900 border border-slate-700">
      <img src="/sl.webp" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" />
    </div>

    <div className="space-y-4">
      <span className="px-4 py-1 rounded-full border border-indigo-500/50 text-xs font-mono text-indigo-300 uppercase tracking-widest">
        {time}
      </span>
      <h3 className="text-3xl font-bold text-white">{title}</h3>
      <p className="text-slate-400 leading-loose text-base">
        {text}
      </p>
    </div>
  </motion.div>
);

export default PhaseCard;
