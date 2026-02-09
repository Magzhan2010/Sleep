const BrainCleaning = () => (
  <section className="reveal py-20 flex flex-col md:flex-row gap-16 items-center">
    <div className="flex-1 relative">
      <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-[120px] animate-slow-spin"></div>
      <div className="relative z-10 border border-slate-700 p-2 rounded-[3.5rem] bg-slate-900/50">
        <img src="/cleanBrain.jpg" className="rounded-[3rem] w-full grayscale opacity-70" alt="Brain Wash" />
      </div>
    </div>
    <div className="flex-1 space-y-8">
      <h2 className="text-5xl font-bold text-white tracking-tight leading-tight">Глимфатическая <br/> <span className="text-indigo-500 font-light italic">магистраль</span></h2>
      <p className="text-xl text-slate-400 leading-loose">
        Пока вы спите, пространство между клетками мозга увеличивается на <b>60%</b>. 
        Это позволяет спинномозговой жидкости проникать глубоко в ткани и «вымывать» 
        токсичные белки, такие как <b>бета-амилоиды</b> и <b>тау-белки</b>.
      </p>
      <p className="text-lg text-slate-500 font-light border-l-2 border-slate-700 pl-6">
        Этот процесс происходит преимущественно в стадии глубокого (N3) сна. 
        Недосыпание блокирует эту "уборку", что приводит к затуманиванию сознания на следующий день.
      </p>
    </div>
  </section>
);
export default BrainCleaning;