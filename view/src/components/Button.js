import React from 'react'

export default function Button({title, bgColor , type}) {
  return (
    <button type={type} className={`w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800`}>
        {title}
    
    </button>
  )
}
