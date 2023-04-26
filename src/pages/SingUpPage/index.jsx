import React from 'react'
import { Layout } from '../../components/Layout'
import { Title } from '../../components/Title'
import { Link } from 'react-router-dom'
import { RegisterMutation } from '../../container/RegisterMutation'

export const SignupPage = () => {
  return (
    <Layout>
        <Title align={'center'} size={'38px'}>Sign Up</Title>
        <RegisterMutation >
          <p>Do you have an account? Please<Link to='/account'> <i>Log in!</i> </Link></p>
        </RegisterMutation>
    </Layout>
  )
}