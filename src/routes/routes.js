import Todo from "../components/Todo/Todos";
import Counter from "../components/counter/Counter";

const routes = [
  { path: "/", Component: Counter },
  { path: "/todo", Component: Todo },
];
export default routes;
