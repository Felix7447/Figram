import React from 'react'
import { NavigationBar, Anchor, Button } from './styles'
import { MdHome, MdOutlineFavorite, MdPerson2 } from "react-icons/md"

export const NavBar = ({ size = '24px'}) => {
  return (
    <NavigationBar>
      <Anchor href='/'>
        <Button>
            <MdHome size={size}/>
        </Button>
      </Anchor>
      <Anchor href='/favs'>
        <Button>
            <MdOutlineFavorite size={size}/>
        </Button>
      </Anchor>
      <Anchor href='/user'>
        <Button>
            <MdPerson2 size={size}/> 
        </Button>
      </Anchor>
    </NavigationBar>
  )
}
