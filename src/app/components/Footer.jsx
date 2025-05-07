'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { Link, Element } from 'react-scroll'
import Image from "next/image"
import EmblaCarousel from '../components/EmblaCarousel'
export default function Footer () {
  const [isOpen, setOpen] = useState();
  const OPTIONS = {}
  const SLIDE_COUNT = [
    {id: 1, src:'/v-1.jpg'},
    {id: 2, src:'/img-1.jpg'},
    {id: 3, src:'/v-1.jpg'},
    {id: 4, src:'/img-1.jpg'},
    {id: 5, src:'/v-1.jpg'},
  ];
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
                      <button className="bg-dark-800 font-bold lg:text-white mx-auto font-vox rounded-md py-4 w-72 inline-flex items-center justify-center relative after:absolute after:-right-6 after:h-10 after:w-9 after:bg-orange after:rounded-sm before:absolute before:-left-6 before:h-10 before:w-9 before:bg-beige before:rounded-sm hover:after:translate-x-5 hover:before:-translate-x-5 transition-all delay-500 before:transition-all after:transition-all" onClick={() => setOpen(!isOpen)}>Как проехать</button>
                    </div>
                  </div>
                  <div className="lg:hidden flex flex-col items-center">
                        <div className="flex items-center gap-12 mt-10 mb-9">
                          <a href=""><img src="/youtube.svg" alt="" /></a>
                          <a href=""><img src="/vk.svg" alt="" /></a>
                        </div>
                      <button className="bg-dark-800 font-bold text-beige mx-auto font-vox rounded-md py-4 w-72 inline-flex items-center justify-center relative after:absolute after:-right-6 after:h-10 after:w-9 after:bg-beige after:rounded-sm before:absolute before:-left-6 before:h-10 before:w-9 before:bg-dark-400 before:rounded-sm hover:after:translate-x-5 hover:before:-translate-x-5 transition-all delay-500 before:transition-all after:transition-all" onClick={() => setOpen(!isOpen)}>Как проехать</button>
                  </div>
                  <div className="mt-16 flex justify-between flex-col xl:flex-row">
                    <div className="flex basis-9/12 justify-between w-full flex-col lg:flex-row items-center lg:items-start">
                    <a href="" className="flex items-center">
                      <img src="/logo.svg" alt="" className='h-[73px]'/>
                      <span className="text-4xl tracking-tight text-beige ml-4 scale-y-125">КУЛПРОМ</span>
                      </a>
                        <ol className="grid grid-cols-2 sm:grid-cols-3 gap-x-14 gap-y-5 ml-0 xl:ml-56 text-2xl tracking-tight basis-8/12 pt-4">
                            <li className="hover:animate-pulse">
                             <Link to="company" smooth={true} duration={500} className="cursor-pointer">КОМПАНИЯ</Link></li>
                             <li className="hover:animate-pulse"><Link to="partners" smooth={true} duration={500} className="cursor-pointer">ПАРТНЕРЫ</Link></li>
                              <li className="hover:animate-pulse"><Link to="products" smooth={true} duration={500} className="cursor-pointer">ПРОДУКТЫ</Link></li>
                              <li className="hover:animate-pulse"><Link to="vacancies" smooth={true} duration={500} className="cursor-pointer">ВАКАНСИИ</Link></li>
                              <li className="hover:animate-pulse"><Link to="greenshake" smooth={true} duration={500} className="cursor-pointer">GREENSHAKE</Link></li>
                              <li className="hover:animate-pulse"><Link to="contacts" smooth={true} duration={500} className="cursor-pointer">КОНТАКТЫ</Link></li>
                        </ol>
                      </div>
                      <div className="grid grid-cols-1 xl:gap-y-6 font-vox font-bold text-beige pt-4 text-center xl:text-left mt-8 xl:mt-0">
                        <a href="">Договор оферты</a>
                        <a href="">Политика конфиденциальности</a>
                      </div>
                  </div>
                </div>
                <div className={`z-[300] fixed top-0 left-0 bg-orange min-h-screen w-full overflow-x-hidden overflow-y-scroll max-h-full transition-all duration-500 ${isOpen ? '' : 'opacity-0 -translate-x-[100%]'}`}> 
                <div className="w-[50px] bg-dark-400 z-20 absolute top-0  right-0 ">
                        <div className="relative border-b-2 border-beige cursor-pointer" onClick={() => setOpen(!isOpen)}>
                        <div className="absolute -top-2 -left-[29px] border-t-[47px] border-t-transparent border-r-[24px] border-r-beige rotate-[18deg] "></div>
                        <div className="absolute top-[31px] -left-[32.7px] border-b-[43px] border-b-transparent border-r-[30px] border-r-beige   -rotate-[9.5deg]"></div>
                          <div className="h-0 w-0
                   border-t-[35px] border-t-transparent
                   border-r-[35px] border-r-dark-400
                   border-b-[35px] border-b-transparent
                  -translate-x-[34px] 
                  ">
                <button className="flex items-center z-[100] relative translate-x-10 -translate-y-3" onClick={() => setOpen(!isOpen)}>
                  <span className="h-6 w-[2px] block bg-dark-800 rotate-45 -mt-[2px] rounded-sm"></span>
                  <span className="h-6 w-[2px] block bg-dark-800 -rotate-45 -ml-[2px] -mt-[2px] rounded-sm"></span>
                </button>
                </div>
                </div>
                </div>
               <div className="container m-auto py-16 flex flex-col items-center">
                <h3 className="text-white text-4xl tracking-tight uppercase mb-10 text-center w-72">Как добраться?</h3>
                <div className="border-2 border-beige flex justify-center absolute -top-20 -right-16 sm:right-auto rotate-90">
                        <div className=" h-full w-3 bg-dark-800
                          border-l-[2px] border-l-beige
                          border-t-[480px] border-t-transparent
                          border-r-[2px] border-r-beige
                          "></div>
                      </div>
                    <div className="flex justify-between mt-12 gap-3 md:gap-20 w-full">
                        <div className="basis-6/12">
                        <h4 className="text-white text-3xl tracking-tight uppercase mb-10 text-center">ВЪЕЗД: КПП 1</h4>
                        <div className="modal-embla">
                           <EmblaCarousel slides={SLIDE_COUNT} options={OPTIONS} />
                        </div>
                      </div>
                      <div className="basis-6/12">
                        <h4 className="text-white text-3xl tracking-tight uppercase mb-10 text-center">ВЪЕЗД: КПП 2</h4>
                        <div className="modal-embla">
                          <EmblaCarousel slides={SLIDE_COUNT} options={OPTIONS} />
                        </div>
                      </div>
                    </div>
               </div>
                </div>
              </footer>
              
)
}