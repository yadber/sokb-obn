import React from 'react'

import NotificationCardView from '../card/NotificationCardView';
export default function Notification({isDarkTheme,API_URL,allUserReletedData}) {
    const imageSrc = `${API_URL}/profile/${allUserReletedData.profile_picture}`;
    const notificationOBJ = [
        {
            imageSrc : `${API_URL}/profile/${allUserReletedData.profile_picture}`,
            message : "The Proposal you have sent got viewed by your editor. and he updated and with some suggestions he sent back to you. you can review it.",
            time : "10 hours ago"

        },
        {
            imageSrc : `${API_URL}/profile/image-1698227315901.jpg`,
            message : "HR want you to know that it is Import to come to tomorrows meeting",
            time : "Oct 25 at 11:25 PM"

        },
        {
            imageSrc : imageSrc,
            message : "The Proposal",
            time : "Oct 25 at 11:25 PM"

        },
        {
            imageSrc : `${API_URL}/profile/image-1698227315901.jpg`,
            message : "The Proposal you have sent got viewed by your editor. and he updated and with some suggestions he sent back to you. you can review it. The Proposal you have sent got viewed by your editor.",
            time : "Oct 25 at 11:25 PM"

        },
        {
            imageSrc : `${API_URL}/profile/image-1698227315901.jpg`,
            message : "The Proposal you have sent got viewed by your editor. and he updated and with some suggestions he sent back to you. you can review it. The Proposal you have sent got viewed by your editor. and he updated and with some suggestions he sent back to you. you can review it. The Proposal you have sent got viewed by your editor.",
            time : "Oct 25 at 11:25 PM"

        }
    ]
  return (
  
       <div className=''>
        {
            notificationOBJ.map(val =>{
                return <NotificationCardView 
                    imageSrc={val.imageSrc}
                    message={val.message}
                    time={val.time}
                    key={val.message}
                    isDarkTheme={isDarkTheme}
                    allUserReletedData={allUserReletedData}
                />
            })
        }

           {/* <NotificationCardView allUserReletedData={allUserReletedData} imageSrc={imageSrc}
           message= {notificationOBJ[0].message}
           time = {notificationOBJ[0].time}
           isDarkTheme={isDarkTheme}
           />
           <NotificationCardView allUserReletedData={allUserReletedData} imageSrc={imageSrc}
           message= {notificationOBJ[0].message}
           time = {notificationOBJ[0].time}
           isDarkTheme={isDarkTheme}
           /> */}
           
       </div>
            
        
          
         

       
  )
}
