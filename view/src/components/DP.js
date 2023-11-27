import React, { useState } from "react";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function DP({isDarkTheme,label , startDate, setStartDate}) {
  const nowDate = new Date();
  return (
    <div>
      <label className={`block mb-2 text-sm font-medium ${
          isDarkTheme ? "text-white" : "text-gray-900"
        } `}
      >
        {label}
      </label>
      <DatePicker
        className={` border  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5      ${
          isDarkTheme
            ? "bg-gray-700 focus:ring-blue-500 focus:border-blue-500 border-gray-600 placeholder-gray-400 text-white"
            : "bg-gray-50 border-gray-300 text-gray-900"
        }`}
        selected={startDate}
        minDate = {nowDate}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
}
