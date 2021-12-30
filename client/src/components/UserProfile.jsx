import React from 'react'
import User from './User'

const UserProfile = ({ user, following, playlists }) => {
    return (
        <div className='h-full bg-[#1A1A2E] flex justify-center'>
            <div className="mt-10">
                {user != null && following != null ? (<User user={user} following={following} />) : null}
            </div>
        </div>
    )
}

export default UserProfile
