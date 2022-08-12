import React from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function Header() {
    return (
       <div className="header">
        <div className="header_container">
          <h2 className="logo">Where in the World?</h2>
          <div className="switch_mode">
            <DarkModeIcon />
            <h3>Dark Mode</h3>
          </div>
        </div>

       </div>
    );
}
