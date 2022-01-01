import { React, useState, useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom';

import { Sidebar } from '../components/Sidebar'
import UserProfile from '../components/UserProfile'

import { getUserInfo } from '../utils/spotify'

const Home = () => {
    const [userData, setUserData] = useState(null)
    const [followingData, setfollowingData] = useState(null)
    const [playlistsData, setPlaylistsData] = useState(null)
    const [topTracks, setTopTracks] = useState(null)
    const [topArtists, setTopArtists] = useState(null)

    useEffect(() => {
        const getData = async () => {
            const { user, following, playlists, toptracks, topartists } = await getUserInfo();
            setUserData(user);
            setfollowingData(following);
            setPlaylistsData(playlists);
            setTopTracks(toptracks);
            setTopArtists(topartists);
        }
        getData();

    }, [])


    return (
        <div className='grid-layout'>
            <Sidebar />
            <div className="contents">
                <Routes>
                    <Route path="/artists" element={<div>Artists</div>} />
                    <Route path="/" element={< UserProfile user={userData} following={followingData} playlists={playlistsData} tracks={topTracks} artists={topArtists} />} />
                </Routes>

            </div>


        </div>
    )
}

export default Home
