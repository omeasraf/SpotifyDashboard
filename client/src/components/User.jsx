import React from 'react'

const User = ({ user, following, playlists }) => {
    return (
        <div className='flex flex-col items-center w-full p-10 bg-[#c8425a] rounded-lg shadow-lg shadow-black'>
            <img className='w-32 h-32 rounded-[50%] border-2 border-white object-cover' src={user?.images[0]?.url} alt={user.display_name} />

            <div className='mt-10'>
                <h1>{user?.display_name}</h1>
            </div>

            <div className="mt-5 flex flex-row space-x-6">
                <div className='flex flex-col items-center'>
                    <h3>{user.followers.total}</h3>
                    <h4>Followers</h4>
                </div>
                <div className='flex flex-col items-center'>
                    <h3>{following.artists.items.length}</h3>
                    <h4>Following</h4>
                </div>
                <div className='flex flex-col items-center'>
                    <h3>{playlists?.items.length}</h3>
                    <h4>Playlists</h4>
                </div>

            </div>
        </div>
    )
}

export default User
