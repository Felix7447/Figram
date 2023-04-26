import React from 'react'
import { Layout } from '../../components/Layout'
import { WithFavs } from '../../container/withFavs'

export const Favs = () => {
  return (
    <Layout>
        <h1>Favs</h1>
        <WithFavs />
    </Layout>
  )
}
