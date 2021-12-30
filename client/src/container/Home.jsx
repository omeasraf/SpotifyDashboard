import { React, useState, useEffect } from 'react'

import { Sidebar } from '../components/Sidebar'
import UserProfile from '../components/UserProfile'

import { getUserInfo } from '../utils/spotify'

const Home = () => {
    const [userData, setUserData] = useState(null)
    const [followingData, setfollowingData] = useState(null)
    const [playlistsData, setPlaylistsData] = useState(null)

    useEffect(() => {
        const getData = async () => {
            const { user, following, playlists } = await getUserInfo();
            setUserData(user);
            setfollowingData(following);
            setPlaylistsData(playlists);
        }
        getData();

    }, [])


    return (
        <div className='grid-layout'>
            <Sidebar />
            <div className="contents">
                < UserProfile user={userData} following={followingData} playlists={playlistsData} />
            </div>
        </div>
    )
}

export default Home
