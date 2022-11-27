import * as React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
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
    } catch (error) {
      console.log(error);
    }
    navigate("/login");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <AssignmentTurnedInIcon sx={{ marginRight: "0.5rem" }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={"/"}> TODO APP</Link>
          </Typography>
          {user ? (
            <Button color="inherit" onClick={logoutHandler}>
              <LogoutIcon sx={{ marginRight: ".5rem" }} /> <Link to={"#"}>Logout</Link>
            </Button>
          ) : (
            <>
              <Button color="inherit">
                <LoginIcon sx={{ marginRight: ".5rem" }} /> <Link to={"/login"}>Login</Link>
              </Button>
              <Button color="inherit">
                <AppRegistrationIcon sx={{ marginRight: ".5rem" }} />
                <Link to={"/signup"}>Siginup</Link>
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
