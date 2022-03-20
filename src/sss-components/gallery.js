import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Image1 from "../assets/Gallery/1.jpg"
import Image2 from "../assets/Gallery/2.jpg"
import Image3 from "../assets/Gallery/3.jpg"
import Image4 from "../assets/Gallery/4.jpg"
import Image5 from "../assets/Gallery/5.jpg"
import Image6 from "../assets/Gallery/6.jpg"
import Image7 from "../assets/Gallery/7.jpg"
import Image8 from "../assets/Gallery/8.jpg"
import Image9 from "../assets/Gallery/9.jpg"
import Image10 from "../assets/Gallery/10.jpg"
import Image11 from "../assets/Gallery/11.jpg"
import Image12 from "../assets/Gallery/12.jpg"
import Image13 from "../assets/Gallery/13.jpg"



export default function GallerySection(){


  const data=[Image1,Image2,Image3,Image4,Image5,Image6,Image7,Image8,Image9,Image10,Image11,Image12,Image13]
    return <div id="gallery" className="flex space-y-12 min-h-screen flex-col bg-cover bg-no-repeat text-gray-50 w-screen justify-center  text-center items-center">

       

      
    


              <Carousel autoplay={true} interval={1000} infiniteLoop={true} className="w-full lg:w-1/2">
            
            {

                data.map((e)=>(

               
                  <div>
                  <img src={e} />  
              </div>)
                )
               
                }
            
           
      
            </Carousel>

            

        

       

            
    </div>


}
