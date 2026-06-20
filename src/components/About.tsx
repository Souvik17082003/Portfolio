"use client"

import { motion } from "framer-motion"
import { User, Users, Target } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-16 px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-[52rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 text-sm font-bold font-mono tracking-widest text-violet-600 dark:text-violet-400 mb-2">
            <User className="w-3.5 h-3.5" /> ABOUT
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-6">
            A bit about me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-2 border border-neutral-200 dark:border-white/10 p-6 rounded-xl bg-white/50 dark:bg-transparent hover:shadow-lg dark:hover:border-white/20 transition-all duration-300"
          >
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
              I&apos;m a passionate backend developer with a strong foundation in Java and the Spring ecosystem. 
              Currently completing my B.Tech in Computer Science & Engineering from Budge Budge Institute of Technology, 
              I enjoy building applications that solve real-world problems.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
              My interest lies in designing secure, efficient, and scalable backend systems. I have hands-on experience 
              with Spring Boot, Spring Security, JPA/Hibernate, and relational databases. I believe in writing clean, 
              decoupled code that follows best practices and is built to last.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              When I&apos;m not coding, I&apos;m actively involved with the{" "}
              <span className="text-violet-600 dark:text-violet-400 font-semibold">College Coders Community</span>, 
              collaborating with fellow developers and contributing to peer-driven learning.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <div className="border border-neutral-200 dark:border-white/10 p-5 rounded-xl bg-white/50 dark:bg-transparent hover:shadow-lg dark:hover:border-white/20 transition-all duration-300">
              <Users className="w-5 h-5 text-violet-500 mb-3" />
              <div className="text-sm font-semibold text-black dark:text-white mb-1">Community</div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Active member of College Coders Community</p>
            </div>
            <div className="border border-neutral-200 dark:border-white/10 p-5 rounded-xl bg-white/50 dark:bg-transparent hover:shadow-lg dark:hover:border-white/20 transition-all duration-300">
              <Target className="w-5 h-5 text-blue-500 mb-3" />
              <div className="text-sm font-semibold text-black dark:text-white mb-1">Focus</div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Backend systems, REST APIs, Microservices</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
