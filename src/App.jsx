/* eslint-disable react-hooks/exhaustive-deps */
import { FilterTodos } from './components/FilterTodos.jsx'
import { TodoList } from './components/TodoList.jsx'
import { WriteTodo } from './components/WriteTodo.jsx'
import { useTodos } from './hooks/useTodos.js'

function App () {
  const { todosToRender } = useTodos()

  return (
    <section className='bg-gray-800 h-[100vh]'>
      <header className=' font-Gabarito'>
        <h1 className='text-white text-7xl font-mono text-center py-20'>
          TODO APP
        </h1>
      </header>

      <main className='w-2/5 mx-auto'>
        <WriteTodo />
        <FilterTodos />
        <TodoList
          todos={todosToRender}
        />
      </main>
    </section>
  )
}

export default App
