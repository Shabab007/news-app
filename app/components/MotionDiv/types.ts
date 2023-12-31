import { MouseEventHandler } from 'react'

export type MotionCardProps = {
  children: React.ReactNode
  index?: number
  onClick?: MouseEventHandler<HTMLDivElement> | undefined
}
