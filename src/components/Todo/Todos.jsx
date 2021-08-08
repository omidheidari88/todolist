import React from "react";
import AddTodo from "./Add/AddTodo";
import Footer from "./Footer/Footer";
import VisibleTodoList from "./VisibleTodoList";

const Todos = () => {
  return (
    <>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </>
  );
};

export default Todos;
