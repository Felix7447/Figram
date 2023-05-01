import React from 'react'
import { Layout } from '../../components/Layout'
import { PhotoWithQuery } from '../../container/withSinglePhoto'

export const Detail = () => {
  return (
    <Layout title='Photos'>
        <PhotoWithQuery />
    </Layout>
  )
}
