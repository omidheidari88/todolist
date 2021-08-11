import { useDispatch } from "react-redux";
import { ReactComponent as TimesSolid } from "./times-solid.svg";
import { todoDeleted, todoToggled } from "./reducer/todosAction";

export const availableColors = ["green", "blue", "orange", "purple", "red"];
export const capitalize = (s) => s[0].toUpperCase() + s.slice(1);

const TodoListItem = ({ todo }) => {
  const { text, completed, color } = todo;
  const dispatch = useDispatch();
  const colorOptions = availableColors?.map((c) => (
    <option key={c} value={c}>
      {capitalize(c)}
    </option>
  ));

  const handleCompletedChanged = () => dispatch(todoToggled(todo.id));
  const handleDelete = () => dispatch(todoDeleted(todo.id));

  return (
    <li>
      <div className="view">
        <div className="segment label">
          <input className="toggle" type="checkbox" checked={completed} onChange={handleCompletedChanged} />
          <div className="todo-text">{text}</div>
        </div>
        <div className="segment buttons">
          <select className="colorPicker" defaultValue={color} style={{ color }}>
            <option value=""></option>
            {colorOptions}
          </select>
          <button className="destroy" onClick={handleDelete}>
            <TimesSolid />
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoListItem;
