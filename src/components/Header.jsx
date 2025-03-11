'use client'
import React, { useCallback, useEffect, useState } from 'react'
import MobMenu from './MobMenu';
import Image from "next/image";
export default function Header () {
    const [isOpen, setOpen] = useState();
    function contains() {
        () => setOpen(!isOpen)
    }
    return (
        <header className="py-5 relative z-50">
        <div className="container 2xl:px-[80px]">
          <div className="flex items-center">
            <a href="" className="flex items-center">
              <img src="/logo.svg" alt="" className="h-[82px]" />
              <span className="text-4xl tracking-tight text-beige ml-4 scale-y-125">КУЛПРОМ</span>
              </a>
              <ol className="lg:flex gap-x-8 ml-36 xl:ml-56 text-xl tracking-tight hidden">
                <li className="hover:animate-pulse"><a href="" >КОМПАНИЯ</a></li>
                <li className="hover:animate-pulse"><a href="" >ПАРТНЕРЫ</a></li>
                <li className="hover:animate-pulse"><a href="" >ПРОДУКТЫ</a></li>
                <li className="hover:animate-pulse"><a href="" >ВАКАНСИИ</a></li>
                <li className="hover:animate-pulse"><a href="" >GREENSHAKE</a></li>
                <li className="hover:animate-pulse"><a href="" >КОНТАКТЫ</a></li>
              </ol>
              <div className="w-[4%] sm:w-[10%] bg-dark-400 z-20  absolute top-0  right-0 lg:hidden">
                <div className="relative border-b-2 border-beige">
                <div className="absolute -top-2 -left-12 border-t-[65px] border-t-transparent border-r-[44px] border-r-beige rotate-12 "></div>
                <div className="absolute top-[48px] -left-[48px] border-b-[63px] border-b-transparent border-r-[44px] border-r-beige   -rotate-[10deg]"></div>
                  <div className="h-0 w-0
          border-t-[52px] lg:border-t-[75px] border-t-transparent
          border-r-[52px] lg:border-r-[75px] border-r-dark-400
          border-b-[52px] lg:border-b-[75px] border-b-transparent
          -translate-x-[51px] 
          ">
        <button className="translate-x-7 -translate-y-3 lg:hidden"  onClick={contains}>
          <span className="block h-[3px] w-8 bg-black rounded-sm mb-2"></span>
          <span className="block h-[3px] w-8 bg-black rounded-sm mb-2"></span>
          <span className="block h-[3px] w-8 bg-black rounded-sm"></span>
        </button>
        </div>
        </div>
        </div>
            </div>
        </div>
      </header>
)
}