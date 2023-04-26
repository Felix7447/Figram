import React from 'react'
import { Img } from "./styles"

export const Fav = ({id, src}) => {
  return (
    <Img src={src} alt={`fav-${id}`} />
  )
}
