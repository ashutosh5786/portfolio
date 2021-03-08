// Importing the Files
import React from "react";
import { useMediaQuery } from "react-responsive";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Link from "@material-ui/core/Link";

// Importing the Css
import "../style/contact.css";

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

export default function contact() {
  return (
    <div name="contact">
      <Typography variant="h1" className="title">
        <Paper elevation={3} id="paper1">
          Contact
        </Paper>
      </Typography>

      <Card className="card">
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <MailOutlineIcon fontSize="large" color="primary" />
            </Typography>
            <Typography component="h6" variant="h6">
              <Link href="mailto:ashutosh5786@outlook.com">Email Me</Link>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
