import React from 'react'
import { Div } from './styles'

export const PhotoDescription = ({ userId, categoryId}) => {
  return (
    <Div>
        <b>User-{userId}</b> says: <i>This is my photo from Category {categoryId}</i>
    </Div>
  )
}
