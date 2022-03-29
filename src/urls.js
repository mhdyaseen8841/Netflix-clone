import {API_KEY} from './constants/constants'
export const orginals = `discover/tv?api_key=${API_KEY}&with_networks=213`
export const action =`discover/movie?api_key=${API_KEY}&with_genres=28`
export const comedy=`discover/movie?api_key=${API_KEY}&with_genres=35`
export const horror= `discover/movie?api_key=${API_KEY}&with_genres=27`
export const romance= `discover/movie?api_key=${API_KEY}&with_genres=10749`
export const documentaries=`discover/movie?api_key=${API_KEY}&with_genres=99`
export const LatestTvShows=`https://api.themoviedb.org/3/movie/upcoming?api_key=f8ddf6b67b66a1e4d0ac19326b4b4793&language=en-US&page=1`
export const PopularTvShows=`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
export const TopratedTvShows=`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`


