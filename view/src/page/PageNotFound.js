import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function PageNotFound() {
    const navigate = useNavigate();
  return (
    <div className='flex items-center mt-10 p-3  w-screen h-screen'>
        <div className=' flex-col gap-2'>
            <div className=' text-5xl font-extrabold text-gray-400'>
                404
            </div>
            <div className='text-2xl mt-5 font-light'>
                Sorry we couldn't find this page.
            </div>
            <div className='font-light mt-2'>
                but don't worry. you can find plenty of other things on our system.
            </div>

            <div className='mt-10 '>
                <button className='border-2 items-center rounded-lg bg-blue-500 text-center p-2'
                    onClick={()=>navigate("/")}
                >
                    back to the system
                </button>
            </div>
        </div>
        <div>
          <img  src='https://www.littlecitytreat.com/_nuxt/img/naughty-cat.75caacc.svg' alt='oops'/>
        </div>
      
    </div>
  )
}
