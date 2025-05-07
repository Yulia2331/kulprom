import React, { useCallback, useEffect, useState } from 'react'
import { Link, Element } from 'react-scroll'
import { Parallax } from 'react-scroll-parallax';
export default function BannerLogo () {

    return (

          <div className={`hidden lg:block h-[500px] w-screen bg-orange z-40 relative transition-all duration-[2300ms]`}>
             <Parallax translateY={['-20px', '250px']} scale={['1', '2']} opacity={['1', '0']} speed={-10}>
             <img  src="/cook.svg" alt="" className={`z-10 absolute hidden lg:block -top-32 left-1/3 transition-all duration-[2300ms] pointer-events-none`}/>
  </Parallax>
  <Link to="header" smooth={true} duration={1000}  className={`z-50 mt-10 lg:absolute lg:-top-[25%] xl:-top-[30%] lg:left-1/2 lg:-translate-x-5 xl:-translate-x-20 transition-all duration-1000`}>
                                  <img src="/banner-arr.svg" alt="" className="lg:h-[80px] lg:w-[80px] xl:h-[90px] xl:w-[90px]"/>
                                </Link>
              </div>

    )
}