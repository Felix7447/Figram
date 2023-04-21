import React from 'react'
import { Post, Anchor, Img, Span } from './styles'
import { User } from '../User'
import { PhotoIcons } from '../PhotoIcons'
import { PhotoDescription } from '../PhotoDescription'
import { Loading } from '../Loading'
import { useNearScreen } from '../../hooks/useNearScreen'

const DEFAULT_IMAGE = "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png"

export const Photo = ({ id, src = DEFAULT_IMAGE, likes, categoryId, userId }) => {
  const { show, element } = useNearScreen()
  
  return (
    <Post>
      <User userId={userId} size={'22px'}/>
      <Anchor ref={element} href={`detail/${id}`}>
        {show ?
         <Img src={src} alt={`photo-${id}`} />
          : <Loading />}
      </Anchor>
      <PhotoIcons/>
      <Span>{likes} likes</Span>
      <PhotoDescription userId={userId} categoryId={categoryId} />
    </Post>
  )
}
