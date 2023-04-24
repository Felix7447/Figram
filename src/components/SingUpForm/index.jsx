import React from 'react'
import { Container, Input, Button } from './styles'

export const SingupForm = ({ children }) => {
  return (
    <Container>
      <label htmlFor="user">Username</label>
      <Input id='user' type="text" />
      <label htmlFor="email">Email</label>
      <Input id='email' type="email" />
      <label htmlFor="password">Password</label>
      <Input id='password' type="password" />
      <label htmlFor="password">Repeat Password</label>
      <Input id='password' type="password" />
      <Button type='submit'>Sign Up</Button>
      {children}
    </Container>
  )
}
