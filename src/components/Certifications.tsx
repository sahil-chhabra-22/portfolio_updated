import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import resumeData from "../data/resume.json";
import { SpotlightCard } from "./SpotlightCard";
import { DecodeTitle } from "./DecodeTitle";
import { HoverScrambleText } from "./HoverScrambleText";

export const Certifications: React.FC = () => {
  const { certifications } = resumeData;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="certifications" className="relative py-24 px-6 sm:px-12 lg:px-24 bg-slate-950/50">
      <div className="max-w-5xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            <DecodeTitle text="Certifications" />
          </h2>
          <div className="w-20 h-1 bg-indigo-500 rounded-full" />
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedImage(cert.image)}
              className="cursor-pointer"
            >
              <SpotlightCard className="p-5 flex items-center gap-4 group h-full">
                <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/20 transition-colors">
                  <svg
                    className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="text-slate-200 font-medium leading-snug group-hover:text-white transition-colors">
                  <HoverScrambleText text={cert.name} />
                </span>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors p-2"
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={selectedImage.startsWith('http') ? selectedImage : `${import.meta.env.BASE_URL}${selectedImage.replace(new RegExp('^/'), '')}`}
                alt="Certificate"
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
