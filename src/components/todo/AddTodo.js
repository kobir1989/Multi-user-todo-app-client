import React from 'react'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
const AddTodo = () => {
  return (
    <Box
    component="form"
    sx={{
      "& .MuiTextField-root": { m: 1, width: "100%" },
    }}
    noValidate
    autoComplete="off"
  >
    <div>
      <TextField required id="outlined-required" label="Title" defaultValue="Hello World" />
    </div>
    <div>
      <TextField required id="outlined-required" label="Todo" defaultValue="Hello World" />
    </div>
    <Button variant="contained" sx={{ marginLeft: ".5rem", marginTop: ".5rem" }}>
      Add Todo
    </Button>
  </Box>
  )
}

export default AddTodo