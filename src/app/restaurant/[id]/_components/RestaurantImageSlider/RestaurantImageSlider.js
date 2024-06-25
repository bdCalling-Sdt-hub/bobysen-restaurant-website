import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import showImage from "@/utils/fileHelper.js";
import Image from "next/image";

export default function RestaurantImageSlider({ images }) {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          {images?.map((image) => (
            <CarouselItem key={image.id}>
              <Image
                height={0}
                width={800}
                src={showImage(image?.url)}
                alt="picture of the restaurant"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-primary-secondary-3 text-primary-white-light" />
        <CarouselNext className="bg-primary-secondary-3 text-primary-white-light" />
      </Carousel>
    </div>
  );
}
