import React from 'react'

export default function NotificationCardView({isDarkTheme,imageSrc, allUserReletedData,message, time}) {
  return (
    <div className='flex justify-center my-4 h-max '>
        <div className={`block cursor-pointer p-6  border  rounded-lg shadow w-[40rem] ${isDarkTheme?"bg-gray-800 border-gray-700 hover:bg-slate-700 ":"bg-white border-gray-200 hover:bg-gray-100"}`}>
        
            <div className='flex items-center gap-10 '>
                     <img crossOrigin="anonymous" src={imageSrc} alt={`${allUserReletedData.user_name}`} className='w-[6rem] h-[6rem] rounded-full ml-0 min-h-[6rem]  min-w-[6rem]'/>
                    <div className=''>
                        <div className='flex flex-col gap-2'>
                            <p className=' font-bold'>{message}</p>
                            <p className=' font-extralight'>{time}</p>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}
