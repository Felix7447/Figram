import React from 'react'
import { Profile } from './styles'
import { UserAccount } from '../UserAccount'
import { useGetFavs } from '../../hooks/useGetFavs'
import { InfoAccount } from '../InfoAccount'

export const UserProfile = () => {
  const { data } = useGetFavs()
  return (
    <Profile>
        <UserAccount/>
        <InfoAccount title={'Liked Photos'} data={data?.favs.length}/>
        <InfoAccount title={'Fav category'} data={data?.favs[0]?.categoryId}/>
    </Profile>
  )
}
