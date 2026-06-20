"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 px-6 md:px-12 border-t border-neutral-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-[52rem] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-400 dark:text-neutral-500">
          &copy; {year} Souvik Roy
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Souvik17082003"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/souvik-roy-5bb9222b1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:sr4801851@gmail.com"
            className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
