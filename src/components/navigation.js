import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useMediaQuery } from 'react-responsive'


// Importing the icons
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

//importing the css file
import '../style/navigation.css';


const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}


export default function ButtonAppBar() {
  return (
    <div className="navbar">
      {/* For Desktop */}
      <Desktop>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className="nav_p">
            About
          </Typography>
          <Typography variant="h6" className="nav_p">
            Skills
          </Typography>
          <Typography variant="h6" className="nav_p">
            Projects
          </Typography>
          <Typography variant="h6" className="nav_p">
            Contact
          </Typography>
          <Typography variant="h4" className="navbar_title">
            Ashutosh Singh
          </Typography>
          <Typography><a href="https://github.com/ashutosh5786"><GitHubIcon id='icons'/></a></Typography>
          <Typography><a href="https://www.linkedin.com/in/ashutosh-singh5786/"><LinkedInIcon id='icons'/></a></Typography>
        </Toolbar>
      </AppBar>
      </Desktop>
      {/* For Tablets */}
      <Tablet>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className="nav_p">
            About
          </Typography>
          <Typography variant="h6" className="nav_p">
            Skills
          </Typography>
          <Typography variant="h6" className="nav_p">
            Projects
          </Typography>
          <Typography variant="h6" className="nav_p">
            Contact
          </Typography>
          <Typography variant="h4" className="navbar_title">
            Ashutosh Singh
          </Typography>
          <Typography><a href="https://github.com/ashutosh5786"><GitHubIcon id='icons'/></a></Typography>
          <Typography><a href="https://www.linkedin.com/in/ashutosh-singh5786/"><LinkedInIcon id='icons'/></a></Typography>
        </Toolbar>
      </AppBar>
      </Tablet>
      {/* For Mobile 
      
      
      Todo Need to write the code for Mobile Version
      
      */}
      
    </div>
  );
}