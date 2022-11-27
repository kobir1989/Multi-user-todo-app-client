import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DateRangeIcon from "@mui/icons-material/DateRange";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./TodoList.css";
import axios from "axios";

const TodoList = ({ sortTodos, getTodo, setEdit }) => {
  const deleteHandler = async (todo) => {
    try {
      window.confirm("Are you sure?")
      await axios.delete(`http://localhost:5000/api/todos/${todo._id}`);
      getTodo();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {sortTodos.map((todo) => (
        <div className="todo__card" key={todo?._id}>
          <div className="todo__title-wrapper">
            <h2 className="todo__title">{todo?.title}</h2>
            <div className="todo__icons">
              <EditIcon
                sx={{ color: "#BA94D1" }}
                onClick={() => {
                  setEdit(todo);
                }}
              />
              <DeleteForeverIcon
                sx={{ color: "#D23369" }}
                onClick={() => {
                  deleteHandler(todo);
                }}
              />
            </div>
          </div>
          <div>
            <p className="todo__dis">{todo?.todo}</p>
            <div className="todo__date-wrapper">
              <span>
                <DateRangeIcon sx={{ marginRight: ".2rem" }} />
              </span>
              <span className="todo__date">{todo?.createdAt}</span>
            </div>
          </div>
        
        </div>
      ))}
    </>
  );
};

export default TodoList;