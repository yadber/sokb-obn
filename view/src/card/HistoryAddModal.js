import React, {useState} from 'react'
import {GiCancel} from 'react-icons/gi'

import StudioProductionForm from '../forms/StudioProductionForm'

export default function HistoryAddModal({setShowModal, isDarkTheme, API_URL, allUserReletedData, setPleaseUpdate}) {
  const [formType, setFormType] = useState("field")
  return (
    <div className="fixed flex place-content-center  z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)]  max-h-full">
    
    <div className="relative w-full max-w-6xl h-full max-h-full ">

      <div className={`relative ${isDarkTheme?"bg-gray-700":"bg-white"} rounded-lg shadow `}>
        <div className={`flex items-center p-1 justify-between ${isDarkTheme?"bg-black":"bg-gray-200"}`}>
            <div className='p-2 text-xl font-bold'>
                Add Proposal
            </div>
            <GiCancel className="absolute top-3 right-2.5 w-8 h-8 hover:text-red-500 cursor-pointer" onClick={() => setShowModal(false)}/>
           
        </div>
        <div className='flex items-center  gap-5 p-5 '>
           <div className='flex-col items-center gap-5 min-w-[10rem] '>
              <div className={`  hover:font-semibold border-b-2  cursor-pointer border-2 p-2 rounded-2xl mb-3 ${formType==="field"?"border-b-red-500 font-semibold":""}`}onClick={()=>setFormType("field")}>Field Production</div>
             
              <div className={`  hover:font-semibold border-b-2  cursor-pointer border-2 p-2 rounded-2xl mb-3 ${formType==="studio"?"border-b-red-500 font-semibold":""}`}onClick={()=>setFormType("studio")}>Studio Production</div>
           </div>
           <div>
             {
              formType === "field" ? 
              <div> field form </div> 
              :
              <StudioProductionForm 
              setPleaseUpdate={setPleaseUpdate}
              setShowModal ={setShowModal}
              isDarkTheme={isDarkTheme} 
              API_URL={API_URL} 
              allUserReletedData={allUserReletedData}/> 

             }
           </div>
            
        </div>

      </div>
    </div>
  </div>
  )
}
