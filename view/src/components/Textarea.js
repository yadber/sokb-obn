import React from "react";

export default function Textarea({ isDarkTheme, label, placeholder, onTextareaChange, textareaValue, name}) {
  return (
    <div className="mb-2">
      <label
        htmlFor="message"
        className={`block mb-2 text-sm font-medium ${isDarkTheme?"text-white":"text-gray-900"} `}
      >
        {label?label:"Your message"}
      </label>
      <textarea
        value={textareaValue}
        onChange={onTextareaChange}
        name={name}
        id="message"
        rows="2"
        className={`block p-2.5 w-full text-sm  rounded-lg border   ${isDarkTheme?"bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 ":"text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 border-gray-300 "}`}
        placeholder={placeholder?placeholder:"Write your thoughts here..."}
      ></textarea>
    </div>
  );
}
