import React,{useState,useEffect}  from 'react'


import ProfileCardView from '../card/ProfileCardView';
import { ToastContainer,  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {BiShow, BiHide} from 'react-icons/bi'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  BsFillArrowUpCircleFill,
  BsFillCheckCircleFill
} from "react-icons/bs";
import {MdPending} from 'react-icons/md'
import {GiCancel} from 'react-icons/gi'
import CountUp from 'react-countup/'
import TextInputWithEdit from '../components/TextInputWithEdit';

export default function Profile({isDarkTheme, API_URL,
    allUserReletedData,setOnlyForEffect}) {

        const imageSrc = `${API_URL}/profile/${allUserReletedData.profile_picture}`;
        const [role, setRole] = useState("");
        const [directorate, setDirectorate] = useState("");
        const [showPassword, setShowPassword] = useState(false);
        const [disabledEmail, setDisabledEmail] = useState(true);
        const [disabledPhone, setDisabledPhone] = useState(true);
        const [disabledUsername, setDisabledUsername] = useState(true);
        const [disabledPassword, setDisabledPassword] = useState(true);
        const [disabledSex, setDisabledSex] = useState(true);
        const [disabledBio, setDisableBio] = useState(true);

        const [updateForm, setUpdateForm] = useState({
          id : allUserReletedData.id,
          email : allUserReletedData.email? allUserReletedData.email : "",
          phone : allUserReletedData.phone? allUserReletedData.phone : "",
          user_name : allUserReletedData.user_name,
          old_password : "",
          new_password : "",
          sex : allUserReletedData.sex,
          bio : allUserReletedData.bio
        })

      
    

        const [isLoading, setIsLoading] = useState({
          phone : false,
          email : false,
          user_name : false,
          password : false,
          sex : false,
          bio : false
        });
        useEffect(() => {
          async function getRole() {
            const response = await fetch(`${API_URL}/user/role/${allUserReletedData.role_id_fk}`);
            const RolePlainList = await response.json();
            setRole(RolePlainList[0]);
          }
          async function getDirectorate() {
            const response = await fetch(`${API_URL}/user/directorate/${allUserReletedData.directorate_id_fk}`);
            const RolePlainList = await response.json();
            setDirectorate(RolePlainList[0]);
          }
          getRole();
          getDirectorate();

          setInterval(() => {
            setIsLoading({
              phone : false,
              email : false,
              user_name : false,
              password : false,
              sex : false,
              bio : false
            });
          }, 5000);

        }, [])

        function onEditIconClicked(){
          setDisabledEmail(prevState => !prevState);
        }
        function onEditIconClickedPhone(){
          setDisabledPhone(prevState => !prevState);
        }
        function onEditIconClickedUsername(){
          setDisabledUsername(prevState => !prevState);
        }
        function onEditIconClickedPassword(){
          setDisabledPassword(prevState=>!prevState);
        }
        function onEditIconClickedSex(){
          setDisabledSex(prevState => !prevState);
        }
        function onEditIconClickedBio(){
          setDisableBio(prevState => !prevState);
        }

        function onUpdateFormChangeHandler(e){
          const element = e.target;
          
          setUpdateForm(prevState => ({
            ...prevState,
            [element.name] : element.value
          }))

        }
       

        function onSaveIconClicked(argument){
          

          fetch(`${API_URL}/user/register/${argument}`, {
            method : 'PUT',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(updateForm)
          })
          .then(response => response.json())
          .then(data => {
            setIsLoading(
             data === "email"? 
                  {email : true}:data === "phone"?
                  {phone : true}:data === "user_name"?
                  {user_name : true}:data === "password"?
                  {password:true}:data === "sex"?{sex:true}:
                  {bio : true}
            )
            setOnlyForEffect(prevState => prevState+1)
            if(data === "Error"){
              toast.error("user name already exist",{
                position:"top-center",
                autoClose:2000,
                theme : "colored"
              })
            }else if(data === "OLD"){
              toast.error("OLD PASSWORD is Wrong",{
                position:"top-center",
                autoClose:2000,
                theme : "colored"
              })
            }else{
              toast.success("updated",{
                position:"top-center",
                autoClose:2000,
                theme : "colored"
              })
              if(data === "email"){
                setTimeout(() => {
                  onEditIconClicked();
                }, 2000);
              }if(data === "phone"){
                setTimeout(() => {
                  onEditIconClickedPhone();
                }, 2000);
              }if(data === "user_name"){
                setTimeout(() => {
                  onEditIconClickedUsername();
                }, 2000);
              }if(data === "password"){
                setTimeout(() => {
                  onEditIconClickedPassword();
                  setShowPassword(false);
                }, 2000);
              }if(data === "sex"){
                setTimeout(() => {
                  onEditIconClickedSex();
                  
                }, 2000);
              }if(data === "bio"){
                setTimeout(()=>{
                  onEditIconClickedBio();
                },2000)
              }
            }
          }
          )

        }


  return (
    <div className='flex justify-center my-4 h-max'>
      <div className={`block  p-6  border  rounded-lg shadow max-w-3xl ${isDarkTheme?"bg-gray-800 border-gray-700 ":"bg-white border-gray-200 hover:bg-gray-100"}`}>
        <div className='flex items-center'>
          <ToastContainer />
          <p className='relative left-[13.3rem] top-[-5rem] rounded-lg border-blue-500 border-2 h-8 w-8 text-center items-center font-bold text-xl cursor-pointer'> 
                <CountUp start={0} end={12} duration={10} />  
          </p>
          <img crossOrigin="anonymous" src={imageSrc} alt={`${allUserReletedData.user_name}`} className='w-[12rem] h-[12rem] rounded-full mx-auto'/>
        </div>
        <h2 className="text-center text-2xl font-semibold mt-1">
          {allUserReletedData.full_name}</h2>
        <h2 className="text-center text-lg font-light">
          {updateForm.bio?updateForm.bio:"I love programming ( default bio )"}</h2>
        
        

        
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
        comp={<BsFillCheckCircleFill />}
        />
        <ProfileCardView 
        text = {"Cancelled Proposal"}
        number ={6}
        isDarkTheme ={isDarkTheme}
        comp={<GiCancel />}
        />
        <ProfileCardView 
        text = {"Pending Proposal"}
        number ={2}
        isDarkTheme ={isDarkTheme}
        comp={<MdPending />}
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

          <Typography className='flex gap-5 justify-between'>
              
              <TextInputWithEdit 
                label={"EMAIL ADDRESS"}
                placeholder={allUserReletedData.email?allUserReletedData.email:"Email"}
                type = "email"
                name = "email"
                updatedFormInput = {updateForm.email} 

                isLoading ={isLoading.email}
                isDarkTheme={isDarkTheme}
                disabled={disabledEmail}

                onEditIconClicked = {onEditIconClicked}
                onCancelIconClicked={onEditIconClicked}
                onUpdateFormChangeHandler = {onUpdateFormChangeHandler}

                onSaveIconClicked = {onSaveIconClicked}
              />
              
            <TextInputWithEdit 
            label={"PHONE NUMBER"} 
            placeholder={allUserReletedData.phone?allUserReletedData.phone:"Phone"}
            type = "number"
            name = "phone" 
            updatedFormInput = {updateForm.phone}
            
            isLoading={isLoading.phone}
            isDarkTheme={isDarkTheme}
            disabled={disabledPhone}

            onEditIconClicked = {onEditIconClickedPhone}
            onCancelIconClicked={onEditIconClickedPhone}
            onUpdateFormChangeHandler = {onUpdateFormChangeHandler}

            onSaveIconClicked = {onSaveIconClicked}
            />  

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{backgroundColor: isDarkTheme?"rgba(255, 255, 255, .05)":"rgba(0, 0, 0, .03)"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className='bg-gray-800 '
        >
          <Typography><p className={`${isDarkTheme?"text-white":'text-black'}`}>USERNAME AND PASSWORD</p></Typography>
        </AccordionSummary>
        <AccordionDetails className='flex-col'>

          <Typography sx={{marginTop:'6px'}} className='flex gap-5 justify-between'>
                <TextInputWithEdit 
                label={"USER NAME"} 
                placeholder={allUserReletedData.user_name?allUserReletedData.user_name:"user name"}
                name = "user_name"
                updatedFormInput={updateForm.user_name}

                disabled={disabledUsername}
                isDarkTheme={isDarkTheme}
                isLoading = {isLoading.user_name}

                onEditIconClicked = {onEditIconClickedUsername}
                onCancelIconClicked={onEditIconClickedUsername}
                onUpdateFormChangeHandler={onUpdateFormChangeHandler}

                onSaveIconClicked={onSaveIconClicked}
                />
                <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-1'>
                    {showPassword?<BiShow  className='mt-6 cursor-pointer'onClick={()=>setShowPassword(prevState => !prevState)}/>:<BiHide className='mt-6 cursor-pointer'onClick={()=>setShowPassword(prevState => !prevState)}/>}
                    <TextInputWithEdit 
                    label={"OLD PASSWORD"} 
                    placeholder={"**********"} 
                    type ={showPassword?"text":'password'}
                    name = "old_password"
                    updatedFormInput={updateForm.old_password}

                    isDarkTheme={isDarkTheme}
                    disabled={disabledPassword}
                    isLoading={isLoading.password}

                    onEditIconClicked = {onEditIconClickedPassword}
                    onCancelIconClicked={onEditIconClickedPassword}
                    onUpdateFormChangeHandler={onUpdateFormChangeHandler}

                    onSaveIconClicked={onSaveIconClicked}
                    />
                </div>
                  <div className='flex items-center gap-1'>
                  {showPassword?<BiShow  className='mt-6 cursor-pointer'onClick={()=>setShowPassword(prevState => !prevState)}/>:<BiHide className='mt-6 cursor-pointer'onClick={()=>setShowPassword(prevState => !prevState)}/>}
                 <TextInputWithEdit 
                    label={"NEW PASSWORD"} 
                    placeholder={"*********"} 
                    type ={showPassword?"text":'password'}
                    name = "new_password"
                    updatedFormInput={updateForm.new_password}

                    isDarkTheme={isDarkTheme}
                    disabled={disabledPassword}
                    isLoading={isLoading.password}

                    onEditIconClicked = {onEditIconClickedPassword}
                    onCancelIconClicked={onEditIconClickedPassword}
                    onUpdateFormChangeHandler={onUpdateFormChangeHandler}

                    onSaveIconClicked={onSaveIconClicked}
                />
                  </div>
                </div>
                
          </Typography>
        </AccordionDetails>
      </Accordion>
   
     
      <Accordion sx={{backgroundColor: isDarkTheme?"rgba(255, 255, 255, .05)":"rgba(0, 0, 0, .03)"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><p className={`${isDarkTheme?"text-white":'text-black'}`}>GENDER AND BIO</p> </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography className='flex gap-5 justify-between'>
          
          <TextInputWithEdit 
            label={"BIO"}
            placeholder={allUserReletedData.bio?allUserReletedData.bio:"BIO"} 
            name='bio'
            updatedFormInput={updateForm.bio}
           
            isDarkTheme={isDarkTheme}
            isLoading={isLoading.bio}
            disabled={disabledBio}

            onEditIconClicked = {onEditIconClickedBio}
            onCancelIconClicked={onEditIconClickedBio}
            onUpdateFormChangeHandler={onUpdateFormChangeHandler}

            onSaveIconClicked={onSaveIconClicked}
           />  

          <TextInputWithEdit 
          label={"SEX"} 
          placeholder={allUserReletedData.sex?allUserReletedData.sex:"sex"} 
          name = 'sex'
          updatedFormInput={updateForm.sex}
          
          isDarkTheme={isDarkTheme}
          isLoading={isLoading.sex}
          disabled={disabledSex}

          onEditIconClicked = {onEditIconClickedSex}
          onCancelIconClicked={onEditIconClickedSex}
          onUpdateFormChangeHandler={onUpdateFormChangeHandler}

          onSaveIconClicked={onSaveIconClicked}
          />
         

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: isDarkTheme?"rgba(255, 255, 255, .05)":"rgba(0, 0, 0, .03)"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><p className={`${isDarkTheme?"text-white":'text-black'}`}>DIRECTORATE AND ROLE</p> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{marginTop:'3px'}} className='flex gap-5 justify-between '>
                <div className={`flex flex-col gap-3 ${isDarkTheme?"text-white":'text-black'}`}>
                    <h1>DIRECTORATE</h1>
                    <p className='border-2 border-blue-500 rounded-xl p-3'> {directorate.title?directorate.title:"directorate"}</p>
                </div>
                <div className={`flex flex-col gap-3 ${isDarkTheme?"text-white":'text-black'}`}>
                    <h1>ROLE</h1>
                    <p className='border-2 border-blue-500 rounded-xl p-3'> {role.title?role.title:"role"}</p>
                </div>
             
                

          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
      </div>
    </div>
  )
}
