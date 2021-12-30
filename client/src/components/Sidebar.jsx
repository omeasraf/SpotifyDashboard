import React from 'react'
import { FaSpotify } from 'react-icons/fa'
import { FiUser, FiCompass, FiRadio } from 'react-icons/fi'

export const Sidebar = () => {
    return (
        <div className='h-screen sidebar'>
            <div className='mt-[4rem]'>
                <FaSpotify className='w-full text-spotify-green text-[50px]' />
                <div className='mt-[4rem] space-y-8'>
                    <FiUser className='w-full text-gray-300 text-[30px]' />
                    <FiCompass className='w-full text-gray-300 text-[30px]' />
                    <FiRadio className='w-full text-gray-300 text-[30px]' />
                </div>
            </div>
        </div>
    )
}
