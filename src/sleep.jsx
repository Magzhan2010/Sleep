import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Moon, Brain, HeartPulse } from "lucide-react";
import { motion } from "framer-motion";

export default function SleepBiologySite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-gray-800">
      {/* Header */}
      <header className="py-16 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-sky-600"
        >
          Сон и биология человека
        </motion.h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Почему сон жизненно важен для мозга, гормонов и восстановления организма
        </p>
        <Button className="mt-6 rounded-2xl px-6 py-5 text-lg shadow-lg">
          Узнать больше
        </Button>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 grid gap-8">
        {/* What is sleep */}
        <motion.div whileHover={{ scale: 1.02 }}>
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-sky-600 flex items-center gap-2">
                <Moon className="w-6 h-6" /> Что такое сон?
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Сон — это естественное физиологическое состояние, во время которого
                мозг отдыхает, а организм восстанавливает силы. Это ключевой процесс
                для здоровья человека.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Phases */}
        <motion.div whileHover={{ scale: 1.02 }}>
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-sky-600 flex items-center gap-2">
                <Brain className="w-6 h-6" /> Фазы сна
              </h2>
              <ul className="mt-3 list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <b>Медленный сон (NREM)</b> — восстановление тела и энергии.
                </li>
                <li>
                  <b>Быстрый сон (REM)</b> — активная работа мозга и сновидения.
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Why important */}
        <motion.div whileHover={{ scale: 1.02 }}>
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-sky-600 flex items-center gap-2">
                <HeartPulse className="w-6 h-6" /> Зачем нужен сон?
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Во сне укрепляется память, восстанавливаются клетки, регулируются
                гормоны и укрепляется иммунитет. Сон — основа нормальной работы
                организма.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Fact */}
        <motion.div whileHover={{ scale: 1.02 }}>
          <Card className="rounded-2xl shadow-md bg-sky-50">
            <CardContent className="p-6 text-center">
              <h2 className="text-2xl font-bold text-sky-700">Интересный факт</h2>
              <p className="mt-3 text-gray-700">
                Человек проводит примерно <b>1/3 своей жизни во сне</b> — это
                доказывает, насколько он важен.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </main>

      <footer className="mt-16 py-6 text-center text-gray-500">
        Проект по биологии | Тема: Сон 💤
      </footer>
    </div>
  );
}
