import React from 'react'
import { Div } from './styles'
import { MdError } from "react-icons/md"
import { BackButton } from '../BackButton'

export const ErrorMessage = ({ title, height, path, children }) => {
  return (
    <Div height={height}>
        <MdError size={'48px'} color='#ED2B2A'/>
        {title && <h2>{title}</h2>}
        {children}
        {path && <BackButton path={path} />}
    </Div>
  )
}
