
'use client'
import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import Image from "next/image";


export default function Home() {
  const [emblaRef, emblaApiRef] = useEmblaCarousel()
  const [emblaProducts, emblaApi] = useEmblaCarousel({ watchDrag: false, loop: true, breakpoints: {
    '(min-width: 1000px)': { loop: false },
  }})
  const [emblaProduct] = useEmblaCarousel()
  const [emblaVacancies, emblaApiVac] = useEmblaCarousel({loop: true, breakpoints: {
    '(min-width: 1000px)': { loop: false },
  }})

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApiRef)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])
  const scrollPrevVac = useCallback(() => {
    if (emblaApiVac) emblaApiVac.scrollPrev()
  }, [emblaApiVac])

  const scrollNextVac = useCallback(() => {
    if (emblaApiVac) emblaApiVac.scrollNext()
  }, [emblaApiVac])

  return (
    <div className="overflow-hidden text-white text-lg scroll-smooth">
      <main className="w-screen bg-beige flex justify-center items-center justify-items-center py-24 lg:py-32 xl:py-36 relative" >
        <div className="container 2xl:px-[80px] z-20">
        <div className="w-full flex justify-center lg:justify-between bg-dark-400 md:py-8 xl:py-10 2xl:py-16 py-5 relative">
          <div className="overflow-hidden w-full h-full absolute bottom-0 right-0 z-10 border-2 border-beige lg:border-0">
            <div className="h-0 w-0
            2xl:border-t-[675px] border-t-transparent border-t-[665px]
            2xl:border-r-[1375px] border-r-orange border-r-[500px]
            sm:border-t-[825px] md:border-t-[810px] lg:border-t-[510px] xl:border-t-[635px]
            sm:border-r-[600px] md:border-r-[728px] lg:border-r-[985px] xl:border-r-[1240px]
            absolute bottom-0 right-0 z-10"></div>
         </div>
        <div className="flex justify-center items-center flex-col 2xl:px-20 px-10 lg:py-0 py-8 z-20">
          <img className="w-full xl:max-w-none max-w-64 sm:max-w-96" src="/logo.svg" alt="" />
          <h1 className="tracking-tighter max-w-80 text-3xl sm:text-5xl text-center text-beige pt-8 lg:hidden scale-y-125">ПРОМЫШЛЕННАЯ КУЛИНАРИЯ</h1>
          <span className="flex justify-center text-xl sm:text-2xl md:text-3xl xl:text-4xl mt-8 font-normal text-beige font-vox">создаем вкус будущего</span>
          <a href="" className="mt-10 lg:absolute lg:-bottom-[25%] xl:-bottom-[21%] lg:left-1/2 lg:-translate-x-5 xl:-translate-x-8 z-10">
            <img src="/banner-arr.svg" alt="" className="lg:h-[80px] lg:w-[80px] xl:h-[90px] xl:w-[90px]"/>
          </a>
          <img src="/cook.svg" alt="" className="absolute hidden lg:block lg:w-[360px] lg:-bottom-[88%] lg:left-1/3 xl:w-[460px] xl:-bottom-[85%] xl:left-1/3"/>
          </div>
          <div className="w-8/12 ml-26 max-w-4xl pr-20 z-20 hidden lg:block">
            <ol className="w-full tracking-tighter xl:text-6xl md:text-5xl text-4xl">
              <li className="translate-x-10"><a href="#com">КОМПАНИЯ</a></li>
              <li className="-rotate-90 -translate-y-16 2xl:text-7xl"><a href="">ПАРТНЕРЫ</a></li>
              <li className="text-right translate-x-24 -translate-y-20"><a href="">ВАКАНСИИ</a></li>
              <li className="text-right -translate-y-10"><a href="">ПРОДУКТЫ</a></li>
              <li className="translate-x-28 translate-y-52"><a href="" className="">GREENSHAKE</a></li>
              <li className="-rotate-90 translate-x-64 -translate-y-40"><a href="">КОНТАКТЫ</a></li>
            </ol>
          </div>
        <div className="hidden lg:block">
          <div className="absolute left-2/4 translate-x-28 top-96 z-20 flex flex-col items-end">
            <span className="h-2 w-12 bg-beige"></span>
            <span className="h-4 w-5 bg-dark-800 mt-3"></span>
          </div>
                <div className="w-0 h-0 -rotate-[80deg] absolute left-2/4 translate-y-10 z-20
    border-t-[50px] border-t-transparent
      border-l-[129px] border-l-beige
      border-b-[240px] border-b-transparent"></div>
      <span className="absolute -right-2 bottom-20 h-16 w-36 bg-beige -rotate-[35deg] z-20"></span>
    </div>
    <div className="absolute w-[6%] sm:w-[120px] md:w-[150px] lg:w-[200px] xl:w-[250px] 2xl:w-[276px] h-[1060px] -right-[5%] sm:-right-[20%] -top-[20%] z-0 lg:-top-[25%] bg-dark-400 overflow-hidden"></div>
    <div className="h-0 w-0
        border-t-[52px] lg:border-t-[75px] border-t-transparent
        border-r-[52px] lg:border-r-[75px] border-r-dark-400
        border-b-[52px] lg:border-b-[75px] border-b-transparent
         absolute -top-[100px] lg:-top-[148px] right-0">
          <div className="translate-x-7 -translate-y-3 lg:hidden">
            <span className="block h-[3px] w-8 bg-black rounded-sm mb-2"></span>
            <span className="block h-[3px] w-8 bg-black rounded-sm mb-2"></span>
            <span className="block h-[3px] w-8 bg-black rounded-sm"></span>
          </div>
          </div>
         <div className="absolute w-[102%] sm:w-[700px] md:w-[860px] lg:w-[1166px] xl:w-[1475px] 2xl:w-[1637px] h-[165px] lg:h-[185px] -right-[6%] sm:-right-[20%] z-0 -bottom-[18%] lg:-bottom-[25%] bg-dark-400 overflow-hidden"></div>
         <div className="h-0 w-0
        border-t-[50px] lg:border-t-[75px] border-t-transparent
        border-r-[50px] lg:border-r-[75px] border-r-beige
        border-b-[50px] lg:border-b-[75px] border-b-transparent
         absolute -bottom-[98px] lg:-bottom-[148px] left-3 rotate-180"></div>
              <div className="absolute left-2 lg:-left-16 lg:-top-20 flex flex-col items-center z-40">
              <div className="border-2 border-beige flex justify-center">
                <div className=" h-full w-3 lg:w-5 bg-orange
                  border-l-[2px] border-l-beige
                   border-t-[450px] sm:border-t-[640px] lg:border-t-[640px] xl:border-t-[760px] 2xl:border-t-[790px] border-t-transparent
                  border-r-[2px] border-r-beige
                  "></div>
              </div>
                <div className="w-6 h-6 lg:h-9 lg:w-9 border-2 border-beige rounded-full bg-orange mt-3"></div>
              </div>
              <div className="absolute right-2 top-24 lg:-right-16 lg:-top-20 flex flex-col items-center z-40">
              <div className="border-2 border-beige flex justify-center">
                <div className=" h-full w-3 lg:w-5 bg-dark-800
                  border-l-[2px] border-l-beige
                 border-t-[450px] sm:border-t-[640px] lg:border-t-[640px] xl:border-t-[760px] 2xl:border-t-[790px] border-t-transparent
                  border-r-[2px] border-r-beige
                  "></div>
              </div>
                <div className="w-6 h-6 lg:h-9 lg:w-9 border-2 border-beige rounded-full bg-dark-800 mt-3"></div>
              </div>
          </div>  
        </div>
      </main>
      <section id="com" className="bg-orange relative z-30 pb-48 border-t-2 border-beige lg:border-0">
        <header className="py-5">
          <div className="container 2xl:px-[80px]">
            <div className="flex items-center">
              <a href="" className="flex items-center">
              <Image
                  aria-hidden
                  src="/logo.svg"
                  alt="File icon"
                  width={70}
                  height={82}
                />
                <span className="text-4xl tracking-tighter text-beige ml-4 scale-y-125">КУЛПРОМ</span>
                </a>
                <ol className="lg:flex gap-x-8 ml-56 text-xl tracking-tighter hidden">
                  <li className=""><a href="" >КОМПАНИЯ</a></li>
                  <li className=""><a href="" >ПАРТНЕРЫ</a></li>
                  <li className=""><a href="" >ПРОДУКТЫ</a></li>
                  <li className=""><a href="" >ВАКАНСИИ</a></li>
                  <li className=""><a href="" >GREENSHAKE</a></li>
                  <li className=""><a href="" >КОНТАКТЫ</a></li>
                </ol>
                <div className="w-[4%] sm:w-[10%] bg-dark-400  absolute top-0  right-0 lg:hidden">
                <div className="h-0 w-0
        border-t-[52px] lg:border-t-[75px] border-t-transparent
        border-r-[52px] lg:border-r-[75px] border-r-dark-400
        border-b-[52px] lg:border-b-[75px] border-b-transparent
        -translate-x-[51px]
        ">
          <div className="translate-x-7 -translate-y-3 lg:hidden">
            <span className="block h-[3px] w-8 bg-black rounded-sm mb-2"></span>
            <span className="block h-[3px] w-8 bg-black rounded-sm mb-2"></span>
            <span className="block h-[3px] w-8 bg-black rounded-sm"></span>
          </div>
          </div>
          </div>
              </div>
          </div>
        </header>
        <div className="lg:container 2xl:px-[80px]">
          <div className="flex flex-col lg:flex-row items-center justify-between pb-0 pt-12 lg:py-20 lg:pt-32 relative">
            <div className="container basis-6/12 relative z-30  lg:mb-0 -mb-28 flex flex-col items-center lg:items-start">
            <div className="flex items-start lg:block">
              <h2 className="text-white text-4xl lg:text-6xl tracking-tighter uppercase whitespace-nowrap [writing-mode:vertical-lr] lg:[writing-mode:horizontal-tb] -scale-100 lg:scale-100 mr-8">О компании</h2>
              <p className="text-beige lg:my-14 max-w-xl font-vox font-bold z-40">Figma ipsum component variant main layer. Stroke bullet comment ipsum boolean reesizing vector rotate strikethrough horizontal. Ipsum flatten figjam outline polygon main edit library blur subtract. Vector outline asset vector follower bold. Asset follower layout star scale follower shadow inspect link distribute. Stroke strikethrough content move frame. Asset hand union library layout. Export background variant.</p>
              </div>
              <a href="" className="bg-dark-800 font-vox font-bold rounded-md py-4 w-96 inline-flex items-center justify-center relative after:absolute after:-right-6 after:h-10 after:w-9 after:bg-beige lg:after:bg-dark-400 after:rounded-sm before:absolute before:-left-6 before:h-10 before:w-9 before:bg-orange lg:before:bg-beige before:rounded-sm hover:after:translate-x-5 hover:before:-translate-x-5 transition-all delay-500 z-50 translate-y-40 lg:translate-y-0">Контакты</a>    
            </div>
            <div className="after:border-l-[520px] after:border-l-transparent
      after:border-t-[200px]  after:border-t-orange 
     after:border-r-[520px]  after:border-r-transparent after:-bottom-[190px] z-20 after:absolute relative lg:border-0 flex justify-center items-center lg:hidden"></div>
            <div className="bg-dark-400 pt-[600px] lg:bg-transparent w-full flex flex-col lg:basis-6/12 h-96 py-64 lg:py-0 text-4xl tracking-tighter uppercase z-10 pb-96">
            <div className="flex flex-col items-center justify-center container lg:static relative">
              <span className="z-30 rotate-[40deg] -translate-y-32 -translate-x-28 sm:-translate-y-72 sm:-translate-x-56 lg:-translate-y-20 lg:-translate-x-32">Роллом</span>
              <span className="z-30 rotate-[40deg] absolute left-72 lg:right-28 bottom-0 lg:bottom-80 xl:bottom-60 lg:left-auto">Бей</span>
              <span className="z-30 rotate-[10deg] absolute left-5 -bottom-8 sm:bottom-36 sm:-translate-x-12 lg:left-auto">Вкусным</span>
              <span className="z-30 absolute -bottom-36 lg:-bottom-2 left-2/3 lg:left-auto lg:right-0">Голод</span>
              <span className="h-[263px] w-[263px] sm:h-[363px] sm:w-[363px] lg:h-[442px] lg:w-[442px] rounded-full bg-orange z-20 absolute lg:-bottom-0 lg:-right-14"></span>
              <div className="w-0 h-0 -rotate-[80deg] absolute left-[20%] -bottom-20  sm:left-40 sm:bottom-0  lg:left-2/3 lg:bottom-48 scale-100 sm:scale-150 lg:scale-[1.7] xl:scale-[2] z-20
            border-t-[50px] border-t-transparent
            border-l-[129px] border-l-dark-800
            border-b-[240px] border-b-transparent"></div>
              <span className="absolute -top-36 sm:-top-48 lg:right-40 lg:top-32 h-12 w-24 md:h-20 md:w-44 bg-beige -rotate-[35deg] z-10"></span>
              <span className="bg-orange h-16 w-7 md:h-28 md:w-11 absolute -bottom-28 left-24 lg:bottom-0 lg:right-96 z-10 lg:left-auto"></span>
              <div className="absolute -left-28 -bottom-36 sm:left-2/4 translate-x-32 sm:bottom-32 z-20 flex flex-col items-end lg:right-auto">
              <span className="h-2 w-12 bg-beige"></span>
              <span className="h-4 w-5 bg-dark-800 mt-3"></span>
            </div>
            </div>
            <div className="bg-dark-400 h-[800px] xl:w-[1100px] lg:w-[790px] absolute top-0 -right-[20%]
             border-t-[740px] border-t-transparent
              border-l-[175px] border-l-orange hidden lg:block
            "></div>
            <div className="h-0 w-0 xl:border-r-[1340px] lg:border-r-[940px] border-r-transparent
              border-t-[180px] border-t-orange -rotate-1
              absolute -top-3 -right-[35%]"></div>
          </div>
          </div>
        </div>
        </section>
        <section className="bg-dark-800 lg:py-20 relative z-50 lg:z-30 pb-0 lg:pb-48 
         lg:before:border-t-[160px] before:border-t-transparent
        lg:before:border-l-[2375px] before:border-l-dark-800
        lg:before:absolute before:-top-40
        after:border-l-[520px] after:border-l-transparent
      after:border-b-[200px]  after:border-b-orange 
     after:border-r-[520px]  after:border-r-transparent after:-top-[390px] after:absolute lg:after:border-none
     flex items-center justify-center
        ">
          <div className="2xl:px-[80px] -translate-y-72 lg:translate-y-0 relative z-10 overflow-hidden pb-[300px] lg:pb-0">
            <h2 className="text-white text-4xl lg:text-6xl tracking-tighter uppercase lg:mb-24 mb-9 text-center lg:text-left">Продукты</h2>
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
                <div className="lg:flex justify-center hidden">
                  <a href="" className="bg-dark-400 font-vox font-bold rounded-md mt-24 py-4 md:w-96 inline-flex items-center justify-center relative after:absolute after:-right-6 after:h-10 after:w-9 after:bg-dark-800 lg:after:bg-orange after:rounded-sm before:absolute before:-left-6 before:h-10 before:w-9 before:bg-orange  lg:before:bg-beige before:rounded-sm hover:after:translate-x-5 hover:before:-translate-x-5 transition-all delay-500 w-64 ">Оставить заявку</a>
                </div>
                </div>
                <div className="basis-6/12 -mb-44">
                <div className="embla" ref={emblaRef}>
                      <div className="embla__container h-full w-full max-h-[280px] sm:max-h-[380px] lg:max-h-[470px]">
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
          </div>
        </section>
        <section className="bg-beige py-28 pt-0 relative z-50 lg:pt-36 -mt-[300px] lg:mt-0
         lg:before:border-t-[360px] before:border-t-dark-800 before:border-t-[240px]
          lg:before:border-l-[3775px] before:border-l-transparent
          md:before:border-r-[1680px] before:border-r-transparent before:border-r-[1100px]
          before:absolute before:-top-20 lg:before:top-0
          after:border-b-[680px] md:after:border-b-[360px] md:after:border-b-dark-800 after:border-b-orange
          after:border-l-[1775px] md:after:border-l-[3775px] after:border-l-transparent
          after:absolute after:-bottom-1 after:-translate-x-10
        ">
          <div className="lg:hidden flex justify-center">
                  <a href="" className="bg-dark-400 font-vox font-bold rounded-md mt-24 py-4 md:w-96 inline-flex items-center justify-center relative after:absolute after:-right-6 after:h-10 after:w-9 after:bg-dark-800 lg:after:bg-orange after:rounded-sm before:absolute before:-left-6 before:h-10 before:w-9 before:bg-orange  lg:before:bg-beige before:rounded-sm hover:after:translate-x-5 hover:before:-translate-x-5 transition-all delay-500 w-64 ">Оставить заявку</a>
                </div>
          <div className="container 2xl:px-[80px] pt-28 lg:pt-0">
            <div className="flex justify-between lg:hidden">
            <div className="w-0 h-0 -rotate-[70deg] -scale-[.7] sm:-scale-90 z-20 basis-1/3
            border-t-[50px] border-t-transparent
            border-l-[129px] border-l-orange
            border-b-[240px] border-b-transparent block lg:hidden"></div>
              <img src="/broccoli.svg" alt="" className="w-full h-full basis-1/3"/>
            </div>
            <h2 className="text-dark-800 text-6xl tracking-tighter uppercase hidden lg:block">ПРЕИМУЩЕСТВА</h2>
            <div className="flex justify-between items-center flex-col-reverse lg:flex-row relative z-40">
              <div className="basis-5/12 mt-24">
              <div className="lg:hidden block text-center text-5xl uppercase  tracking-tighter mb-8">
                <span className="text-dark-800 block">ПРЕИМУЩЕСТВО</span>
                <span className="text-dark-800">работы с нами</span>
              </div>
              <div className="grid grid-cols-2 grid-rows-2 gap-12 text-center font-vox font-bold">
                <div className="flex flex-col justify-center items-center">
                  <div className="h-20 w-20 sm:h-32 sm:w-32 rounded-full bg-orange mb-10"></div>
                  <h3 className="text-dark-800 text-lg sm:text-2xl">Figma ipsum component variant main layer. </h3>
                </div>
                <div className="flex flex-col justify-center items-center ">
                  <div className="h-20 w-20 sm:h-32 sm:w-32 rounded-full bg-orange  mb-10"></div>
                  <h3 className="text-dark-800 text-lg sm:text-2xl">Figma ipsum component variant main layer. </h3>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="h-20 w-20 sm:h-32 sm:w-32 rounded-full bg-orange  mb-10"></div>
                  <h3 className="text-dark-800 text-lg sm:text-2xl">Figma ipsum component variant main layer. </h3>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="h-20 w-20 sm:h-32 sm:w-32 rounded-full bg-orange  mb-10"></div>
                  <h3 className="text-dark-800 text-lg sm:text-2xl ">Figma ipsum component variant main layer. </h3>
                </div>
              </div>
              </div>
              <div className="basis-5/12">
              <div className="text-center text-5xl uppercase  tracking-tighter mb-8">
                <span className="text-orange block">Как нужно</span>
                <span className="text-dark-800">РАЗРЕЗЫВАТЬ СЭНДВИЧ</span>
              </div>
                <img src="/slicing.png" alt="" className="z-40 relative"/>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-orange md:bg-dark-800 relative z-[80] -mb-16 md:mb-0 md:py-20 md:z-20 px-10 md:px-0 ">
      <div className="flex justify-center md:justify-between items-center">
          <div className="hidden md:block">
          <Image
                  aria-hidden
                  src="/plate-1.png"
                  alt="File icon"
                  width={181}
                  height={181}
                />
              </div>
          <div className="flex flex-col items-center max-w-md w-full md-w-[477px]">
            <h2 className="text-white text-4xl tracking-tighter uppercase text-center w-96 mb-9">ОСТАВЬТЕ ЗАЯВКУ
            НА СОТРУДНИЧЕСТВО</h2>
            <div className="flex font-vox font-bold w-full mb-8">
              <button className="border border-dark-400 text-dark-400 basis-1/2 py-4 rounded-md">Клиенты</button>
              <button className="border border-dark-400 text-dark-400 basis-1/2 py-4 rounded-md">Поставщики</button>
            </div>
            <form action="" className="font-vox text-sm flex flex-col items-center w-full text-white">
              <input type="text" className="bg-transparent border border-white rounded-md py-5 px-8 w-full mb-5 placeholder-white" placeholder="Ваше ФИО*"/>
              <input type="text" className="bg-transparent border border-white rounded-md py-5 px-8 w-full mb-5 placeholder-white" placeholder="Телефон*"/>
              <input type="text" className="bg-transparent border border-white rounded-md py-5 px-8 w-full mb-5 placeholder-white" placeholder="E-mail*"/>
              <span className="text-center max-w-80 block mx-auto">Нажимая кнопку отправить, вы принимаете соглашение о разглашении персональных данных</span>
              <button className="bg-dark-400 text-lg font-vox font-bold rounded-md mt-6 py-4 w-72 md:w-96 inline-flex items-center justify-center relative after:absolute after:-right-6 after:h-10 after:w-9 after:bg-dark-800 md:after:bg-orange after:rounded-sm before:absolute before:-left-6 before:h-10 before:w-9 before:bg-beige before:rounded-sm hover:after:translate-x-5 hover:before:-translate-x-5 transition-all delay-500">Оставить заявку</button>
            </form>
            </div>
            <div className="hidden md:block">
            <Image
                  aria-hidden
                  src="/plate-2.png"
                  alt="File icon"
                  width={181}
                  height={181}
                />
            </div>
            </div>
        </section>
        <section className="bg-dark-400 md:bg-orange pt-20 md:py-20 relative z-40 flex justify-center
        md:after:border-l-[1100px] after:border-l-transparent
      md:after:border-t-[125px] after:border-t-orange
      md:after:border-r-[1100px] md:after:border-r-transparent
        after:absolute md:after:-bottom-[32%]
        ">
          <div className="border-l-[500px] border-l-transparent
      border-t-[325px]  border-t-orange 
     border-r-[500px]  border-r-transparent top-0 absolute md:border-0"></div>
          <div className="container z-10">
            <h2 className="text-white text-6xl tracking-tighter uppercase mb-20 hidden md:flex">С КЕМ МЫ РАБОТАЕМ</h2>
            <h2 className="uppercase text-center font-vox font-bold md:hidden mb-11 mt-24">Наши партнеры</h2>
            <div className="flex items-center justify-between flex-col md:flex-row gap-14 xl:gap-48">
              <div className="basis-1/3 flex justify-center"><img src="/vkusvill_textlogo.svg" alt="" className="w-3/4 md:w-full" /></div>
              <div className="basis-1/3 flex justify-center"><img src="/vprokru_logo.svg" alt="" className="w-3/4 md:w-full" /></div>
              <div className="basis-1/3 flex justify-center"><img src="/5.svg" alt="" className="w-3/4 md:w-full" /></div>
            </div>
          </div>
          <div className="w-0 h-0 -rotate-[80deg] absolute left-2/3 translate-x-56 -bottom-[60%] scale-90 z-20
            border-t-[50px] border-t-transparent
            border-l-[129px] border-l-dark-800
            border-b-[240px] border-b-transparent hidden md:block"></div>
        </section>
        <section className="bg-dark-400 pt-32 pb-56 z-40 relative">
            <div className="w-0 h-0 rotate-[40deg] absolute right-14 -translate-y-2 bottom-5 z-20 hidden md:block
            border-t-[50px] border-t-transparent
            border-l-[129px] border-l-dark-800
            border-b-[240px] border-b-transparent"></div>
          <div className="md:container">
            <h2 className="text-white text-4xl sm:text-6xl text-center md:text-left tracking-tighter uppercase mb-10 md:mb-20">ВАКАНСИИ</h2>
              <div className="embla" ref={emblaVacancies}>
                <div className="embla__container h-full w-full lg:gap-5">
                  <div className="embla__slide font-vox text-dark-800 w-56 max-w-56 lg:w-64  lg:max-w-64"><img src="/v-1.jpg" alt="" />
                    <h3 className="text-2xl font-bold uppercase my-3">Технолог</h3>
                    <span>ЗП от 78000 руб</span>
                    <p className="mt-5">Figma ipsum component variant main layer. Opacity duplicate flatten clip pencil rectangle. Horizontal.</p>
                  </div>
                  <div className="embla__slide font-vox text-dark-800 w-56 max-w-56 lg:w-64  lg:max-w-64"><img src="/v-1.jpg" alt="" />
                    <h3 className="text-2xl font-bold uppercase my-3">Технолог</h3>
                    <span>ЗП от 78000 руб</span>
                    <p className="mt-5">Figma ipsum component variant main layer. Opacity duplicate flatten clip pencil rectangle. Horizontal.</p>
                  </div>
                  <div className="embla__slide font-vox text-dark-800 w-56 max-w-56 lg:w-64  lg:max-w-64"><img src="/v-1.jpg" alt="" />
                    <h3 className="text-2xl font-bold uppercase my-3">Технолог</h3>
                    <span>ЗП от 78000 руб</span>
                    <p className="mt-5">Figma ipsum component variant main layer. Opacity duplicate flatten clip pencil rectangle. Horizontal.</p>
                  </div>
                  <div className="embla__slide font-vox text-dark-800 w-56 max-w-56 lg:w-64  lg:max-w-64"><img src="/v-1.jpg" alt="" />
                    <h3 className="text-2xl font-bold uppercase my-3">Технолог</h3>
                    <span>ЗП от 78000 руб</span>
                    <p className="mt-5">Figma ipsum component variant main layer. Opacity duplicate flatten clip pencil rectangle. Horizontal.</p>
                  </div>
                  <div className="embla__slide font-vox text-dark-800 w-56 max-w-56 lg:w-64  lg:max-w-64"><img src="/v-1.jpg" alt="" />
                    <h3 className="text-2xl font-bold uppercase my-3">Технолог</h3>
                    <span>ЗП от 78000 руб</span>
                    <p className="mt-5">Figma ipsum component variant main layer. Opacity duplicate flatten clip pencil rectangle. Horizontal.</p>
                  </div>
                  <div className="embla__slide font-vox text-dark-800 w-56 max-w-56 lg:w-64  lg:max-w-64"><img src="/v-1.jpg" alt="" />
                    <h3 className="text-2xl font-bold uppercase my-3">Технолог</h3>
                    <span>ЗП от 78000 руб</span>
                    <p className="mt-5">Figma ipsum component variant main layer. Opacity duplicate flatten clip pencil rectangle. Horizontal.</p>
                  </div>
                  <div className="embla__slide font-vox text-dark-800 w-56 max-w-56 lg:w-64  lg:max-w-64"><img src="/v-1.jpg" alt="" />
                    <h3 className="text-2xl font-bold uppercase my-3">Технолог</h3>
                    <span>ЗП от 78000 руб</span>
                    <p className="mt-5">Figma ipsum component variant main layer. Opacity duplicate flatten clip pencil rectangle. Horizontal.</p>
                  </div>
              </div>
              <div className="hidden md:flex items-center justify-center gap-4 mt-10">
                <button className="embla__prev" onClick={scrollPrevVac}>
                <img src="/ei_arrow-down_b.svg" alt="" />
                </button>
                <button className="embla__next rotate-180" onClick={scrollNextVac}>
                <img src="/ei_arrow-down_b.svg" alt="" />
                </button>
              </div>
            </div>
            <div className="flex justify-center mt-6 pb-20">
              <button className="bg-white font-bold text-dark-800 mx-auto font-vox rounded-md mt-6 py-4 w-72 md:w-96 inline-flex items-center justify-center relative after:absolute after:-right-6 after:h-10 after:w-9 after:bg-orange after:rounded-sm before:absolute before:-left-6 before:h-10 before:w-9 before:bg-beige before:rounded-sm hover:after:translate-x-5 hover:before:-translate-x-5 transition-all delay-500">Заполнить анкету</button>
            </div>
          </div>
        </section>
        <footer className="bg-orange pb-40 relative z-50 flex justify-center
        after:border-l-[500px] md:after:border-l-[1100px] after:border-l-transparent
      after:border-b-[225px] md:after:border-b-[125px] after:border-b-orange
     after:border-r-[500px] md:after:border-r-[1100px] after:border-r-transparent
        after:absolute after:-top-[15%] md:after:-top-28">
          <div className="container">
            <div className="flex flex-col items-center relative lg:hidden z-10 -mt-52">
            <h2 className="text-white text-4xl tracking-tighter uppercase mb-14 lg:mb-5">Контакты</h2>
            <a href="" className="text-3xl block">+7 (999) 999-99-99</a>
            <a href="" className="text-3xl">info@kulprom.ru</a>
            </div>
            <div className="flex bg-beige py-12 px-11 rounded-2xl relative z-20 mt-16 min-h-72 lg:min-h-96">
              <div className="bg-dark-400 py-6 px-20 lg:flex flex-col items-center rounded-2xl hidden">
                <h2 className="text-white text-5xl tracking-tighter uppercase mb-5">Контакты</h2>
                <a href="" className="text-3xl">+7 (999) 999-99-99</a>
                <a href="" className="text-3xl">info@kulprom.ru</a>
                  <div className="flex items-center gap-12 mt-10 mb-9">
                    <a href=""><img src="/youtube.svg" alt="" /></a>
                    <a href=""><img src="/vk.svg" alt="" /></a>
                  </div>
                <button className="bg-dark-800 font-bold lg:text-white mx-auto font-vox rounded-md py-4 w-72 inline-flex items-center justify-center relative after:absolute after:-right-6 after:h-10 after:w-9 after:bg-orange after:rounded-sm before:absolute before:-left-6 before:h-10 before:w-9 before:bg-beige before:rounded-sm hover:after:translate-x-5 hover:before:-translate-x-5 transition-all delay-500">Как проехать</button>
              </div>
            </div>
            <div className="lg:hidden flex flex-col items-center">
                  <div className="flex items-center gap-12 mt-10 mb-9">
                    <a href=""><img src="/youtube.svg" alt="" /></a>
                    <a href=""><img src="/vk.svg" alt="" /></a>
                  </div>
                <button className="bg-dark-800 font-bold text-beige mx-auto font-vox rounded-md py-4 w-72 inline-flex items-center justify-center relative after:absolute after:-right-6 after:h-10 after:w-9 after:bg-beige after:rounded-sm before:absolute before:-left-6 before:h-10 before:w-9 before:bg-dark-400 before:rounded-sm hover:after:translate-x-5 hover:before:-translate-x-5 transition-all delay-500">Как проехать</button>
            </div>
            <div className="mt-16 flex justify-between flex-col xl:flex-row">
              <div className="flex basis-9/12 justify-between w-full flex-col lg:flex-row items-center lg:items-start">
              <a href="" className="flex items-center">
              <Image
                  aria-hidden
                  src="/logo.svg"
                  alt="File icon"
                  width={70}
                  height={82}
                />
                <span className="text-4xl tracking-tighter text-beige ml-4 scale-y-125">КУЛПРОМ</span>
                </a>
                  <ol className="grid grid-cols-2 sm:grid-cols-3 gap-x-14 gap-y-5 ml-0 xl:ml-56 text-2xl tracking-tighter basis-8/12 pt-4">
                    <li className=""><a href="" >КОМПАНИЯ</a></li>
                    <li className=""><a href="" >ПАРТНЕРЫ</a></li>
                    <li className=""><a href="" >ПРОДУКТЫ</a></li>
                    <li className=""><a href="" >ВАКАНСИИ</a></li>
                    <li className=""><a href="" >GREENSHAKE</a></li>
                    <li className=""><a href="" >КОНТАКТЫ</a></li>
                  </ol>
                </div>
                <div className="grid grid-cols-1 xl:gap-y-6 font-vox font-bold text-beige pt-4 text-center xl:text-left mt-8 xl:mt-0">
                  <a href="">Договор оферты</a>
                  <a href="">Политика конфиденциальности</a>
                </div>
            </div>
          </div>
        </footer>
    </div>
   
  );
}
