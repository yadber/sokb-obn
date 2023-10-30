import React,{useState}  from 'react'

import TextInput from '../components/TextInput';
import Button from '../components/Button';
import ProfileCardView from '../card/ProfileCardView';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
} from "react-icons/bs";
import CountUp from 'react-countup/'


export default function Profile({isDarkTheme, API_URL,
    allUserReletedData}) {
        const imageSrc = `${API_URL}/profile/${allUserReletedData.profile_picture}`;

  return (
    <div className='flex justify-center my-4 h-max'>
      <div className={`block  p-6  border  rounded-lg shadow    max-w-lg ${isDarkTheme?"bg-gray-800 border-gray-700 hover:bg-gray-700":"bg-white border-gray-200 hover:bg-gray-100"}`}>
        <div className='flex items-center'>
          
          <p className='relative left-[9rem] top-[-5rem] rounded-lg border-blue-500 border-2 h-8 w-8 text-center items-center font-bold text-xl cursor-pointer'> 
                <CountUp start={0} end={12} duration={10} />  
          </p>
          <img crossOrigin="anonymous" src={imageSrc} alt={`${allUserReletedData.user_name}`} className='w-[12rem] h-[12rem] rounded-full mx-auto'/>
        </div>
        <h2 className="text-center text-2xl font-semibold mt-1">
          {allUserReletedData.full_name}</h2>
        <h2 className="text-center text-lg font-light">
          I love programming</h2>
        
        

        
<div>
    <div className='flex flex-col gap-5 mb-3 mt-5'>
    <div className='flex gap-5 justify-between items-center'> 
        <ProfileCardView 
        text = {"Total Proposal"}
        number ={20}
        isDarkTheme ={isDarkTheme}
        comp={<BsFillArrowUpCircleFill />}
        />
        <ProfileCardView 
        text = {"Approved Proposal"}
        number ={12}
        isDarkTheme ={isDarkTheme}
        comp={<BsFillArrowUpCircleFill />}
        />
        <ProfileCardView 
        text = {"Cancelled Proposal"}
        number ={8}
        isDarkTheme ={isDarkTheme}
        comp={<BsFillArrowDownCircleFill />}
        />
    </div>
   
  </div>
   
   
    <Accordion sx={{backgroundColor: isDarkTheme?"rgba(255, 255, 255, .05)":"rgba(0, 0, 0, .03)"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className='bg-gray-800 '
        >
          <Typography><p className={`${isDarkTheme?"text-white":'text-black'}`}>EMAIL AND PHONE</p></Typography>
        </AccordionSummary>
        <AccordionDetails className='flex-col'>
          <Typography className='flex gap-5'>
                <TextInput label={"EMAIL ADDRESS"} placeholder={allUserReletedData.email?allUserReletedData.email:"Email"} isDarkTheme={isDarkTheme}/>

                <TextInput label={"PHONE NUMBER"} placeholder={allUserReletedData.phone?allUserReletedData.phone:"Phone"} isDarkTheme={isDarkTheme}/>
          </Typography>
          <Typography sx={{marginTop:'6px'}} className='flex gap-5'>
                <TextInput label={"user name"} placeholder={allUserReletedData.user_name} isDarkTheme={isDarkTheme}/>
                <TextInput label={"password"} placeholder={allUserReletedData.password} isDarkTheme={isDarkTheme}/>
          </Typography>
        </AccordionDetails>
      </Accordion>
   
     
      <Accordion sx={{backgroundColor: isDarkTheme?"rgba(255, 255, 255, .05)":"rgba(0, 0, 0, .03)"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><p className={`${isDarkTheme?"text-white":'text-black'}`}>ROLE AND BIO</p> </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography className='flex gap-5'>
                <TextInput label={"ROLE"} placeholder={allUserReletedData.email?allUserReletedData.email:"Email"} isDarkTheme={isDarkTheme}/>

                <TextInput label={"DIRECTORATE"} placeholder={allUserReletedData.phone?allUserReletedData.phone:"Phone"} isDarkTheme={isDarkTheme}/>
          </Typography>
          <Typography sx={{marginTop:'6px'}} className='flex gap-5'>
                <TextInput label={"SEX"} placeholder={allUserReletedData.user_name} isDarkTheme={isDarkTheme}/>
                <TextInput type={"textfield"} label={"BIO"} placeholder={allUserReletedData.password} isDarkTheme={isDarkTheme}/>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>


    <div className='p-5'>
    <Button title={"save changes"} />
    </div>


        
        
      </div>
    </div>
  )
}
