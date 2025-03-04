'use client'
import React, { useCallback, useEffect, useState } from 'react'
import Image from "next/image";
export default function MobMenu ({isOpen}) {
    // const [isOpen, setOpen] = useState();
    return (
        <div className={`z-[300] fixed top-0 left-0 bg-orange min-h-screen w-full ${isOpen ? '' : 'hidden'}`}>
        <div className="min-h-screen h-screen overflow-y-scroll overflow-x-hidden"> 
          <div className="relative ">
          <div className="overflow-hidden max-h-[1000px] min-h-[750px] absolute top-0 left-5 flex justify-between w-full">
            <div className="translate-y-[70%] left-5 flex flex-col items-center z-40">
              <div className="border-2 border-white flex justify-center">
                <div className=" h-full w-3 bg-beige
                  border-l-[2px] border-l-white
                  border-t-[480px] border-t-transparent
                  border-r-[2px] border-r-white
                  "></div>
              </div>
            </div>
            <div className="translate-y-[5%] -right-28 flex flex-col items-center z-40">
              <div className="border-2 border-beige flex justify-center rotate-90">
                <div className=" h-full w-3 bg-dark-800
                  border-l-[2px] border-l-beige
                  border-t-[480px] border-t-transparent
                  border-r-[2px] border-r-beige
                  "></div>
              </div>
            </div>
            </div>
          <img className="w-full max-w-36 absolute bottom-[8%] sm:bottom-[18%] left-1/3" src="/logo.svg" alt="" />
          <div className="bg-dark-400 relative before:border-t-[40px] before:border-t-transparent before:border-r-beige before:absolute before:right-[2px] before:bottom-0 before:border-r-[30px]
          after:border-r-[29px] after:absolute after:right-[3px] after:top-0 before:z-20 after:border-b-[40px] after:border-b-transparent after:border-r-beige">
            <div className="border-r-[30px] absolute right-0 top-0 z-20 border-b-[40px] border-b-transparent border-r-orange"></div>
            <div className="z-20 absolute bottom-0 right-0 border-l-[29px] border-t-[40px] border-t-orange border-l-transparent border-b-[40px] border-b-orange "></div>
            <div className="border-2 border-beige px-5 sm:px-20 md:px-40 py-2 flex justify-between ">
            <a href="" className="flex items-center">
            <Image
                aria-hidden
                src="/logo.svg"
                alt="File icon"
                width={54}
                height={63}
              />
              <span className="text-3xl tracking-tight text-beige ml-4 scale-y-125">КУЛПРОМ</span>
              </a>
              <button className="flex items-center z-[100] relative" onClick={() => setOpen(!isOpen)}>
                <span className="h-6 w-[2px] block bg-dark-800 rotate-45 -mt-[2px] rounded-sm"></span>
                <span className="h-6 w-[2px] block bg-dark-800 -rotate-45 -ml-[2px] -mt-[2px] rounded-sm"></span>
              </button>
              </div>
          </div>
          <ol className="w-full tracking-tight flex justify-center flex-col px-5 sm:px-20 md:px-40 py-2 sm:py-20 ">
            <li className="text-6xl"><a href="#com">КОМПАНИЯ</a></li>
            <li className="[writing-mode:vertical-rl] -scale-100 ml-9 text-5xl mt-10"><a href="">ПАРТНЕРЫ</a></li>
            <li className="text-right -translate-y-44 text-[30px]"><a href="">ВАКАНСИИ</a></li>
            <li className="text-right sm:-translate-x-40 -translate-x-5 -translate-y-28 text-[40px]"><a href="">ПРОДУКТЫ</a></li>
            <li className=" text-[40px]"><a href="" className="">GREENSHAKE</a></li>
            <li className="[writing-mode:vertical-lr] -translate-y-20 -scale-100 text-6xl"><a href="">КОНТАКТЫ</a></li>
          </ol>  
          </div>
          </div>
        </div>
)
}