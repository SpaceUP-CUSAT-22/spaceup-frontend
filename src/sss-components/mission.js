import React from "react"
import { Fade} from "react-reveal"

export default function Mission(){



    return <div id="mission" className="flex h-screen flex-col bg-cover bg-no-repeat text-gray-50 w-screen justify-center  text-center items-center bg-[url('/home/vishnu/Desktop/spaceup-sss/sss/public/assets/Mission/background-destination-desktop.jpg')]">

            <div className="flex px-8 py-12 lg:py-10">

            
            <div className="space-y-24 my-auto max-w-7xl">
            <Fade duration={1000} bottom>
            <h1 className="text-4xl font-bold lg:text-4xl">Our Mission</h1>
            </Fade>

         
            <h1 className="text-2xl font-medium lg:text-4xl space-y-12" style={{lineHeight:"1.5"}}>
            <Fade duration={2000} bottom cascade>
            Ideas are mere dreams if not shared.Humans have the urge to dream,share,witness and believe.In the Science community,we celebrated all.We welcome ideas and the mind gave birth to them
            Curiosity when shared among each other leads to the answers and questions we never asked.We are commited to building a community and a given space to these ideas and to exchange them to the likes of them.
            </Fade>
            </h1>
            
            </div>

            

            </div>

       

            
    </div>
}