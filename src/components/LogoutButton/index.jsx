import React, { useContext } from 'react'
import { Button } from '../Button'
import { Context } from '../../context/context'
import { Div } from './styles'

export const LogoutButton = () => {
    const { removeAuth } = useContext(Context)
  const logout = (event) => {
    event.preventDefault()
    removeAuth()
  }
  return (
    <Div>
        <Button type='submit' onClick={logout} width={'80%'}>
            <b>Log out</b>
        </Button>
    </Div>
  )
}
