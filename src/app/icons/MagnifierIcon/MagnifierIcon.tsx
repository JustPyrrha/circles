import React from "react";

const MagnifierIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" width="26" height="25"
             viewBox="0 0 26 25">
            <defs>
                <path id="magnifier-b"
                      d="M42.6115162,107.491681 L46,110.222601 L43.1820039,113 L40.4095162,109.661681 L42.6115162,107.491681 Z M32.9752379,94 C36.8275554,94 39.9504758,97.0768423 39.9504758,100.87232 C39.9504758,102.204 39.5660362,103.447214 38.9005375,104.500108 L41.0615162,106.242681 L39.1415162,108.134681 L37.4736446,106.124739 C36.2591887,107.135415 34.6894248,107.744639 32.9752379,107.744639 C29.1229204,107.744639 26,104.667797 26,100.87232 C26,97.0768423 29.1229204,94 32.9752379,94 Z M32.9752379,95.9635199 C30.2235825,95.9635199 27.9929251,98.1612643 27.9929251,100.87232 C27.9929251,103.583375 30.2235825,105.781119 32.9752379,105.781119 C35.7268933,105.781119 37.9575507,103.583375 37.9575507,100.87232 C37.9575507,98.1612643 35.7268933,95.9635199 32.9752379,95.9635199 Z"/>
                <filter id="magnifier-a" width="150%" height="152.6%" x="-20%" y="-21.1%"
                        filterUnits="objectBoundingBox">
                    <feOffset dx="1" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"/>
                    <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="1.5"/>
                    <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0"/>
                </filter>
            </defs>
            <g fill="none" fillRule="evenodd" transform="translate(-24 -92)">
                <use fill="#000" filter="url(#magnifier-a)" xlinkHref="#magnifier-b"/>
                <use fill="#FFF" xlinkHref="#magnifier-b"/>
            </g>
        </svg>
    )
}

export default MagnifierIcon