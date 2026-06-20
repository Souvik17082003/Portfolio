"use client"

import { useEffect, useState } from "react"
import { Mail, Github, Linkedin, ChevronDown, Code2, Database, Shield } from 'lucide-react'
import { SiSpringboot, SiSpring, SiMysql } from "react-icons/si"
import { motion } from "framer-motion"

const roles = [
  "Java Developer",
  "Spring Boot Engineer",
  "Backend Architect",
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentRole.substring(0, displayText.length - 1)
              : currentRole.substring(0, displayText.length + 1)
          )
        },
        isDeleting ? 40 : 80
      )
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  return (
    <section className="relative min-h-screen flex items-center pt-16 pb-8 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[52rem] mx-auto z-10 w-full">
        <div className="flex flex-col items-start gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex gap-6 items-center"
          >
            <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-2xl bg-gradient-to-br from-violet-500 to-blue-500 dark:from-violet-600 dark:to-blue-600 flex items-center justify-center text-2xl md:text-3xl font-bold text-white shadow-lg shadow-violet-500/20">
              SR
            </div>
            <div className="flex flex-col gap-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xs font-bold font-mono tracking-[0.2em] text-violet-600 dark:text-violet-400"
              >
                AVAILABLE FOR OPPORTUNITIES
              </motion.div>
              <div>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-black dark:text-white">
                  Souvik Roy
                </h1>
                <div className="h-8 md:h-9 flex items-center">
                  <span className="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 font-mono">
                    {displayText}
                    <span className="animate-pulse ml-0.5 text-violet-500">|</span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full"
          >
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800">
                <Code2 className="w-3 h-3" /> Java & Spring
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                <Database className="w-3 h-3" /> SQL & JPA
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                <Shield className="w-3 h-3" /> Security
              </span>
            </div>

            <div className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl space-y-4">
              <p>
                I build secure, scalable backend systems with{" "}
                <TechBadge><SiSpringboot className="w-4 h-4 mr-1 text-[#6DB33F]" /> Spring Boot</TechBadge>,{" "}
                <TechBadge><SiSpring className="w-4 h-4 mr-1 text-[#6DB33F]" /> Spring Security</TechBadge>, and{" "}
                <TechBadge><SiMysql className="w-4 h-4 mr-1 text-[#4479A1]" /> SQL</TechBadge>.
              </p>
              <p>
                Passionate about designing <span className="font-semibold text-black dark:text-white">RESTful APIs</span> and{" "}
                <span className="font-semibold text-black dark:text-white">microservices</span> that are efficient, secure, and built to last.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="mailto:sr4801851@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-black dark:bg-white text-white dark:text-black font-medium hover:opacity-80 transition-all duration-200 shadow-lg shadow-black/10 dark:shadow-white/10"
            >
              <Mail className="w-4 h-4" />
              Email Me
            </a>
            <a
              href="https://github.com/Souvik17082003"
              target="_blank"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 font-medium hover:bg-neutral-200 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 transition-all duration-200"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/souvik-roy-5bb9222b1/"
              target="_blank"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 font-medium hover:bg-neutral-200 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 transition-all duration-200"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-5 h-5 text-neutral-400 animate-bounce" />
      </motion.div>
    </section>
  )
}

function TechBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 text-base font-semibold mx-0.5 align-middle border border-neutral-200 dark:border-neutral-800">
      {children}
    </span>
  )
}
