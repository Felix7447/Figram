import React from 'react'
import { Profile } from './styles'
import { UserImg } from '../UserImg'
import { useGetFavs } from '../../hooks/useGetFavs'
import { UserHighlight } from '../UserHighlight'

export const UserProfile = () => {
  const { data, favCategory } = useGetFavs()
  const fav = favCategory()
  return (
    <Profile>
        <UserImg/>
        <UserHighlight title={'Liked Photos'} data={data?.favs?.length} def={0} />
        <UserHighlight title={'Fav category'} data={fav} def='none' />
    </Profile>
  )
}
