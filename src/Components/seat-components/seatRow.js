import React  from "react";
import Seat from "./seat";
import "./seatRow.css"

export default function SeatRow({data,selfJustify}){



    return <div className="seatrow__parent" style={{justifySelf:selfJustify?"flex-end":"flex-start"}}>
            {data.map((e)=>{
                return <Seat id={e} />

            })}

    
    
    </div>

}