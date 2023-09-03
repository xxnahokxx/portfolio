"use client"
import React from 'react'
import compu from "@/public/sistema-concepto-sitio-web.jpg"
import Image from 'next/image'
import VisibilitySensor from 'react-visibility-sensor'

const About = () => {
    return (
        <VisibilitySensor partialVisibility>
            {({ isVisible }: { isVisible: boolean }) => (
                <div className='pt-24 mt-[100px]' id="about">
                    <div className={`min-h-[70vh] flex flex-col-reverse mx-3 lg:grid lg:grid-cols-2 bg-white dark:bg-zinc-900 items-center rounded-[40px] overflow-hidden  drop-shadow-lg ${isVisible ? "animate-fade" : "opacity-0"}`} >
                        <div className='p-16 flex flex-col justify-around h-full items-start'>
                            <h2 className='text-blue-600 font-extrabold'>ACERCA DE MI</h2>
                            <h3 className='font-semibold text-xl'>Un dedicado desarrollador Full Stack ubicado en Bogotá, Colombia</h3>
                            <p className='text-justify'>
                                Me considero un desarrollador altamente competente, poseo un dominio en diferentes tecnologías y mi experiencia abarca <b>React, Redux, JavaScript, TypeScript, Next.js, Express, Sequelize, PostgreSQL, MongoDB, CSS, HTML, Git, Tailwind y Node.js</b> . Mi pasión por la creación de soluciones innovadoras se refleja en la capacidad de diseñar y desarrollar aplicaciones web sofisticadas, asegurando un rendimiento óptimo y una experiencia de usuario excepcional en cada proyecto. Con un enfoque proactivo y habilidades analíticas, me esfuerzo por superar los desafíos técnicos y entregar productos de alta calidad para satisfacer las necesidades del cliente.</p>
                            <a href='https://drive.google.com/file/d/1qmrEdWEECi_Maslwvt1b-mAa5EfHXw95/view?usp=drive_link' className='px-6 py-3 bg-cyan-900 font-semibold text-white rounded-md hover:bg-cyan-500 hover:text-cyan-900 transition-all duration-300 ' target='blank' >Curriculum</a>
                        </div>
                        <Image src={compu} alt="compu" className='h-[100%] object-cover' />
                    </div>
                </div>
            )}
        </VisibilitySensor>
    )
}

export default About
