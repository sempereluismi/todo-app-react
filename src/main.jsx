import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { TodosProvider } from './context/todos.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodosProvider>
      <App />
    </TodosProvider>
  </React.StrictMode>
)
