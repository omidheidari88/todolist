import Header from "./Todo/addTodo/Header";
import TodoList from "./Todo/todos/TodoList";
import Footer from "./Todo/filterTodo/Footer";

function App() {
  return (
    <div className="App">
      <nav>
        <section>
          <h1>Todo List App Example JS...</h1>
        </section>
      </nav>
      <main>
        <section className="medium-container">
          <div className="todoapp">
            <Header />
            <TodoList />
            <Footer />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
