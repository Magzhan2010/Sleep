import { useEffect } from "react";
import PhaseCard from "./component/card";
import BrainCleaning from "./component/clean";
import Hero from "./component/hero";
import CircadianSection from "./component/section";
import StatsSection from "./component/statesec";
import Navbar from "./component/header";

export default function SleepProject() {
  useEffect(() => {
    // Наш Observer для запуска анимаций .reveal
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }, []);

  return (
    <div className="bg-[#020617] text-white min-h-screen selection:bg-indigo-500/30">
      <Navbar />
      
      <div className="max-w-[1160px] mx-auto px-6 pt-32 pb-20">
        <Hero />
        
        <StatsSection />

       <div id="phases" className="grid md:grid-cols-3 gap-10 mb-40">
        <PhaseCard 
          title="Легкий сон" 
          time="Стадии N1-N2" 
          color="bg-cyan-400" 
          text="Начальный этап, занимающий около 50% всей ночи. Здесь мозг генерирует 'сонные веретена' — вспышки активности, которые блокируют внешние шумы, позволяя сознанию отключиться. Происходит первичная обработка информации и снижение мышечного тонуса. Если вас разбудить сейчас, вы можете даже не понять, что спали." 
        />
        <PhaseCard 
          title="Глубокий сон" 
          time="Стадия N3 (Delta)" 
          color="bg-blue-600" 
          text="Самая важная фаза для физического здоровья. Мозговые волны становятся максимально медленными (Дельта-ритм). В это время гипофиз выделяет пиковую дозу гормона роста, восстанавливая ткани и укрепляя иммунитет. Глимфатическая система увеличивает поток ликвора на 60%, буквально промывая мозг от токсичных белков." 
        />
        <PhaseCard 
          title="Быстрый сон" 
          time="REM Фаза" 
          color="bg-purple-500" 
          text="Парадоксальный сон: тело полностью парализовано (атония), но мозг работает интенсивнее, чем при бодрствовании. Именно здесь возникают яркие сновидения. Происходит эмоциональная перезагрузка: мозг анализирует стрессовые ситуации, архивирует важные воспоминания и удаляет ненужные ассоциации, подготавливая психику к новому дню." 
        />
      </div>


        <BrainCleaning />
        
        <div id="ritms">
          <CircadianSection />
        </div>

       <footer className="mt-40 py-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] tracking-[0.2em] uppercase font-mono">
        {/* Левая часть: Копирайт */}
        <span className="opacity-40 whitespace-nowrap">
          Biology Research Unit &copy; 2026
        </span>

        {/* Центральная часть: Посвящение */}
        <span className="text-indigo-400/80 font-bold tracking-[0.4em] animate-pulse">
          for Ayazhan apai
        </span>

        {/* Правая часть: Авторство */}
        <div className="flex items-center gap-2 text-right">
          <span className="opacity-40">Developed by</span>
          <span className="text-white font-bold border-b border-indigo-500 pb-0.5 transition-all hover:text-indigo-400">
            Zhenis Magzhan
          </span>
          <span className="opacity-70 ml-2 tracking-normal">
            — Computer Science, FullStack 
          </span>
        </div>
      </footer>

      </div>
    </div>
  );
}
