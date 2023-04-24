import React from 'react'
import { Div } from './styles'
import { MdPanTool } from "react-icons/md"

export const WarningMessage = ({ title, children}) => {
  return (
    <Div>
        <MdPanTool size={'48px'} color='#ED2B2A'/>
        {title && <h2>{title}</h2>}
        {children}
    </Div>
  )
}
