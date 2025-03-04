'use client'
import React, { useCallback, useEffect, useState } from 'react'
export default function BannerLogo () {
      const [op, setOp] = useState('opacity-0');
      const [opy, setOpy] = useState('opacity-1');
       function vkl() {
          setOp('opacity-100')
       }
       setTimeout(vkl, 500)
    //    document.onclick = function() {
    //     setOpy('-translate-y-72')
    //    }
    const [w, setW] = useState('opacity-1 translate-y-0');
        function vkl1() {
          setW('opacity-0 -translate-y-96')
       }
    
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
              if(scrollPosition > 240){
                setOpy('opacity-0')
                setTimeout(vkl1, 200)
              }
            });
    return (
      <div className="flex justify-center items-center flex-col 2xl:px-20 px-10 lg:py-0 py-8 z-20">
                <img className={`w-full xl:max-w-none max-w-64 sm:max-w-96 transition-all duration-1000 ease-in-out ${op}`} src="/logo.svg" alt=""/>
                <h1 className={`tracking-tight max-w-80 text-3xl sm:text-5xl text-center text-beige pt-8 lg:hidden scale-y-125 transition-all duration-1000 ease-in-out delay-500 ${op}`}>ПРОМЫШЛЕННАЯ КУЛИНАРИЯ</h1>
                <span className={`flex justify-center text-xl sm:text-2xl md:text-3xl xl:text-4xl mt-8 font-normal text-beige font-vox transition-all duration-1000 ease-in-out delay-500 ${op}`}>создаем вкус будущего</span>
                <a href="" className={`mt-10 lg:absolute lg:-bottom-[25%] xl:-bottom-[21%] lg:left-1/2 lg:-translate-x-5 xl:-translate-x-8 z-10 transition-all duration-1000 ${opy}`}>
                  <img src="/banner-arr.svg" alt="" className="lg:h-[80px] lg:w-[80px] xl:h-[90px] xl:w-[90px]"/>
                </a>
                <img src="/cook.svg" alt="" className={`absolute hidden lg:block lg:w-[360px] lg:-bottom-[88%] lg:left-1/3 xl:w-[460px] xl:-bottom-[85%] xl:left-1/3 transition-all duration-[1300ms] ${w}`}/>
                </div>

)
}