'use client'

import { Card } from '@mui/material'
import { motion } from 'framer-motion'
import { MouseEventHandler } from 'react'

const MotionCard = (props: {
  children: React.ReactNode
  index?: number
  onClick?: MouseEventHandler<HTMLDivElement> | undefined
}) => {
  const { index, children, onClick } = props
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }
  return (
    <Card
      onClick={onClick}
      sx={{ maxWidth: '100%' }}
      component={motion.div}
      initial='hidden'
      variants={variants}
      animate='visible'
      transition={{
        delay: index ? index * 0.25 : 1,
        ease: 'easeInOut',
        duration: '.5',
      }}
      viewport={{ amount: 0 }}
    >
      {children}
    </Card>
  )
}

export default MotionCard
