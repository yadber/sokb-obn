import React,{useState, useEffect} from "react";
import {Link} from 'react-router-dom'


import obnLogo from '../public/OBNLogo.jpg'
import {BsFillSunFill} from 'react-icons/bs'
import {MdDarkMode} from 'react-icons/md'
import {AiFillBell,AiFillHome} from 'react-icons/ai'
import {BsFileRuledFill} from 'react-icons/bs'

export default function Navbar({ userLoginInformation,setIsDarkTheme,isDarkTheme, setNavbarMenuClicked,navbarMenuClicked, API_URL,setOnlyForEffect}) {
    const [imageSrc, setImageSrc] = useState("");
    const [allUserReletedData, setAllUserReletedData] = useState({});

    useEffect(() => {
      async function GetUserDetail() {
        const response = await fetch(`${API_URL}/user/detail/${userLoginInformation.id}`);
        const RolePlainList = await response.json();
        setAllUserReletedData(RolePlainList[0]);
        setImageSrc(RolePlainList[0].profile_picture);
      }
      GetUserDetail()
    }, [])    
  
  return (
    
    <nav className={`${isDarkTheme?"bg-gray-700 border-gray-600":"bg-white border-b-2 border-gray-200"} `}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={"/"} className="flex items-center cursor-pointer"> 
          <img
            src={obnLogo}
            className="h-8 w-10 mr-3 rounded-lg"
            alt="OBN Logo"
          />
          <span className={`self-center text-2xl font-semibold whitespace-nowrap ${isDarkTheme?"text-white":"text-black"} `}>
            SOKB-OBN
          </span>
        </Link>

        <div className=" w-full md:block md:w-auto">
            <ul className={`font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0   ${isDarkTheme?"border-gray-700 bg-gray-800 md:bg-gray-700 " : "md:bg-white bg-white border-gray-100"}`}>
                <div className="flex justify-between gap-14">
                    <div className="flex gap-14 items-center">
                            <li onClick={()=>setNavbarMenuClicked("home")}>
                                <div className={`block py-2 pl-3 pr-4  rounded   md:border-0  md:p-0     cursor-pointer  ${isDarkTheme ? "hover:bg-gray-50 hover:text-white md:hover:bg-transparent md:hover:text-blue-500  ":"md:hover:text-blue-700 d:hover:bg-transparent  hover:bg-transparent"}  ${navbarMenuClicked==="home" ? "text-blue-500" : isDarkTheme?"text-white" : "text-gray-900"}  `}
                               
                                ><AiFillHome className="text-4xl"/></div>
                            </li>
                            <li onClick={()=>setNavbarMenuClicked("rule")}>
                            <div className={`block py-2 pl-3 pr-4  rounded   md:border-0  md:p-0     cursor-pointer  ${isDarkTheme ? "hover:bg-gray-50 hover:text-white md:hover:bg-transparent md:hover:text-blue-500  ":"md:hover:text-blue-700 md:hover:bg-transparent  hover:bg-transparent"} ${navbarMenuClicked === "rule" ? "text-blue-500" : isDarkTheme?"text-white" : "text-gray-900"}  `}
                           
                            ><BsFileRuledFill className="text-3xl"/></div>
                            </li>

                            <li onClick={()=>setNavbarMenuClicked("notification")}>
                              <div className="flex">
                                <div className={`block py-2 pl-3 pr-4  rounded   md:border-0  md:p-0     cursor-pointer  ${isDarkTheme ? "hover:bg-gray-50 hover:text-white md:hover:bg-transparent md:hover:text-blue-500  ":"md:hover:text-blue-700 d:hover:bg-transparent  hover:bg-transparent"}  ${navbarMenuClicked==="notification" ? "text-blue-500" : isDarkTheme?"text-white" : "text-gray-900"}  `}>
                                <AiFillBell className={`text-4xl`}/>
                                </div>
                                {/* {unseenNotification ? "" :""} */}
                                <div className=" bg-red-700 text-white rounded-full h-5 w-7 text-sm text-center flex justify-center ml-[-20px]">
                                  {3}
                                </div>
                              </div>
                            </li>

                            <li onClick={()=>setNavbarMenuClicked("profile")}>
                            <div  className={`block py-2 pl-3 pr-4  rounded   md:border-0  md:p-0     cursor-pointer  ${isDarkTheme ? "hover:bg-gray-50 hover:text-white md:hover:bg-transparent md:hover:text-blue-500":"md:hover:text-blue-700 md:hover:bg-transparent  hover:bg-transparent"}   ` }
                           
                            >
                              <img crossOrigin="anonymous" src={`${API_URL}/profile/${imageSrc}`} alt="admin" className={`h-11 w-11 rounded-full hover:border-blue-700  border-2 ${navbarMenuClicked ==="profile"  ? " border-blue-500" :"" } `}  />
                              <div>
                                
                              </div>
                            
                          </div>
                            </li>
                           
                    </div>
                    <div className="flex items-center gap-3">
                            <li onClick={()=>setNavbarMenuClicked("logout")}>
                            <div className={`block py-2 pl-3 pr-4  rounded   border-2      cursor-pointer
                            ${isDarkTheme?"text-white bg-transparent hover:bg-blue-700 ":"text-black hover:bg-blue-600   bg-transparent "}
                            `}>
                                
                                <p className="">Logout</p>
                            </div>
                       
                        </li>
                        {
                          isDarkTheme ? 
                            <BsFillSunFill onClick={()=>setIsDarkTheme(prevState => !prevState)} className={ `text-white cursor-pointer text-2xl`}/>
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
