// Importing the Files
import React from "react";
import { useMediaQuery } from "react-responsive";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

// importing the images
import hadoop from "../images/hadoop.png";
import node from "../images/node.png";
import terraform from "../images/terraform.png";

import Grid from "@material-ui/core/Grid";

// Importing the css
import "../style/project.css";

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

export default function Project() {
  return (
    <div name="project">
      <Typography variant="h1" className="title3">
        <Paper elevation={5}>PROJECTs</Paper>
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={6} md={4} style={{ display: "flex" }}>
          <Card className="card">
            <CardActionArea>
              <CardContent>
                <CardMedia className="image" image={hadoop} title="lvm" />
                <Typography variant="h5" component="h1" align="center">
                  Manage L.V.M For Hadoop Using ANSIBLE
                </Typography>
                <Typography
                  id="body1"
                  variant="body1"
                  component="h1"
                  align="center"
                >
                  Integrated the Python with Ansible to create a TUI for
                  managing LVM for <b>Hadoop</b>
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  href="https://h1dd3nbl4d3.medium.com/hadoop-datanode-and-lvm-integration-with-ansible-python-2be148cdad9e"
                  color="primary"
                  id="but"
                  variant="contained"
                  fullWidth
                >
                  Learn More
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} style={{ display: "flex" }}>
          <Card className="card">
            <CardActionArea>
              <CardContent>
                <CardMedia className="image" image={node} title="lvm" />
                <Typography variant="h5" component="h1" align="center">
                  UploadFile and Email iT
                </Typography>
                <Typography
                  id="body1"
                  variant="body1"
                  component="h1"
                  align="center"
                >
                  Created a App which can upload file to server and then Email
                  it.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  href="https://github.com/ashutosh5786/Node_FileUpload_-_Email"
                  color="primary"
                  id="but"
                  variant="contained"
                  fullWidth
                >
                  Learn More
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} style={{ display: "flex" }}>
          <Card className="card">
            <CardActionArea>
              <CardContent>
                <CardMedia className="image" image={terraform} title="lvm" />
                <Typography variant="h5" component="h1" align="center">
                  Deployed EKS,RDS Cluster Through Terraform
                </Typography>
                <Typography
                  id="body1"
                  variant="body1"
                  component="h1"
                  align="center"
                >
                  Created Terraform script which launch the Website with High
                  Availability on AWS
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  href="https://h1dd3nbl4d3.medium.com/how-to-deploy-eks-rds-cluster-with-website-using-terraform-d65ac23021f8"
                  color="primary"
                  id="but"
                  variant="contained"
                  fullWidth
                >
                  Learn More
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
