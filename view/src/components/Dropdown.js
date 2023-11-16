import React from 'react'

export default function Dropdown({label,
    onDropDownChange,
    selectedDireAndRole,
    allList=[{"id":1, "title":"loading"}],
    name,
    redLightNotification,
    isDarkTheme
    }) {
  return (
    <select
    required
    name={name}
    value={selectedDireAndRole}
    onChange={(e) => onDropDownChange(e)}
    className={` border-2    text-sm rounded-lg  block ${redLightNotification?" border-red-400":""}  p-2.5       w-[20rem] ${isDarkTheme?"bg-gray-700 focus:ring-blue-500 border-gray-600 focus:border-blue-500 placeholder-gray-400 text-gray-100":"text-black focus:ring-blue-500 focus:border-blue-500"}`}
  >
    <option defaultValue={label}>{label}</option>
    {allList ? allList.map((value) => (
      <option value={value.id} key={value.title}>
        {value.title}
      </option>
    )): <>
      <option value="M">M</option>
      <option value="F">F</option>
      </>
    }
  </select>
  )
}
