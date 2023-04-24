import React, { useEffect } from 'react'
import { NavigationBar, Anchor, Button } from './styles'
import { MdHome, MdOutlineFavorite, MdPerson2 } from "react-icons/md"

export const NavBar = ({ size = '24px'}) => {
  const currentPath = window.location.pathname;
  
  useEffect(() => {
    const navButtons = document.querySelectorAll('#navButton');
    navButtons.forEach(element => {
      let path = element.getAttribute("href")
      if (path === currentPath) {
        element.setAttribute("aria-current", true)
      }
    })
  }, [window])

  return (
    <NavigationBar>
      <Anchor id='navButton' to='/'>
        <Button>
            <MdHome size={size}/>
        </Button>
      </Anchor>
      <Anchor id='navButton' to='/favs'>
        <Button>
            <MdOutlineFavorite size={size}/>
        </Button>
      </Anchor>
      <Anchor id='navButton' to='/account'>
        <Button>
            <MdPerson2 size={size}/> 
        </Button>
      </Anchor>
    </NavigationBar>
  )
}
