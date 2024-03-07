import burguer from './../img/hamburguesa-chesse.jpg'
import perrito from './../img/perrito.jpg'
import shawarma from './../img/shawarma.jpg'
import Autoplay from "embla-carousel-autoplay"
import * as React from "react"



import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../shadcn/ui/carousel.jsx" 
 
export default function Carousel_principal() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

return (
  <Carousel
    plugins={[plugin.current]}
    onMouseEnter={plugin.current.stop}
    onMouseLeave={plugin.current.reset}
  >
    <CarouselContent>
      
         <CarouselItem>
          
         <div className="justify-items-center content-center "><img src={burguer} className="object-cover h-[35rem] w-screen"></img>
         </div>
        </CarouselItem>
         <CarouselItem>
         <div className="justify-items-center content-center"><img src={perrito} className="object-cover h-[35rem] w-screen"></img>
         </div>
          </CarouselItem>
          <CarouselItem>
         <div className="justify-items-center content-center"><img src={shawarma} className="object-cover h-[35rem] w-screen"></img>
         </div> 
        </CarouselItem>
  
      
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
)
}



  
