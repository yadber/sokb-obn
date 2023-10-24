import React, { useState, useEffect } from "react";
import FloatingLabel from "./FloatingLabel";
import { ToastContainer,  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from "axios";

import Image from "./Image";
import Terms from "./Terms";
import Dropdown from "./Dropdown";

export default function SignupModal({ setShowModal }) {
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
  });

  useEffect(() => {
    async function GetDirectorateList() {
      const response = await fetch("http://localhost:9000/user/directorate");
      const directoratePlainList = await response.json();
      setDirectorateList(directoratePlainList);
    }

    async function GetRoleList() {
      const response = await fetch("http://localhost:9000/user/role");
      const RolePlainList = await response.json();
      setRoleList(RolePlainList);
    }
    GetDirectorateList();
    GetRoleList();
  }, []);

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
    const body = [{
      full_name: signupForms.full_name,
      user_name: signupForms.user_name,
      password: signupForms.password,
      directorate: selectedDireAndRole.directorate,
      role: selectedDireAndRole.role,
    }];

  
    
    let formData = new FormData();
    formData.append("image", selectedImage);
    formData.append("full_name", signupForms.full_name);
    formData.append("user_name", signupForms.user_name);
    formData.append("password", signupForms.password);
    formData.append("directorate",selectedDireAndRole.directorate);
    formData.append("role", selectedDireAndRole.role);

    const result = await axios({
        method:'post',
        url : "http://localhost:9000/user/register",
        data : formData,
        header: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    });
    if(result.data === "UserName"){
        toast.warning("A user with this username already exists. Use a different username.",{
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
            
        });
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
          <div className="flex items-center gap-0">
            <div className="px-6 py-6 lg:px-8">
              <form className="space-y-6" onSubmit={onSignUpFormSubmit}>
                <div className="flex flex-col gap-2">
                  <FloatingLabel
                    label={"full name"}
                    name={"full_name"}
                    type={"text"}
                    placeholder={""}
                    onChangeInput={onChangeInput}
                    signupForms={signupForms.full_name}
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

                  <label
                    className="block mb-0 text-sm font-medium uppercase text-gray-900 dark:text-white"
                    htmlFor="file_input"
                  >
                    Upload Photo
                  </label>

                  <Image
                    selectedImage={selectedImage}
                    imageChange={imageChange}
                    removeSelectedImage={removeSelectedImage}
                  />
                  <label className="text-black font-semibold uppercase dark:text-white">
                    Directorate
                  </label>
                  <Dropdown
                    allList={directorateList}
                    label={"Choose Directorate"}
                    name={"directorate"}
                    onDropDownChange={onDropDownChange}
                  />
                  <label className="text-black font-semibold uppercase dark:text-white">
                    Role
                  </label>
                  <Dropdown
                    allList={roleList}
                    label={"Choose Role"}
                    name={"role"}
                    onDropDownChange={onDropDownChange}
                  />
                </div>
                {checkTerms ? (
                  <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Sign Up
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="w-full text-white bg-gray-400 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-400"
                    disabled
                  >
                    Sign Up
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
