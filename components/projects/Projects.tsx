"use client"
import React from 'react'
import Card from './Card'
import { projects } from '@/data'
import VisibilitySensor from 'react-visibility-sensor'
const Projects = () => {
  return (
    <div className="pt-52 px-3" id="projects">
      <VisibilitySensor partialVisibility>
        {({isVisible}:{isVisible: boolean}) => (
          <div className={isVisible ?'animate-fade' : "opacity-0"}>
            <h2 className='text-blue-600 font-extrabold ' >PORTFOLIO</h2>
            <p className='mt-8 mb-14 font-medium '>Te presento a continuacion algunos de los proyectos en los que e participado.</p>
          </div>
        )}
      </VisibilitySensor>
      {projects?.map((el, index) => <Card key={index} title={el.title} description={el.description} image={el.image} TechStack={el.TechStack} page={el.page} code={el.code} direction={index % 2 === 0 ? false : true} />)}
    </div>
  )
}

export default Projects
