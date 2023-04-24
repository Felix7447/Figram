import React from 'react'
import { Layout } from '../../components/Layout'
import { Title } from '../../components/Title'
import { LoginForm } from '../../components/LoginForm'
import { Link } from 'react-router-dom'

export const LoginPage = () => {
  return (
    <Layout>
        <Title align={'center'} size={'38px'}>Login</Title>
        <LoginForm login={true} >
            <p>Don't have an account? Please<Link to='/singup'> <i>Sign Up!</i> </Link></p>
        </LoginForm>
    </Layout>
  )
}
