/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { FilterTodos } from "./components/FilterTodos.jsx";
import { TodoList } from "./components/TodoList.jsx";
import { WriteTodo } from "./components/WriteTodo.jsx";

function App() {
  const [allTodos, setAllTodos] = useState(Array());
  const [todosToRender, setTodosToRender] = useState(Array());
  const [todoID, setTodoID] = useState(0);
  const [todoFilterValue, setTodoFilterValue] = useState("ALL");

  const filterOptions = {
    FINISHED: (todos) => todos.filter((todo) => todo.finished === true),
    PENDING: (todos) => todos.filter((todo) => todo.finished === false),
    ALL: (todos) => todos,
  };

  useEffect(() => {
    changeTodosToRender(todoFilterValue);
  }, [allTodos]);

  const addTodo = (todoText) => {
    if (todoText === "") return;

    const todo = {
      id: todoID,
      text: todoText,
      finished: false,
    };

    const newTodos = [todo, ...allTodos];

    setAllTodos(newTodos);

    const newTodoID = todoID + 1;
    setTodoID(newTodoID);
  };

  const changeTodoFinshed = (id) => {
    let todoToChange = allTodos.find((todo) => todo.id === id);
    todoToChange.finished = !todoToChange.finished;

    const getTodoToChangeIndex = (todo) => todo.id === id;

    const todoToChangeIndex = allTodos.findIndex(getTodoToChangeIndex);
    const newTodos = [...allTodos];

    newTodos[todoToChangeIndex] = {
      id,
      text: todoToChange.text,
      finished: todoToChange.finished,
    };
    setAllTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = allTodos.filter((todo) => {
      return todo.id !== id;
    });

    setAllTodos(newTodos);
  };

  const deleteTodos = (filterValue) => {
    const newTodos =
      filterValue === "FINISHED"
        ? filterOptions["PENDING"](allTodos)
        : filterOptions[filterValue](allTodos);
    setAllTodos(newTodos);
  };

  const changeTodosToRender = (filterValue) => {
    const filteredTodos = filterOptions[filterValue](allTodos);
    setTodosToRender(filteredTodos);
    setTodoFilterValue(filterValue);
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
        <FilterTodos
          changeTodosToRender={changeTodosToRender}
          todoFilterValue={todoFilterValue}
        />
        <TodoList
          todos={todosToRender}
          changeTodoFinshed={changeTodoFinshed}
          deleteTodo={deleteTodo}
          deleteAllTodos={deleteTodos}
          todoFilterValue={todoFilterValue}
        />
      </main>
    </section>
  );
}

export default App;
