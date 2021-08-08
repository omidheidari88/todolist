import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { addTodo } from "../../../app/actions/todo";

const AddTodo = ({ dispatch }) => {
  const [input, setInput] = useState(null);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input ref={(node) => setInput(node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
