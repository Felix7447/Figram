import React from 'react'
import { MdFavoriteBorder } from "react-icons/md"
import { Div, Message } from './styles'

export const NoFavs = () => {
  return (
    <Div>
        <h2>No Favs</h2>
        <Message>Please like your favorite photos to see them here</Message>
        <MdFavoriteBorder color='#ED2B2A' size='48px'/>
    </Div>
  )
}
