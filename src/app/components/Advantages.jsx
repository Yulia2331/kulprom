'use client'
import React, { useCallback, useEffect, useState } from 'react'
export default function Advantages () {
      const [op, setOp] = useState('opacity-0');
         const onScroll = useCallback(event => {
                        const { pageYOffset, scrollY } = window;
                        if(scrollY > 3100 || pageYOffset > 3100){
                          setOp('opacity-1')
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

<div className="basis-5/12 mt-24">
              <div className="lg:hidden block text-center text-5xl uppercase  tracking-tight mb-8">
                <span className="text-dark-800 block">ПРЕИМУЩЕСТВО</span>
                <span className="text-dark-800">работы с нами</span>
              </div>
              <div className="grid grid-cols-2 grid-rows-2 gap-12 text-center font-vox font-bold">
                <div className={`flex flex-col justify-center items-center transition-all duration-[1s] ${op}`}>
                  <div className="h-20 w-20 sm:h-32 sm:w-32 rounded-full bg-orange mb-10"></div>
                  <h3 className="text-dark-800 text-lg sm:text-2xl">Figma ipsum component variant main layer. </h3>
                </div>
                <div className={`flex flex-col justify-center items-center transition-all duration-[1.3s] ${op}`}>
                  <div className="h-20 w-20 sm:h-32 sm:w-32 rounded-full bg-orange  mb-10"></div>
                  <h3 className="text-dark-800 text-lg sm:text-2xl">Figma ipsum component variant main layer. </h3>
                </div>
                <div className={`flex flex-col justify-center items-center transition-all duration-[1.6s] ${op}`}>
                  <div className="h-20 w-20 sm:h-32 sm:w-32 rounded-full bg-orange  mb-10"></div>
                  <h3 className="text-dark-800 text-lg sm:text-2xl">Figma ipsum component variant main layer. </h3>
                </div>
                <div className={`flex flex-col justify-center items-center transition-all duration-[1.9s] ${op}`}>
                  <div className="h-20 w-20 sm:h-32 sm:w-32 rounded-full bg-orange  mb-10"></div>
                  <h3 className="text-dark-800 text-lg sm:text-2xl ">Figma ipsum component variant main layer. </h3>
                </div>
              </div>
              </div>

)
}