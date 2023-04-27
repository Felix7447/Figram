import React from 'react'
import { MdAccountCircle } from "react-icons/md"
import { Div } from './styles'


export const UserAccount = () => {
  return (
    <Div>
        <MdAccountCircle size={'48px'}/>
        <h4>Username</h4>
    </Div>
  )
}
