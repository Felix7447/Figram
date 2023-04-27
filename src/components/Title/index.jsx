import React from 'react'
import { Header } from './styles'

export const Title = ({ children, align, color, size, marginTop }) => {
  return (
    <Header 
      marginTop={marginTop}
      align={align} 
      color={color}
      size={size}
    >{children}</Header>
  )
}
