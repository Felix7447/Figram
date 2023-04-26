import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { Loading } from "../components/Loading"
import { ErrorMessage } from "../components/ErrorMessage"
import { ListOfFavs } from '../components/ListOfFavs'

const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }     
`

export const WithFavs = () => {
  const { data, loading, error } = useQuery(GET_FAVS)

  if (loading) return <Loading size='48px' height='60vh' />
  if (error) return <ErrorMessage title={error.name} height='60vh' >{error.message}</ErrorMessage>
  // console.log(data)
  return (
    <ListOfFavs {...data} />
  )
}
