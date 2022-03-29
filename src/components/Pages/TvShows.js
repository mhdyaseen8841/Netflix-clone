import React from 'react'


import RowPost from '../RowPost/RowPost';
import TvShowsPost from '../TvShows/TvShowsPost';
import NavBar from '../NavBar/NavBar';

import { LatestTvShows, PopularTvShows, TopratedTvShows} from "../../urls"


function TvShows() {
  return (
    <div>
    <NavBar/>
    <TvShowsPost url={LatestTvShows} title='Latest' isSmall/>
    <TvShowsPost url={PopularTvShows} title='Popular' isSmall/>
    <TvShowsPost url={TopratedTvShows} title='Toprated' isSmall/>
            </div>
  )
}

export default TvShows