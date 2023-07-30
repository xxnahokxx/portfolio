/* eslint-disable @next/next/no-img-element */
import photo from "@/public/xnahokx-20210113-0001.jpg"
import Image from "next/image"

import React from 'react'

const HomeSection = () => {
    return (
        <div className="flex flex-col h-screen box-border justify-center items-center" id="home">
            <div className="grid grid-cols-3 w-[70%] items-center">
                <div className="col-span-2 flex flex-col justify-around h-full">

                    <div className="">
                        <h1 className="text-[60px] font-bold mb-5">Full Stack Web Developer</h1>
                        <p>Hola, soy Johan Amaya, un desarrollador apasionado y comprometido, interesado por nuevas tecnologías, ubicado en Bogotá-Colombia, siempre en busca de innovación y aprendizaje continuo.</p>
                    </div>

                    <div className="flex gap-3">
                        <a href="">LinkedIn</a>
                        <a href="">GitHub</a>
                    </div>

                </div>
                <Image src={photo} alt="Photo" className="h-[300px] w-[300px] object-cover m-auto border-solid border-black border-[5px] rounded-full" />
            </div>
            <div className="w-[70%] pt-20 flex gap-9">
                <h2>Tecnologias:</h2>
                <p>photo</p>
                <p>photo</p>
                <p>photo</p>
                <p>photo</p>
                <p>photo</p>
                <p>photo</p>
            </div>
        </div>
    )
}

export default HomeSection
