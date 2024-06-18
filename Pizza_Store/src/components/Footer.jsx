import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon /> <XIcon /> <FacebookIcon />
      </div>
      <p> &copy;<i>The Pizza Store ~ since 2024</i></p>
    </div>
  );
}

export default Footer;