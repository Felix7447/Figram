import React from 'react'
import { gql } from '@apollo/client'
import { LoginFormComponent } from '../components/LoginFormComponent'
import { useSignMutation } from '../hooks/useSignMutation'
import { Loading } from '../components/Loading'
import { ErrorMessage } from '../components/ErrorMessage'

const LOGIN_MUTATION = gql`
  mutation userLogin($credentials: UserCredentials!) {
    login(input: $credentials)
  }
`

export const LoginMutation = ({ children }) => {
  const { handleSubmit, loading, error } = useSignMutation(LOGIN_MUTATION)

  if (loading) return <Loading size='48px' height='60vh'/>
  if (error) return <ErrorMessage title={error.name} height='60vh' path="/login">{error.message}</ErrorMessage>

  return <LoginFormComponent submit={handleSubmit}>{children}</LoginFormComponent>
}
