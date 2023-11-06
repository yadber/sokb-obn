import React from 'react'
import TextInput from './TextInput'
import {AiFillEdit,AiOutlineCheckSquare} from 'react-icons/ai'
import {MdOutlineCancelPresentation} from 'react-icons/md'

export default function TextInputWithEdit({isLoading,label, placeholder, isDarkTheme,disabled,onEditIconClicked,onCancelIconClicked,updatedFormInput,onUpdateFormChangeHandler,name, type,onSaveIconClicked}) {
  return (
    <div className='flex'>
    <TextInput 
    isLoading = {isLoading}
    label={label} 
    placeholder={placeholder} 
    isDarkTheme={isDarkTheme} 
    disabled={disabled}
    loginFormInput = {updatedFormInput}
    id = {name}
    type = {type}
    onLoginFormChangeHandler = {onUpdateFormChangeHandler}
    />

    {
        disabled ? <AiFillEdit onClick={onEditIconClicked} className={`relative left-[-1.8rem] top-[2.5rem] text-xl cursor-pointer ${isDarkTheme?"text-black":"text-gray-500"}`}
        /> : 
        <div className='flex'>
                <AiOutlineCheckSquare
                onClick={()=>onSaveIconClicked(name)}
                className={`relative left-[-2.6rem] top-[0.7rem] text-xl cursor-pointer ${isDarkTheme?"text-black":"text-gray-500"}`} />
                <MdOutlineCancelPresentation onClick={onCancelIconClicked} className={`relative left-[-2.4rem] top-[0.7rem] text-xl cursor-pointer ${isDarkTheme?"text-black":"text-gray-500"}`}/>
        </div>
    }
    
  </div>
  )
}
