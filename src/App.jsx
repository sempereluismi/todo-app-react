/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { FilterTodos } from "./components/FilterTodos.jsx";
import { TodoList } from "./components/TodoList.jsx";
import { WriteTodo } from "./components/WriteTodo.jsx";
import { TODOS_RENDER_OPTIONS } from "./constants/constants.js";

function App() {
  const [allTodos, setAllTodos] = useState(Array());
  const [todosToRender, setTodosToRender] = useState(Array());
  const [todoID, setTodoID] = useState(0);

  useEffect(() => {
    changeTodosToRender("ALL");
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

  const deleteAllTodos = () => {
    const newTodos = [];
    setAllTodos(newTodos);
  };

  const changeTodosToRender = (todosToRender) => {
    if (!TODOS_RENDER_OPTIONS.includes(todosToRender)) return;
    if (todosToRender === "FINISHED") {
      const pendingTodos = allTodos.filter((todo) => {
        return todo.finished === true;
      });

      setTodosToRender(pendingTodos);
    }
    if (todosToRender === "PENDING") {
      const pendingTodos = allTodos.filter((todo) => {
        return todo.finished === false;
      });

      setTodosToRender(pendingTodos);
    }
    if (todosToRender === "ALL") {
      setTodosToRender(allTodos);
    }
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
        <FilterTodos changeTodosToRender={changeTodosToRender} />
        <TodoList
          todos={todosToRender}
          changeTodoFinshed={changeTodoFinshed}
          deleteTodo={deleteTodo}
          deleteAllTodos={deleteAllTodos}
        />
      </main>
    </section>
  );
}

export default App;
