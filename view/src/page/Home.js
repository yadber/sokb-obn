import React from 'react'

export default function Home({userLoginInformation}) {
  return (
    <div>
      this is Home WELCOME {userLoginInformation.user_name} {userLoginInformation.id}
    </div>
  )
}
