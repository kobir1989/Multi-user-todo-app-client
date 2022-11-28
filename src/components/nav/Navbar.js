import * as React from "react";
import { AppBar, Box, Toolbar, Typography, Button, Avatar } from "@mui/material";
import { deepOrange } from '@mui/material/colors';
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import axios from "axios";
import UserContext from "../../authContext/auth-context";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, getUser } = React.useContext(UserContext);
  const logoutHandler = async () => {
    try {
      await axios.get("http://localhost:5000/auth/logout");
      getUser();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <AssignmentTurnedInIcon sx={{ marginRight: "0.5rem" }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={"/"}> TODO APP</Link>
          </Typography>
          {user === null ? (
            <>
              <Button color="inherit">
                <LoginIcon sx={{ marginRight: ".5rem" }} /> <Link to={"/login"}>Login</Link>
              </Button>
              <Button color="inherit">
                <AppRegistrationIcon sx={{ marginRight: ".5rem" }} />
                <Link to={"/signup"}>Siginup</Link>
              </Button>
            </>
          ) : (
            <>
             <Avatar sx={{ bgcolor: deepOrange[500], marginRight:"2rem" }}>{user.user.slice(0,1)}</Avatar>
              <Button color="inherit" onClick={logoutHandler}>
                <LogoutIcon sx={{ marginRight: ".5rem" }} />
                Logout
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
