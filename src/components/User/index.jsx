import React from 'react'
import { Container, Span } from './styles'
import { MdAccountCircle } from "react-icons/md"

export const User = ({userId, size}) => {
  return (
    <Container>
        <MdAccountCircle size={size} />
        <Span>User-{userId}</Span>
    </Container>
  )
}
