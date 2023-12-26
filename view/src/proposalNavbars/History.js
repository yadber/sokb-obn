import React, { useState,useEffect } from 'react'
import ListHistoryComponent from '../card/ListHistoryComponent'

import HistoryAddModal from '../card/HistoryAddModal'

import {BiSolidMessageAdd} from 'react-icons/bi'
import {BsTable,BsListTask} from 'react-icons/bs'
import { ToastContainer,  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import HistoryGrid from '../card/HistoryGrid'

export default function History({isDarkTheme, API_URL, allUserReletedData, } ) {
  const [listView, setListView] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [allSavedStudioProposal, setAllSavedStudioProposal] = useState([{}]);
  const [couseEffect, setCouseEffect] = useState(1);
  const [pleaseUpdate, setPleaseUpdate] = useState(1);
  const [fieldOrStudio, setFieldOrStudio] = useState("studio");

  useEffect(() => {
    couseEffect < 5 && setTimeout(() => {   
     setCouseEffect(prevState => prevState +1);
    }, 5000)
    
    async function getStudioProposal(){
      const response = await fetch(API_URL+'/studioProduction/list/'+allUserReletedData.id);
      const savedStudioPlainList = await response.json();
      setAllSavedStudioProposal(savedStudioPlainList)
    }
    getStudioProposal()
    
  },[pleaseUpdate, couseEffect])

  async function DeleteFromHistory(id){
    await fetch(API_URL+'/studioProduction/delete/'+id, {method:'DELETE'})
    .then(
      
      toast.success("Deleted Successfully!", {
        position: "top-center",
        autoClose:2000,
        theme:"colored"
      })
      )
      setPleaseUpdate(prevState => prevState+1)
    
}
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
    },
    
  ]
  return (
    <div>

   
    { showModal? <HistoryAddModal setPleaseUpdate={setPleaseUpdate} isDarkTheme={isDarkTheme} setShowModal={setShowModal} API_URL={API_URL} allUserReletedData={allUserReletedData}/> :
      <>
      <div className="flex gap-10 w-full">
      <ToastContainer />
        <BiSolidMessageAdd className='text-2xl cursor-pointer' onClick={()=>setShowModal(true)}/>

      {  listView? 
        <BsTable onClick={()=>setListView(prevState=>!prevState)} className='text-xl cursor-pointer' />
        :
        <BsListTask onClick={()=>setListView(prevState=>!prevState)} className='text-2xl cursor-pointer'/>
      }
      <div className='text-center items-center flex gap-10 w-full justify-center '>
          <div className={`cursor-pointer italic  ${fieldOrStudio === "studio"?"text-blue-500":""}` }
            onClick={()=>setFieldOrStudio("studio")}
            >
              studio
            </div>
            <div className={`cursor-pointer italic  ${fieldOrStudio === "field"?"text-blue-500":""}` }
            onClick={()=>setFieldOrStudio("field")}
            >
              field
            </div>
            <div className={`cursor-pointer italic  ${fieldOrStudio === "both"?"text-blue-500":""}` }
            onClick={()=>setFieldOrStudio("both")}
            >
              Both
            </div>
      </div>
       
      </div>
      <div className='flex w-full justify-center mt-2'> 
      {   listView?
      <div className='flex gap-2'>

        {(fieldOrStudio==="field" || fieldOrStudio ==="both") &&<div className='flex flex-col  gap-2'>
          {
            HistoryObj.map(val => {
              return  <ListHistoryComponent 
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
              API_URL = {API_URL}
              production = {val.production}
              isDarkTheme={isDarkTheme}
              /> 
            })
            
          }
          </div>}

         { (fieldOrStudio === "studio" || fieldOrStudio === "both") && <div  className='flex flex-col  gap-2'>
          {
            allSavedStudioProposal.map(val => {
              return <ListHistoryComponent 
              imgSrc={val.file !== "No file attached!" ? `${API_URL}/studioProduction/${val.file}` : `${API_URL}/thumbnail/studio.jpg`} 
              saved_date={val.saved_date}
              title = {val.program_name}
              body = {val.description}
              id = {val.id}
              DeleteFromHistory = {DeleteFromHistory}
              place = {val.studio_idfk}
              program={val.guest_number}
              news = {val.host_number}
              days = {val.scheduled_date}
              from = {val.scheduled_s_time}
              to = {val.scheduled_e_time}
              requested_by = {val.host_name}
              API_URL = {API_URL}
              production = {val.production_type}
              studio = "yes"
              isDarkTheme={isDarkTheme}
              />
            })
            
          }
          </div>}
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
