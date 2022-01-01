import React from 'react'
import User from './User'

import { resetTokens } from '../utils/localstorage'

const UserProfile = ({ user, following, playlists, tracks, artists }) => {
    return (
        <div>
            <div className='flex justify-end mx-10 mt-10'>
                <button onClick={resetTokens} className='outline-2 outline-spotify-green outline rounded px-3 py-1 hover:outline-[#F66547] transition-all duration-200'>
                    Logout
                </button>
            </div>
            <div className='flex justify-center'>
                <div className="mt-5">
                    {user != null && following != null ? (<User user={user} following={following} playlists={playlists} />) : null}

                </div>
            </div>
        </div>
    )
}

export default UserProfile
