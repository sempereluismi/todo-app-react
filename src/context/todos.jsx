/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'

// Crear el contexto
export const TodosContext = createContext()

// crear el provider

export function TodosProvider ({ children }) {
  const [todos, setTodos] = useState([])
  const [todoFilterValue, setTodoFilterValue] = useState('ALL')

  return (
    <TodosContext.Provider value={{
      todos,
      setTodos,
      todoFilterValue,
      setTodoFilterValue
    }}
    >
      {children}
    </TodosContext.Provider>
  )
}
