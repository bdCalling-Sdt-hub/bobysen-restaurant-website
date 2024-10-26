import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import showImage from "@/utils/fileHelper.js";
import Image from "next/image";

export default function RestaurantImageSlider({ images, width, height }) {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          {images ? (
            images?.map((image) => (
              <CarouselItem key={image.id}>
                <Image
                  height={400}
                  width={800}
                  src={showImage(image?.url)}
                  alt="picture of the restaurant"
                  className="mx-auto block h-full max-h-[400px] w-full"
                />
              </CarouselItem>
            ))
          ) : (
            <CarouselItem>
              <div className="h-[400px] w-[800px] animate-pulse bg-gray-400/30"></div>
            </CarouselItem>
          )}
        </CarouselContent>
        <CarouselPrevious className="bg-primary-secondary-3 text-primary-white-light" />
        <CarouselNext className="bg-primary-secondary-3 text-primary-white-light" />
      </Carousel>
    </div>
  );
}
