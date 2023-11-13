

import { useState,useEffect } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'



import Login from "./page/Login";
import Home from "./page/Home";
import PageNotFound from "./page/PageNotFound";

import Proposal from "./menu/Proposal"


function App() {
  // document.body.style.backgroundColor = "red"

  const API_URL  = "http://localhost:9000";
  const [SignInNoRememberMe, setSignInNoRememberMe] = useState({
    status : false,
    id : "",
    user_name : "",
    full_name : ""
  })
  const [LogedInUser, setLogedInUser] = useState([]);

 

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem('LogedInUser'))
    if(id){
      setLogedInUser(id);
    }
  }, [])
  return (
    <div >
    
     
      {LogedInUser.id > 0 || SignInNoRememberMe.status ? 
        <BrowserRouter >
          <Routes>
            <Route path="/" element={<Home userLoginInformation={LogedInUser.id>0 ? LogedInUser : SignInNoRememberMe} API_URL = {API_URL}/>} />
            <Route path="/login" element={<Login API_URL = {API_URL} />} />
            <Route path="/proposal" element={<Proposal />} />
          </Routes>
        </BrowserRouter>
      : <BrowserRouter >
      <Routes>
        <Route path="/" element={<Login setSignInNoRememberMe={setSignInNoRememberMe} API_URL = {API_URL}/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      
    </BrowserRouter>}
    </div>
  );
}

export default App;
