import React from 'react'

export default function ProposalBar({isDarkTheme, menu, setMenu}) {
   
    
      return (
        <div className="flex justify-center w-full sticky top-1">
            <ul className={`flex justify-between ${isDarkTheme?"bg-gray-800":"bg-gray-100"}  gap-20 items-centers px-3 max-w-4xl mx-auto `}>
              <li
               className={`cursor-pointer py-2 text-sm  md:text-lg lg:text-xl  ${
                isDarkTheme ? "text-gray-300" : "text-gray-800"
              } border-b-[3px]  hover:border-b-red-400 hover:font-bold ${menu ==="history" ? "border-b-red-500 font-bold":"border-b-transparent font-semibold"} `}
                onClick={()=>setMenu("history")}
              >
                History
              </li>
              <li
                 className={`cursor-pointer py-2 text-sm  md:text-lg lg:text-xl  ${
                    isDarkTheme ? "text-gray-300" : "text-gray-800"
                  } border-b-[3px]  hover:border-b-red-400 hover:font-bold ${menu ==="editor" ? "border-b-red-500 font-bold":"border-b-transparent font-semibold"} `}
                  onClick={()=>setMenu("editor")}
              >
                Editor
              </li>
    
              <li
                 className={`cursor-pointer py-2 text-sm  md:text-lg lg:text-xl  ${
                    isDarkTheme ? "text-gray-300" : "text-gray-800"
                  } border-b-[3px]  hover:border-b-red-400 hover:font-bold ${menu ==="progress" ? "border-b-red-500 font-bold":"border-b-transparent font-semibold"} `}
                  onClick={()=>setMenu("progress")}
              >
                Progress
              </li>
              <li
              onClick={()=>setMenu("final")}
              className={`cursor-pointer py-2 text-sm  md:text-lg lg:text-xl  ${
                isDarkTheme ? "text-gray-300" : "text-gray-800"
              } border-b-[3px]  hover:border-b-red-400 hover:font-bold ${menu ==="final" ? "border-b-red-500 font-bold":"border-b-transparent font-semibold"} `} >
                Final
              </li>
            </ul>
          
        </div>
      );
    }