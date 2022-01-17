import React from "react";
import "./App.scss"
import SegmentRing from "./components/SegmentRing/SegmentRing";
import {MagnifierIcon, VisitArrowIcon} from "./icons";
import CurvedText from "./components/CurvedText/CurvedText";

function App() {
    const [countBroken, setCountBroken] = React.useState<number>(2)
    const [countLit, setCountLit] = React.useState<number>(4)
    const [countUnlit, setCountUnlit] = React.useState<number>(2)
    const [text, setText] = React.useState<string>("Circle Name")

    return (
        <div>
            <div className="Item">
                <div className="BackgroundRing">
                    <SegmentRing broken={countBroken} lit={countLit} unlit={countUnlit} />
                    <CurvedText text={text}/>
                    <div className="CenterDisc">
                        <div className="GridContainer">
                            <div className="GridItem">

                            </div>
                        </div>
                        <div className="GridContainer">
                            <div className="GridItem">
                                <MagnifierIcon />
                            </div>
                            <div className="GridItem">
                                <VisitArrowIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Item">
                <label htmlFor="#broken-range">{countBroken}</label>
                <input id={"broken-range"} type={"range"} max={"10"} min={0} step={1} value={countBroken} onInput={e => setCountBroken(Number(e.currentTarget.value))}/>
                <br/>
                <label htmlFor="#lit-range">{countLit}</label>
                <input id={"lit-range"} type={"range"} max={"10"} min={0} step={1} value={countLit} onInput={e => setCountLit(Number(e.currentTarget.value))}/>
                <br/>
                <label htmlFor="#unlit-range">{countUnlit}</label>
                <input id={"lit-range"} type={"range"} max={"10"} min={0} step={1} value={countUnlit} onInput={e => setCountUnlit(Number(e.currentTarget.value))}/>
                <br/>
                <input type={"text"} value={text} onInput={e => setText(e.currentTarget.value)} />
            </div>
        </div>
    );
}

export default App;
