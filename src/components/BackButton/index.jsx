import React from 'react'
import { MdOutlineArrowBack } from "react-icons/md"
import { Anchor } from "./styles"

export const BackButton = ({ path }) => {
    return (
        <Anchor href={path}>
            <MdOutlineArrowBack size='38px' position='absolute' />
        </Anchor>
    )
}
