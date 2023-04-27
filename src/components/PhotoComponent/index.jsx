import React, { useEffect, useState } from 'react'
import { Post, Anchor, Img } from './styles'
import { User } from '../User'
import { LikeMutation } from '../../container/LikeMutation'
import { PhotoDescription } from '../PhotoDescription'
import { Loading } from '../Loading'
import { useNearScreen } from '../../hooks/useNearScreen'

const DEFAULT_IMAGE = "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png"

export const PhotoComponent = ({ id, src = DEFAULT_IMAGE, likes = 0, liked, categoryId, userId }) => {
  const { show, element } = useNearScreen();
  const [location, setLocation] = useState(""); 
  
  useEffect(() => {
    const pathname = window.location.pathname;
    const basename = "detail"

    const selectLocation = () => {
      (!pathname.includes(basename)) ?
        setLocation(`${basename}/${id}`) 
        : setLocation("") 
    }

    selectLocation()
  }, [])

  return (
    <Post>
      <User userId={userId} size={'22px'}/>
      <Anchor ref={element} to={location}>
        {show ?
         <Img src={src} alt={`photo-${id}`} />
          : <Loading />}
      </Anchor>
      <LikeMutation id={id} likes={likes} liked={liked} />
      {userId && <PhotoDescription userId={userId} categoryId={categoryId} />}
    </Post>
  )
}
