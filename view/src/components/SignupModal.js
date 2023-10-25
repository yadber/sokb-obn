import React, { useState, useEffect, useRef } from "react";
import FloatingLabel from "./FloatingLabel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

import Image from "./Image";
import Terms from "./Terms";
import Dropdown from "./Dropdown";

export default function SignupModal({ setShowModal }) {
  const [steps, setSteps] = useState("step1");
  const [checkTerms, onCheckTerms] = useState(false);
  const [directorateList, setDirectorateList] = useState();
  const [roleList, setRoleList] = useState();
  const [signupForms, setSignupForms] = useState({
    full_name: "",
    user_name: "",
    password: "",
  });
  const [selectedImage, setSelectedImage] = useState();
  const [selectedDireAndRole, setSelectedDireAndRole] = useState({
    directorate: "",
    role: "",
    sex : ""
  });
  const [redLightNotification, setRedLigntNotification] = useState({
    dir : false,
    rol : false,
    sex : false
  });

  const InputElementRef = useRef(null);

  useEffect(() => {
    async function GetDirectorateList() {
      const response = await fetch("http://localhost:9000/user/directorate");
      const directoratePlainList = await response.json();
      setDirectorateList(directoratePlainList);

      InputElementRef.current.focus();
    }

    async function GetRoleList() {
      const response = await fetch("http://localhost:9000/user/role");
      const RolePlainList = await response.json();
      setRoleList(RolePlainList);
    }
    GetDirectorateList();
    GetRoleList();

    
    
  }, []);
  setTimeout(() => {
    setRedLigntNotification({
      dir : false,
      rol : false,
      sex : false
    });
  }, 10000);

  const onDropDownChange = (e) => {
    const element = e.target;
    setSelectedDireAndRole((prevState) => ({
      ...prevState,
      [element.name]: element.value,
    }));
  };

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };
  const removeSelectedImage = () => {
    setSelectedImage();
  };
  function onChangeInput(e) {
    const element = e.target;
    setSignupForms((prevState) => ({
      ...prevState,
      [element.name]: element.value,
    }));
  }

  async function onSignUpFormSubmit(e) {
    e.preventDefault();
   
   if(selectedDireAndRole.sex !== "" && selectedDireAndRole.sex !== "choose your sex"){
    let formData = new FormData();
    formData.append("image", selectedImage);
    formData.append("full_name", signupForms.full_name);
    formData.append("user_name", signupForms.user_name);
    formData.append("password", signupForms.password);
    formData.append("directorate", selectedDireAndRole.directorate);
    formData.append("role", selectedDireAndRole.role);
    formData.append("sex", selectedDireAndRole.sex);

    const result = await axios({
      method: "post",
      url: "http://localhost:9000/user/register",
      data: formData,
      header: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    });
    if (result.data === "saved") {
      toast.success(
        "user saved successfully!",
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        }
      );
      setInterval(() => {
        setShowModal(false)
      }, 3000);
    }
   }else{
    setRedLigntNotification({sex:true})
   }

   
  }

  async function validateStepOne(e){
    e.preventDefault();

    const data = {
      full_name: signupForms.full_name,
      user_name : signupForms.user_name,
      password : signupForms.password
    }
    const options = {
      method : "POST",
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(data)
    }
    fetch("http://localhost:9000/user/checkStepOne",options)
      .then(response => response.json())
      .then(data =>{ 
        if(data === "UserName"){
          toast.error(
            "A user with this USER NAME already exists. Use a different USER NAME.",
            {
              position: "top-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "colored",
            }
          );
        }
        else if(data === "FullName"){
          toast.error(
            "A user with this FULL NAME already exists. Use a different FULL NAME.",
            {
              position: "top-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "colored",
            }
          );
        }
        else if(data === "AllGood"){
          setSteps("step2")
        }
    })
      .catch(error => console.error(error))
    
    
  } 

  function validateStepTwo(e){
    e.preventDefault();
   
    if(selectedDireAndRole.directorate !== "choose your directorate" && selectedDireAndRole.role !== "choose your role" && selectedDireAndRole.directorate !== "" && selectedDireAndRole.role !== ""  ){
      setSteps("step3");
    }else{
      if(selectedDireAndRole.directorate === "choose your directorate" || selectedDireAndRole.directorate === ""){
        setRedLigntNotification({dir:true});
      }else if(selectedDireAndRole.role === "choose your role" || selectedDireAndRole.role===""){
        setRedLigntNotification({rol : true});
      }
    }
  }
  return (
    <div className="fixed flex place-content-center  z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <ToastContainer />
      <div className="relative w-full max-w-4xl max-h-full ">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => setShowModal(false)}
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 14 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
          <div className="flex items-center gap-0 ">
            <div className="px-6 py-6 lg:px-8">
              <form className="space-y-6" onSubmit={steps==="step1"?validateStepOne:steps==="step2"?validateStepTwo:onSignUpFormSubmit}>
                <div className="flex flex-col gap-5">
                  <div className="mb-5">
                    <div className=" items-center flex justify-between w-[20rem] max-w-[20rem]">
                      <div className="flex gap-2 items-center">
                      <div className={`border-2 rounded-full h-8 w-8 items-center justify-center text-center ${steps==="step1"?"text-gray-900 border-gray-900  dark:text-gray-50 dark:border-gray-50":"text-gray-400 border-gray-400 dark:text-gray-500 dark:border-gray-500"} cursor-pointer hover:text-gray-900 hover:border-gray-900 dark:hover:text-gray-50 dark:hover:border-gray-50`} onClick={()=>setSteps("step1")}>
                          1
                        </div>
                        
                      </div>

                      <div className="flex gap-2 items-center">
                      <div className={`border-2 rounded-full h-8 w-8 items-center justify-center text-center ${steps==="step2"?"text-gray-900 border-gray-900  dark:text-gray-50 dark:border-gray-50":"text-gray-400 border-gray-400 dark:text-gray-500 dark:border-gray-500"} cursor-pointer hover:text-gray-900 hover:border-gray-900 dark:hover:text-gray-50 dark:hover:border-gray-50`} onClick={steps==="step1"?()=>validateStepOne:()=>setSteps("step2")}>
                          2
                        </div>
                       
                      </div>

                      <div className="flex gap-2 items-center">
                        <div className={`border-2 rounded-full h-8 w-8 items-center justify-center text-center ${steps==="step3"?"text-gray-900 border-gray-900  dark:text-gray-50 dark:border-gray-50":"text-gray-400 border-gray-400 dark:text-gray-500 dark:border-gray-500"} cursor-pointer hover:text-gray-900 hover:border-gray-900 dark:hover:text-gray-50 dark:hover:border-gray-50`}>
                          3
                        </div>
                       
                      </div>
                    </div>
                  </div>
                  {steps === "step1" && (
                    <>
                      <FloatingLabel
                        label={"full name"}
                        name={"full_name"}
                        type={"text"}
                        placeholder={""}
                        onChangeInput={onChangeInput}
                        signupForms={signupForms.full_name}
                        InputElementRef={InputElementRef}
                      />
                      <FloatingLabel
                        label={"user name"}
                        name={"user_name"}
                        type={"text"}
                        placeholder={""}
                        onChangeInput={onChangeInput}
                        signupForms={signupForms.user_name}
                      />

                      <FloatingLabel
                        label={"Password"}
                        name={"password"}
                        type={"password"}
                        placeholder={""}
                        onChangeInput={onChangeInput}
                        signupForms={signupForms.password}
                      />
                    </>
                  )}

                  { steps === "step3" &&
                    <div className=" max-w-[20rem] flex-col gap-4">
                      <div className="mb-4">
                        
                        <label
                        className="block mb-2 text-sm font-medium uppercase text-gray-900 dark:text-white"
                        htmlFor="file_input"
                      >
                        SEX
                      </label>
                        <Dropdown  
                        allList={false}
                        redLightNotification = {redLightNotification.sex}
                        label={"choose your sex"}
                        name={"sex"}
                        onDropDownChange={onDropDownChange}
                        selectedDireAndRole={selectedDireAndRole.sex}
                        />
                      </div>

                      <div> 
                        <label
                          className="block mb-2 text-sm font-medium uppercase text-gray-900 dark:text-white"
                          htmlFor="file_input"
                        >
                          Upload Photo
                        </label>
                      </div>


                      <Image
                        selectedImage={selectedImage}
                        imageChange={imageChange}
                        removeSelectedImage={removeSelectedImage}
                      />
                    </div>
                  }

                  {steps === "step2" && (
                    <>
                      <label className="text-black font-semibold uppercase dark:text-white">
                        Directorate
                      </label>
                      <Dropdown
                        redLightNotification = {redLightNotification.dir}
                        allList={directorateList}
                        label={"choose your directorate"}
                        name={"directorate"}
                        onDropDownChange={onDropDownChange}
                        selectedDireAndRole={selectedDireAndRole.directorate}
                      />
                      <label className="text-black font-semibold uppercase dark:text-white">
                        Role
                      </label>
                      <Dropdown
                      redLightNotification = {redLightNotification.rol}
                        allList={roleList}
                        label={"choose your role"}
                        name={"role"}
                        onDropDownChange={onDropDownChange}
                        selectedDireAndRole={selectedDireAndRole.role}
                      />
                    </>
                  )}
                </div>
                {checkTerms ? (
                  <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    {steps==="step3" ? "Sign Up" : "Next"}
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="w-full text-white bg-gray-400 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-400"
                    disabled
                  >
                    {steps==="step3" ? "Sign Up" : "Next"}
                  </button>
                )}
              </form>
            </div>
            <div className="px-6 py-8 lg:px-8">
              <p className="uppercase text-black font-bold dark:text-white">
                Terms and conditions
              </p>
              <Terms onCheckTerms={onCheckTerms} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
