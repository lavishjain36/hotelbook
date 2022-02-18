// import { Link } from "react-router-dom";
import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Header(){
    return(
        <div className="header">
     
            <img className="header_icon"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU5H_T1XiB09mkXwr0wFCWEYWACvpaB31GXt6kufTmx_yA5YtkhZQ5fDGZ0dVwzMee9OI&usqp=CAU"
            alt=""
            />

       <div className="header_center">
        <input placeholder="Start you Search" type="text"/>
        <SearchIcon/>
        </div>


        <div className="header_right">
         <p>Become Admin</p>
         <ExpandMoreIcon/>
         <LanguageIcon/>    
         <AccountCircleIcon/>
        </div>

        </div>
    )
}


export default Header;