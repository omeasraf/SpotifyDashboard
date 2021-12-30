import { getTokenTimestamp, getRefreshToken, setNewTokens } from './localstorage'
import axios from 'axios';

export function checkExpired(setLoading){
    const expiration_time = 3600 * 1000;
    const timeStamp = getTokenTimestamp()

    console.log("Expires In: " + timeStamp)
    if (timeStamp != null && Date.now() - timeStamp > expiration_time) {
        console.warn('AccessToken has expired');
        setLoading(true)
        refreshAccessToken(setLoading);
    }
}

async function refreshAccessToken(setLoading){
    const refreshToken = getRefreshToken();
    const {data} = await axios.post("http://localhost:8888/refresh_token", {
        refreshToken
    })
    if (data != null && data.accessToken){
        setNewTokens(data.accessToken)
        setLoading(false)
    }
}