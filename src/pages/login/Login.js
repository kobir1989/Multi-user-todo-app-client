import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Navbar from "../../components/nav/Navbar";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../../authContext/auth-context";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isError, setIsError] = React.useState(null);
  const { getUser } = React.useContext(UserContext);
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/auth/login", { email, password });
      if (res.status === 200) {
        navigate("/");
        getUser();
      }

      console.log(res);
    } catch (error) {
      if (error.response) {
        if (error.response.data.errorMessage) {
          setIsError(error.response.data.errorMessage);
        }
      }
    }
    setEmail("");
    setPassword("");
  };
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
              error={isError ? true : false}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              label="Email"
              type="email"
              value={email}
              helperText={isError}
            />
          </div>
          <div>
            <TextField
              required
              error={isError ? true : false}
              helperText={isError}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              type="password"
              label="Password"
            />
          </div>
          <Button type="submit" variant="contained" sx={{ marginLeft: ".5rem", marginTop: ".5rem" }}>
            Login
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Login;
