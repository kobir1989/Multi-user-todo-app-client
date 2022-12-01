import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Navbar from "../../components/nav/Navbar";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast"

const Signup = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [isError, setIsError] = React.useState(null);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://multi-user-todo-app-server-production.up.railway.app/auth/signup", { name, email, password, confirmPassword });
      if (res.status === 200) {
        navigate("/login");
        toast.success("Account Created")
      }
    } catch (error) {
      if (error.response) {
        if (error.response.data.errorMessage) {
          setIsError(error.response.data.errorMessage);
        }
      }
    }
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
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
          noValidate
          onSubmit={submitHandler}
          sx={{
            "& .MuiTextField-root": { m: 1, width: "100%" },
          }}
          autoComplete="off"
        >
          <div>
            <TextField
              error={isError ? true : false}
              required
              label="Name"
              helperText={isError}
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
          </div>
          <div>
            <TextField
              error={isError ? true : false}
              required
              label="Email"
              helperText={isError}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </div>
          <div>
            <TextField
              error={isError ? true : false}
              required
              label="Password"
              helperText={isError}
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
          </div>
          <div>
            <TextField
              error={isError ? true : false}
              required
              label="Confirm Password"
              helperText={isError}
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
