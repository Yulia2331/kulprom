'use client'
import React, { useCallback, useEffect, useState } from 'react'
export default function Partners () {
        const [op, setOp] = useState('opacity-0 -translate-y-96');
       const onScroll = useCallback(event => {
                            const { pageYOffset, scrollY } = window;
                            if(scrollY > 4750 || pageYOffset > 4750){
                              setOp('opacity-1 translate-y-0')
                                    }
                        }, []);
                      
                        useEffect(() => {
                          //add eventlistener to window
                          window.addEventListener("scroll", onScroll, { passive: true });
                          // remove event on unmount to prevent a memory leak with the cleanup
                          return () => {
                             window.removeEventListener("scroll", onScroll, { passive: true });
                          }
                        }, []);
    return (
        <section className="bg-dark-400 md:bg-orange pt-20 md:py-20 relative z-40 flex justify-center
                md:after:border-l-[1100px] after:border-l-transparent
              md:after:border-t-[125px] after:border-t-orange
              md:after:border-r-[1100px] md:after:border-r-transparent
                after:absolute md:after:-bottom-[30%]
                ">
                  <div className="border-l-[500px] border-l-transparent
              border-t-[325px]  border-t-orange 
             border-r-[500px]  border-r-transparent top-0 absolute md:border-0"></div>
                  <div className="container z-10">
                    <h2 className="text-white text-6xl tracking-tight uppercase mb-20 hidden md:flex">С КЕМ МЫ РАБОТАЕМ</h2>
                    <h2 className="uppercase text-center font-vox font-bold md:hidden mb-11 mt-24">Наши партнеры</h2>
                    <div className="flex items-center justify-between flex-col md:flex-row gap-14 xl:gap-48">
                      <div className="basis-1/3 flex justify-center"><img src="/vkusvill_textlogo.svg" alt="" className="w-3/4 md:w-full" /></div>
                      <div className="basis-1/3 flex justify-center"><img src="/vprokru_logo.svg" alt="" className="w-3/4 md:w-full" /></div>
                      <div className="basis-1/3 flex justify-center"><img src="/5.svg" alt="" className="w-3/4 md:w-full" /></div>
                    </div>
                  </div>
                  <div className={`w-0 h-0 -rotate-[80deg] absolute left-2/3 translate-x-56 -bottom-[60%] scale-90 z-20
                        md:border-t-[50px] border-t-transparent
                        md:border-l-[129px] border-l-dark-800
                        md:border-b-[240px] border-b-transparent border-0 transition-all duration-[2s] ${op}`}></div>
                </section>
    )
}