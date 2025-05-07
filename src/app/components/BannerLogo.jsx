'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { Link, Element } from 'react-scroll'
export default function BannerLogo () {
      const [op, setOp] = useState('opacity-0');
      const [opy, setOpy] = useState('opacity-1');
      // const [y, setY] = useState();
       function vkl() {
          setOp('opacity-100')
       }
       setTimeout(vkl, 300)
    return (
      <div className="flex justify-center items-center flex-col 2xl:px-20 px-10 lg:py-0 py-8 z-20">
                <img className={`w-full xl:max-w-none max-w-64 sm:max-w-96 transition-all duration-1000 ease-in-out ${op}`} src="/logo.svg" alt=""/>
                <h1 className={`tracking-tight max-w-80 text-3xl sm:text-5xl text-center text-beige pt-8 lg:hidden scale-y-125 transition-all duration-1000 ease-in-out delay-500 ${op}`}>ПРОМЫШЛЕННАЯ КУЛИНАРИЯ</h1>
                <span className={`flex justify-center text-xl sm:text-2xl md:text-3xl xl:text-4xl mt-8 font-normal text-beige font-vox transition-all duration-1000 ease-in-out delay-500 ${op}`}>создаем вкус будущего</span>
               <Link to="header" smooth={true} duration={1000}  className={`z-50 mt-10 lg:hidden transition-all duration-1000`}>
                  <img src="/banner-arr.svg" alt="" className="lg:h-[80px] lg:w-[80px] xl:h-[90px] xl:w-[90px]"/>
                </Link>
                </div>

)
}