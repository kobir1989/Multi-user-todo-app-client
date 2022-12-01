import React, { useState, useEffect } from "react";
import Navbar from "../../components/nav/Navbar";
import Box from "@mui/material/Box";
import TodoList from "../../components/todo/TodoList";
import AddTodo from "../../components/todo/AddTodo";
import axios from "axios";
import UserContext from "../../authContext/auth-context";
import { useContext } from "react";
import { Toaster } from 'react-hot-toast';
import Login from "@mui/icons-material/Login";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserContext);
  const getTodo = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://multi-user-todo-app-server-production.up.railway.app/api/todos");
      setTodos(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    getTodo();
  }, []);

  let sortTodos = [...todos];
  sortTodos = sortTodos.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div>
      <Navbar />
      <Box sx={{ maxWidth: "50rem", margin: "auto", padding: "2rem" }}>
        {user && (
          <>
            <AddTodo getTodo={getTodo} editTodo={edit} />
            <TodoList sortTodos={sortTodos} getTodo={getTodo} setEdit={setEdit} loading={loading} />
          </>
        )}
      </Box>
      <Toaster position="top-right" reverseOrder={false} />
      
    </div>
  );
};

export default Home;
