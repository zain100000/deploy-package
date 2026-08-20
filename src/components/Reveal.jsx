import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Reveal({ children, delay = 0, y = 32, className = '' }) {
  const [shown, setShown] = useState(false)
  return (
    <motion.div
      className={`${className} ${shown ? 'in' : ''}`}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={() => setShown(true)}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
