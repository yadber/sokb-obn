import React from 'react'
import Navbar from '../components/Navbar'


export default function Home({userLoginInformation}) {
  return (
    <div className='bg-gray-50 dark:bg-gray-900 mx-auto md:h-screen lg:py-0'>
      <Navbar userLoginInformation={userLoginInformation}/>
      <div className='text-black dark:text-white'>
        this is Home WELCOME {userLoginInformation.user_name} {userLoginInformation.id}
      </div>
    </div>
  )
}
