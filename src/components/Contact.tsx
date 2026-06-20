"use client"

import { Mail, Github, Linkedin, Sun, Moon } from "lucide-react"
import { useTheme } from "../context/ThemeContext"

export default function Contact() {
  const { theme, toggleTheme } = useTheme()

  const contactLinks = [
    {
      platform: "Email",
      value: "sr4801851@gmail.com",
      href: "mailto:sr4801851@gmail.com",
      icon: <Mail className="w-4 h-4" />
    },
    {
      platform: "LinkedIn",
      value: "linkedin.com/in/souvik-roy-5bb9222b1",
      href: "https://www.linkedin.com/in/souvik-roy-5bb9222b1/",
      icon: <Linkedin className="w-4 h-4" />
    },
    {
      platform: "GitHub",
      value: "github.com/Souvik17082003",
      href: "https://github.com/Souvik17082003/",
      icon: <Github className="w-4 h-4" />
    }
  ]

  return (
    <section className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-white/80 dark:bg-[#0d0d0d]/80 backdrop-blur-xl border border-neutral-200 dark:border-white/10 rounded-2xl py-2.5 px-5 shadow-lg shadow-black/5 dark:shadow-black/20 transition-colors duration-300">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            {contactLinks.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-all duration-200 p-2 hover:bg-neutral-100 dark:hover:bg-white/5 rounded-lg"
                title={contact.platform}
              >
                {contact.icon}
              </a>
            ))}
          </div>
          <div className="w-px h-5 bg-neutral-200 dark:bg-white/10" />
          <button
            onClick={toggleTheme}
            className="text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-all duration-200 p-2 hover:bg-neutral-100 dark:hover:bg-white/5 rounded-lg"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </section>
  )
}
