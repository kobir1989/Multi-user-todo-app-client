import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import axios from "axios";
import toast from "react-hot-toast"

const AddTodo = ({ getTodo, editTodo }) => {
  const [titles, setTitle] = useState("");
  const [todos, setTodo] = useState("");
  const [isError, setIsError] = React.useState(null);

  useEffect(() => {
    if (editTodo) {
      setTitle(editTodo.title);
      setTodo(editTodo.todo);
    }
  }, [editTodo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (editTodo === null) {
        await axios.post("https://multi-user-todo-app-server-production.up.railway.app/api/todos/", { title: titles, todo: todos });
      } else {
        await axios.put(`https://multi-user-todo-app-server-production.up.railway.app/api/todos/${editTodo._id}`, { title: titles, todo: todos });
      }
      getTodo();
      toast.success("Successfull");
    } catch (error) {
      if (error.response) {
        if (error.response.data.errorMessage) {
          setIsError(error.response.data.errorMessage);
        }
      }
    }
    setTitle("");
    setTodo("");
  };

  return (
    <Box
      component="form"
      onSubmit={submitHandler}
      sx={{
        "& .MuiTextField-root": { my: 1, width: "100%" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          label="Title"
          multiline
          maxRows={4}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={titles}
          error={isError ? true : false}
          helperText={isError}
        />
      </div>
      <div>
        <TextField
          label="Todo"
          multiline
          maxRows={4}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          value={todos}
          helperText={isError}
          error={isError ? true : false}
        />
      </div>
      <Button type="submit" variant="contained" sx={{ marginTop: ".5rem" }}>
        Add Todo
      </Button>
    </Box>
  );
};

export default AddTodo;
