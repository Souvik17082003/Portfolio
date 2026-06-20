"use client"

import { motion } from "framer-motion"
import {
  SiOpenjdk, SiSpringboot, SiSpring, SiSpringsecurity, SiMysql, SiPostgresql,
  SiHibernate, SiApachemaven, SiGradle, SiGit, SiGithub,
  SiHtml5, SiCss
} from "react-icons/si"

const categories = [
  {
    name: "Languages",
    items: [
      { name: "Java", icon: SiOpenjdk, color: "#ED8B00" },
      { name: "SQL", icon: SiMysql, color: "#4479A1" },
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss, color: "#1572B6" },
    ]
  },
  {
    name: "Frameworks",
    items: [
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "Spring MVC", icon: SiSpring, color: "#6DB33F" },
      { name: "Spring Security", icon: SiSpringsecurity, color: "#6DB33F" },
      { name: "Spring Data JPA", icon: SiSpring, color: "#6DB33F" },
    ]
  },
  {
    name: "Tools & Libraries",
    items: [
      { name: "Hibernate", icon: SiHibernate, color: "#59666C" },
      { name: "Maven", icon: SiApachemaven, color: "#C71A36" },
      { name: "Gradle", icon: SiGradle, color: "#02303A" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
    ]
  },
  {
    name: "Databases",
    items: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    ]
  },
]

function SkillCard({ name, icon: Icon, color, index }: { name: string; icon: React.ElementType; color: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.04, duration: 0.3 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="group relative flex items-center gap-2.5 px-4 py-2.5 bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-white/10 rounded-xl hover:border-violet-300 dark:hover:border-violet-700 transition-all duration-200 cursor-default shadow-sm hover:shadow-md"
    >
      <Icon
        className="w-5 h-5 transition-colors duration-200"
        style={{ color }}
      />
      <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
        {name}
      </span>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-[52rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-xs font-bold font-mono tracking-widest text-violet-600 dark:text-violet-400 mb-2">
            SKILLS
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-10">
            What I work with
          </h2>
        </motion.div>

        <div className="space-y-8">
          {categories.map((cat, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
            >
              <div className="text-xs font-semibold text-neutral-400 dark:text-neutral-600 mb-3 uppercase tracking-[0.15em]">
                {cat.name}
              </div>
              <div className="flex flex-wrap gap-2.5">
                {cat.items.map((item, idx) => (
                  <SkillCard key={idx} {...item} index={idx} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
