import React from "react";

const VisitArrowIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" width="27" height="27"
             viewBox="0 0 27 27">
            <defs>
                <path id="visit-arrow-b"
                      d="M104,94 C109.522847,94 114,98.4771525 114,104 C114,109.522847 109.522847,114 104,114 C99.5226829,114 95.7326156,111.057534 94.4580795,107.000883 L96.5819088,107.000968 C97.7689243,109.932285 100.642992,112 104,112 C108.418278,112 112,108.418278 112,104 C112,99.581722 108.418278,96 104,96 C100.642611,96 97.7682725,98.0681835 96.5815051,101.000029 L94.4577648,101.000119 C95.7319917,96.9429507 99.5223144,94 104,94 Z M109,104 L100,109 L102,106 L90,105 C89.4477153,105 89,104.552285 89,104 C89,103.447715 89.4477153,103 90,103 L102,102 L100,99 L109,104 Z"/>
                <filter id="visit-arrow-a" width="140%" height="150%" x="-16%" y="-20%" filterUnits="objectBoundingBox">
                    <feOffset dx="1" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"/>
                    <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="1.5"/>
                    <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0"/>
                </filter>
            </defs>
            <g fill="none" fillRule="evenodd" transform="rotate(-45 -51.433 169.347)">
                <use fill="#000" filter="url(#visit-arrow-a)" xlinkHref="#visit-arrow-b"/>
                <use fill="#FFF" xlinkHref="#visit-arrow-b"/>
            </g>
        </svg>
    )
}

export default VisitArrowIcon