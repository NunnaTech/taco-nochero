import React, { useState } from "react";
import "../../../assets/css/switch.css";

const Switch=({isToggled, onToggle}) => {
       
    return (
        <div className="text-center hero-content"> 
         <label className="switch">
            <input type="checkbox" checked={isToggled} onChange={onToggle}/>
            <span className="slider centrado"/>
        </label>
        </div>        
    );
}
export default Switch;