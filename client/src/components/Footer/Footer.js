import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Typography variant="body2" color="textSecondary" align="center">
        <Link color="inherit" href="https://github.com/candreso/CodeLingual">
          Copyright © CodeLingual {new Date().getFullYear()}
        </Link>
      </Typography>
    </div>
  );
};

export default Footer;
