import React from 'react'
import { Layout } from '../../components/Layout'
import { Title } from '../../components/Title'
import { LoginMutation } from '../../container/LoginMutation'
import { Link } from 'react-router-dom'

export const LoginPage = () => {
  return (
    <Layout title='Log In' content='Log in to save your favorite photos'>
        <Title align={'center'} size={'38px'}>Login</Title>
        <LoginMutation >
            <p>Don't have an account? Please<Link to='/signup'> <i>Sign Up!</i> </Link></p>
        </LoginMutation>
    </Layout>
  )
}
