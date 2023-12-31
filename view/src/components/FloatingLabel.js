import React from 'react'

export default function FloatingLabel({InputElementRef,label,name, type,placeholder,onChangeInput,signupForms }) {
  return (
    <div className="relative ">
    <input type={type ? type:"text"} name={name} id={name} className=" bg-gray-50 block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-500 dark:bg-gray-600 dark:focus:border-gray-100 focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder={placeholder?placeholder:""}
    onChange={onChangeInput}
    value={signupForms}
    ref={InputElementRef}
    required />

    <label htmlFor={name} className=" uppercase absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-600 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">{label}</label>
</div>
  )
}
