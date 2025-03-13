import React, { useCallback, useEffect, useState } from 'react'
import { Link, Element } from 'react-scroll'
export default function Slogan () {
     const [tr, setTr] = useState('-translate-x-72 -translate-y-56');
     const [kv, setKv] = useState('translate-x-72 -translate-y-52');
     const [bot, setBot] = useState('translate-y-72');
     const [w, setW] = useState('opacity-0');
      function vkl() {
         setTr('translate-x-0')
         setKv('translate-x-0')
         setBot('translate-y-0')
         setW('opacity-1')
      }
       const onScroll = useCallback(event => {
                const { pageYOffset, scrollY } = window;
                if(scrollY > 800 || pageYOffset > 800){
                          setTimeout(vkl, 500)
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
    return (
      <section className="bg-orange relative z-30 pb-48"> 
        <div id="block" className="lg:container 2xl:px-[80px]">
         <div className="flex flex-col lg:flex-row items-center justify-between pb-0 pt-12 lg:py-20 lg:pt-32 relative">
                   <div className="container basis-6/12 relative z-30  lg:mb-0 -mb-28 flex flex-col items-center lg:items-start">
                   <div className="flex items-start lg:block">
                     <h2 className="text-white text-4xl lg:text-6xl tracking-tight uppercase whitespace-nowrap [writing-mode:vertical-lr] lg:[writing-mode:horizontal-tb] -scale-100 lg:scale-100 mr-8">О компании</h2>
                     <p className="text-beige lg:my-14 max-w-xl font-vox font-bold z-40">Figma ipsum component variant main layer. Stroke bullet comment ipsum boolean reesizing vector rotate strikethrough horizontal. Ipsum flatten figjam outline polygon main edit library blur subtract. Vector outline asset vector follower bold. Asset follower layout star scale follower shadow inspect link distribute. Stroke strikethrough content move frame. Asset hand union library layout. Export background variant.</p>
                     </div>
                     <Link to="contacts" smooth={true} duration={500} href="" className="bg-dark-800 font-vox font-bold rounded-md py-4 w-72 md:w-96 inline-flex items-center justify-center relative after:absolute after:-right-6 after:h-10 after:w-9 after:bg-beige lg:after:bg-dark-400 after:rounded-sm before:absolute before:-left-6 before:h-10 before:w-9 before:bg-orange lg:before:bg-beige before:rounded-sm hover:after:translate-x-5 hover:before:-translate-x-5 transition-all delay-500 z-50 translate-y-40 lg:translate-y-0">Контакты</Link>    
                   </div>
<div className="after:border-l-[520px] after:border-l-transparent
after:border-t-[200px]  after:border-t-orange 
after:border-r-[520px]  after:border-r-transparent after:-bottom-[190px] z-20 after:absolute relative lg:border-0 flex justify-center items-center lg:hidden"></div>
<div className="bg-dark-400 pt-[600px] lg:bg-transparent w-full flex flex-col lg:basis-6/12 h-96 py-64 lg:py-0 text-4xl tracking-tight uppercase z-10 pb-[500px]">
<div className={`flex flex-col items-center justify-center container max-w-96 sm:max-w-[550px] lg:static relative transition-all duration-100 `}>
<span className={`z-30 rotate-[40deg] -translate-y-40 -translate-x-24 sm:-translate-y-56 sm:-translate-x-28 lg:-translate-y-20 lg:-translate-x-32 transition-all duration-300 ${w}`}>Роллом</span>
<span className={`z-30 rotate-[40deg] absolute left-72 sm:left-96 lg:right-28 bottom-0 lg:bottom-80 xl:bottom-60 lg:left-auto transition-all duration-500 ${w}`}>Бей</span>
<span className={`z-30 rotate-[10deg] absolute left-5 sm:left-28 -bottom-8 lg:bottom-48 xl:bottom-40 lg:-translate-x-16 lg:left-auto transition-all duration-700 ${w}`}>Вкусным</span>
<span className={`z-30 absolute -bottom-36 sm:-bottom-48 lg:-bottom-2 left-2/3 lg:left-auto lg:right-0 transition-all duration-1000 ${w}`}>Голод</span>
<span className="h-[263px] w-[263px] sm:h-[363px] sm:w-[363px] lg:h-[442px] lg:w-[442px] rounded-full bg-orange z-20 absolute lg:-bottom-0 -right-1 lg:-right-14"></span>
<div className={`transition-all duration-1000 w-0 h-0 -rotate-[80deg] absolute left-[20%] -bottom-20 -translate-y-4 sm:left-40 sm:-bottom-14  lg:left-2/3 lg:bottom-48 scale-100 sm:scale-150 lg:scale-[1.7] xl:scale-[2] z-20
border-t-[50px] border-t-transparent
border-l-[129px] border-l-dark-800
border-b-[240px] border-b-transparent ${tr}`}></div>
<span className={`absolute -top-36 translate-x-5 sm:-top-48 lg:right-40 lg:top-44 xl:top-32 h-12 w-24 md:h-16 md:w-32 xl:h-20 xl:w-44 bg-beige -rotate-[35deg] z-10 transition-all duration-700 ${kv}`}></span>
<span className={`bg-orange h-16 w-7 lg:h-28 lg:w-11 absolute -bottom-28 left-24 lg:bottom-0 lg:right-96 z-10 lg:left-auto transition-all duration-500 ${bot}`}></span>
<div className={`absolute -left-24 -bottom-36 lg:left-2/4 translate-x-28 lg:bottom-32 z-20 flex flex-col items-end lg:right-auto transition-all duration-1000 ${bot}`}>
<span className="h-2 w-12 bg-beige"></span>
<span className="h-4 w-5 bg-dark-800 mt-3"></span>
</div>
</div>
<div className={`bg-dark-400 h-[800px] xl:w-[1100px] lg:w-[790px] absolute top-0 -right-[20%]
border-t-[740px] border-t-transparent
border-l-[175px] border-l-orange hidden lg:block
`}></div>
<div className="h-0 w-0 xl:border-r-[1340px] lg:border-r-[940px] border-r-transparent
border-t-[180px] border-t-orange -rotate-1
absolute -top-3 -right-[35%]"></div>
</div>

</div>
        </div>
        </section>
)
}