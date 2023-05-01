import React from 'react'
import { Layout } from '../../components/Layout'
import { WarningMessage } from '../../components/WarningMessage'
import { Link } from 'react-router-dom'

export const NotRegisteredUser = () => {
  return (
    <Layout title='Not Registered User'>
      <WarningMessage 
        title="Ups! You are not a registered user"
      >
        <p>Please go to the <Link to='/account'> <i>Login Page</i> </Link> to see this content</p>
        <p>Don't have an account? Please<Link to='/signup'> <i>Sign Up!</i> </Link></p>
      </WarningMessage>
    </Layout>
  )
}
