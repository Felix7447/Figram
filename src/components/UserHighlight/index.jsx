import React from 'react'
import { Div } from './styles'

export const UserHighlight = ({ title, data, def }) => {
  return (
    <Div>
        {
          data ? 
            <h3>{data}</h3>
            : <h3>{def}</h3>
        }
        <h4>{title}</h4>
    </Div>
  )
}
