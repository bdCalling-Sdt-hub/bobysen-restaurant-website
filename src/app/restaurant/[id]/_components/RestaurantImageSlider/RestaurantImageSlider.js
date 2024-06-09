import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import restaurantPic from "/public/DynamicRestaurant/villagio1.jpg";
import Image from "next/image";

export default function RestaurantImageSlider() {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <Image src={restaurantPic} alt="picture of the restaurant" />
          </CarouselItem>
          <CarouselItem>
            <Image src={restaurantPic} alt="picture of the restaurant" />
          </CarouselItem>
          <CarouselItem>
            <Image src={restaurantPic} alt="picture of the restaurant" />
          </CarouselItem>
          <CarouselItem>
            <Image src={restaurantPic} alt="picture of the restaurant" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="text-primary-white-light bg-primary-secondary-3" />
        <CarouselNext className="text-primary-white-light bg-primary-secondary-3" />
      </Carousel>
    </div>
  );
}
