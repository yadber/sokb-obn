import React,{useState} from "react";
import {Link} from 'react-router-dom'

import obnLogo from '../public/OBNLogo.jpg'

import {BsFillSunFill} from 'react-icons/bs'
import {MdDarkMode} from 'react-icons/md'

export default function Navbar({ userLoginInformation,setIsDarkTheme,isDarkTheme, setNavbarMenuClicked,navbarMenuClicked}) {
 
    
  return (

    <nav className={`${isDarkTheme?"bg-gray-700 border-gray-600":"bg-white border-gray-200"} `}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={"/"} className="flex items-center cursor-pointer"> 
          <img
            src={obnLogo}
            class="h-8 mr-3 rounded-full"
            alt="OBN Logo"
          />
          <span className={`self-center text-2xl font-semibold whitespace-nowrap ${isDarkTheme?"text-white":"text-black"} `}>
            SOKB-OBN
          </span>
        </Link>

        <div class=" w-full md:block md:w-auto">
            <ul class={`font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0   ${isDarkTheme?"border-gray-700 bg-gray-800 md:bg-gray-700 " : "md:bg-white bg-white border-gray-100"}`}>
                <div className="flex justify-between gap-4">
                    <div className="flex gap-4 items-center">
                            <li onClick={()=>setNavbarMenuClicked("home")}>
                                <div className={`block py-2 pl-3 pr-4  rounded   md:border-0  md:p-0     cursor-pointer  ${isDarkTheme ? "hover:bg-gray-50 hover:text-white md:hover:bg-transparent md:hover:text-blue-500  ":"md:hover:text-blue-700 d:hover:bg-transparent  hover:bg-transparent"}  ${navbarMenuClicked==="home" ? "text-blue-500" : isDarkTheme?"text-white" : "text-gray-900"}  `}
                               
                                >Home</div>
                            </li>
                            <li onClick={()=>setNavbarMenuClicked("rule")}>
                            <div className={`block py-2 pl-3 pr-4  rounded   md:border-0  md:p-0     cursor-pointer  ${isDarkTheme ? "hover:bg-gray-50 hover:text-white md:hover:bg-transparent md:hover:text-blue-500  ":"md:hover:text-blue-700 md:hover:bg-transparent  hover:bg-transparent"} ${navbarMenuClicked === "rule" ? "text-blue-500" : isDarkTheme?"text-white" : "text-gray-900"}  `}
                           
                            >Rule and Regulations</div>
                            </li>

                            <li onClick={()=>setNavbarMenuClicked("profile")}>
                            <div  className={`block py-2 pl-3 pr-4  rounded   md:border-0  md:p-0     cursor-pointer  ${isDarkTheme ? "hover:bg-gray-50 hover:text-white md:hover:bg-transparent md:hover:text-blue-500":"md:hover:text-blue-700 md:hover:bg-transparent  hover:bg-transparent"} ${navbarMenuClicked ==="profile"  ? "text-blue-500" : isDarkTheme?"text-white" : "text-gray-900"}   ` }
                           
                            >{userLoginInformation.user_name}</div>
                            </li>
                    </div>
                    <div className="flex items-center gap-3">
                            <li onClick={()=>setNavbarMenuClicked("logout")}>
                            <div className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent border-2  md:hover:text-blue-700 bg-blue-500 dark:bg-blue-600 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-900 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer">
                                
                                <p className="">Logout</p>
                            </div>
                       
                        </li>
                        {
                          isDarkTheme ? 
                            <BsFillSunFill onClick={()=>setIsDarkTheme(prevState => !prevState)} className=" cursor-pointer text-2xl"/>
                        :
                        
                            <MdDarkMode onClick={()=>setIsDarkTheme(prevState => !prevState)} className=" cursor-pointer text-2xl" />    
                        }
                    </div>
                </div>
             


                
            </ul>
    </div>
      </div>
    </nav>
  );
}
