import React from "react";
import Navbar from "../../components/nav/Navbar";
import Box from "@mui/material/Box";
import TodoList from "../../components/todo/TodoList";
import AddTodo from "../../components/todo/AddTodo";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Box sx={{ maxWidth: "50rem", margin: "auto", paddingTop: "2rem" }}>
        <AddTodo />
        <TodoList />
      </Box>
    </div>
  );
};

export default Home;
