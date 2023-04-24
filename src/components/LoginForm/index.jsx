import React, { Children } from 'react'
import { Container, Input, Button } from './styles'

export const LoginForm = ({ children }) => {
  return (
    <Container>
      <label htmlFor="email">Email</label>
      <Input id='email' type="email" placeholder='example@mail.com' />
      <label htmlFor="password">Password</label>
      <Input id='password' type="password" placeholder='***********' />
      <Button type='submit'>Log in</Button>
      {children}
    </Container>
  )
}
