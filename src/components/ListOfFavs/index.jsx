import React from 'react'
import { Fav } from '../Fav';
import { Favs, Grid } from './styles';
import { NoFavs } from '../NoFavs';

export const ListOfFavs = ({ favs = [] }) => {
  console.log(favs);
  return (
    <Favs>
      {
        favs.length > 0 ? 
          <Grid>
            {favs.map(fav => 
              <Fav key={`fav-${fav.id}`} {...fav}/>
            ) }
          </Grid>
          : <NoFavs />
      }
    </Favs>
  )
}
