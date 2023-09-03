"use client"
import React from 'react'
import { Mode } from './Mode'

const Navbar = ({ theme, status }: { theme: Function, status: string }) => {
    return (
        <div className='flex w-[100%] justify-between px-12 py-6 bg-white dark:bg-slate-900 transition-colors duration-300 fixed drop-shadow-md z-30'>
            <h2 className='font-bold text-[20px] self-center'>
                Johan.dev
            </h2>
            <div className='flex gap-4 font-semibold self-center'>
                <a href="#home">Inicio</a>
                <a href="#about">Acerca de mi</a>
                <a href="#projects">Proyectos</a>
                <button onClick={() => theme()}><Mode status={status} /></button>
            </div>
        </div>
    )
}

export default Navbar
