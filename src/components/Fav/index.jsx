import React from 'react'
import { Img } from "./styles"
import { Link } from 'react-router-dom'

export const Fav = ({id, src}) => {
  return (
    <Link to={`/detail/${id}`}>
      <Img src={src} alt={`fav-${id}`} />
    </Link>
  )
}
