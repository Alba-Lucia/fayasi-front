import React from "react";
import Image from "next/image"; // Asegúrate de importar el componente Image
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Slider = ({ sliderList }) => {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          {sliderList.map((slider, index) => (
            <CarouselItem key={index}>
              <Image 
                src={
                  process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                  slider.image[0].url
                }
                unoptimized={true} // Corrige el error tipográfico
                alt="slider"
                width={1000} 
                height={300}
                className='w-full h-[300px] md:h-[600px] object-cover rounded-2xl'
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Slider;
