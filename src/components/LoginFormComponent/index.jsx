import React, { useRef } from 'react'
import { Container, Input } from './styles'
import { Button } from '../Button'
import { useFormValidation } from '../../hooks/useFormValidation'

export const LoginFormComponent = ({ children, submit }) => {
  const { loginValidation } = useFormValidation()
  const email = useRef(null)
  const password = useRef(null)
  
  const handleSubmit = (event) => {
    event.preventDefault()
    loginValidation(email,password)
    let credentials = {
      email: email.current.value,
      password: password.current.value
    }
    submit(credentials)
  }

  return (
    <Container method='POST' onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <Input id='email' ref={email} type="email" placeholder='example@mail.com' />
      <label htmlFor="password">Password</label>
      <Input id='password' ref={password} type="password" placeholder='***********' />
      <Button type='submit'>Log in</Button>
      {children}
    </Container>
  )
}
