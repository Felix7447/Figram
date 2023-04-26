import React from 'react'
import { Fav } from '../Fav';

export const ListOfFavs = ({ favs = [] }) => {
  console.log(favs);
  return (
    <div>
      {
        favs.length > 0 ? 
          favs.map(fav => 
            <Fav {...fav}/>
          ) 
          : <h2>No favs</h2>
      }
    </div>
  )
}
