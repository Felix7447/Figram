import React from 'react'
import { gql } from '@apollo/client'
import { useSignMutation } from '../hooks/useSignMutation'
import { SingupFormComponent } from '../components/SingUpFormComponent'
import { Loading } from '../components/Loading'
import { ErrorMessage } from '../components/ErrorMessage'

const SIGNUP_MUTATION = gql`
  mutation userSignup($credentials: UserCredentials!) {
    signup(input: $credentials) 
  }
`

export const RegisterMutation = ({ children }) => {
  const { handleSubmit, loading, error } = useSignMutation(SIGNUP_MUTATION)

  if (loading) return <Loading size='48px' height='60vh'/>
  if (error) return <ErrorMessage title={error.name} height='60vh' path='/signup'>{error.message}</ErrorMessage>

  return <SingupFormComponent submit={handleSubmit}>{children}</SingupFormComponent>
}
