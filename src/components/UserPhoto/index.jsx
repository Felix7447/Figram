import React from 'react'
import { Container, Span } from './styles'
import { MdAccountCircle } from "react-icons/md"

export const UserPhoto = ({userId, size}) => {
  return (
    <Container>
        <MdAccountCircle size={size} />
        {
          userId ? 
          <Span>User-{userId}</Span>
          : <Span>User</Span>
        }
    </Container>
  )
}
