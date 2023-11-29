import React, { useState } from 'react'
import {BsSendFill,BsCheck,BsCheck2All} from 'react-icons/bs'
import {AiFillEye} from 'react-icons/ai'

export default function ListHistoryComponent({isDarkTheme, imgSrc,title, saved_date, body,place, program,news, days,from,to,production,requested_by}) {
    const [fullImage, setImageFull] = useState(false);
    const [readMore, setReadMore] = useState(false);
  return (
    <div className={` w-full p-6  rounded-lg shadow cursor-pointer  max-w-6xl ${production? isDarkTheme? "bg-gray-800 border-gray-700":"bg-gray-300 border border-gray-200":""} ${isDarkTheme?"bg-gray-800 border-gray-700":"bg-white border border-gray-200 "}`}>
       <div className='flex gap-3 items-center'>
        <div className='flex gap-3 items-center'>
                    <div>
                        <img crossOrigin='true' src={imgSrc} alt='thumbnail' className={`${fullImage?" h-screen w-screen":"h-24 w-24"}  cursor-pointer rounded-lg`} onClick={()=>setImageFull(prevState => !prevState)}/>
                    </div>
                    <div className='flex flex-col w-full gap-2 '>
                        <div className='flex justify-between items-center'>
                            <div className='uppercase font-bold'>
                                {title?title:"Title goes here..."}
                            </div>
                            <div className={`border-2 p-1 text-sm rounded-md border-transparent/30`}>
                                {saved_date?saved_date:"saved date"}
                            </div>
                        </div>
                        <div >
                            {
                                production?
                                <p className={` ${readMore?"":"line-clamp-2"}`}>
                                    {` ${requested_by} is requesting a program called ${title} studio production on ${place} studio with ${news}-host and ${program}-guest on ${days} from ${from} to ${to} ${body?body:"no Description"}`}
                                </p>
                                :
                                <p className={`${readMore?"":"line-clamp-2"}`}> 
                                    {body ? body : "body goes here"}
                                </p>
                           }
                           {readMore ? <p className='text-blue-300 hover:text-blue-500 underline italic cursor-pointer'  onClick={()=>setReadMore(prevState=>!prevState)}>read less</p>:<p className='text-blue-300 hover:text-blue-500 underline italic cursor-pointer' onClick={()=>setReadMore(prevState=>!prevState)}>read more</p>
                           }
                        </div>
                        <div className='flex justify-between text-sm font-light italic'>
                            <div className='flex gap-5'>
                            <p>{place?place:"destination"}</p>
                            {production? "" :<><p>{program>0?program>1?program+"-programs":program+"-program":'0-program'}</p>
                            <p>{news>0?news+'-news':"0-news"}</p>
                            <p>{days>0?days>1?days+'-days':days+'-day': "0-day"}</p> 
                            <p>{from?from:"from"} - {to?to:"to"}</p></>}
                            <p>{production?<p className='text-blue-400'>Studio-Production</p> : "Field-Production"}</p>

                            {!production? "" :<>
                            <p>{program>0?program>1?program+"-Guests":program+"-Guest":'0-Gust'}</p>
                            <p>{news>0?news>1?news+"-Hosts":program+"-Host":'0-Host'}</p>
                            <p>{days}</p> 
                            <p>{from?from:"from"} - {to?to:"to"}</p></>}
                            </div>
                            {/* <div className='flex gap-1 items-center '>
                                <AiFillEye className='text-2xl hover:text-blue-400'/>
                                <p className='font-bold '>22</p>
                                
                                    <BsCheck className='text-2xl'/>
                                    <BsCheck2All className='text-2xl' />
                                
                            </div> */}
                           
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
