"use client"
import "./imageSlideshow.css"
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react"
import i1 from "../../public/imageSlideShow/image1.jpg";
import i2 from "../../public/imageSlideShow/image2.jpg";
import i3 from "../../public/imageSlideShow/image3.jpg";
import i4 from "../../public/imageSlideShow/image4.jpg";
import i5 from "../../public/imageSlideShow/image5.jpg";
import i6 from "../../public/imageSlideShow/image6.jpg";
import i7 from "../../public/imageSlideShow/image7.jpg";
import i8 from "../../public/imageSlideShow/image8.jpg";
import i9 from "../../public/imageSlideShow/image9.jpg";
import i10 from "../../public/imageSlideShow/image10.jpg";


export function ImageSlideShow() {
  const [emblaRef] = useEmblaCarousel()

//   for(let i = 1; i <= 10; i++) {

//   }
  const imageList = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10]
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {imageList.map((image, index) => (
          <div className="embla__slide">
            <Image src={image}/></div>
        ))}
        {/* <div className="embla__slide">Slide 1</div>
        <div className="embla__slide">Slide 2</div>
        <div className="embla__slide">Slide 3</div> */}
      </div>
    </div>
  )
}
