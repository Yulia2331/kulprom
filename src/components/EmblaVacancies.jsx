import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

const EmblaVacancies = (props) => {
    const { slides, options } = props
       const [emblaRef, emblaApi] = useEmblaCarousel({options})
        const scrollPrev = useCallback(() => {
          if (emblaApi) emblaApi.scrollPrev()
        }, [emblaApi])
      
        const scrollNext = useCallback(() => {
          if (emblaApi) emblaApi.scrollNext()
        }, [emblaApi])

  return (
    <div className="embla" ref={emblaRef}>
    <div className="embla__container h-full w-full lg:gap-5">
    {slides.map((slide) => (
      <div className="embla__slide font-vox text-dark-800 w-56 max-w-56 lg:w-64 lg:max-w-64" key={slide.id}>
        <img src={slide.src} alt="" className="h-[370px] w-full object-cover"/>
        <h3 className="text-2xl font-bold uppercase my-3">{slide.title}</h3>
        <span>ЗП от {slide.salary} руб</span>
        <p className="mt-5">{slide.text}</p>
      </div>
      ))}
  </div>
  <div className="hidden md:flex items-center justify-center gap-4 mt-10">
    <button className="embla__prev" onClick={scrollPrev}>
    <img src="/ei_arrow-down_b.svg" alt="" />
    </button>
    <button className="embla__next rotate-180" onClick={scrollNext}>
    <img src="/ei_arrow-down_b.svg" alt="" />
    </button>
  </div>
</div>
  )
}

export default EmblaVacancies