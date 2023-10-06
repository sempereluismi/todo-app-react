import { useState } from "react";
import { TodoList } from "./components/TodoList.jsx";
import { WriteTodo } from "./components/WriteTodo.jsx";

function App() {
  const [todos, setTodos] = useState(Array());
  const [todoID, setTodoID] = useState(0);

  const addTodo = (todoText) => {
    if (todoText === "") return;

    const todo = {
      id: todoID,
      text: todoText,
      finished: false,
    };

    const newTodos = [todo, ...todos];

    setTodos(newTodos);

    const newTodoID = todoID + 1;
    setTodoID(newTodoID);
  };

  const changeTodoFinshed = (id) => {
    let todoToChange = todos.find((todo) => todo.id === id);
    todoToChange.finished = !todoToChange.finished;

    const getTodoToChangeIndex = (todo) => todo.id === id;

    const todoToChangeIndex = todos.findIndex(getTodoToChangeIndex);
    const newTodos = [...todos];

    newTodos[todoToChangeIndex] = {
      id,
      text: todoToChange.text,
      finished: todoToChange.finished,
    };
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newTodos);
  };

  const deleteAllTodos = () => {
    const newTodos = [];
    setTodos(newTodos);
  };

  return (
    <section className="bg-gray-800 h-[100vh]">
      <header className=" font-Gabarito">
        <h1 className="text-white text-7xl font-mono text-center py-20">
          TODO APP
        </h1>
      </header>

      <main className="w-2/5 mx-auto">
        <WriteTodo addTodo={addTodo} />
        <TodoList
          todos={todos}
          changeTodoFinshed={changeTodoFinshed}
          deleteTodo={deleteTodo}
          deleteAllTodos={deleteAllTodos}
        />
      </main>
    </section>
  );
}

export default App;
