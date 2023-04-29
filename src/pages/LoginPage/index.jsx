import React from 'react'
import { Layout } from '../../components/Layout'
import { Title } from '../../components/Title'
import { LoginMutation } from '../../container/LoginMutation'
import { Link } from 'react-router-dom'
import { BackButton } from '../../components/BackButton'

export const LoginPage = () => {
  return (
    <Layout>
        <Title align={'center'} size={'38px'}>Login</Title>
        <LoginMutation >
            <p>Don't have an account? Please<Link to='/signup'> <i>Sign Up!</i> </Link></p>
        </LoginMutation>
    </Layout>
  )
}
