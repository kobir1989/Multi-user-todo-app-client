import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <AssignmentTurnedInIcon sx={{marginRight:"0.5rem"}} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to={"/"}>  TODO APP</Link>
          </Typography>
          <Button color="inherit"><LoginIcon sx={{marginRight: ".5rem"}}/> <Link to={"/login"}>Login</Link></Button>
          <Button color="inherit"><AppRegistrationIcon sx={{marginRight: ".5rem"}}/><Link to={"/signup"}>Siginup</Link></Button>
          <Button color="inherit"><LogoutIcon sx={{marginRight: ".5rem"}}/> <Link to={"#"}>Logout</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar