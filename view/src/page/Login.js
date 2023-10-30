import React, { useState, useRef, useEffect } from 'react'
import OBNLOGO from '../public/OBNLogo.jpg'

import { ToastContainer,  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Home';


import TextInput from '../components/TextInput'
import Button from '../components/Button'
import Remember from '../components/Remember'
import SignupModal from '../components/SignupModal';



export default function Login({setSignInNoRememberMe, API_URL}) {
    const getCurrentTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;
 
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
  console.log(isDarkTheme);
    const [loginFormInput, setLoginFormInput] = useState({
        user_name : "",
        password : "",
    })
    const [isChecked, setIsChecked] = useState(false);
    const InputElementRef = useRef(null);
  
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
       InputElementRef.current.focus();
    }, [])

    // Methods goes here...

    // for the remember me section only
    const handleOnChange = () => {
        setIsChecked(!isChecked);
      };

    // for the user name and password section only
    function onLoginFormChangeHandler(e){
        const element = e.target;
        setLoginFormInput(prevState => ({
            ...prevState,
            [element.name] : element.value
        }))
    }

    // when sign in button is clicked
    async function onSignInClicked(e){
        e.preventDefault();
       

       await fetch(`${API_URL}/user/login`, {
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                user_name : loginFormInput.user_name,
                password : loginFormInput.password
            }),
        }).then((response) => response.json())
        .then((result) => {
            if(result === "Error"){
                toast.error("The username or password is incorrect!",{
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "colored",
                    
                });
            }else if(result === "Not Active"){
                // idea send direct message to admin to active your account
                toast.info("Your account is inactive. Contact your administrator to activate it.",{
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "colored",
                    
                });
            }
            else{
                if(isChecked){
                    localStorage.setItem('LogedInUser',JSON.stringify({
                        'id' : result[0].id,
                        'user_name' : result[0].user_name
                    }))
                }
                // Home Page
                setSignInNoRememberMe({
                    status : true,
                    id : result[0].id,
                    user_name : result[0].user_name,
                    full_name : result[0].full_name
                });
            }
        })
    }

    // sign up click
    function OnSignUpClick(){
        setShowModal(true);
       
    }


    // the view section...
  return (
    <>
   
    <section className='bg-gray-50 dark:bg-gray-900'>
        <ToastContainer />
       {showModal ? <SignupModal setShowModal={setShowModal} API_URL={API_URL}/> : ""}
       
       <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img className="w-8 h-8 mr-2 rounded-md" src={OBNLOGO} alt="logo" />
                SOKB-OBN   
            </a>
            <div className="w-full bg-white rounded-lg border border-x-red-500 shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-x-red-500">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className=" text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={(e)=>onSignInClicked(e)}>
                  <TextInput isDarkTheme={isDarkTheme} label={"User Name"} id={"user_name"} placeholder={"user name"} required={true} type={"text"} loginFormInput={loginFormInput.user_name} onLoginFormChangeHandler={onLoginFormChangeHandler} InputElementRef={InputElementRef}/>
                  <TextInput isDarkTheme={isDarkTheme} label={"Password"} id={"password"} placeholder={"********"} required={true} type={"password"} loginFormInput={loginFormInput.password} onLoginFormChangeHandler={onLoginFormChangeHandler}/>
                  <div className="flex items-center justify-between"> 
                        <Remember isChecked={isChecked} handleOnChange={handleOnChange}/>
                        <a href="#" className="text-sm font-medium text-gray-600 hover:underline dark:text-gray-500">Forgot password?</a>
                  </div>
                  <Button title={"Sign in"} type={"submit"} bgColor={"green"}/>
                  <h1 className="text-sm font-light text-gray-500 dark:text-gray-400 flex gap-2">
                      Don't have an account yet? 
                      
                      <p className="font-medium text-red-600 hover:underline dark:text-red-500 cursor-pointer" onClick={OnSignUpClick}>Sign up</p>
                  </h1>
              </form>
          </div>
        </div>    
        </div>  
       
    </section>
    </>
  )
}
