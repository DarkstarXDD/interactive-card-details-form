"use client"

import { motion } from "motion/react"

export default function LoadingCircleSpinner() {
  return (
    <motion.div
      className="border-foreground-muted border-t-primary-foreground size-5 rounded-full border-2"
      animate={{ rotate: 360 }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  )
}
