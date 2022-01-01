import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { FaSpotify } from 'react-icons/fa'
import { FiUser, FiCompass, FiRadio } from 'react-icons/fi'

const isNotActiveStyle = 'flex items-center inactiveSidebar p-[20px] text-gray-500 hover:text-black transition-all duration-300 ease-in-out capitalize';
const isActiveStyle = 'flex items-center activeSidebar p-[20px] bg-rbga-black font-extrabold transition-all duration-300 ease-in-out capitalize';


export const Sidebar = () => {
    return (
        <div className='h-screen sidebar'>
            <div className='mt-[4rem]'>
                <FaSpotify className='w-full text-spotify-green text-[50px] outline-r-2' />
                <div className='mt-[4rem]'>
                    <NavLink to="/" className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}>
                        <FiUser className='w-full text-gray-300 text-[30px]' />
                    </NavLink>
                    <NavLink to="/artists" className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}>
                        <FiCompass className='w-full text-gray-300 text-[30px]' />
                    </NavLink>
                    <NavLink to="/playlists" className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}>
                        <FiRadio className='w-full text-gray-300 text-[30px]' />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
