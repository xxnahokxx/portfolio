/**
 * v0 by Vercel.
 * @see https://v0.dev/t/cUu8XSZERID
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card } from "@/components/ui/card"
import { CarouselItem, CarouselContent, Carousel } from "@/components/ui/carousel"
import { technologies } from "@/lib/infoTec"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

export default function CarouselTec() {
    return (
        <div className="w-full max-w-6xl h-[100px] mx-auto">
            <Carousel
                className="w-full"
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
                opts={{
                    loop: true,
                    slidesToScroll: 1,
                    startIndex: 0,
                }}

            >
                <CarouselContent>
                    {technologies.map((tec, index) => (
                        <CarouselItem
                            key={index}
                            className="md:basis-1/4 lg:basis-1/5 sm:basis-1/2"
                        >
                            <Card className="flex items-center justify-center h-24 bg-transparent rounded-lg border-transparent">
                                <Image
                                    alt={`${tec.name}`}
                                    className=" object-contain"
                                    title={`${tec.name}`}
                                    width={60}
                                    height={70}
                                    src={tec.icon}
                                    style={{
                                        aspectRatio: "80/0",
                                        objectFit: "cover",
                                    }}
                                />
                            </Card>
                        </CarouselItem>
                    ))}

                </CarouselContent>
            </Carousel>
        </div>
    )
}
