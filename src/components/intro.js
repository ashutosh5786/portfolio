// Importing the Files
import React from 'react';
import { useMediaQuery } from 'react-responsive'
import Typography from '@material-ui/core/Typography';




// Importing the css
import '../style/intro.css';


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




export default function Intro () {

return (
    <div className="Default">
      <Desktop>
          <div className="desktop">
            <Typography variant="h1" className="text" id="text1">Hi,</Typography>
            <Typography variant="h2" className="text" id="text2">I'm Ashutosh</Typography>
            <Typography variant="h3" className="text" id="text3">Tech-Savvy...<span class="blinking-cursor">|</span></Typography>
         
                
          </div>
              
         
      </Desktop>



    </div>




)

}