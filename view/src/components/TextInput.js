import React from "react";

export default function TextInput({ label, id, required, placeholder, type,loginFormInput,onLoginFormChangeHandler, InputElementRef, isDarkTheme}) {
  return (
    <div>
      <label
        htmlFor={id}
        className={`block mb-2 text-sm font-medium ${isDarkTheme? "text-white":"text-gray-900"} `}
      >
        {label}
      </label>
      <input
        ref={InputElementRef}
        onChange={onLoginFormChangeHandler}
        type={type}
        name={id}
        value={loginFormInput}
        id={id}
        className={` border  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5      ${isDarkTheme? "bg-gray-700 focus:ring-blue-500 focus:border-blue-500 border-gray-600 placeholder-gray-400 text-white":"bg-gray-50 border-gray-300 text-gray-900"}`}
        placeholder={placeholder}
        required={required?required:false}
      />
    </div>
  );
}
