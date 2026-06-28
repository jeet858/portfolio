"use client"

import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

const experiences = [
  {
    title: "Founding Engineer",
    company: "Due Draft",
    period: "03/2026 - 07/2026",
    description:
      "Led end-to-end design, architecture, and development of an AI-native legal technology platform. Built scalable backend services, AI-powered workflows with LLMs, RAG, and document processing pipelines. Owned the complete SDLC including multi-tenant systems with RBAC and cloud infrastructure.",
  },
  {
    title: "Junior Full-Stack Developer",
    company: "Quranium",
    period: "08/2024 - Present",
    description:
      "Led development and optimization of scalable web and mobile applications using Next.js, Nest.js, Prisma, Flutter, and React Native. Improved application performance by 20%. Built reusable UI components, secure authentication systems, and optimized SSR strategies.",
  },
  {
    title: "Full Stack Developer",
    company: "Mindstar Technology Solutions Pvt. Ltd.",
    period: "07/2023 - 08/2024",
    description:
      "Developed and maintained websites and mobile applications. Contributed to adopting modern development tools and workflows, reducing feature implementation time by 20%. Integrated third-party APIs contributing to 15% customer base expansion.",
  },
]

export function Timeline() {
  const isMobile = useMobile()

  return (
    <div
      className={`space-y-12 relative ${
        !isMobile
          ? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-zinc-700 before:h-full before:z-0"
          : ""
      }`}
    >
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative z-10 flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
          <motion.div
            className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-purple-500/50">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

              <div className="relative">
                <h3 className="text-xl font-bold">{experience.title}</h3>
                <div className="text-zinc-400 mb-4">
                  {experience.company} | {experience.period}
                </div>
                <p className="text-zinc-300">{experience.description}</p>
              </div>
            </div>
          </motion.div>

          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <motion.div
                className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 z-10 flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
