import React from 'react'
import { Photo } from '../Photo'
import { useQuery, gql } from '@apollo/client'

const GET_PHOTOS = gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      userId
      likes
    }
  }
`;



export const ListOfPhotos = () => {
  const { loading, error, data = {} } = useQuery(GET_PHOTOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
        {
            data.photos.map(element => (
              <>
                <Photo />
                {element.id}
              </>
            ))
        }
    </div>
  )
}
