import React from 'react'
import { Div } from './styles'

export const InfoAccount = ({ title, data }) => {
  return (
    <Div>
        <h3>{data}</h3>
        <h4>{title}</h4>
    </Div>
  )
}
