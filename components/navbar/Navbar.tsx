import React from 'react'

const Navbar = () => {
    return (
        <div className='flex w-[100%] justify-between px-12 py-6 bg-white fixed drop-shadow-md z-30'>
            <h2 className='font-bold text-[20px]'>
                Johan.dev
            </h2>
            <div className='flex gap-4 font-semibold'>
                <a href="#home">Inicio</a>
                <a href="#about">Acerca de mi</a>
                <a href="#projects">Proyectos</a>
                <a href="#contact">Contactame</a>
            </div>
        </div>
    )
}

export default Navbar
