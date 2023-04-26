import React, { useRef } from 'react'
import { Container, Input, Button } from './styles'

export const SingupFormComponent = ({ children, submit }) => {
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
      <label htmlFor="user">Username</label>
      <Input id='user' type="text" />
      <label htmlFor="email">Email</label>
      <Input ref={email} id='email' type="email" />
      <label htmlFor="password">Password</label>
      <Input ref={password} id='password' type="password" />
      <label htmlFor="repeatPassword">Repeat Password</label>
      <Input id='repeatPassword' type="password" />
      <Button type='submit'>Sign Up</Button>
      {children}
    </Container>
  )
}
