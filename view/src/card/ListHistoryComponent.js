import React, { useState } from 'react'
import {BsSendFill,BsCheck,BsCheck2All} from 'react-icons/bs'
import {AiFillEye} from 'react-icons/ai'

export default function ListHistoryComponent({isDarkTheme, imgSrc}) {
    const [fullImage, setImageFull] = useState(false);
    const [readMore, setReadMore] = useState(false);
  return (
    <div className={` w-full p-6  rounded-lg shadow cursor-pointer  max-w-6xl ${isDarkTheme?"bg-gray-800 border-gray-700":"bg-white border border-gray-200 "}`}>
       <div className='flex gap-3 items-center'>
        <div className='flex gap-3 items-center'>
                    <div>
                        <img crossOrigin='true' src={imgSrc} alt='thumbnail' className={`${fullImage?" h-screen w-screen":"h-24 w-24"}  cursor-pointer rounded-lg`} onClick={()=>setImageFull(prevState => !prevState)}/>
                    </div>
                    <div className='flex flex-col w-full gap-2 '>
                        <div className='flex justify-between items-center'>
                            <div className=''>
                                Maintenance
                            </div>
                            <div className={`border-2 p-1 rounded-md border-transparent/30`}>
                                03/12/2022
                            </div>
                        </div>
                        <div >
                            <p className={`${readMore?"":"line-clamp-2"}`}> 
                            Suphaa ittisaa fi Sirreessaa buufataalee tamsaasa Kofalee, AM Roobee, Istuudiyoo FM Roobee,Gobbaa,Jimmaa fi Walisoos ni dabalata.
                            oduu pirojectii Daandii. Haawwaasni naannoo sanaa daandiicharraa fayyadamu jedhamee yadamu hasofsiisuu qabdu.Qaama mootummaa ilaallatulle dubbisa.
                            </p>
                           {readMore ? <p className='text-blue-300 hover:text-blue-500 underline italic cursor-pointer'  onClick={()=>setReadMore(prevState=>!prevState)}>read less</p>:<p className='text-blue-300 hover:text-blue-500 underline italic cursor-pointer' onClick={()=>setReadMore(prevState=>!prevState)}>read more</p>
                           }
                        </div>
                        <div className='flex justify-between text-sm font-light italic'>
                            <div className='flex gap-5'>
                            <p>adaamaa</p>
                            <p>2-program</p>
                            <p>3-news</p>
                            <p>7-days</p>
                            <p>03.12.22 - 12.12.22</p>
                            </div>
                            <div className='flex gap-1 items-center '>
                                <AiFillEye className='text-2xl hover:text-blue-400'/>
                                <p className='font-bold '>22</p>
                                
                                    <BsCheck className='text-2xl'/>
                                    <BsCheck2All className='text-2xl' />
                                
                            </div>
                           
                        </div>
                    </div>
            </div>
            <div>
               <BsSendFill className='w-10 h-10 text-blue-500 border-2 p-2 border-blue-400 cursor-pointer hover:bg-gray-200 rounded-xl'/>
            </div>
       </div>
       
      
    </div>
  )
}
