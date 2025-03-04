'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { Link, Element } from 'react-scroll'
import Image from "next/image"
export default function Footer () {
    return (
      <footer className="bg-orange pb-40 relative z-50 flex justify-center
              after:border-l-[500px] md:after:border-l-[1100px] after:border-l-transparent
            after:border-b-[225px] md:after:border-b-[125px] after:border-b-orange
           after:border-r-[500px] md:after:border-r-[1100px] after:border-r-transparent
              after:absolute after:-top-[15%] md:after:-top-28">
                <div className="container">
                  <div className="flex flex-col items-center relative lg:hidden z-10 -mt-52">
                  <h2 className="text-white text-4xl tracking-tight uppercase mb-14 lg:mb-5">Контакты</h2>
                  <a href="" className="text-3xl block">+7 (999) 999-99-99</a>
                  <a href="" className="text-3xl">info@kulprom.ru</a>
                  </div>
                  <div className="flex bg-beige py-12 px-11 rounded-2xl relative z-20 mt-16 min-h-72 lg:min-h-96">
                    <div className="bg-dark-400 py-6 px-20 lg:flex flex-col items-center rounded-2xl hidden">
                      <h2 className="text-white text-5xl tracking-tight uppercase mb-5">Контакты</h2>
                      <a href="" className="text-3xl">+7 (999) 999-99-99</a>
                      <a href="" className="text-3xl">info@kulprom.ru</a>
                        <div className="flex items-center gap-12 mt-10 mb-9">
                          <a href=""><img src="/youtube.svg" alt="" /></a>
                          <a href=""><img src="/vk.svg" alt="" /></a>
                        </div>
                      <button className="bg-dark-800 font-bold lg:text-white mx-auto font-vox rounded-md py-4 w-72 inline-flex items-center justify-center relative after:absolute after:-right-6 after:h-10 after:w-9 after:bg-orange after:rounded-sm before:absolute before:-left-6 before:h-10 before:w-9 before:bg-beige before:rounded-sm hover:after:translate-x-5 hover:before:-translate-x-5 transition-all delay-500">Как проехать</button>
                    </div>
                  </div>
                  <div className="lg:hidden flex flex-col items-center">
                        <div className="flex items-center gap-12 mt-10 mb-9">
                          <a href=""><img src="/youtube.svg" alt="" /></a>
                          <a href=""><img src="/vk.svg" alt="" /></a>
                        </div>
                      <button className="bg-dark-800 font-bold text-beige mx-auto font-vox rounded-md py-4 w-72 inline-flex items-center justify-center relative after:absolute after:-right-6 after:h-10 after:w-9 after:bg-beige after:rounded-sm before:absolute before:-left-6 before:h-10 before:w-9 before:bg-dark-400 before:rounded-sm hover:after:translate-x-5 hover:before:-translate-x-5 transition-all delay-500">Как проехать</button>
                  </div>
                  <div className="mt-16 flex justify-between flex-col xl:flex-row">
                    <div className="flex basis-9/12 justify-between w-full flex-col lg:flex-row items-center lg:items-start">
                    <a href="" className="flex items-center">
                    <Image
                        aria-hidden
                        src="/logo.svg"
                        alt="File icon"
                        width={70}
                        height={82}
                      />
                      <span className="text-4xl tracking-tight text-beige ml-4 scale-y-125">КУЛПРОМ</span>
                      </a>
                        <ol className="grid grid-cols-2 sm:grid-cols-3 gap-x-14 gap-y-5 ml-0 xl:ml-56 text-2xl tracking-tight basis-8/12 pt-4">
                            <li className="hover:animate-pulse">
                             <Link to="company" smooth={true} duration={500} className="cursor-pointer">КОМПАНИЯ</Link></li>
                             <li className="hover:animate-pulse"><Link to="partners" smooth={true} duration={500} className="cursor-pointer">ПАРТНЕРЫ</Link></li>
                              <li className="hover:animate-pulse"><Link to="products" smooth={true} duration={500} className="cursor-pointer">ПРОДУКТЫ</Link></li>
                              <li className="hover:animate-pulse"><Link to="vacancies" smooth={true} duration={500} className="cursor-pointer">ВАКАНСИИ</Link></li>
                              <li className="hover:animate-pulse"><Link to="greenshake" smooth={true} duration={500} className="cursor-pointer">GREENSHAKE</Link></li>
                              <li className="hover:animate-pulse"><Link to="contacts" smooth={true} duration={500} className="cursor-pointer">КОНТАКТЫE</Link></li>
                        </ol>
                      </div>
                      <div className="grid grid-cols-1 xl:gap-y-6 font-vox font-bold text-beige pt-4 text-center xl:text-left mt-8 xl:mt-0">
                        <a href="">Договор оферты</a>
                        <a href="">Политика конфиденциальности</a>
                      </div>
                  </div>
                </div>
              </footer>
)
}