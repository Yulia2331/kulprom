
'use client'
import React, { useCallback, useEffect, useState } from 'react'
import BannerMenu from './components/BannerMenu'
import BannerLogo from './components/BannerLogo'
import Ani from './components/Ani'
import Slogan from './components/Slogan'
import ProductsBlock from './components/ProductsBlock'
import AdvantagesBlock from './components/AdvantagesBlock'
import FormBlock from './components/FormBlock'
import Partners from './components/Partners'
import Vacancies from './components/Vacancies'
import Footer from './components/Footer'
import { ParallaxProvider } from 'react-scroll-parallax'
import Image from "next/image";
import { Link, Element } from 'react-scroll';


export default function Home() {
  const [tr, setTr] = useState('-translate-x-72 -translate-y-56');
  const [sq, setSq] = useState('translate-y-96');
  const [rect, setRect] = useState('-translate-y-56 translate-x-96');
  const [hid, setHid] = useState('');
  const [fix, setFix] = useState('');
  function vkl() {
    setTr('translate-x-0 translate-y-10')
    setSq('translate-y-0')
    setRect('translate-x-0 translate-y-0')
 }
 setTimeout(vkl, 450)
const [isOpen, setOpen] = useState();

  const onScroll = useCallback (event => {
                const { pageYOffset, scrollY } = window;
                if(scrollY > 1450 || pageYOffset > 1450){
                  setFix('fixed top-0 z-[100] w-full')
                  setTimeout( hideBaner, 3000)
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
            function hideBaner(){
              setHid('hidden')
            }

  return (
    <div className="overflow-hidden text-white text-lg scroll-smooth relative">
      <div className={`${hid}`}>
      <main className="w-screen bg-beige flex justify-center items-center justify-items-center py-24 lg:py-32 xl:py-36 relative overflow-hidden" >
      <div className="container 2xl:px-[80px] z-20">
        <div className="w-full flex justify-center lg:justify-between bg-dark-400 md:py-8 xl:py-10 2xl:py-16 py-5 relative">
          <div className="overflow-hidden w-full h-full absolute bottom-0 right-0 z-10 border-2 border-beige lg:border-0">
            <div className="h-0 w-0
            2xl:border-t-[675px] border-t-transparent border-t-[665px]
            2xl:border-r-[1375px] border-r-orange border-r-[500px]
            sm:border-t-[825px] md:border-t-[810px] lg:border-t-[510px] xl:border-t-[635px]
            sm:border-r-[600px] md:border-r-[728px] lg:border-r-[985px] xl:border-r-[1240px]
            absolute bottom-0 right-0 z-10"></div>
         </div>
         <BannerLogo/>
        <BannerMenu/>
        <div className="hidden lg:block">
          <div className={`hover:scale-125 hover:-rotate-[-90deg] absolute left-2/4 translate-x-28 top-96 z-20 flex flex-col items-end transition-all duration-[1s] ease-in-out ${sq}`}>
            <span className="h-2 w-12 bg-beige"></span>
            <span className="h-4 w-5 bg-dark-800 mt-3"></span>
          </div>
                <div className={`hover:-rotate-[121deg] w-0 h-0 -rotate-[80deg] absolute left-2/4  z-20
    border-t-[50px] border-t-transparent
      border-l-[129px] border-l-beige
      border-b-[240px] border-b-transparent transition-all duration-[.8s] ease-in-out ${tr}`}></div>
      <span className={`absolute -right-2 bottom-20 h-16 w-36 bg-beige hover:scale-75 hover:-rotate-[-30deg] -rotate-[35deg] z-20 transition-all duration-[.8s] ease-in-out ${rect}`}></span>
    </div>
    <div className="absolute w-[6%] sm:w-[120px] md:w-[150px] lg:w-[200px] xl:w-[250px] 2xl:w-[276px] h-[1060px] -right-[5%] sm:-right-[20%] -top-[20%] z-0 lg:-top-[25%] bg-dark-400 overflow-hidden"></div>
    <div className="h-0 w-0
        border-t-[52px] lg:border-t-[75px] border-t-transparent
        border-r-[52px] lg:border-r-[75px] border-r-dark-400
        border-b-[52px] lg:border-b-[75px] border-b-transparent
         absolute -top-[100px] lg:-top-[148px] right-0">
          <button className="translate-x-7 -translate-y-3 lg:hidden" onClick={() => setOpen(!isOpen)}>
            <span className="block h-[3px] w-8 bg-black rounded-sm mb-2"></span>
            <span className="block h-[3px] w-8 bg-black rounded-sm mb-2"></span>
            <span className="block h-[3px] w-8 bg-black rounded-sm"></span>
          </button>
          </div>
         <div className="absolute w-[102%] sm:w-[700px] md:w-[860px] lg:w-[1166px] xl:w-[1475px] 2xl:w-[1637px] h-[165px] lg:h-[185px] -right-[6%] sm:-right-[20%] z-0 -bottom-[18%] lg:-bottom-[25%] bg-dark-400 overflow-hidden"></div>
         <div className="h-0 w-0
        border-t-[50px] lg:border-t-[75px] border-t-transparent
        border-r-[50px] lg:border-r-[75px] border-r-beige
        border-b-[50px] lg:border-b-[75px] border-b-transparent
         absolute -bottom-[98px] lg:-bottom-[148px] left-3 rotate-180"></div>
              <div className="absolute left-2 lg:-left-16 lg:-top-20 flex flex-col items-center z-40">
              <div className="border-2 border-beige flex justify-center">
                <div className=" h-full w-3 lg:w-5 bg-orange
                  border-l-[2px] border-l-beige
                   border-t-[450px] sm:border-t-[640px] lg:border-t-[640px] xl:border-t-[760px] 2xl:border-t-[790px] border-t-transparent
                  border-r-[2px] border-r-beige
                  "></div>
              </div>
                <div className="w-6 h-6 lg:h-9 lg:w-9 border-2 border-beige rounded-full bg-orange mt-3"></div>
              </div>
              <div className="absolute right-2 top-24 lg:-right-16 lg:-top-20 flex flex-col items-center z-40">
              <div className="border-2 border-beige flex justify-center">
                <div className=" h-full w-3 lg:w-5 bg-dark-800
                  border-l-[2px] border-l-beige
                 border-t-[450px] sm:border-t-[640px] lg:border-t-[640px] xl:border-t-[760px] 2xl:border-t-[790px] border-t-transparent
                  border-r-[2px] border-r-beige
                  "></div>
              </div>
                <div className="w-6 h-6 lg:h-9 lg:w-9 border-2 border-beige rounded-full bg-dark-800 mt-3"></div>
              </div>
          </div>  
        </div>
      </main>
      <ParallaxProvider>
        <Ani />
      </ParallaxProvider>
      </div>

      <Element name="header" className={`${fix}`}>
      <header className="bg-orange py-5 border-t-2 border-t-beige lg:border-0 relative z-20">
                <div className="container 2xl:px-[80px]">
                  <div className="flex items-center">
                    <a href="" className="flex items-center">
                      <img src="/logo.svg" alt="" className="h-[82px]" />
                      <span className="text-4xl tracking-tight text-beige ml-4 scale-y-125">КУЛПРОМ</span>
                      </a>
                      <ol className="lg:flex gap-x-8 ml-36 xl:ml-56 text-xl tracking-tight hidden">
                        <li className="hover:animate-pulse">
                          <Link to="company" smooth={true} duration={500} className="cursor-pointer pointer-events-auto">КОМПАНИЯ</Link></li>
                        <li className="hover:animate-pulse"><Link to="partners" smooth={true} duration={500} className="cursor-pointer pointer-events-auto">ПАРТНЕРЫ</Link></li>
                        <li className="hover:animate-pulse"><Link to="products" smooth={true} duration={500} className="cursor-pointer pointer-events-auto">ПРОДУКТЫ</Link></li>
                        <li className="hover:animate-pulse"><Link to="vacancies" smooth={true} duration={500} className="cursor-pointer pointer-events-auto">ВАКАНСИИ</Link></li>
                        <li className="hover:animate-pulse"><Link to="greenshake" smooth={true} duration={500} className="cursor-pointer pointer-events-auto">GREENSHAKE</Link></li>
                        <li className="hover:animate-pulse"><Link to="contacts" smooth={true} duration={500} className="cursor-pointer pointer-events-auto">КОНТАКТЫ</Link></li>
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
                <button className="translate-x-7 -translate-y-3 lg:hidden" onClick={() => setOpen(!isOpen)}>
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
        </Element>
        <Element name="company">
          <Slogan />
        </Element>
        <Element name="products">
          <ProductsBlock/>
        </Element>
          <AdvantagesBlock/>
          <Element name="form">
            <FormBlock/>
          </Element>
        <Element name="partners">
          <Partners/>
        </Element>
        <Element name="vacancies">
          <Vacancies/> 
        </Element>  
        <Element name="contacts"> 
          <Footer/> 
        </Element> 
        <div className={`z-[300] fixed top-0 left-0 bg-orange min-h-screen w-full transition-all duration-500 ${isOpen ? '' : 'opacity-0 -translate-x-[100%]'}`}>
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
                    <img className="h-[63px]" src="/logo.svg" alt="" />
                      <span className="text-3xl tracking-tight text-beige ml-4 scale-y-125">КУЛПРОМ</span>
                      </a>
                      <button className="flex items-center z-[100] relative" onClick={() => setOpen(!isOpen)}>
                        <span className="h-6 w-[2px] block bg-dark-800 rotate-45 -mt-[2px] rounded-sm"></span>
                        <span className="h-6 w-[2px] block bg-dark-800 -rotate-45 -ml-[2px] -mt-[2px] rounded-sm"></span>
                      </button>
                      </div>
                  </div>
                  <ol className="w-full tracking-tight flex justify-center flex-col px-5 sm:px-20 md:px-40 py-2 sm:py-20 ">
                    <li className="text-6xl pointer-events-none"><Link to="company" smooth={true} duration={500} className="cursor-pointer pointer-events-auto">КОМПАНИЯ</Link></li>
                    <li className="[writing-mode:vertical-rl] -scale-100 ml-9 text-5xl mt-10 pointer-events-none"><Link to="partners" smooth={true} duration={500} onClick={() => setOpen(!isOpen)} className="cursor-pointer pointer-events-auto">ПАРТНЕРЫ</Link></li>
                    <li className="text-right -translate-y-44 text-[30px] pointer-events-none"><Link to="vacancies" smooth={true} duration={500} onClick={() => setOpen(!isOpen)} className="cursor-pointer pointer-events-auto">ВАКАНСИИ</Link></li>
                    <li className="text-right sm:-translate-x-40 -translate-x-5 -translate-y-28 text-[40px] pointer-events-none"><Link to="products" smooth={true} duration={500} onClick={() => setOpen(!isOpen)} className="cursor-pointer pointer-events-auto">ПРОДУКТЫ</Link></li>
                    <li className=" text-[40px] pointer-events-none"> <Link to="greenshake" smooth={true} duration={500} onClick={() => setOpen(!isOpen)}className="cursor-pointer">GREENSHAKE</Link></li>
                    <li className="[writing-mode:vertical-lr] -translate-y-20 -scale-100 text-6xl pointer-events-none"><Link to="contacts" smooth={true} duration={500} onClick={() => setOpen(!isOpen)} className="cursor-pointer pointer-events-auto">КОНТАКТЫ</Link></li>
                  </ol>  
                  </div>
                  </div>
                </div>
    </div>
   
  );
}
