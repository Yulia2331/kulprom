'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { Link, Element } from 'react-scroll'
export default function BannerMenu () {
  const [op, setOp] = useState('opacity-0');
  function vkl() {
     setOp('opacity-100')
  }
  setTimeout(vkl, 1000)
    return (
      <div className={`lg:w-8/12 ml-26 lg:max-w-4xl pr-20 z-20 hidden lg:block transition-all duration-1000 ease-in-out ${op}`}>
      <ol className="w-full tracking-tight xl:text-6xl md:text-5xl text-4xl">
        <li className="translate-x-10 hover:animate-pulse">
          <Link to="company" smooth={true} duration={500} className="cursor-pointer">КОМПАНИЯ</Link>
        </li>
        <li className="-rotate-90 -translate-y-16 2xl:text-7xl hover:animate-pulse">
          <Link to="partners" smooth={true} duration={500} className="cursor-pointer">ПАРТНЕРЫ</Link>
          </li>
        <li className="text-right translate-x-24 -translate-y-20 hover:animate-pulse">
          <Link to="vacancies" smooth={true} duration={500} className="cursor-pointer">ВАКАНСИИ</Link>
          </li>
        <li className="text-right -translate-y-10 hover:animate-pulse">
        <Link to="products" smooth={true} duration={500} className="cursor-pointer">ПРОДУКТЫ</Link>
          </li>
        <li className="translate-x-28 translate-y-52 hover:animate-pulse">
          <Link to="greenshake" smooth={true} duration={500} className="cursor-pointer">GREENSHAKE</Link>
          </li>
        <li className="-rotate-90 translate-x-64 -translate-y-40 hover:animate-pulse">
          <Link to="contacts" smooth={true} duration={500} className="cursor-pointer">КОНТАКТЫE</Link>
          </li>
      </ol>
    </div>

)
}