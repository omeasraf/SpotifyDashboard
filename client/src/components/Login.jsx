import React from 'react'

const Login = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <h1 className=''>Spotify Dashboard</h1>
            <a href="http://localhost:8888/login">
                <button className='bg-spotify-green py-2 px-10 rounded-[20px] text-white mt-5 font-medium text-lg'>
                    Login with Spotify
                </button>
            </a>
        </div>
    )
}

export default Login
