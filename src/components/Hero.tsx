import React from "react";
import { motion } from "motion/react";
import { Download, ArrowDown, Terminal } from "lucide-react";
import resumeData from "../data/resume.json";
import { ScrambleText } from "./ScrambleText";

export const Hero: React.FC = () => {
  const { basics } = resumeData;

  const handleScrollToExperience = () => {
    document
      .getElementById("experience")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-6 sm:px-12 lg:px-24"
    >
      <div className="max-w-5xl mx-auto w-full z-10 flex flex-col items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6 font-mono"
        >
          <Terminal className="w-4 h-4 text-indigo-400" />
          <ScrambleText text="Available for Opportunities" delay={0.5} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.1] bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-indigo-400"
        >
          <ScrambleText text={basics.name} delay={0.8} />
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg text-slate-400 mb-8 max-w-3xl leading-relaxed"
        >
          {basics.summary.split("\n")[0]}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-xl sm:text-2xl lg:text-3xl text-slate-300 font-light mb-12 max-w-3xl font-mono border-l-2 border-indigo-500/50 pl-6 relative"
        >
          <span className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
          <ScrambleText text={basics.title} delay={1.0} />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
            <button
              onClick={handleScrollToExperience}
              className="relative px-6 py-3 bg-slate-950 text-white font-medium rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 flex items-center gap-2 border border-slate-800 hover:border-indigo-500/50"
            >
              <span className="relative z-10">View Experience</span>
              <ArrowDown className="w-4 h-4 relative z-10 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>

          <a
            href="/resume.txt"
            download="Sahil_Chhabra_Resume.txt"
            className="group px-6 py-3 bg-slate-800/30 hover:bg-slate-800/80 text-white font-medium rounded-full border border-slate-700 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 backdrop-blur-sm"
          >
            <span>Download Resume</span>
            <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1 h-2 bg-indigo-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};
