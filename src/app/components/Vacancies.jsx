'use client'
import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import EmblaVacancies from '../components/EmblaVacancies'
export default function Vacancies () {
    const [emblaRef, emblaApiRef] = useEmblaCarousel()
     

        const [op, setOp] = useState('opacity-0 -translate-y-96');
 const onScroll = useCallback(event => {
                const { pageYOffset, scrollY } = window;
                if(scrollY > 5650 || pageYOffset > 5650){
                  setOp('opacity-1 -translate-y-2')
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
            const [isOpen, setOpen] = useState();

            const OPTIONS = {}
            const SLIDE_COUNT = [
              {id: 1, src:'/v-1.jpg', title:'Технолог', text:'Figma ipsum component variant main layer. Opacity duplicate flatten clip pencil rectangle. Horizontal.', salary: '78000' },
              {id: 2, src:'/img-1.jpg', title:'Технолог1', text:'Figma ipsum component variant main layer. Opacity duplicate flatten clip2 pencil rectangle. Horizontal.', salary: '48000' },
              {id: 3, src:'/img-5.jpg', title:'Технолог2', text:'Figma ipsum component variant main layer. Opacity duplicate flatten clip3 pencil rectangle. Horizontal.', salary: '58000' },
              {id: 4, src:'/v-1.jpg', title:'Технолог', text:'Figma ipsum component variant main layer. Opacity duplicate flatten clip pencil rectangle. Horizontal.', salary: '78000' },
              {id: 5, src:'/v-1.jpg', title:'Технолог', text:'Figma ipsum component variant main layer. Opacity duplicate flatten clip pencil rectangle. Horizontal.', salary: '78000' },
              {id: 6, src:'/v-1.jpg', title:'Технолог', text:'Figma ipsum component variant main layer. Opacity duplicate flatten clip pencil rectangle. Horizontal.', salary: '78000' },
            ];
    return (

<section id="vak" className="bg-dark-400 pt-32 pb-56 relative">         
            <div className={`w-0 h-0 rotate-[40deg] absolute right-14 -translate-y-2 bottom-5 z-20 hidden md:block
            border-t-[50px] border-t-transparent
            border-l-[129px] border-l-dark-800
            border-b-[240px] border-b-transparent transition-all duration-[2s] ${op}`}></div>
          <div className="md:container">
            <h2 className="text-white text-4xl sm:text-6xl text-center md:text-left tracking-tight uppercase mb-10 md:mb-20 ">ВАКАНСИИ</h2>
            <EmblaVacancies slides={SLIDE_COUNT} options={OPTIONS} />
            <div className="flex justify-center mt-6 pb-20">
              <button className="bg-white font-bold text-dark-800 mx-auto font-vox rounded-md mt-6 py-4 w-72 md:w-96 inline-flex items-center justify-center relative after:absolute after:-right-6 after:h-10 after:w-9 after:bg-orange after:rounded-sm before:absolute before:-left-6 before:h-10 before:w-9 before:bg-beige before:rounded-sm hover:after:translate-x-5 hover:before:-translate-x-5 transition-all delay-500 before:transition-all after:transition-all" onClick={() => setOpen(!isOpen)}>Заполнить анкету</button>
            </div>
          </div>
          <div className={`z-[300] fixed top-0 left-0 bg-orange min-h-screen w-full overflow-x-hidden overflow-y-scroll max-h-full transition-all duration-500 ${isOpen ? '' : 'opacity-0 -translate-x-[100%]'}`}> 
                <div className="w-[50px] bg-dark-400 z-20  absolute top-0  right-0 ">
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
               <div className="w-full px-5 md:px-0 md:w-[590px] m-auto py-16 flex flex-col items-center">
                <h3 className="text-white text-4xl tracking-tight uppercase mb-10 text-center w-72">ХОТЕЛИ БЫ 
                РАБОТАТЬ У НАС</h3>
                <div className="border-2 border-beige flex justify-center absolute -top-20 -right-16 sm:right-auto rotate-90">
                        <div className=" h-full w-3 bg-dark-800
                          border-l-[2px] border-l-beige
                          border-t-[480px] border-t-transparent
                          border-r-[2px] border-r-beige
                          "></div>
                      </div>
                <form action="" className="font-vox mt-6">
                  <input type="text" className="bg-white w-full text-dark-800 text-sm py-5 px-11 placeholder-dark-800 outline-none mb-5" placeholder='Ваше ФИО*'/>
                  <input type="text" className="bg-white w-full text-dark-800 text-sm py-5 px-11 placeholder-dark-800 outline-none mb-5" placeholder='Телефон*'/>
                  <input type="text" className="bg-white w-full text-dark-800 text-sm py-5 px-11 placeholder-dark-800 outline-none mb-5" placeholder='E-mail*'/>
                  <input type="text" className="bg-white w-full text-dark-800 text-sm py-5 px-11 placeholder-dark-800 outline-none mb-5" placeholder='Должность*'/>
                  <input type="text" className="bg-white w-full text-dark-800 text-sm py-5 px-11 placeholder-dark-800 outline-none mb-5" placeholder='Опыт работы в годах*'/>
                  <div className="flex justify-center mb-5">
                  <button className="bg-white font-bold text-dark-800 mx-auto font-vox rounded-md mt-6 py-4 w-72 inline-flex items-center justify-center relative after:absolute after:-right-6 after:h-10 after:w-9 after:bg-beige after:rounded-sm before:absolute before:-left-6 before:h-10 before:w-9 before:bg-dark-400 before:rounded-sm hover:after:translate-x-5 hover:before:-translate-x-5 transition-all delay-500 before:transition-all after:transition-all">Отправить</button></div>
              <span className="text-center block mx-auto">Нажимая кнопку отправить, вы принимаете <br /> соглашение о разглашении персональных данных</span>
                </form>
               </div>
                </div>
        </section>

)
}