import React from 'react'
import { Link } from 'react-router-dom'
import { WithFavs } from '../../container/withFavs'
import { Div, Overlay } from './styles'
import { Button } from "../Button"

export const FavsWithOverlay = () => {
  return (
    <Div>
        <WithFavs />
        <Overlay />
        <Button width={'80%'}>
          <Link to="/favs"><b>Watch more...</b></Link>
        </Button>
    </Div>
  )
}
