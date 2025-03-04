'use client'
import React, { useCallback, useEffect, useState } from 'react'
import Image from "next/image"
export default function FormBlock () {
    return (
        <section className="bg-orange md:bg-dark-800 relative z-[80] -mb-16 md:mb-0 md:py-20 md:z-20 px-10 md:px-0 ">
              <div className="flex justify-center md:justify-between items-center">
                  <div className="hidden md:block">
                  <Image
                          aria-hidden
                          src="/plate-1.png"
                          alt="File icon"
                          width={181}
                          height={181}
                        />
                      </div>
                  <div className="flex flex-col items-center max-w-md w-full md-w-[477px]">
                    <h2 className="text-white text-4xl tracking-tight uppercase text-center w-96 mb-9">ОСТАВЬТЕ ЗАЯВКУ
                    НА СОТРУДНИЧЕСТВО</h2>
                    <div className="flex font-vox font-bold w-full mb-8">
                      <button className="border border-dark-400 text-dark-400 basis-1/2 py-4 rounded-md">Клиенты</button>
                      <button className="border border-dark-400 text-dark-400 basis-1/2 py-4 rounded-md">Поставщики</button>
                    </div>
                    <form action="" className="font-vox text-sm flex flex-col items-center w-full text-white">
                      <input type="text" className="bg-transparent border border-white rounded-md py-5 px-8 w-full mb-5 placeholder-white" placeholder="Ваше ФИО*"/>
                      <input type="text" className="bg-transparent border border-white rounded-md py-5 px-8 w-full mb-5 placeholder-white" placeholder="Телефон*"/>
                      <input type="text" className="bg-transparent border border-white rounded-md py-5 px-8 w-full mb-5 placeholder-white" placeholder="E-mail*"/>
                      <span className="text-center max-w-80 block mx-auto">Нажимая кнопку отправить, вы принимаете соглашение о разглашении персональных данных</span>
                      <button className="bg-dark-400 text-lg font-vox font-bold rounded-md mt-6 py-4 w-72 md:w-96 inline-flex items-center justify-center relative after:absolute after:-right-6 after:h-10 after:w-9 after:bg-dark-800 md:after:bg-orange after:rounded-sm before:absolute before:-left-6 before:h-10 before:w-9 before:bg-beige before:rounded-sm hover:after:translate-x-5 hover:before:-translate-x-5 transition-all delay-500">Оставить заявку</button>
                    </form>
                    </div>
                    <div className="hidden md:block">
                    <Image
                          aria-hidden
                          src="/plate-2.png"
                          alt="File icon"
                          width={181}
                          height={181}
                        />
                    </div>
                    </div>
                </section>
)
}