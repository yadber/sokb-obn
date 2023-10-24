

import { useState,useEffect } from "react";
import Login from "./page/Login";



function App() {
  const [LogedInUser, setLogedInUser] = useState([]);
  useEffect(() => {
    const id = JSON.parse(localStorage.getItem('LogedInUser'))
    if(id){
      setLogedInUser(id);
    }
  }, [])
  return (
    <div >
      <Login />
     
      {/* {LogedInUser ? "WELCOME HOME":<Login />} */}
    </div>
  );
}

export default App;
