import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import { SiTinder } from 'react-icons/si';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className = 'header'>
            <IconButton>
                <PersonIcon className="header-icon" fontSize="large" />
            </IconButton>
            
            <SiTinder className = 'tinder-icon'/>

            <IconButton>
                <ForumIcon className="header-icon" fontSize="large" />
            </IconButton>

            
        </div>
    )
}

export default Header
