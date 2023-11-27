import React, { useState } from 'react'
import ListHistoryComponent from '../card/ListHistoryComponent'

import HistoryAddModal from '../card/HistoryAddModal'

import {BiSolidMessageAdd} from 'react-icons/bi'
import {BsTable,BsListTask} from 'react-icons/bs'

import HistoryGrid from '../card/HistoryGrid'

export default function History({isDarkTheme, API_URL, allUserReletedData}) {
  const imgSrc = 'http://localhost:9000/thumbnail/document.jpg';
  const [listView, setListView] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const HistoryObj = [
    {
      id : 1,
      title : "Maintenance",
      body : `Suphaa ittisaa fi Sirreessaa buufataalee tamsaasa Kofalee, AM Roobee, Istuudiyoo FM Roobee,Gobbaa,Jimmaa fi Walisoos ni dabalata.
      oduu pirojectii Daandii. Haawwaasni naannoo sanaa daandiicharraa fayyadamu jedhamee yadamu hasofsiisuu qabdu.Qaama mootummaa ilaallatulle dubbisa.
      `,
      place : "adaamaa fi finfinnee",
      imgSrc : "http://localhost:9000/thumbnail/document.jpg",
      program : 2,
      news : 3,
      documentary : 1,
      saved_date : "03.12.2023",
      sent_date : "04.12.2023",
      from :"03.12.2023",
      to : "12.12.2023",
      sent_to : "",
      days : 7,
      production : "field"

    },
    {
      id : 2,
      title : "Gumaata",
      body : `Gumaata artii-qobiin kun aartii Oromoo magaala laga xaafoo keessa jiran artistoota fi qaamole dhimmi ilaallatu dhubbisuudhaa hasaaf dhiyessa.
      Diinagdee dhaan misooma buuraalee bulchiinsa laga xaafoo fi mootummaa naannoo dhaana magaalicha keessatti hojjetama jiran qorachuun dhiyeesaa.yaada hawasa magaalichaas ni dabala.
      Ergaa keessaniin yaada manguddootaa, abbooti gadaa, jaarsa biyyaa fi abbootii amantaa jiraattota magaalichatu dhiyaata. `,
      place : "Laga xaafoo fi laga daadhi",
      imgSrc : "http://localhost:9000/thumbnail/document.jpg",
      program : 2,
      news : 3,
      documentary : 1,
      saved_date : "03.12.2023",
      sent_date : "04.12.2023",
      from :"03.12.2023",
      to : "12.12.2023",
      sent_to : "",
      days : 7,
      production : "studio"

    }
  ]
  return (
    <div>

   
    { showModal? <HistoryAddModal isDarkTheme={isDarkTheme} setShowModal={setShowModal} API_URL={API_URL} allUserReletedData={allUserReletedData}/> :
      <>
      <div className="flex gap-10">
        <BiSolidMessageAdd className='text-2xl cursor-pointer' onClick={()=>setShowModal(true)}/>

      {  listView? 
        <BsTable onClick={()=>setListView(prevState=>!prevState)} className='text-xl cursor-pointer' />
        :
        <BsListTask onClick={()=>setListView(prevState=>!prevState)} className='text-2xl cursor-pointer'/>
      }
      </div>
      <div className='flex w-full justify-center mt-2'> 
      {   listView?
      
      <div className='flex flex-col gap-2'>
          {
            HistoryObj.map(val => {
              return <ListHistoryComponent 
              imgSrc={val.imgSrc} 
              saved_date={val.saved_date}
              title = {val.title}
              body = {val.body}
              news = {val.news}
              place = {val.place}
              program={val.program}
              days = {val.days}
              from = {val.from}
              to = {val.to}
              production = {val.production}
              isDarkTheme={isDarkTheme}/>
            })
          }
        </div>
          :
        <div className='w-full max-w-6xl '>
          <HistoryGrid HistoryObj={HistoryObj} isDarkTheme={isDarkTheme}/>
        </div>
        }
       
      </div>
    
    </>}
    </div>
  )
}
