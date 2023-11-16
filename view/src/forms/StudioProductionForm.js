import React from "react";
import TextInput from "../components/TextInput";
import Dropdown from "../components/Dropdown";
import DP from "../components/DP";
import TP from "../components/TP";
import Textarea from "../components/Textarea";
import Image from "../components/Image"
import Button from "../components/Button";

export default function StudioProductionForm({ isDarkTheme }) {
  const today = new Date().toLocaleDateString();
  
  const StudioDropdown = [
    {
      "id" : 1,
      "title" : "Main Studio (channel 1)",
    },
    {
      "id" : 2,
      "title" : "Horn Studio (channel 2)",
    },
    {
      "id" : 3,
      "title" : "Gaammee Studio (channel 3)",
    },
  ]
  return (
    <div>
      <div className="flex gap-2 w-full">
        <fieldset
          className={`border-2 w-full min-w-[22rem] p-4 gap-5 flex flex-col ${
            isDarkTheme ? " border-gray-400" : "border-gray-700"
          } `}
        >
          <legend
            className={`font-light italic text-sm ${
              isDarkTheme ? "text-gray-400" : "text-gray-700"
            }`}
          >
            General Information About the program
          </legend>
          <TextInput
            label="Name"
            id={"program_name"}
            placeholder={"program's name"}
            isDarkTheme={isDarkTheme}
          />
          <TextInput
            label="Host's full name"
            id={"host_full_name"}
            placeholder={"Host's full name"}
            isDarkTheme={isDarkTheme}
          />
        </fieldset>

        <fieldset
          className={`border-2 w-full min-w-[22rem] p-4 gap-5 flex flex-col ${
            isDarkTheme ? " border-gray-400" : "border-gray-700"
          } `}
        >
          <legend
            className={`font-light italic text-sm ${
              isDarkTheme ? "text-gray-400" : "text-gray-700"
            }`}
          >
            Gues and Host
          </legend>
          <div className="flex gap-1">
          <TextInput
            label="Number of host"
            id={"host_number"}
            type={"number"}
            min={"0"}
            placeholder={"Number of host"}
            isDarkTheme={isDarkTheme}
          />
          <TextInput
            label="Number of guest"
            id={"guest_number"}
            type={"number"}
            min = {"0"}
            placeholder={"Number of guest"}
            isDarkTheme={isDarkTheme}
          />
          </div>
          <Dropdown allList={StudioDropdown} label={"Choose Studio"} isDarkTheme={isDarkTheme}/>

         
        </fieldset>
      </div>
      <div className="flex gap-2 mb-2">
      <fieldset
          className={`border-2 w-full  p-4 gap-5 flex flex-col ${
            isDarkTheme ? " border-gray-400" : "border-gray-700"
          } `}
        >
          <legend
            className={`font-light italic text-sm ${
              isDarkTheme ? "text-gray-400" : "text-gray-700"
            }`}
          >
            Date format is M/D/Y
          </legend>
          <div className="flex gap-1 items-center justify-between">   
            <DP isDarkTheme={isDarkTheme} label={"Date"}/>
            <TP isDarkTheme={isDarkTheme} label={"Starting time"}/>
            <TP isDarkTheme={isDarkTheme} label={"Ending time"}/>
          </div>
          <div className="flex justify-end italic underline text-blue-400 cursor-pointer hover:text-blue-600 mt-[-1rem]">
              check availability
          </div>
        </fieldset>
        </div>
            <Textarea label={"Description (optional)"} placeholder={"Write your description here..."} isDarkTheme={isDarkTheme}/>
            <label className="mb-1 text-sm font-semibold">Attach file( Optional, file type:- image)</label>
            <Image />
            <div className="border-2 mt-2 mb-2 rounded-lg text-center p-1 max-w-[8rem] min-w-[8rem] flex justify-center items-end float-right hover:bg-blue-500 cursor-pointer ">
              <button>Save</button>
            </div>
        
    </div>
  );
}
