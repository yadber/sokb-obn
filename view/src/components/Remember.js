import React from 'react'

export default function Remember({isChecked,handleOnChange}) {
  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          id="remember"
          name='remember_me'
          type="checkbox"
          
          checked = {isChecked}
          onChange={handleOnChange}
          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
          required=""
        />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
          Remember me
        </label>
      </div>
    </div>
  )
}
