import React, { useState } from 'react'
import { MdOutlineFavoriteBorder, 
    MdOutlineFavorite, 
    MdOutlineModeComment, 
    MdShare } from "react-icons/md";
import { Container, Span } from './styles';

export const PhotoIcons = ({ id, handleLike, likes, liked }) => {
  const size = '28px'
  const [isLiked, setIsLiked] = useState(liked)

  const handleClick = () => {
    handleLike({ id }).then(({data}) => {
      const { likePhoto } = data
      setIsLiked(likePhoto.liked)
    })
  }

  return (
    <>
      <Container>
        <button onClick={handleClick}>
          {
            isLiked ? <MdOutlineFavorite size={size}/> : <MdOutlineFavoriteBorder size={size}/>
          }
        </button>
        <MdOutlineModeComment size={size} />
        <MdShare size={size} />
      </Container>
      <Span>{likes} likes</Span>
    </>
  )
}
