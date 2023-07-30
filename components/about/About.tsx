
import React from 'react'
import compu from "@/public/sistema-concepto-sitio-web.jpg"
import Image from 'next/image'

const About = () => {
    return (
        <div className='min-h-[70vh] grid grid-cols-2 bg-white items-center rounded-[40px] overflow-hidden' id="about">
            <div className='p-16 flex flex-col justify-around h-full'>
                <h2>Acerca de mi</h2>
                <h3 className='font-semibold text-xl'>Un dedicado desarrollador Full Stack ubicado en Bogotá, Colombia</h3>
                <p className='text-justify'>
                    Como desarrollador Full Stack altamente competente, poseo un dominio experto en un amplio espectro de tecnologías. Mi experiencia abarca React, Redux, JavaScript, TypeScript, Next.js, Express, Sequelize, PostgreSQL, MongoDB, CSS, HTML, Git, Tailwind y Node.js. Mi pasión por la creación de soluciones innovadoras se refleja en la capacidad de diseñar y desarrollar aplicaciones web sofisticadas, asegurando un rendimiento óptimo y una experiencia de usuario excepcional en cada proyecto. Con un enfoque proactivo y habilidades analíticas, me esfuerzo por superar los desafíos técnicos y entregar productos de alta calidad para satisfacer las necesidades del cliente.</p>
            </div>
            <Image src={compu} alt="compu" className='h-[100%] object-cover' />
        </div>
    )
}

export default About
