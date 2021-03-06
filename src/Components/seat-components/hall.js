import React from "react";
import Arrangement from "./arrangement";
import "./hall.css"
const seatData={
    'frontLeft':[[1,2,3,4,5,6,7,8,9,10,11,12],
    [1,2,3,4,5,6,7,8,9,10,11,12,13],
    [1,2,3,4,5,6,7,8,9,10,11,12,13,14],
    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

  ],
  'frontRight':[[13,14,15,16,17,18,19,20,21,22,23,24],
  [1,2,3,4,5,6,7,8,9,10,11,12,13],
  [1,2,3,4,5,6,7,8,9,10,11,12,13,14],
  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

],
  'balconyLeft':[[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
  [1,2,3,4,5]
  ]
,
'balconyRight':[[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
[1,2,3,4,5,6,7,8]
],

'hallback':[
    [1,2,3,4,5,6,7,8,9,10,11],
    [1,2,3,4,5,6,7,8,9,10,11],
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8],
,
    [1,2,3,4,5,6],
    [1,2]
],

  
  }


export default function Hall(){




    return <div className="hall__parent">


        <div className="hall__stage">
        All eyes this way please! 
        </div>

        <div className="hall__front">

        <Arrangement data={seatData.frontLeft} selfJustify={true}/>
        <Arrangement data={seatData.frontRight} />
        
        </div>

        <div className="hall__balcony">
        
        <Arrangement data={seatData.balconyLeft}/>
        <Arrangement data={seatData.balconyRight} selfJustify={true}/>
        
        </div>

       

        <div className="hall__back__middle">
        <Arrangement data={seatData.hallback} selfJustify={true}/>
        <Arrangement data={seatData.hallback}/>

        </div>

   
    </div>

}