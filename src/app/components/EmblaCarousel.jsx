import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Thumb } from '../components/EmblaCarouselThumbsButton'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true
  })

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()

    emblaMainApi.on('select', onSelect).on('reInit', onSelect)
  }, [emblaMainApi, onSelect])
  return (
    <div className="embla">
      <div className="embla__viewport flex w-full" ref={emblaMainRef}>
        <div className="embla__container flex">
          {slides.map((index) => (
            <div className=" embla__slide-one" key={index.id}>
              <div className="embla__slide__number w-full">
                <img src={index.src} alt="" className="w-full max-h-80 object-cover rounded-2xl"/>
                </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla-thumbs mt-4">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container flex gap-2">
            {slides.map((index) => (
              <Thumb
                key={index.id}
                onClick={() => onThumbClick(index.id -1)}
                selected={index.id -1 === selectedIndex}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel