import React from "react"
import SeatRow from "./seatRow"
import "./arrangement.css"

export default function Arrangement({data,rows,selfJustify}){

    console.log(data)

    return <div className="arrangement__parent" style={{gridTemplateColumns:`repeat(1,1fr)`,gridTemplateRows:`repeat(${rows},1fr)`}}>
        {
            data.map((element)=>{
            console.log(element)
            return <SeatRow data={element} selfJustify={selfJustify}/>
            })
        }
    </div>
}