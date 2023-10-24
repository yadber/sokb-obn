import React from 'react'

export default function Dropdown({label,
    onDropDownChange,
    selectedDireAndRole,
    allList=[{"id":1, "title":"loading"}],
    name,
    newsType,}) {
  return (
    <select
    name={name}
    value={selectedDireAndRole}
    onChange={(e) => onDropDownChange(e)}
    className=" border text-black  dark:text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[20rem]"
  >
    <option defaultValue={label}>{label}</option>
    {allList ? allList.map((value) => (
      <option value={value.id} key={value.title}>
        {value.title}
      </option>
    )): newsType.map((value) => (
      <option value={value.news_type_id} key={value.news_type_id}>
        {value.news_type_title}
      </option>
    ))  }
  </select>
  )
}
