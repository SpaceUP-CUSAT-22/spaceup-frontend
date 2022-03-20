import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';


export default function GallerySection(){


  const data=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg"]


    return <div id="gallery" className="flex space-y-12 min-h-screen flex-col bg-cover bg-no-repeat text-gray-50 w-screen justify-center  text-center items-center bg-[url('/home/vishnu/Desktop/spaceup-sss/sss/public/assets/Mission/background-destination-desktop.jpg')]">

       

      
    


              <Carousel autoplay={true} interval={1000} infiniteLoop={true} className="w-full lg:w-1/2">
            
            {

                data.map((e)=>{


                  return <div>
                  <img src={"assets/Gallery/"+e} />  
              </div>
                })
               
                }
            
           
      
            </Carousel>

            

        

       

            
    </div>


}
