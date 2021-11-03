import React, { useState } from "react";
import "../assets/css/switch.css";


const Switch=({isToggled, onToggle}) => {

    
    return (
        <div class="text-center hero-content"> 
         <label className="switch">
            <input type="checkbox" checked={isToggled} onChange={onToggle}/>
            <span className="slider"/>
        </label>
        </div>        
    );
}
export default Switch;