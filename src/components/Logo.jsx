import React from 'react'
import logo from '../assets/572.png'

function Logo({width = '100px'}) {
    return <div className='lg:w-20 h-8 flex items-center -my-2 px-2 p-1  md:w-16 sm:w-20'><img src={logo} width={width} alt="Logo"/><p className='text-2xl font-bold mx-1'>Space</p></div>
}

export default Logo
