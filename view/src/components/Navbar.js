import React,{useState} from "react";
import {Link} from 'react-router-dom'

import obnLogo from '../public/OBNLogo.jpg'

import {BsFillSunFill} from 'react-icons/bs'
import {MdDarkMode} from 'react-icons/md'

export default function Navbar({ userLoginInformation }) {
    const [activeButton, setActiveButton] = useState({
        home : true,
        rule : false,
        profile : false,
    });
  return (

    <nav className="bg-white border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={"/"} className="flex items-center cursor-pointer"> 
          <img
            src={obnLogo}
            class="h-8 mr-3 rounded-full"
            alt="OBN Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            SOKB-OBN
          </span>
        </Link>

        <div class=" w-full md:block md:w-auto">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-700 dark:border-gray-700">
                <div className="flex justify-between gap-4">
                    <div className="flex gap-4 items-center">
                            <li>
                                <div className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer ${activeButton.home ? "text-blue-500" : ""}`}
                                onClick={()=>setActiveButton({
                                    home : true,
                                    rule : false,
                                    profile : false,
                                })}
                                >Home</div>
                            </li>
                            <li>
                            <div className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer ${activeButton.rule ? "text-blue-500" : ""} `}
                            onClick={()=>setActiveButton({
                                home : false,
                                rule : true,
                                profile : false,
                            })}
                            >Rule and Regulations</div>
                            </li>

                            <li>
                            <div  className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer ${activeButton.profile ? "text-blue-500" : ""}  ` }
                            onClick={()=>setActiveButton({
                                home : false,
                                rule : false,
                                profile : true,
                            })}
                            >{userLoginInformation.user_name}</div>
                            </li>
                    </div>
                    <div className="flex items-center gap-3">
                            <li onClick={()=> setActiveButton({
                                home: false,
                                rule : false,
                                profile : false
                            })}>
                            <div className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent border-2  md:hover:text-blue-700 bg-blue-500 dark:bg-blue-600 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-900 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer">
                                
                                <p className="">Logout</p>
                            </div>
                       
                        </li>
                        <div>
                            <BsFillSunFill />
                        </div>
                        <div>
                            <MdDarkMode />
                        </div>
                    </div>
                </div>
             


                
            </ul>
    </div>
      </div>
    </nav>
  );
}
