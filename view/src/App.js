

import { useState,useEffect } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'



import Login from "./page/Login";
import Home from "./page/Home";
import PageNotFound from "./page/PageNotFound";


function App() {
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
          {console.log(SignInNoRememberMe.id)}
            <Route path="/" element={<Home userLoginInformation={LogedInUser.id>0 ? LogedInUser : SignInNoRememberMe}/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </BrowserRouter>
      : <BrowserRouter >
      <Routes>
        <Route path="/" element={<Login setSignInNoRememberMe={setSignInNoRememberMe}/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      
    </BrowserRouter>}
    </div>
  );
}

export default App;
