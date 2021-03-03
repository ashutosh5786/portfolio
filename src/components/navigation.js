import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// Importing the icons
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

//importing the css file
import '../style/navigation.css';



export default function ButtonAppBar() {
  return (
    <div>
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
    </div>
  );
}