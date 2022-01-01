export function loggedIn(){
    const accessToken =  localStorage.getItem("spotify_accessToken")
    const refreshToken =  localStorage.getItem("spotify_refreshToken")
    const expiresIn =  localStorage.getItem("spotify_expiresIn")

    return accessToken != null && refreshToken != null && expiresIn != null;
}

export function setTokens(accessToken, refreshToken){
    localStorage.setItem('spotify_accessToken', accessToken);
    localStorage.setItem('spotify_refreshToken', refreshToken);
    localStorage.setItem('spotify_expiresIn', Date.now());
}

export function setNewTokens(accessToken){
    localStorage.setItem('spotify_accessToken', accessToken);
    localStorage.setItem('spotify_expiresIn', Date.now());
}

export function getAccessToken(){
    return {
        accessToken: localStorage.getItem('spotify_accessToken'),
    }
}


export function getTokenTimestamp(){
    return localStorage.getItem('spotify_expiresIn');
}

export function getRefreshToken(){
    return localStorage.getItem('spotify_refreshToken');
}

export function resetTokens(){
    localStorage.removeItem('spotify_expiresIn');
    localStorage.removeItem('spotify_accessToken')
    localStorage.removeItem('spotify_refreshToken');
    window.location.reload();
}