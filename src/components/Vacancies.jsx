'use client'
import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
export default function Vacancies () {
    const [emblaRef, emblaApiRef] = useEmblaCarousel()
      const [emblaVacancies, emblaApiVac] = useEmblaCarousel({loop: true, breakpoints: {
        '(min-width: 1000px)': { loop: false },
      }})
    
       const scrollPrevVac = useCallback(() => {
          if (emblaApiVac) emblaApiVac.scrollPrev()
        }, [emblaApiVac])
      
        const scrollNextVac = useCallback(() => {
          if (emblaApiVac) emblaApiVac.scrollNext()
        }, [emblaApiVac])

        const [op, setOp] = useState('opacity-0 -translate-y-96');
const [scrollPosition, setScrollPosition] = useState(0);
            const handleScroll = () => {
                const position = window.pageYOffset;
                setScrollPosition(position);
            };
            
            useEffect(() => {
                window.addEventListener('scroll', handleScroll, { passive: true });
            
                return () => {
                    window.removeEventListener('scroll', handleScroll);
                };
            }, []);
            // console.log(scrollPosition);
            addEventListener("scroll", (event) => {
              if(scrollPosition > 5650){
                setOp('opacity-1 -translate-y-2')
              }
            });
    return (

<section id="vak" className="bg-dark-400 pt-32 pb-56 relative">         
            <div className={`w-0 h-0 rotate-[40deg] absolute right-14 -translate-y-2 bottom-5 z-20 hidden md:block
            border-t-[50px] border-t-transparent
            border-l-[129px] border-l-dark-800
            border-b-[240px] border-b-transparent transition-all duration-[2s] ${op}`}></div>
          <div className="md:container">
            <h2 className="text-white text-4xl sm:text-6xl text-center md:text-left tracking-tight uppercase mb-10 md:mb-20 ">ВАКАНСИИ</h2>
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

)
}