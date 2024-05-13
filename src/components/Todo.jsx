import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@awesome.me/kit-KIT_CODE/icons";
const Todo = () => {
  return (
    <div className="Todo">
      <p>Go to school</p>
      <div>
        <FontAwesomeIcon icon={faTrash} />
        <FontAwesomeIcon icon="fa-solid fa-trash" />
      </div>
    </div>
  );
};

export default Todo;
