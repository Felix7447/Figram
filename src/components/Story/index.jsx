import React from 'react'
import { Anchor } from './styles'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg'

 const StoryComponent = ({ name = 'Loading...', cover = DEFAULT_IMAGE, path = '/' }) => {
  return (
      <Anchor to={path}>
        <img src={cover} alt={name} />
        <p>{name}</p>
      </Anchor>
  )
}

export const Story = React.memo(StoryComponent)
