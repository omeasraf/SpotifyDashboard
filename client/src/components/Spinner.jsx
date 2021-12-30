import React from 'react'
import Loader from 'react-loader-spinner'

const Spinner = ({ message }) => {
    return (
        <div className='w-screen h-screen'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <Loader
                    type='Circles'
                    color='#12C051'
                    height={100}
                    width={400}
                    className="m-5"
                />
                <p className='text-lg text-center px-2'>{message}</p>
            </div>
        </div>
    )
}

export default Spinner