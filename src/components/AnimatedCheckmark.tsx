"use client"

import { motion } from "motion/react"

export default function AnimatedCheckmark() {
  return (
    <motion.div
      className="from-gradient-start to-gradient-end grid size-20 items-center justify-items-center rounded-full bg-linear-[140deg]"
      initial={{ scale: 0.6, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <svg
        width="28"
        height="21"
        viewBox="0 0 28 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M2 9.91991L10.0801 18L26.0801 2"
          stroke="white"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 0.2, delay: 0.2 }}
        />
      </svg>
    </motion.div>
  )
}
