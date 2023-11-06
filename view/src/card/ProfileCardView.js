import React from 'react'
import CountUp from 'react-countup/'


export default function ProfileCardView({text, number,comp, onClick ,kg, isDarkTheme}) {
  return (
    <div>
    <div className={`block max-w-sm p-2 w-50 h-20  border  rounded-lg shadow-sm  ${isDarkTheme?" bg-transparent border-transparent shadow-white":"hover:bg-gray-100 shadow-black bg-white border-gray-200"}  `}
    onClick={onClick}
    >
           <div className="flex flex-col items-center justify-center">
               <div className={`${isDarkTheme?"text-red-200 ":"text-red-600"}  text-sm font-semibold `}>{text}</div>
               <div className="flex gap-2 mb-2 mt-1 text-3xl font-extrabold justify-center items-center">
                <div>
                <CountUp start={0} end={number} duration={10} />
                </div>
                 <div>
                   {comp}
                 </div>
               </div>
               
           </div>
    </div>
</div>
  )
}
