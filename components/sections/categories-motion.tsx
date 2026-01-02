"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function CategoriesMotion({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
    >
      {children}
    </motion.div>
  )
}
