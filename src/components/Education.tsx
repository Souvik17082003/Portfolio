"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="py-16 px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-[52rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-xs font-bold font-mono tracking-widest text-violet-600 dark:text-violet-400 mb-2">
            EDUCATION
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-8">
            Academic Background
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative border border-neutral-200 dark:border-white/10 p-6 rounded-xl bg-white/50 dark:bg-transparent hover:shadow-lg dark:hover:border-white/20 transition-all duration-300"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5 text-violet-600 dark:text-violet-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-black dark:text-white">
                B.Tech in Computer Science & Engineering
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-1.5 text-sm text-neutral-500 dark:text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  Budge Budge Institute of Technology
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  2022 — 2026
                </span>
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-3 italic">
                Relevant coursework: Data Structures, Algorithms, Database Management Systems, Operating Systems, Computer Networks
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
