"use client"

import { motion } from "framer-motion"

interface SectionHeaderProps {
  title: string
  description?: string
  className?: string
}

export function SectionHeader({ title, description, className = "" }: SectionHeaderProps) {
  return (
    <div className={`mb-8 ${className}`}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 relative inline-block">
          {title}
          <span className="absolute -bottom-1 left-0 w-1/3 h-1 bg-[#22C5C5] rounded-full"></span>
        </h2>
        {description && <p className="text-slate-500 max-w-2xl mt-2">{description}</p>}
      </motion.div>
    </div>
  )
}
