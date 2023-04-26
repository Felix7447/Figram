import React from 'react'
import { Photo } from '../../container/LikeMutation'
import { ListOfPhotos } from './styles';

export const ListOfPhotosComponent = ({ data }) => {
  console.log(data);
  return (
    <ListOfPhotos>
      {
        data.map(element => (
          <Photo key={`photo-${element.id}`} {...element}/>
        ))
      }
    </ListOfPhotos>
  )
}
