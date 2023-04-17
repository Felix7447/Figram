import React from 'react'
import { Anchor } from './styles'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg'

export const Story = ({ name = 'Loading...', cover = DEFAULT_IMAGE, path = '/' }) => {
  return (
      <Anchor href={path}>
        <img src={cover} alt={name} />
        <p>{name}</p>
      </Anchor>
  )
}
