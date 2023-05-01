import React from 'react'
import { useGetData } from '../../hooks/useGetData';
import { Story } from "../Story"
import { Nav } from './styles';
import { endpoints } from '../../config/config'

export const ListOfStories = () => {
  const { data = [] } = useGetData(endpoints.categories);
  return (
    <Nav>
      {
        data.length > 0 ?
          data.map(element => (
            <Story key={element.id} {...element} />
          ))
          : <Story/>
      }
    </Nav>
  )
}
