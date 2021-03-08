// Importing the Files
import React from "react";
import { useMediaQuery } from "react-responsive";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

//Importing the files for color changes
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
// Importing the css
import "../style/skills.css";

// Making it responsive
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

// Code for Color Changes for Primary
const theme = createMuiTheme({
  palette: {
    Default: {
      main: "#76ff03",
    },
    primary: {
      main: "#f44336",
    },
    secondary: {
      main: "#2979ff",
    },
  },
});

export default function Skills() {
  return (
    <ThemeProvider theme={theme}>
      <div name="skills">
        <Typography variant="h1" className="title2">
          <Paper elevation={4} id="paper2">
            SKILLS
          </Paper>
        </Typography>
        <div className="Buttons">
          <Button variant="outlined" color="primary" id="1">
            {" "}
            Amazon Web Services
          </Button>
          <Button variant="outlined" color="secondary" id="1">
            {" "}
            Azure
          </Button>
          <Button variant="outlined" color="primary" id="1">
            {" "}
            GCP
          </Button>
          <Button variant="outlined" id="1">
            {" "}
            OpenShift
          </Button>
          <Button variant="outlined" color="primary" id="1">
            {" "}
            Kubernetes
          </Button>
          <Button variant="outlined" id="1">
            {" "}
            Ansible
          </Button>
          <Button variant="outlined" color="primary" id="1">
            {" "}
            DevOps
          </Button>
          <Button variant="outlined" color="secondary" id="1">
            {" "}
            Docker
          </Button>
          <Button variant="outlined" id="1">
            {" "}
            Terraform
          </Button>
          <Button variant="outlined" color="secondary" id="1">
            Jenkins
          </Button>
          <Button variant="outlined" color="primary" id="1">
            {" "}
            Python
          </Button>
          <Button variant="outlined" color="secondary" id="1">
            Node.js
          </Button>
          <Button variant="outlined" id="1">
            React
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
}
