import React from 'react'
import { Photo } from '../Photo'
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
