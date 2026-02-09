import { motion } from 'framer-motion';

const Hero = () => (
  <section className="relative h-[90vh] flex items-center justify-center overflow-hidden rounded-[4rem] mb-24 shadow-2xl">
    <motion.div 
      initial={{ scale: 1.2, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.4 }}
      transition={{ duration: 2 }}
      className="absolute inset-0 bg-slate-900"
    >
      <img src="/sleepChild.jpg" alt="Biology of Sleep" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f172a]/60 to-[#0f172a]"></div>
    </motion.div>

    <div className="relative z-10 text-center px-6 max-w-4xl">
      <motion.h1 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-6xl md:text-8xl font-black mb-8 tracking-tighter text-white"
      >
        БИОЛОГИЯ <span className="text-indigo-500">СНА</span>
      </motion.h1>
      
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
          Сон — это не просто выключение сознания, а сложнейший биохимический процесс. 
          Пока вы спите, ваша <b>глимфатическая система</b> удаляет метаболические отходы, 
          накопленные за день, включая токсичный белок бета-амилоид, напрямую связанный с нейродегенерацией. 
          Это время, когда кратковременная память превращается в долговременную в процессе неокортикальной консолидации.
        </p>
      </motion.div>
    </div>
  </section>
);

export default Hero;
