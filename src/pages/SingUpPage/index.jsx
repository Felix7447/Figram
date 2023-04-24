import React from 'react'
import { Layout } from '../../components/Layout'
import { Title } from '../../components/Title'
import { SingupForm } from '../../components/SingUpForm'
import { Link } from 'react-router-dom'

export const SignupPage = () => {
  return (
    <Layout>
        <Title align={'center'} size={'38px'}>Sign Up</Title>
        <SingupForm >
          <p>Do you have an account? Please<Link to='/account'> <i>Log in!</i> </Link></p>
        </SingupForm>
    </Layout>
  )
}