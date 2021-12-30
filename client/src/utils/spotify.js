import axios from 'axios';
import { getAccessToken } from './localstorage'

const headers = {
    'Authorization': `Bearer ${getAccessToken().accessToken}`,
    'Content-Type': 'application/json',
};

export const getUserProfile = () => axios.get('https://api.spotify.com/v1/me', { headers });

export const getUserFollowing = () =>  axios.get('https://api.spotify.com/v1/me/following?type=artist', { headers });

export const getUserPlaylists = () => axios.get('https://api.spotify.com/v1/me/playlists', { headers })


export const getUserInfo = () =>
  axios
    .all([getUserProfile(), getUserFollowing(), getUserPlaylists()])
    .then(
      axios.spread((userData, following, playlists) => ({
        user: userData.data,
        following: following.data,
        playlists: playlists.data,
      })),
    );