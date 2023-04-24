import React from 'react'
import { Header } from './styles'

export const Title = ({ children, align, color, size }) => {
  return (
    <Header 
      align={align} 
      color={color}
      size={size}
    >{children}</Header>
  )
}
