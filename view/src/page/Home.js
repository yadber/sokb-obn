import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

import RuleRegulation from "../HeaderComponents/RuleRegulation";
import Profile from "../HeaderComponents/Profile";

export default function Home({ userLoginInformation, API_URL }) {
  const getCurrentTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;
 
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
  const [navbarMenuClicked, setNavbarMenuClicked] = useState("home");
  const [allUserReletedData, setAllUserReletedData] = useState({});

  useEffect(() => {
    async function GetUserDetail() {
      const response = await fetch(`${API_URL}/user/detail/${userLoginInformation.id}`);
      const RolePlainList = await response.json();
      setAllUserReletedData(RolePlainList[0]);
    }
    GetUserDetail()
  }, [])

  return (
    <div
      className={`${
        isDarkTheme ? "bg-gray-900 " : "bg-gray-50"
      }  mx-auto lg:py-0 h-[150vh] flex-1`}
    >
      <Navbar
        userLoginInformation={userLoginInformation}
        navbarMenuClicked={navbarMenuClicked}
        setIsDarkTheme={setIsDarkTheme}
        isDarkTheme={isDarkTheme}
        setNavbarMenuClicked={setNavbarMenuClicked}
        API_URL = {API_URL}
        allUserReletedData = {allUserReletedData}
      />
      <div className={`${isDarkTheme ? "text-white" : "text-black "}`}>
        {navbarMenuClicked === "home"
          ? `${userLoginInformation.user_name} ${userLoginInformation.id}`
          : navbarMenuClicked === "rule"
          ? <RuleRegulation 
              isDarkTheme={isDarkTheme} 
              userLoginInformation={userLoginInformation}
            />
          : navbarMenuClicked === "profile"
          ? <Profile isDarkTheme={isDarkTheme} API_URL={API_URL} 
          allUserReletedData = {allUserReletedData}
          />
          : ""}
      </div>
    </div>
  );
}
