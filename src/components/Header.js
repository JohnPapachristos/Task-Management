import React from 'react'
import logo from "../assets/Header.png"
import { useState } from 'react';

export const Header = ({setStyles}) => {



    let [classname1, setClassName1] = useState("light activeTheme");
    let [classname2, setClassName2] = useState("medium");
    let [classname3, setClassName3] = useState("dark");

   const lightTheme = () => {
        const style = {"background-color": "white"};
        setStyles(style);
        setClassName1("light activeTheme");
        setClassName2("medium");
        setClassName3("dark");
   }

   const mediumTheme = () => {
    const style = {"background-color": "gray"};
        setStyles(style);
        setClassName1("light");
        setClassName2("medium activeTheme");
        setClassName3("dark");
   }

   const darkTheme = () => {
    const style = {"background-color": "#202020"};
        setStyles(style);
        setClassName1("light");
        setClassName2("medium");
        setClassName3("dark activeTheme");
   }
    
  return (
    <header>
        <div className="logo">
            <img src={logo} alt="logo of the application" />
            <span>Task Management</span>
        </div>
        <div className="themeSelector">
            <span onClick={lightTheme} className={classname1}></span>
            <span onClick={mediumTheme} className={classname2}></span>
            <span onClick={darkTheme} className={classname3}></span> 
        </div>
    </header>
  )
}


export default Header