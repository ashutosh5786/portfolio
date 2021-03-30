import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
//importing the files for elevation
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

// Importing the icons
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

//importing the css file
import "../style/navigation.css";

// Making the navigation-bar elevated
function OnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};

export default function ButtonAppBar(props) {
  return (
    <div className="navbar">
      {/* For Desktop */}
      <Desktop>
        <OnScroll {...props}>
          <AppBar>
            <Toolbar>
              <Typography variant="h6" className="nav_p">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  delay={100}
                >
                  About
                </Link>
              </Typography>
              <Typography variant="h6" className="nav_p">
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  duration={500}
                  delay={100}
                >
                  Skills
                </Link>
              </Typography>
              <Typography variant="h6" className="nav_p">
                <Link
                  to="project"
                  spy={true}
                  smooth={true}
                  duration={500}
                  delay={100}
                >
                  Projects
                </Link>
              </Typography>
              <Typography variant="h6" className="nav_p">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  delay={100}
                >
                  Contact
                </Link>
              </Typography>
              <Typography variant="h4" className="navbar_title">
                Ashutosh Singh
              </Typography>
              <Typography>
                <a href="https://github.com/ashutosh5786">
                  <GitHubIcon id="icons" />
                </a>
              </Typography>
              <Typography>
                <a href="https://www.linkedin.com/in/ashutosh-singh5786/">
                  <LinkedInIcon id="icons" />
                </a>
              </Typography>
            </Toolbar>
          </AppBar>
        </OnScroll>
      </Desktop>
      {/* For Tablets */}
      <Tablet>
        <OnScroll>
          <AppBar>
            <Toolbar>
              <Typography variant="h6" className="nav_p">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  delay={100}
                >
                  About
                </Link>
              </Typography>
              <Typography variant="h6" className="nav_p">
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  duration={500}
                  delay={100}
                >
                  Skills
                </Link>
              </Typography>
              <Typography variant="h6" className="nav_p">
                <Link
                  to="project"
                  spy={true}
                  smooth={true}
                  duration={500}
                  delay={100}
                >
                  Projects
                </Link>
              </Typography>
              <Typography variant="h6" className="nav_p">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  delay={100}
                >
                  Contact
                </Link>
              </Typography>
              <Typography variant="h4" className="navbar_title_tablet">
                Ashutosh Singh
              </Typography>
              <Typography>
                <a href="https://github.com/ashutosh5786">
                  <GitHubIcon id="icons" />
                </a>
              </Typography>
              <Typography>
                <a href="https://www.linkedin.com/in/ashutosh-singh5786/">
                  <LinkedInIcon id="icons" />
                </a>
              </Typography>
            </Toolbar>
          </AppBar>
        </OnScroll>
      </Tablet>
      {/* For Mobile  */}
      <Mobile>
        <OnScroll>
          <AppBar>
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h4" className="navbar_title_Mobile">
                Ashutosh Singh
              </Typography>
            </Toolbar>
          </AppBar>
        </OnScroll>
      </Mobile>
    </div>
  );
}
