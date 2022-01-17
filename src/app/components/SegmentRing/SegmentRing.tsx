import React, {PropsWithChildren, RefObject, useEffect} from "react";
import "./SegmentRing.scss"

export interface SegmentRingProps {
    lit: number,
    unlit: number,
    broken: number
}

const Arc = React.forwardRef<SVGGeometryElement, PropsWithChildren<any>>((props: any, ref) => (
    <path
        d={props.data}
        fill={"none"}
        stroke={`${props.type === "broken" ? "red" : props.type === "lit" ? "white" : "gray"}`}
        strokeWidth={0.09}
        strokeOpacity={`1`}
        key={props.data}
        ref={ref}
    />
));

const SegmentRing = (props: SegmentRingProps) => {
    const [refs, setRefs] = React.useState<RefObject<SVGGeometryElement>[]>([]);
    const [points, setPoints] = React.useState<DOMPoint[]>([]);

    const slice = (props: SegmentRingProps) => {
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
        let initRefs: RefObject<SVGGeometryElement>[] = []
        arr = slices.map((slice, i) => {
            const [startX, startY] = getCoordsForPercent(cPercent);
            cPercent += slice.percent
            const [endX, endY] = getCoordsForPercent(cPercent)
            cPercent += spaceOffset

            const largeArcFlag = slice.percent > 0.5 ? 1 : 0;
            const pathData = [
                `M ${startX} ${startY}`,
                `A ${scale} ${scale} 0 ${largeArcFlag} 1 ${endX} ${endY}`,
            ].join(" ");
            const ref = React.createRef<SVGGeometryElement>()
            const out = <Arc data={pathData} type={slice.type} ref={ref} key={`arc-${i}`}/>;
            initRefs.push(ref)
            return out;
        });
        setRefs(initRefs);
        return arr;
    }
    const [slices, setSlices] = React.useState<JSX.Element[]>([])

    useEffect(() => {
        const s = slice(props)
        setSlices(s)
    }, [props.lit, props.unlit, props.broken])

    useEffect(() => {
        if(refs.length > 0) {
            const p = []
            for (let i = 0; i < props.broken; i++) {
                let ref = refs[i].current;
                if(ref != null) {
                    const dist = ref.getTotalLength() * 0.5
                    const mid = ref.getPointAtLength(dist)
                    p.push(mid)
                }
            }
            setPoints(p)
        }
    }, [refs.length])

    return (
        <div className={"SegmentRingContainer"}>
            <svg
                viewBox={"-1 -1 2 2"}
                preserveAspectRatio={"xMidYMid meet"}
            >
                {slices}
                {
                    props.broken > 0 && points.map((it, i) => {
                        const dist = 0.04
                        return (
                            <g>
                                <circle cx={it.x} cy={it.y} r={0.08} fill={"red"} key={`circle-${i}`} />
                                <path d={`M ${it.x + dist} ${it.y + dist} L ${it.x - dist} ${it.y - dist}`} fill={"none"} stroke={"white"} strokeWidth={0.02}/>
                                <path d={`M ${it.x + dist} ${it.y - dist} L ${it.x - dist} ${it.y + dist}`} fill={"none"} stroke={"white"} strokeWidth={0.02}/>
                            </g>
                        )
                    })
                }
            </svg>
        </div>
    )
}

export default SegmentRing;