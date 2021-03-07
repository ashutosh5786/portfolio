// Importing the Files
import React from 'react';
import { useMediaQuery } from 'react-responsive'
import Typography from '@material-ui/core/Typography';


// Importing the css
import '../style/about.css';


// Making it responsive
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


export default function About () {

return (
    <div className="about">
        <Desktop>
            <div>
              <Typography variant="h1" align="center" className="title">ABOUT</Typography>
              <Typography variant="h5" align="center" className="content">Ashutosh is a team player who loves to be around technology.
              <br/>He is working smart and hard to fulfill his wish of becoming the "Best Technocrat in the World".<br/>
              He enjoys applying automation in his works, playing with the codes, resolving errors, and contributing to the community
              <br/>Learning new technologies and integrating them with others is a passion for Ashutosh.
              </Typography>
              
            </div>
        </Desktop>





    </div>






)
}