import React,{useState} from 'react'
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

export default function TP({isDarkTheme, label}) {
    const nowTime = new Date()
    const hours = nowTime.getHours();
    const minute = nowTime.getMinutes();
    const nowT = hours + ":" + minute
    const [value, onChange] = useState(nowT)
  return (
    <div >
        <label className={`block mb-2 text-sm font-medium ${
          isDarkTheme ? "text-white" : "text-gray-900"
        } `}
      >
        {label?label:"Time"}
      </label>
      <TimePicker
      minTime={nowT} 
      onChange={onChange} 
      value={value}  
      className={` border  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5      ${
          isDarkTheme
            ? "bg-gray-700 focus:ring-blue-500 focus:border-blue-500 border-gray-600 placeholder-gray-400 text-white"
            : "bg-gray-50 border-gray-300 text-gray-900"
        }`}/>
    </div>
  )
}
