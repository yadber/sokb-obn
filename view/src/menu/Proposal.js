import React, { useState } from "react";
import ProposalBar from "../card/ProposalBar";
import History from "../proposalNavbars/History";
export default function Proposal({ isDarkTheme, API_URL,allUserReletedData }) {
  const [menu, setMenu] = useState('history');
  return (
    <div className="w-full">
    <ProposalBar isDarkTheme={isDarkTheme}  menu={menu} setMenu={setMenu}/>
    {
      menu ==="history"? 
      <History 
        isDarkTheme = {isDarkTheme}
        API_URL = {API_URL}
        allUserReletedData = {allUserReletedData}
      />:
      "other menus"
    }
    
    </div>

  );
}
