import React, { useState } from "react";
import { FcDocument, FcApprove } from "react-icons/fc";
import { BiMoney } from "react-icons/bi";
import {
  AiFillCaretDown,
  AiOutlineMenu,
  AiFillCaretUp,
  AiFillCar,
  AiFillVideoCamera,
} from "react-icons/ai";
import {GoSidebarExpand} from 'react-icons/go'
import {BiSolidDashboard} from 'react-icons/bi'
export default function Sidebar({ isDarkTheme,setShowSidebar,setMenu, menu }) {
  const [hideDropdownMenu, setHideDropdownMenu] = useState(true);

  return (
    <aside
      className={` z-40 w-64 h-[165vh] transition-transform -translate-x-full sm:translate-x-0`}
    >
        
      <div
        className={`h-full px-3 py-4 overflow-y-auto  ${
          isDarkTheme ? "bg-black" : "bg-white "
        }`}
      >
        <div className="flex justify-between items-center mb-4">
            <div className="flex font-extrabold items-center gap-1 text-blue-500">
                <AiOutlineMenu />
                <p>Menu</p>
            </div>
            <GoSidebarExpand onClick={()=>setShowSidebar(prevStete=>!prevStete)} className="cursor-pointer"/>
        </div>
        <ul className="space-y-2 ">
          <li>
            <div
              className={`flex items-center p-2 rounded-xl group cursor-pointer ${
                isDarkTheme
                  ? "text-white hover:bg-gray-600"
                  : "text-gray-900 hover:bg-gray-100 "
              } ${menu==="proposal" && "bg-green-400"} `}

              onClick={()=>setMenu("proposal")}
            >
              <FcDocument />
              <p className="ml-3 font-bold ">Proposal</p>
            </div>
          </li>
          <li>
            <button
              className={`flex items-center w-full p-2 ${
                isDarkTheme
                  ? "text-white hover:bg-gray-600"
                  : "text-gray-900 hover:bg-gray-100 "
              } text-base  transition duration-75 rounded-xl group  `}
              onClick={() => setHideDropdownMenu((prevState) => !prevState)}
            >
              <FcApprove />
              <span className="flex-1 ml-3 text-left whitespace-nowrap font-bold">
                Approval Section
              </span>
              {hideDropdownMenu ? <AiFillCaretDown/> : <AiFillCaretUp/>}
              
            </button>
            {hideDropdownMenu ? (
              ""
            ) : (
              <ul className=" py-2 space-y-2">
                <li>
                  <div
                    className={`flex items-center pl-11 p-2 gap-2  w-full   transition duration-75 rounded-lg cursor-pointer  group font-bold   ${
                      isDarkTheme
                        ? "text-white hover:bg-gray-600 "
                        : "hover:bg-gray-100 text-gray-900"
                    }${menu==="logistic" && "bg-green-400"}`}
                    onClick={()=>setMenu("logistic")}
                  >
                    <AiFillCar />
                    <div>Logistic</div>
                  </div>
                </li>
                <li>
                  <div
                    className={`flex items-center pl-11 p-2 gap-2  w-full   transition duration-75 rounded-lg cursor-pointer  group font-bold   ${
                      isDarkTheme
                        ? "text-white hover:bg-gray-600 "
                        : "hover:bg-gray-100 text-gray-900"
                    }${menu==="camera" && "bg-green-400"} `
                  }

                    onClick={()=>setMenu("camera")}
                  >
                    <AiFillVideoCamera />
                    <div>Camera</div>
                  </div>
                </li>
                <li>
                  <div
                    className={`flex items-center pl-11 p-2 gap-2  w-full   transition duration-75 rounded-lg cursor-pointer  group font-bold   ${
                      isDarkTheme
                        ? "text-white hover:bg-gray-600 "
                        : "hover:bg-gray-100 text-gray-900"
                    }${menu==="finance" && "bg-green-400"} `}
                    onClick={()=>setMenu("finance")}
                  >
                    <BiMoney />
                    <div>Finance</div>
                  </div>
                </li>
              </ul>
            )}
          </li>
          <li>
            <div
              className={`flex items-center p-2 rounded-xl group cursor-pointer ${
                isDarkTheme
                  ? "text-white hover:bg-gray-600"
                  : "text-gray-900 hover:bg-gray-100 "
              } ${menu==="dashboard" && "bg-green-400"}`}
              onClick={()=>setMenu("dashboard")}
            >
              <BiSolidDashboard />
              <p className="ml-3 font-bold ">Dashboard</p>
            </div>
          </li>
          <li>
            <div
              className={`flex items-center p-2 rounded-xl group cursor-pointer ${
                isDarkTheme
                  ? "text-white hover:bg-gray-600"
                  : "text-gray-900 hover:bg-gray-100 "
              }`}
            >
              <FcDocument />
              <p className="ml-3 font-bold ">Other Menu</p>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
}
