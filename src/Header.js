import React from 'react'
import "./Header.css"

import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import tinderLogo from './assets/tinderLogo.png'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

function Header() {
  return (
    <div className='header'>
     <IconButton>
      <PersonIcon fontSize = "large" className="header_icon"/>
     </IconButton> 
     <img className='tinder-logo' src={tinderLogo} alt='Tinder Logo'/>
     <IconButton>
      <QuestionAnswerIcon fontSize = "large" className="header_icon"/>
     </IconButton>
    </div>
  )
}

export default Header
