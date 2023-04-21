import React from 'react'
import { NavigationBar, Anchor, Button } from './styles'
import { MdHome, MdOutlineFavorite, MdPerson2 } from "react-icons/md"

export const NavBar = ({ size = '24px'}) => {
  return (
    <NavigationBar>
      <Anchor to='/'>
        <Button>
            <MdHome size={size}/>
        </Button>
      </Anchor>
      <Anchor to='/favs'>
        <Button>
            <MdOutlineFavorite size={size}/>
        </Button>
      </Anchor>
      <Anchor to='/account'>
        <Button>
            <MdPerson2 size={size}/> 
        </Button>
      </Anchor>
    </NavigationBar>
  )
}
