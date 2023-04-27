import React from 'react'
import { Layout } from '../../components/Layout'
import { UserProfile } from '../../components/UserProfile'
import { FavsWithOverlay } from '../../components/FavsWithOverlay'
import { LogoutButton } from '../../components/LogoutButton'


export const Account = () => {
  
  return (
    <Layout>
        <UserProfile />
        <FavsWithOverlay />
        <LogoutButton/>
    </Layout>
  )
}
