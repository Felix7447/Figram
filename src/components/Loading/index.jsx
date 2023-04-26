import React from 'react'
import { MdOutlineMotionPhotosOn } from "react-icons/md"
import { Figure } from './styles'

export const Loading = ({size = '32px', height}) => {
  return (
    <Figure height={height}>
        <MdOutlineMotionPhotosOn size={size} />
    </Figure>
  )
}
