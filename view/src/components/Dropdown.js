import React from 'react'

export default function Dropdown({label,
    onDropDownChange,
    selectedDireAndRole,
    allList=[{"id":1, "title":"loading"}],
    name,
    redLightNotification
    }) {
  return (
    <select
    required
    name={name}
    value={selectedDireAndRole}
    onChange={(e) => onDropDownChange(e)}
    className={` border-2 text-black  dark:text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ${redLightNotification?" border-red-400 dark:border-red-400":""}  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[20rem]`}
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
