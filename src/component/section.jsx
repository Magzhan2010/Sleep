import { motion } from 'framer-motion';

const CircadianSection = () => (
  <section className="py-24 border-t border-slate-800/50">
    <div className="grid lg:grid-cols-2 gap-20 items-start">
      
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        <h2 className="text-5xl font-extrabold text-white leading-tight">
          Циркадные ритмы: <br/>
          <span className="text-indigo-400 font-light">Внутренний хронометр жизни</span>
        </h2>
        
        <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
          <p>
            Наши биологические часы — это не метафора. В глубине мозга находится <b>супрахиазматическое ядро (СХЯ)</b>, 
            группа из 20,000 нейронов, которая получает прямую информацию о свете через ретиногипоталамический тракт.
          </p>
          <p>
            Этот механизм регулирует температуру тела, уровень кортизола и метаболизм. Когда наступает вечер, 
            отсутствие синего спектра света дает сигнал эпифизу начать секрецию <b>мелатонина</b>. 
            Однако современный мир с его искусственным освещением и экранами смартфонов вызывает 
            «социальный джетлаг», блокируя выработку гормона сна и нарушая генетическую экспрессию клеток.
          </p>
          <p>
            Длительное нарушение этих ритмов ведет к метаболическому синдрому, снижению иммунного ответа 
            и хроническому воспалению. Понимание биологии света — это первый шаг к восстановлению здоровья.
          </p>
        </div>

        <div className="p-8 border-l-2 border-indigo-500 bg-indigo-500/5 rounded-2xl backdrop-blur-sm">
          <p className="italic text-xl text-indigo-100 font-light">
            "Каждая клетка нашего организма имеет свои собственные молекулярные часы. 
            Сон — это дирижер этого огромного оркестра."
          </p>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="sticky top-10"
      >
        <div className="aspect-square bg-slate-900 rounded-[3rem] border border-slate-700 shadow-2xl flex items-center justify-center relative overflow-hidden group">
            <img src="/funcs.webp" className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/40 to-transparent"></div>
            
            {/* Анимированный сканер */}
            <motion.div 
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-[2px] bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.8)] z-20"
            />
        </div>
      </motion.div>

    </div>
  </section>
);

export default CircadianSection;
