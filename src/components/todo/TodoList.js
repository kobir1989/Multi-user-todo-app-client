import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DateRangeIcon from "@mui/icons-material/DateRange";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./TodoList.css";
import axios from "axios";
import CardSkeleton from "../skeleton/Skeleton";
import toast from 'react-hot-toast';

const TodoList = ({ sortTodos, getTodo, setEdit, loading }) => {
  const deleteHandler = async (todo) => {
    try {
      window.confirm("Are you sure?");
      await axios.delete(`https://multi-user-todo-app-server-production.up.railway.app/api/todos/${todo._id}`);
      getTodo();
      toast.success("Deleted")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {sortTodos.length === 0 ? (
        <div className="not_found"> {loading && <CardSkeleton rows={3}/>}</div>
      ) : (
        sortTodos.map((todo) => (
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
                <span className="todo__date">{new Date(todo?.createdAt).toLocaleString()}</span>
              </div>
            </div>
          </div>
        ))
      )}
    
    </>
  );
};

export default TodoList;
