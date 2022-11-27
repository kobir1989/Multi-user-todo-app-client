import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Navbar from "../../components/nav/Navbar";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/auth/signup", { name, email, password, confirmPassword });
    } catch (error) {
      console.log(error);
    }
    setName("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")
    navigate("/login")
    
  };

  return (
    <>
      <Navbar />
      <Box sx={{ maxWidth: "50rem", margin: "auto", paddingTop: "3rem" }}>
        <Box sx={{ margin: "2rem 0" }}>
          <Typography variant="h4" component="h4">
            Create Your Account
          </Typography>
        </Box>
        <Box
          component="form"
          onSubmit={submitHandler}
          sx={{
            "& .MuiTextField-root": { m: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="outlined-required"
              label="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
          </div>
          <div>
            <TextField
              required
              id="outlined-required"
              label="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </div>
          <div>
            <TextField
              required
              id="outlined-required"
              label="Password"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
          </div>
          <div>
            <TextField
              required
              id="outlined-required"
              label="Confirm Password"
              type="password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              value={confirmPassword}
            />
          </div>
          <Button type="submit" variant="contained" sx={{ marginLeft: ".5rem", marginTop: ".5rem" }}>
            Create Account
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Signup;
