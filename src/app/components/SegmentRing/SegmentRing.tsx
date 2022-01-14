import React from "react";
import "./SegmentRing.scss"

export interface SegmentRingProps {
    lit: number,
    unlit: number,
    broken: number
}

const SegmentRing = (props: SegmentRingProps) => {
    const slice = () => {
        let slices = [];
        const segments = props.lit + props.unlit + props.broken;
        const spaceOffset = 0.01
        let cPercent = 0;
        for (let i = 0; i < segments; i++) {
            slices.push({
                percent: (1 / segments) - spaceOffset,
                type: i < props.broken ? "broken" : ( i < props.broken + props.lit ? "lit" : "unlit")
            })
        }
        const scale = 0.9
        const getCoordsForPercent = (percent: number) => {
            const x = Math.cos(2 * Math.PI * percent) * scale;
            const y = Math.sin(2 * Math.PI * percent) * scale;
            return [x, y]
        }

        let arr = [];
        arr = slices.map((slice) => {
            const [startX, startY] = getCoordsForPercent(cPercent);
            cPercent += slice.percent
            const [endX, endY] = getCoordsForPercent(cPercent)
            cPercent += spaceOffset

            const largeArcFlag = slice.percent > 0.5 ? 1 : 0;
            const pathData = [
                `M ${startX} ${startY}`,
                `A ${scale} ${scale} 0 ${largeArcFlag} 1 ${endX} ${endY}`,
            ].join(" ");
            return <path
                d={pathData}
                fill={"none"}
                stroke={`${slice.type === "broken" ? "red" : slice.type === "lit" ? "white" : "gray"}`} //@todo: better colours
                strokeWidth={0.09}
                strokeOpacity={`1`}
                key={pathData} />;
        });
        return arr;
    }

    return (
        <div className={"SegmentRingContainer"}>
            <svg
                viewBox={"-1 -1 2 2"}
                preserveAspectRatio={"xMidYMid meet"}
            >
                {slice()}
            </svg>
        </div>
    )
}

export default SegmentRing;