/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react'
import { TodosContext } from '../context/todos.jsx'
import { v4 as uuidv4 } from 'uuid'

export function useTodos () {
  const { todos, setTodos, todoFilterValue, setTodoFilterValue } = useContext(TodosContext)
  const [todosToRender, setTodosToRender] = useState([])

  useEffect(() => {
    changeTodosToRender(todoFilterValue)
  }, [todos, todoFilterValue])

  const FILTER_OPTIONS = {
    FINISHED: (todos) => todos.filter((todo) => todo.finished === true),
    PENDING: (todos) => todos.filter((todo) => todo.finished === false),
    ALL: (todos) => todos
  }

  const addTodo = (todoText) => {
    if (todoText === '') return

    const todo = {
      id: uuidv4(),
      text: todoText,
      finished: false
    }
    const newTodos = [todo, ...todos]
    setTodos(newTodos)
  }

  const changeTodosToRender = (filterValue) => {
    const filteredTodos = FILTER_OPTIONS[filterValue](todos)
    setTodosToRender(filteredTodos)
    setTodoFilterValue(filterValue)
  }

  const deleteTodos = () => {
    if (todoFilterValue === 'ALL') {
      const newTodos = []
      setTodos(newTodos)
    } else {
      const newTodos =
      todoFilterValue === 'FINISHED'
        ? FILTER_OPTIONS.PENDING(todos)
        : FILTER_OPTIONS.FINISHED(todos)
      setTodos(newTodos)
    }
  }

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id
    })

    setTodos(newTodos)
  }

  const changeTodoFinshed = (id) => {
    const todoToChange = todos.find((todo) => todo.id === id)
    todoToChange.finished = !todoToChange.finished

    const getTodoToChangeIndex = (todo) => todo.id === id

    const todoToChangeIndex = todos.findIndex(getTodoToChangeIndex)
    const newTodos = [...todos]

    newTodos[todoToChangeIndex] = {
      id,
      text: todoToChange.text,
      finished: todoToChange.finished
    }
    setTodos(newTodos)
  }

  return {
    addTodo,
    changeTodosToRender,
    deleteTodos,
    deleteTodo,
    todosToRender,
    changeTodoFinshed,
    todoFilterValue
  }
}
