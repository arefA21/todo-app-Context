import React, { useContext } from "react";
import { TaskListContext } from "../contexts/TaskListContext";

const Task = ({ task }) => {
  const { removeTask, findItem } = useContext(TaskListContext);
  return (
    <li className="list-item">
      <span>{task.title} </span>
      <div>
        <button className="btn-edit task-btn" onClick={() => findItem(task.id)}>
          <i className="fas fa-pen"></i>
        </button>
        <button
          className="btn-delete task-btn"
          onClick={() => removeTask(task.id)}
        >
          <i className="fas fa-trash"></i>
        </button>{" "}
      </div>
    </li>
  );
};

export default Task;
