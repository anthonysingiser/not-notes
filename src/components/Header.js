import React from "react";
import { Hearts } from "react-loader-spinner";

const Header = ({handleToggleDarkMode}) => {
    return (
        <div className="header">
            <h1>Notes</h1>
            <button 
                className="save"
                onClick={()=> 
                    handleToggleDarkMode(
                        (previousDarkMode)=> !previousDarkMode
                    )
                }
            >Dark Mode</button>
        </div>
    )
}

export default Header