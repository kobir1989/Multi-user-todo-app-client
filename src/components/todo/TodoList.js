import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DateRangeIcon from "@mui/icons-material/DateRange";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./TodoList.css";

const TodoList = () => {
  return (
    <div className="todo__card">
      <div className="todo__title-wrapper">
        <h2 className="todo__title">TITLE</h2>
        <div className="todo__icons">
          <EditIcon
            sx={{ color: "#BA94D1" }}
            // onClick={() => {
            //   editHandler(todo);
            // }}
          />
          <DeleteForeverIcon
            sx={{ color: "#D23369" }}
            // onClick={() => {
            //   deleteHandler(todo);
            // }}
          />
        </div>
      </div>
      <div>
        <p className="todo__dis">TODOD</p>
        <div className="todo__date-wrapper">
          <span>
            <DateRangeIcon sx={{ marginRight: ".2rem" }} />
          </span>
          <span className="todo__date">22/11/2022 11:22 PM</span>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
