import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { PhotoComponent } from '../components/PhotoComponent'
import { Loading } from '../components/Loading'

const GET_SINGLE_PHOTO = gql`
  query getPhoto($photoId: ID!) {
    photo(id: $photoId) {
      id,
      categoryId,
      src,
      likes,
      liked,
      userId
    }
  }
`

export const PhotoWithQuery = () => {
  const id = window.location.pathname.slice(8)
  const { loading, error, data = {} } = useQuery(GET_SINGLE_PHOTO, 
    {
      variables: { photoId: id }
    })

  if (loading) return <Loading />
  if (error) return "Error"

  const { photo } = data;
  console.log(photo);
  return <PhotoComponent {...photo} />
}
