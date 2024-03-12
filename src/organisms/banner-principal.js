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
          
         <div className="bg-fachada h-[40rem] bg-no-repeat	bg-center">
         <h2 className="text-3xl font-bold tracking-tight text-center	pt-[18rem] text-7xl	">EL VARON</h2>
         </div>
        </CarouselItem>
         <CarouselItem>
         <div className="bg-menu h-[40rem] bg-no-repeat	bg-center">
         <h2 className="text-3xl font-bold tracking-tight text-center	pt-[18rem] text-7xl	">EL VARON</h2>
         </div>
          </CarouselItem>
          <CarouselItem>
          <div className="bg-niñacomiendo h-[40rem] bg-no-repeat	bg-center">
         <h2 className="text-3xl font-bold tracking-tight text-center	pt-[18rem] text-7xl	">EL VARON</h2>
         </div>
        </CarouselItem>
        <CarouselItem>
        <div className="bg-niñosglobos h-[40rem] bg-no-repeat	bg-center">
         <h2 className="text-3xl font-bold tracking-tight text-center	pt-[18rem] text-7xl	">EL VARON</h2>
         </div>
        </CarouselItem>
        <CarouselItem>
        <div className="bg-puesto h-[40rem] bg-no-repeat	bg-center">
         <h2 className="text-3xl font-bold tracking-tight text-center	pt-[18rem] text-7xl	">EL VARON</h2>
         </div>
        </CarouselItem>
        <CarouselItem>
        <div className="bg-salchichas h-[40rem] bg-no-repeat	bg-center">
         <h2 className="text-3xl font-bold tracking-tight text-center	pt-[18rem] text-7xl	">EL VARON</h2>
         </div>
        </CarouselItem>
        <CarouselItem>
        <div className="bg-trabajadora h-[40rem] bg-no-repeat	bg-center">
         <h2 className="text-3xl font-bold tracking-tight text-center	pt-[18rem] text-7xl	">EL VARON</h2>
         </div> 
        </CarouselItem>

    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
)
}



  
