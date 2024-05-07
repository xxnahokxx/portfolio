/* eslint-disable @next/next/no-img-element */
"use client"
import photo from "@/public/xnahokx-20210113-0001.jpg"
import Image from "next/image"
import send from "@/public/send.svg"
import copy from "@/public/copy.svg"
import VisibilitySensor from "react-visibility-sensor"

import React from 'react'
import CarouselTec from "../carouselTec/CarouselTec"
import { Button } from "../ui/button"
import { Toaster, toast } from "sonner"

const HomeSection = () => {


    const copyToClipboard = (text: string) => {
        try {
            toast.custom((t) => (
                <div className="relative px-8 py-2 flex rounded-lg dark:bg-[#5b616e] bg-[#164e63] text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="absolute top-[calc(50%-8px)] left-[10px]" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
                    </svg>
                    <h1>Copiado al portapapeles</h1>
                    <button className="absolute top-[5px] right-[8px]" onClick={() => toast.dismiss(t)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                        </svg>
                    </button>
                </div>
            ));
            navigator.clipboard.writeText(text);
            console.log("copiado al portapapeles");
        } catch (error) {
            console.error("Error al copiar al portapapeles:", error);
        }
    };


    return (
        <VisibilitySensor partialVisibility>

            {({ isVisible }: { isVisible: boolean }) => (
                <div className="flex flex-col min-h-screen box-border justify-center items-center" id="home">
                    <div className=" flex flex-col-reverse px-5 pt-20 lg:grid lg:grid-cols-3 w-[100%] lg:w-[70%] items-center">
                        <div className="col-span-2 flex flex-col justify-around h-full">

                            <div className={` ${isVisible ? "animate-fade-right animate-duration-1000 animate-delay-300 animate-ease-out" : "opacity-0"}`}>
                                <h1 className="text-[60px] font-extrabold mb-5">Full Stack Web Developer</h1>
                                <p className="text-justify mb-4">Hola, soy Johan Amaya, un desarrollador apasionado y comprometido, interesado por nuevas tecnologías, ubicado en Bogotá-Colombia, siempre en busca de innovación y aprendizaje continuo.</p>
                            </div>

                            <div className="flex gap-4">
                                <a href="https://www.linkedin.com/in/johan-s-amaya/" target="blank" title="LinkedIn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className=" hover:text-sky-600 transition-all duration-300" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                    </svg>
                                </a>
                                <a href="https://github.com/xxnahokxx" target="blank" title="GitHub">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className=" hover:text-sky-600 transition-all duration-300" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                    </svg>
                                </a>
                            </div>
                            <a href="mailto:johan.s_vanegas@hotmail.com" target="blank" title="Envíame un email." >
                            </a>
                            <div className="flex gap-1 items-center mt-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className=" hover:text-sky-600 transition-all duration-300" viewBox="0 0 16 16">
                                    <path d="M9 8.5h2.793l.853.854A.5.5 0 0 0 13 9.5h1a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H9v1z" />
                                    <path d="M12 3H4a4 4 0 0 0-4 4v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a4 4 0 0 0-4-4zM8 7a3.99 3.99 0 0 0-1.354-3H12a3 3 0 0 1 3 3v6H8V7zm-3.415.157C4.42 7.087 4.218 7 4 7c-.218 0-.42.086-.585.157C3.164 7.264 3 7.334 3 7a1 1 0 0 1 2 0c0 .334-.164.264-.415.157z" />
                                </svg>
                                <p className="text-xl font-bold">Correo</p>
                            </div>
                            <div className="w-full flex gap-3 mt-3 items-center">
                                <div className="border-[2px] border-[#000] dark:border-[#fff] py-2 px-2 rounded-lg md:w-[90%] w-[60%] overflow-hidden">
                                    <p>johan.s_vanegas@outlook.com</p>
                                </div>
                                <Button onClick={() => window.location.href = "mailto:johan.s_vanegas@outlook.com"} className="[&>svg]:text-white bg-[#164e63] hover:bg-[#1e6c89]"><Image src={send} alt="Send" /></Button>
                                <Toaster />
                                <Button onClick={() => copyToClipboard("johan.s_vanegas@outlook.com")} className="[&>svg]:text-white bg-[#164e63] hover:bg-[#1e6c89]"><Image src={copy} alt="copy" /></Button>
                            </div>

                        </div>
                        <Image src={photo} alt="Photo" className={`h-[300px] w-[300px] object-cover m-auto border-solid border-black border-[5px] rounded-full ${isVisible ? "animate-fade-left animate-ease-out" : "opacity-0"} `} />
                    </div>
                    <div className="w-[70%] mt-20 px-[20px]">
                        <h2 className="text-xl font-bold">Mis tecnologias:</h2>
                        <div className={`rounded flex flex-wrap items-center dark:bg-slate-200/40  ${isVisible ? "animate-flip-up animate-delay-500" : "opacity-0"}`}>
                            <CarouselTec />
                        </div>
                    </div>
                </div>
            )}
        </VisibilitySensor>
    )
}

export default HomeSection
