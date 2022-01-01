import axios from 'axios';
import { getAccessToken } from './localstorage'

const headers = {
    'Authorization': `Bearer ${getAccessToken().accessToken}`,
    'Content-Type': 'application/json',
};



export const getUserProfile = () => {
  if (headers.Authorization.includes(" null")){
    headers.Authorization = `Bearer ${getAccessToken().accessToken}`;
  }
  return axios.get('https://api.spotify.com/v1/me', { headers })
};

export const getUserFollowing = () =>  axios.get('https://api.spotify.com/v1/me/following?type=artist', { headers });

export const getUserPlaylists = () => axios.get('https://api.spotify.com/v1/me/playlists', { headers })

export const getUserTopTrack = () => axios.get('https://api.spotify.com/v1/me/top/tracks', { headers })

export const getUserTopArtists = () => axios.get('https://api.spotify.com/v1/me/top/artists', { headers })


export const getUserInfo = () =>
  axios
    .all([getUserProfile(), getUserFollowing(), getUserPlaylists(), getUserTopTrack(), getUserTopArtists()])
    .then(
      axios.spread((userData, following, playlists, toptracks, topartists) => ({
        user: userData.data,
        following: following.data,
        playlists: playlists.data,
        toptracks: toptracks,
        topartists: topartists
      })),
    );