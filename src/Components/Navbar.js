import React from 'react'
import '../App.css';
import SearchIcon from '@mui/icons-material/Search';
import './Navbar.css'
function Navbar() {
    return (
        <div className="Navbar">
            <div className="leftSide">
                <h1>Generic Training Interface</h1>
            </div>
            <div className="rightSide">
                <SearchIcon />
                <input type = "text" placeholder="Enter name of course..." />
                <button>Search</button>
            </div>
        </div>
    )

}

export default Navbar;