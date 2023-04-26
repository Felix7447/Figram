import React, { useRef } from 'react'
import { Container, Input, Button } from './styles'

export const LoginFormComponent = ({ children, submit }) => {
  const email = useRef(null)
  const password = useRef(null)
  
  const handleSubmit = (event) => {
    event.preventDefault()
    let credentials = {
      email: email.current.value,
      password: password.current.value
    }
    submit(credentials)
  }

  return (
    <Container onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <Input id='email' ref={email} type="email" placeholder='example@mail.com' />
      <label htmlFor="password">Password</label>
      <Input id='password' ref={password} type="password" placeholder='***********' />
      <Button type='submit'>Log in</Button>
      {children}
    </Container>
  )
}
