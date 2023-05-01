import React from 'react'
import { PhotoComponent } from '../PhotoComponent';
import { ListOfPhotos } from './styles';

export const ListOfPhotosComponent = ({ data }) => {
  return (
    <ListOfPhotos>
      {
        data.map(element => (
          <PhotoComponent key={`photo-${element.id}`} {...element}/>
        ))
      }
    </ListOfPhotos>
  )
}
