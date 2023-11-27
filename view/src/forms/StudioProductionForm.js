import React,{useState} from "react";
import TextInput from "../components/TextInput";
import Dropdown from "../components/Dropdown";
import DP from "../components/DP";
import TP from "../components/TP";
import Textarea from "../components/Textarea";
import Image from "../components/Image"

import { ToastContainer,  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


export default function StudioProductionForm({ isDarkTheme,allUserReletedData,API_URL  }) {
  const nowTime = new Date()
  const hours = nowTime.getHours();
  const minute = nowTime.getMinutes();
  const nowT = hours + ":" + minute;

  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(nowT)
  const [endTime, setEndTime] = useState(nowT)
  const [proposalForm, setProposalFrom] = useState({
    program_name : "",
    host_name : allUserReletedData.user_name,
    host_number : "",
    guest_number : "",
    choose_studio : "",
    description : ""

  })
  const [selectedImage, setSelectedImage] = useState();
  
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };
  const removeSelectedImage = () => {
    setSelectedImage();
  };

  async function onSaveClick(){
    if(proposalForm.program_name && proposalForm.host_name && proposalForm.host_number && proposalForm.guest_number && proposalForm.choose_studio !== "Choose Studio"){
      let formData = new FormData();

      formData.append("file", selectedImage);
      formData.append("program_name", proposalForm.program_name);
      formData.append("host_name", proposalForm.host_name);
      formData.append("host_number", proposalForm.host_number);
      formData.append("guest_number", proposalForm.guest_number);
      formData.append("studio_idfk", proposalForm.choose_studio);
      formData.append("scheduled_date", startDate.toLocaleDateString());
      formData.append("scheduled_s_time", startTime);
      formData.append("scheduled_e_time", endTime);
      formData.append("description", proposalForm.description);
      formData.append("user_idfk", allUserReletedData.id)

      
      const result = await axios({
        method: "post",
        url: `${API_URL}/studioProduction/save`,
        data: formData,
        header: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      });
      if (result.data === "saved") {
      }else{

      }

























    }else{
      toast.error("all forms must be filled!",{
        position:"top-center",
        autoClose:2000,
        theme : "colored"
      })
    }
   
  }

  function onFormChange(e){
    const element = e.target
    setProposalFrom(prevState => ({
      ...prevState,
      [element.name] : element.value
    }))
  }
  
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
      <ToastContainer />
        <fieldset
          className={`border-2 w-full min-w-[22rem] p-2 gap-2 flex flex-col ${
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
            loginFormInput={proposalForm.program_name}
            onLoginFormChangeHandler={onFormChange}
            placeholder={"program's name"}
            isDarkTheme={isDarkTheme}
          />
          <TextInput
            label="Host's full name"
            id={"host_name"}
            loginFormInput={proposalForm.host_name}
            onLoginFormChangeHandler={onFormChange}
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
            loginFormInput={proposalForm.host_number}
            onLoginFormChangeHandler={onFormChange}
          />
          <TextInput
            label="Number of guest"
            id={"guest_number"}
            type={"number"}
            min = {"0"}
            placeholder={"Number of guest"}
            isDarkTheme={isDarkTheme}
            loginFormInput={proposalForm.guest_number}
            onLoginFormChangeHandler={onFormChange}
          />
          </div>
          <Dropdown 
          allList={StudioDropdown} 
          label={"Choose Studio"}
          onDropDownChange = {onFormChange} 
          name = "choose_studio"
          isDarkTheme={isDarkTheme}/>

         
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
            <DP isDarkTheme={isDarkTheme} label={"Date"}
                startDate={startDate} setStartDate={setStartDate}
            />
            <TP 
            value = {startTime}
            onChange ={setStartTime}
            isDarkTheme={isDarkTheme} 
            label={"Starting time"} 
            startDate={startDate} />
            <TP 
            value = {endTime}
            onChange ={setEndTime}
            isDarkTheme={isDarkTheme} 
            label={"Ending time"} 
            startDate={startDate}/>
          </div>
          <div className="flex justify-end italic underline text-blue-400 cursor-pointer hover:text-blue-600 mt-[-1rem]">
              check availability
          </div>
        </fieldset>
        </div>
            <Textarea
            name = "description"
            textareaValue = {proposalForm.description}
            onTextareaChange = {onFormChange}
            label={"Description (optional)"} 
            placeholder={"Write your description here..."} 
            isDarkTheme={isDarkTheme}/>
            <label className="mb-1 text-sm font-semibold">Attach file( Optional, file type:- image)</label>
            <Image 
                 selectedImage={selectedImage}
                 imageChange={imageChange}
                 removeSelectedImage={removeSelectedImage}
                 fullImage = "yes"
            
            />
            <div onClick={()=>onSaveClick()} 
            className="border-2 mt-2 mb-2 text-white bg-blue-800 rounded-lg text-center p-1 max-w-[8rem] min-w-[8rem] flex justify-center items-end float-right hover:bg-blue-500 cursor-pointer ">
              <button >Save</button>
            </div>
        
    </div>
  );
}
