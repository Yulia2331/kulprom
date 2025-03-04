'use client'
import React, { useCallback, useEffect, useState } from 'react'
import Advantages from '../components/Advantages'
export default function AdvantagesBlock () {
    return (
      <section className="bg-beige py-28 pt-0 relative z-50 lg:pt-36 -mt-[300px] lg:mt-0
                lg:before:border-t-[360px] before:border-t-dark-800 before:border-t-[240px]
                  lg:before:border-l-[3775px] before:border-l-transparent
                  md:before:border-r-[1680px] before:border-r-transparent before:border-r-[1100px]
                  before:absolute before:-top-20 lg:before:top-0
                  after:border-b-[680px] md:after:border-b-[360px] md:after:border-b-dark-800 after:border-b-orange
                  after:border-l-[1775px] md:after:border-l-[3775px] after:border-l-transparent
                  after:absolute after:-bottom-1 after:-translate-x-10
                ">
                  <div className="lg:hidden flex justify-center">
                          <a href="" className="bg-dark-400 font-vox font-bold rounded-md mt-24 py-4 md:w-96 inline-flex items-center justify-center relative after:absolute after:-right-6 after:h-10 after:w-9 after:bg-dark-800 lg:after:bg-orange after:rounded-sm before:absolute before:-left-6 before:h-10 before:w-9 before:bg-orange  lg:before:bg-beige before:rounded-sm hover:after:translate-x-5 hover:before:-translate-x-5 transition-all delay-500 w-64 ">Оставить заявку</a>
                        </div>
                  <div className="container 2xl:px-[80px] pt-28 lg:pt-0">
                    <div className="flex justify-between lg:hidden">
                    <div className="w-0 h-0 -rotate-[70deg] -scale-[.7] sm:-scale-90 z-20 basis-1/3
                    border-t-[50px] border-t-transparent
                    border-l-[129px] border-l-orange
                    border-b-[240px] border-b-transparent block lg:hidden"></div>
                      <img src="/broccoli.svg" alt="" className="w-full h-full basis-1/3"/>
                    </div>
                    <h2 className="text-dark-800 text-6xl tracking-tight uppercase hidden lg:block">ПРЕИМУЩЕСТВА</h2>
                    <div className="flex justify-between items-center flex-col-reverse lg:flex-row relative z-40">
                      <Advantages/>
                      <div className="basis-5/12">
                      <div className="text-center text-5xl uppercase  tracking-tight mb-8">
                        <span className="text-orange block">Как нужно</span>
                        <span className="text-dark-800">РАЗРЕЗЫВАТЬ СЭНДВИЧ</span>
                      </div>
                        <img src="/slicing.png" alt="" className="z-40 relative"/>
                      </div>
                    </div>
                  </div>
                </section>

)
}