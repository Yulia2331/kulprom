'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { Link, Element } from 'react-scroll'
export default function BannerMenu () {
  // const [op, setOp] = useState('opacity-0');
  const [t1, setT1] = useState('-translate-x-[380px]');
  const [t2, setT2] = useState('-translate-y-[600px]');
  const [t3, setT3] = useState('translate-x-[600px]');
  const [t4, setT4] = useState('translate-x-[600px]');
  const [t5, setT5] = useState('-translate-x-[380px]');
  const [t6, setT6] = useState('translate-y-[600px]');
  function vkl() {
    //  setOp('opacity-100')
     setT1('translate-x-10')
     setT2('-translate-y-16')
     setT3('translate-x-24')
     setT4('translate-x-0')
     setT5('translate-x-28 ')
     setT6('-translate-y-40')    
  }
  setTimeout(vkl, 800)
    return (
      <div className={`lg:w-8/12 ml-26 lg:max-w-4xl pr-20 z-20 hidden lg:block`}>
      <ol className="w-full tracking-tight xl:text-6xl md:text-5xl text-4xl">
        <li className={`hover:animate-pulse hover:scale-95 pointer-events-none transition-all duration-[1s] ease-in-out ${t1}`}>
          <Link to="company" smooth={true} duration={500} className={`cursor-pointer pointer-events-auto`}>КОМПАНИЯ</Link>
        </li>
        <li className={`-rotate-90  2xl:text-7xl hover:animate-pulse hover:scale-95 pointer-events-none transition-all duration-[1.2s] ease-in-out ${t2}`}>
          <Link to="partners" smooth={true} duration={500} className="cursor-pointer pointer-events-auto">ПАРТНЕРЫ</Link>
          </li>
        <li className={`text-right  hover:animate-pulse hover:scale-95 pointer-events-none -translate-y-20 transition-all duration-[1.5s] ease-in-out ${t3}`}>
          <Link to="vacancies" smooth={true} duration={500} className="cursor-pointer pointer-events-auto">ВАКАНСИИ</Link>
          </li>
        <li className={`text-right -translate-y-10 hover:animate-pulse hover:scale-95 pointer-events-none transition-all duration-[1.2s] ease-in-out ${t4}`}>
        <Link to="products" smooth={true} duration={500} className="cursor-pointer pointer-events-auto">ПРОДУКТЫ</Link>
          </li>
        <li className={`translate-y-52 hover:animate-pulse hover:scale-95 pointer-events-none transition-all duration-[1.2s] ease-in-out ${t5}`}>
          <Link to="greenshake" smooth={true} duration={500} className="cursor-pointer pointer-events-auto">GREENSHAKE</Link>
          </li>
        <li className={`-rotate-90 translate-x-64 hover:animate-pulse hover:scale-95 pointer-events-none transition-all duration-[1.2s] ease-in-out ${t6}`}>
          <Link to="contacts" smooth={true} duration={500} className="cursor-pointer pointer-events-auto">КОНТАКТЫ</Link>
          </li>
      </ol>
    </div>

)
}