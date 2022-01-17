import React from "react";

const CurvedText = (props: { text: string }) => {
    return (
        <svg
            viewBox={"0 0 512 512"}
            preserveAspectRatio={"xMidYMid meet"}
            style={{
                transform: "rotate(90deg)",
                zIndex: 10
            }}
        >
            <defs>
                <circle id={"text-curve"} cx={256} cy={256} r={110}/>
            </defs>
            <text style={{
                fontSize: 48,
                textAlign: "center",
                fill: "white",
                fontFamily: "arial"
            }}>
                <textPath xlinkHref={"#text-curve"} startOffset={"50%"} textAnchor={"middle"}>
                    {props.text}
                </textPath>
            </text>
        </svg>
    )
}

export default CurvedText;