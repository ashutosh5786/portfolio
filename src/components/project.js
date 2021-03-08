  // Importing the Files
  import React from 'react';
  import { useMediaQuery } from 'react-responsive'
  import Typography from '@material-ui/core/Typography';
  import Paper from '@material-ui/core/Paper';

    // Importing the css
    import '../style/project.css';

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


  export default function Project () {
      return (
          <div name="project">
              <Typography variant="h1" className="title"><Paper elevation={5} id="paper1">PROJECT</Paper></Typography>
              
          </div>
      )
  }