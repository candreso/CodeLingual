import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

//it is a pure function and has no state (it is not a class)
const Footer = () => {
    return (
        <div >
            <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/candreso/CodeLingual">
            CodeLingual
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
             </Typography>    
        </div>
    );
}

export default Footer;