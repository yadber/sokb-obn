import React from 'react'
import ListHistoryComponent from '../card/ListHistoryComponent'
export default function History({isDarkTheme, API_URL, allUserReletedData}) {
  const imgSrc = 'http://localhost:9000/thumbnail/document.jpg';
  const HistoryObj = [
    {
      title : "",
      body : "",
      place : "",
      imgSrc : "",
      program : "",
      news : "",
      documentary : "",
      saved_date : "",
      sent_date : "",
      from :"",
      to : "",
      sent_to : "",
      days : ""

    }
  ]
  return (
    <>
      {allUserReletedData.profile}
      {/* +add new 
      +edit
      +view(list all proposals)
      +delete 
      +search
      +send to editor
      +similar title to others(if there is) */}
      <div className='flex w-full justify-center mt-2'> 
        <div className='flex flex-col gap-2'>
          <ListHistoryComponent 
          imgSrc = {imgSrc}
          isDarkTheme={isDarkTheme}
          />
          <ListHistoryComponent 
          imgSrc = {imgSrc}
          isDarkTheme={isDarkTheme}
          />
        </div>
       
      </div>
    
    </>
  )
}
