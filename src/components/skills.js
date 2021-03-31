// Importing the Files
import React from "react";

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

//Importing the files for color changes
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
// Importing the css
import "../style/skills.css";

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
      {/* <Desktop> */}
      <div name="skills">
        <Typography variant="h1" className="title2">
          <Paper elevation={4}>SKILLS</Paper>
        </Typography>
        <div className="Buttons">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={2}>
              <Button variant="outlined" color="primary" id="1">
                Amazon Web Services
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Button variant="outlined" color="secondary" id="1">
                Azure
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Button variant="outlined" color="primary" id="1">
                Google Cloud Platform
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Button variant="outlined" id="1">
                OpenShift
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Button variant="outlined" color="primary" id="1">
                Kubernetes
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Button variant="outlined" id="1">
                Ansible
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Button variant="outlined" color="primary" id="1">
                DevOps
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Button variant="outlined" color="secondary" id="1">
                Docker
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Button variant="outlined" id="1">
                Terraform
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Button variant="outlined" color="secondary" id="1">
                Jenkins
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Button variant="outlined" color="primary" id="1">
                Python
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Button variant="outlined" color="secondary" id="1">
                Node.js
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Button variant="outlined" id="1">
                React
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </ThemeProvider>
  );
}
