import { React, useEffect, useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import Login from './Login';
import Home from '../container/Home'

import { loggedIn, setTokens } from '../utils/localstorage';
import { checkExpired } from '../utils/auth'
import Spinner from './Spinner';
const Authenticator = () => {
    let navigate = useNavigate();
    const location = useLocation();
    const [loading, setLoading] = useState(false)


    const params = new URLSearchParams(location.search);
    var accessToken = params.get("accessToken")
    var refreshToken = params.get("refreshToken")
    var expiresIn = params.get("expiresIn")


    useEffect(() => {
        if (!loggedIn() && accessToken != null && refreshToken != null && expiresIn != null) {
            setTokens(accessToken, refreshToken)
            navigate('/')
        }
        checkExpired(setLoading)
    }, [])


    if (loggedIn()) {
        checkExpired(setLoading)
        return loading ? <Spinner message={"Loading..."} /> : <Home />
    }
    else return (<Login />)
}

export default Authenticator
