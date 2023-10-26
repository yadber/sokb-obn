import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

import RuleRegulation from "../HeaderComponents/RuleRegulation";

export default function Home({ userLoginInformation }) {
  const getCurrentTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());

  const [navbarMenuClicked, setNavbarMenuClicked] = useState("home");

  return (
    <div
      className={`${
        isDarkTheme ? "bg-gray-900 " : "bg-gray-50"
      }  mx-auto lg:py-0 h-screen`}
    >
      <Navbar
        userLoginInformation={userLoginInformation}
        navbarMenuClicked={navbarMenuClicked}
        setIsDarkTheme={setIsDarkTheme}
        isDarkTheme={isDarkTheme}
        setNavbarMenuClicked={setNavbarMenuClicked}
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
          ? "profile"
          : ""}
      </div>
    </div>
  );
}
