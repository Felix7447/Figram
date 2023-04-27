import React from 'react'
import { ButtonStyles } from './styles'

export const Button = ({ children, onClick, width }) => {
  return <ButtonStyles onClick={onClick} width={width}>{children}</ButtonStyles>
}
