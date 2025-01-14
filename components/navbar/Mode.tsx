
"use client"
import React from 'react'

export const Mode = ({ status }: { status: string }) => {
    return (
        <svg width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <mask id="lineMdLightDark0">
                    <circle cx="7.5" cy="7.5" r="5.5" fill="#fff" />
                    <circle cx="7.5" cy="7.5" r="5.5">
                        <animate fill="freeze" attributeName="cx" dur="0.4s" values="7.5;11" />
                        <animate fill="freeze" attributeName="r" dur="0.4s" values="5.5;6.5" />
                    </circle>
                </mask>
                <mask id="lineMdLightDark1">
                    <g fill="#fff">
                        <circle cx="12" cy="9" r="5.5">
                            <animate fill="freeze" attributeName="cy" begin="1s" dur="0.5s" values="9;15" />
                        </circle>
                        <g fillOpacity="0">
                            <use href="#lineMdLightDark2" transform="rotate(-75 12 15)" />
                            <use href="#lineMdLightDark2" transform="rotate(-25 12 15)" />
                            <use href="#lineMdLightDark2" transform="rotate(25 12 15)" />
                            <use href="#lineMdLightDark2" transform="rotate(75 12 15)" />
                            <animate attributeName="fill-opacity" begin="1.5s" dur="0.4s" fill="freeze" from="0" to="1" />
                        </g>
                    </g>
                    <path d="M0 10h26v5h-26z" />
                    <path fill="none" stroke="#fff" strokeDasharray="26" strokeDashoffset="26" strokeLinecap="round" strokeWidth="2" d="M1 12h22">
                        <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" values="26;52" />
                    </path>
                </mask>
                <symbol id="lineMdLightDark2">
                    <path d="M0 0">
                        <animate fill="freeze" attributeName="d" begin="1.5s" dur="0.4s" values="M11 18h2L12 20z;M10.5 21.5h3L12 24z" />
                    </path>
                </symbol>
            </defs>
            <g fill={status === "dark" ? "#fff" : "#000000"}>
                <rect width="13" height="13" x="1" y="1" mask="url(#lineMdLightDark0)" />
                <path d="M-2 11h28v13h-28z" mask="url(#lineMdLightDark1)" transform="rotate(-45 12 12)" />
            </g>
        </svg>
    )
}
