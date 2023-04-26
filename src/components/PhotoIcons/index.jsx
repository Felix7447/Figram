import React, { useState } from 'react'
import { MdOutlineFavoriteBorder, 
    MdOutlineFavorite, 
    MdOutlineModeComment, 
    MdShare } from "react-icons/md";
import { Container } from './styles';

export const PhotoIcons = ({ id, handleLike }) => {
  const size = '28px'
  const [liked, setLiked] = useState(false)
  const handleClick = () => {
    handleLike(id)
  }

  return (
    <Container>
      <button onClick={handleClick}>
        {
          liked ? <MdOutlineFavorite size={size}/> : <MdOutlineFavoriteBorder size={size}/>
        }
      </button>
      <MdOutlineModeComment size={size} />
      <MdShare size={size} />
    </Container>
  )
}
