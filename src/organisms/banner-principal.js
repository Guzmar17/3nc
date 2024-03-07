import burguer from './../img/hamburguesa-chesse.jpg'
import perrito from './../img/perrito.jpg'
import shawarma from './../img/shawarma.jpg'
import Autoplay from "embla-carousel-autoplay"
import * as React from "react"
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase.js';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../shadcn/ui/carousel.jsx" 
 
export default function Carousel_principal() {

    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, 'products'));
      const products = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      console.log(products);
      // Usa 'todos' en tu lógica de la aplicación
    }
    fetchProducts();


    
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



  
