import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { DotButton, useDotButton } from '../components/EmblaCarouselDotButton'

const EmblaProduct = (props) => {
    const { slides, options } = props
  const [emblaRef, emblaApiRef] = useEmblaCarousel()

        const { selectedIndex, scrollSnaps, onDotButtonClick } =
          useDotButton(emblaApiRef)  

  return (
    <div className="embla relative" ref={emblaRef}>
    <div className="embla__container h-full w-full gap-5">
    {slides.map((slide) => (
      <div className="embla__slide-one" key={slide}>
        <img src={slide} alt="" className='w-full h-[370px] object-cover'/>
      </div>
      
      ))}
    </div>
    <div className="flex justify-center w-full gap-1 mb-4 absolute bottom-0">
                            {scrollSnaps.map((_, index) => (
                              <DotButton
                                key={index}
                                onClick={() => onDotButtonClick(index)}
                                className={'h-3 w-3 rounded-full border border-orange'.concat(
                                  index === selectedIndex ? ' bg-orange' : ''
                                )}
                              />
                            ))}
                          </div>
    </div>
  )
}

export default EmblaProduct