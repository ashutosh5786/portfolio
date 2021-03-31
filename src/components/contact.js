// Importing the Files
import React from "react";

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Link from "@material-ui/core/Link";

// Importing the Contact.css
import "../style/contact.css";

export default function contact() {
  return (
    <div name="contact">
      <Typography variant="h1" className="title4">
        <Paper elevation={3}>Contact</Paper>
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
