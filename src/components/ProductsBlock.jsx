'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { Link, Element } from 'react-scroll'
import useEmblaCarousel from 'embla-carousel-react'
import { DotButton, useDotButton } from '../components/EmblaCarouselDotButton'
import Image from "next/image";
export default function ProductsBlock () {
    const [emblaRef, emblaApiRef] = useEmblaCarousel()
      const [emblaProducts, emblaApi] = useEmblaCarousel({ watchDrag: false, loop: true, breakpoints: {
        '(min-width: 1000px)': { loop: false },
      }})
      const [emblaProduct] = useEmblaCarousel()
    
      const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApiRef)
    
      const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
      }, [emblaApi])
    
      const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
      }, [emblaApi])
    
    return (
        <section className="bg-dark-800 lg:py-20 relative z-50 lg:z-30 pb-0 lg:pb-28 
        lg:before:border-t-[160px] before:border-t-transparent
        lg:before:border-l-[2375px] before:border-l-dark-800
        lg:before:absolute before:-top-40
        after:border-l-[520px] after:border-l-transparent
      after:border-b-[200px]  after:border-b-orange 
    after:border-r-[520px]  after:border-r-transparent after:-top-[390px] after:absolute lg:after:border-none
    flex items-center justify-center
        ">
          <div className="lg:container 2xl:px-[80px] -translate-y-72 lg:translate-y-0 relative z-10 overflow-hidden lg:overflow-visible pb-[300px] lg:pb-0">
            <h2 className="text-white text-4xl lg:text-6xl tracking-tight uppercase lg:mb-24 mb-9 text-center lg:text-left">Продукты</h2>
            <div className="embla lg:container" ref={emblaProducts}>
                <div className="embla__container h-full w-full lg:gap-5">
                  <div className="embla__slide w-56 max-w-56 lg:w-64  lg:max-w-64">
                    <a href="" className="flex flex-col text-beige text-xl uppercase">
                    <div className="embla" ref={emblaProduct}>
                      <div className="embla__container h-full w-full gap-5">
                        <div className="embla__slide-one">
                          <img src="/img-1.jpg" alt="" className='w-full'/>
                        </div>
                        <div className="embla__slide-one">
                          <img src="/v-1.jpg" alt="" className='w-full'/>
                        </div>
                      </div>
                      </div>
                      <h3 className="text-base sm:text-lg mt-3">КАТЕГОРИЯ : САЛАТЫ</h3>
                    </a>
                  </div>
                  <div className="embla__slide w-56 max-w-56 lg:w-64  lg:max-w-64">
                    <a href="" className="flex flex-col text-beige text-xl uppercase">
                      <img src="/img-1.jpg" alt="" className='w-full'/>
                      <h3 className="text-base sm:text-lg mt-3">КАТЕГОРИЯ : САЛАТЫ</h3>
                    </a>
                  </div>
                  <div className="embla__slide w-56 max-w-56 lg:w-64  lg:max-w-64">
                    <a href="" className="flex flex-col text-beige text-xl uppercase">
                      <img src="/img-1.jpg" alt="" className='w-full'/>
                      <h3 className="text-base sm:text-lg mt-3">КАТЕГОРИЯ : САЛАТЫ</h3>
                    </a>
                  </div>
                  <div className="embla__slide w-56 max-w-56 lg:w-64  lg:max-w-64">
                    <a href="" className="flex flex-col text-beige text-xl uppercase">
                      <img src="/img-1.jpg" alt="" className='w-full'/>
                      <h3 className="text-base sm:text-lg mt-3">КАТЕГОРИЯ : САЛАТЫ</h3>
                    </a>
                  </div>
                  <div className="embla__slide w-56 max-w-56 lg:w-64  lg:max-w-64">
                    <a href="" className="flex flex-col text-beige text-xl uppercase">
                      <img src="/img-1.jpg" alt="" className='w-full'/>
                      <h3 className="text-base sm:text-lg mt-3">КАТЕГОРИЯ : САЛАТЫ</h3>
                    </a>
                  </div>
                  <div className="embla__slide w-56 max-w-56 lg:w-64  lg:max-w-64">
                    <a href="" className="flex flex-col text-beige text-xl uppercase">
                      <img src="/img-1.jpg" alt="" className='w-full'/>
                      <h3 className="text-base sm:text-lg mt-3">КАТЕГОРИЯ : САЛАТЫ</h3>
                    </a>
                  </div>
                  <div className="embla__slide w-56 max-w-56 lg:w-64  lg:max-w-64">
                    <a href="" className="flex flex-col text-beige text-xl uppercase">
                      <img src="/img-1.jpg" alt="" className='w-full'/>
                      <h3 className="text-base sm:text-lg mt-3">КАТЕГОРИЯ : САЛАТЫ</h3>
                    </a>
                  </div>
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
            <Element name="greenshake">
              <div className="container mt-32 flex justify-between items-center flex-col lg:flex-row gap-4 ">
                <div className="basis-6/12">
                <Image
                  aria-hidden
                  src="/green-shake.png"
                  alt="File icon"
                  width={265}
                  height={370}
                />
                <p className="text-white lg:text-beige mt-6 max-w-xl font-vox font-bold">Figma ipsum component variant main layer. Stroke bullet comment ipsum boolean reesizing vector rotate strikethrough horizontal. Ipsum flatten figjam outline polygon main edit library blur subtract. Vector outline asset vector follower bold. Asset follower layout star scale follower shadow inspect link distribute. Stroke strikethrough content move frame. Asset hand union library layout. Export background variant.</p>
                <div className="lg:flex hidden">
                  <a href="" className="bg-dark-400 font-vox font-bold rounded-md mt-24 py-4 md:w-96 inline-flex items-center justify-center relative after:absolute after:-right-6 after:h-10 after:w-9 after:bg-dark-800 lg:after:bg-orange after:rounded-sm before:absolute before:-left-6 before:h-10 before:w-9 before:bg-orange  lg:before:bg-beige before:rounded-sm hover:after:translate-x-5 hover:before:-translate-x-5 transition-all delay-500 w-64 ">Оставить заявку</a>
                </div>
                </div>
                <div className="basis-6/12 -mb-44">
                <div className="embla" ref={emblaRef}>
                      <div className="embla__container h-full w-full max-h-[280px] sm:max-h-[380px] lg:max-h-[440px]">
                      <div className="embla__slide-one ">
                          <img src="/img-5.jpg" alt="" className='w-full h-full object-cover max-h-full'/>
                        </div>
                        <div className="embla__slide-one">
                          <img src="/img-1.jpg" alt="" className='w-full h-full object-cover max-h-full'/>
                        </div>
                        <div className="embla__slide-one">
                          <img src="/v-1.jpg" alt="" className='w-full h-full object-cover max-h-full'/>
                        </div>
                      </div>
                      </div>
                      <div className="flex justify-center gap-[6px] mt-9">
                        {scrollSnaps.map((_, index) => (
                          <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={'h-6 w-6 rounded-full border-2 border-orange'.concat(
                              index === selectedIndex ? ' bg-orange' : ''
                            )}
                          />
                        ))}
                      </div>
                </div>
              </div>
            </Element>
          </div>
        </section>

)
}