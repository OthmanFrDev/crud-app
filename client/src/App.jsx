import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import TodoForm from "./components/Todos/todo-form/TodoForm";
import TodoList from "./components/Todos/todo-list/TodoList";

function App() {
  return (
    <div className="container text-center">
      <h1>Todo App</h1>
      <div className="row justify-content-md-center">
        <div className="col-8">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<TodoList />} />
              <Route path="edit/:id" element={<TodoForm />} />
              <Route path="add" element={<TodoForm />} />
              <Route path="*" element={<TodoList />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
