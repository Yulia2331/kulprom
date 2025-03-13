import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import EmblaProduct from '../components/EmblaProduct'
import { DotButton, useDotButton } from '../components/EmblaCarouselDotButton'

const EmblaProducts = (props) => {
    const { slides, options } = props
  const [emblaRef, emblaApiRef] = useEmblaCarousel()
        const [emblaProducts, emblaApi] = useEmblaCarousel({ watchDrag: false, loop: true, breakpoints: {
          '(min-width: 1000px)': { loop: false },
        }})
      
        const scrollPrev = useCallback(() => {
          if (emblaApi) emblaApi.scrollPrev()
        }, [emblaApi])
      
        const scrollNext = useCallback(() => {
          if (emblaApi) emblaApi.scrollNext()
        }, [emblaApi])

  return (
         <div className="embla lg:container" ref={emblaProducts}>
                    <div className="embla__container h-full w-full lg:gap-5">
                    {slides.map((slide) => (
                      <div className="embla__slide w-56 max-w-56 lg:w-64  lg:max-w-64" key={slide.id}>
                            <EmblaProduct slides={slide.src} />
                          <a href="" className="flex flex-col text-beige text-xl uppercase">
                            <h3 className="text-base sm:text-lg mt-3">КАТЕГОРИЯ : {slide.title}</h3>
                        </a>
                      </div>
                      ))}
                  </div>
                  <div className="flex items-center justify-center gap-4 mt-10">
                    <button className="embla__prev" onClick={scrollPrev}>
                    <img src="/ei_arrow-down_o.svg" alt="" />
                    </button>
                    <button className="embla__next rotate-180" onClick={scrollNext}>
                    <img src="/ei_arrow-down_o.svg" alt="" />
                    </button>
                  </div>
                </div>
  )
}

export default EmblaProducts