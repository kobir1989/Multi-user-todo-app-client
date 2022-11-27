import React, { useState, useEffect } from "react";
import Navbar from "../../components/nav/Navbar";
import Box from "@mui/material/Box";
import TodoList from "../../components/todo/TodoList";
import AddTodo from "../../components/todo/AddTodo";
import axios from "axios";
import UserContext from "../../authContext/auth-context";
import { useContext } from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(null);
  const { user } = useContext(UserContext);
  const getTodo = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/todos");
      setTodos(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTodo();
  }, []);

  let sortTodos = [...todos];
  sortTodos = sortTodos.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div>
      <Navbar />
      <Box sx={{ maxWidth: "50rem", margin: "auto", paddingTop: "2rem" }}>
        {user ? (
          <>
            <AddTodo getTodo={getTodo} editTodo={edit} />
            <TodoList sortTodos={sortTodos} getTodo={getTodo} setEdit={setEdit} />
          </>
        ) : (
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h3">Welcome</Typography>
            <p>Please Login to your Account</p>
          </Box>
        )}
      </Box>
    </div>
  );
};

export default Home;
