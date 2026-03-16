import React from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { DecodeTitle } from "./DecodeTitle";

export const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative py-24 px-6 sm:px-12 lg:px-24 bg-slate-950/50"
    >
      <div className="max-w-5xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            <DecodeTitle text="Get In Touch" />
          </h2>
          <div className="w-20 h-1 bg-indigo-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 group">
              {/* Glowing animated border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-500 blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow" style={{ animationDuration: '8s' }} />
              
              {/* Circuit-like ring */}
              <div className="absolute inset-[-4px] rounded-full border-2 border-indigo-500/30 border-dashed animate-[spin_10s_linear_reverse_infinite]" />
              
              {/* Image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-900 bg-slate-800">
                <img 
                  src={`${import.meta.env.BASE_URL}me.jpeg`}
                  alt="Sahil Chhabra" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback to a placeholder if me.jpeg is not uploaded yet or is empty
                    e.currentTarget.src = "https://ui-avatars.com/api/?name=Sahil+Chhabra&background=1e1b4b&color=818cf8&size=512";
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/60 rounded-2xl p-8 hover:bg-slate-800/50 transition-colors group">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <a 
                  href="mailto:Sahilchhabra2712@gmail.com" 
                  className="flex items-center gap-4 text-slate-300 hover:text-indigo-400 transition-colors group/link"
                >
                  <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center group-hover/link:bg-indigo-500/20 transition-colors border border-indigo-500/20">
                    <Mail className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium mb-1">Email</p>
                    <p className="text-lg font-mono">Sahilchhabra2712@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                    <MapPin className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium mb-1">Location</p>
                    <p className="text-lg">New Delhi, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-800/60">
                <p className="text-sm text-slate-500 font-medium mb-4">Connect with me</p>
                <div className="flex gap-4">
                  <a 
                    href="https://linkedin.com/in/sahil-chhabra27" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-indigo-500 hover:text-white transition-all transform hover:-translate-y-1"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
