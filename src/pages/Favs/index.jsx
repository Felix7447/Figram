import React from 'react'
import { Layout } from '../../components/Layout'
import { WithFavs } from '../../container/withFavs'
import { Title } from "../../components/Title"

export const Favs = () => {
  return (
    <Layout title='Favorites' content='Your favorite figram photos'>
        <Title align={'center'} marginTop={'0.3em'}>Favs</Title>
        <WithFavs />
    </Layout>
  )
}
