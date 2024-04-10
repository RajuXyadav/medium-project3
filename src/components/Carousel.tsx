


//@ts-ignore
// import {BsChevronCompactLeft,BsChevronCompactRight} from 'ract-icons/bs';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import {useState} from 'react';



export const Carousel = () => {
    const [changeImage,SetChangeImage] = useState(0);
    const slides =[
        {
            url:'https://plus.unsplash.com/premium_photo-1669324357471-e33e71e3f3d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            url:'https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }, {
            url:'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }, {
            url:'https://plus.unsplash.com/premium_photo-1682145737198-26f57317429d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }, {
            url:'https://plus.unsplash.com/premium_photo-1669324357471-e33e71e3f3d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }, 
        
    ]

    const prevSlide = ()=>{
        const isFirstSlide = changeImage ===0;
        const newIndex = isFirstSlide ? slides.length-1 : changeImage -1;
        SetChangeImage(newIndex)
    }
    const nextSlide = ()=>{
        const isFirstSlide = changeImage ===slides.length-1;
        const newIndex = isFirstSlide ? 0 : changeImage + 1 ;
        SetChangeImage(newIndex)
    }
    
     
    

  return (
   <>
   <div className="max-w-[1400px] h-[720px] w-full m-auto py-5 px-2 relative ">
    <div style={{backgroundImage: `url(${slides[changeImage].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>
   </div>

  <div className="flex justify-center ">

    <div className=" absolute top-[50%] -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        
    <FaArrowLeft size={30} onClick={prevSlide}/>
    </div>
    <div className=" absolute top-[50%] -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
      <FaArrowRight size={30} onClick={nextSlide}/>
    </div>
  </div>
  <div className="flex justify-center">
     {slides.map(()=>{
        return <div className="text-xl cursor-pointer">
           <GoDotFill />
        </div>
          
     })}
  </div>
   </>
        


  );
};
