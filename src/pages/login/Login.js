import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Navbar from "../../components/nav/Navbar";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const Login = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ maxWidth: "50rem", margin: "auto", paddingTop: "3rem" }}>
        <Box sx={{ margin: "2rem 0" }}>
          <Typography variant="h4" component="h4">
            Login to your Account
          </Typography>
        </Box>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField required id="outlined-required" label="Email" defaultValue="Hello World" />
          </div>
          <div>
            <TextField required id="outlined-required" label="Password" defaultValue="Hello World" />
          </div>
          <Button variant="contained" sx={{ marginLeft: ".5rem", marginTop: ".5rem" }}>
            Login
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Login;
