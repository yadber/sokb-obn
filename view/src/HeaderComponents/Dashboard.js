import React, { useState } from 'react'

import {GoSidebarCollapse} from 'react-icons/go'
import Proposal from '../menu/Proposal'
import Sidebar from '../card/Sidebar'
export default function Dashboard({
    isDarkTheme,API_URL,allUserReletedData,setOnlyForEffect
}) 

{
    const [showSidebar, setShowSidebar] = useState(true);
    const [menu, setMenu] = useState("proposal");
    
  return (
    <div className='flex  gap-1 '>

     {showSidebar ? 
     <div className='w-64'>
        <Sidebar 
            isDarkTheme={isDarkTheme}
            setShowSidebar={setShowSidebar}
            setMenu = {setMenu}
            menu ={menu}
        />
     </div> : 
     <div>
        <GoSidebarCollapse className='text-xl cursor-pointer' onClick={()=>setShowSidebar(prevState => !prevState)}/>
    </div>}
     {
        menu==="proposal"?
        <Proposal 
        isDarkTheme={isDarkTheme}
        API_URL = {API_URL}
        allUserReletedData = {allUserReletedData}
        />
        :
        <div>dashboard section </div>
        
     
     }
    </div>
  )
}
