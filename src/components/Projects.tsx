"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink, ArrowUpRight, Shield, Users, Briefcase } from "lucide-react"

const projects = [
  {
    title: "Job Portal",
    description: "A full-featured job portal built with Spring Boot MVC, featuring secure authentication, role-based access control, and a complete admin dashboard for managing job postings.",
    icon: Briefcase,
    tags: ["Spring Boot", "Spring MVC", "Spring Security", "JPA", "MySQL"],
    repo: "https://github.com/Souvik17082003/Spring-Boot-MVC-Job-Portal-",
    link: null,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-[52rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-xs font-bold font-mono tracking-widest text-violet-600 dark:text-violet-400 mb-2">
            PROJECTS
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-8">
            Selected Work
          </h2>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative border border-neutral-200 dark:border-white/10 p-6 rounded-xl bg-white/50 dark:bg-transparent hover:shadow-lg dark:hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center shrink-0">
                  <project.icon className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="text-lg font-bold text-black dark:text-white">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-3 shrink-0">
                      {project.repo && (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                          title="View source code"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                          title="View live site"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, ti) => (
                      <span
                        key={ti}
                        className="text-xs px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 font-mono border border-neutral-200 dark:border-neutral-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-10"
        >
          <a
            href="https://github.com/Souvik17082003?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-100 dark:bg-neutral-900 text-sm font-medium text-neutral-900 dark:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 transition-all duration-200"
          >
            View All Projects
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
