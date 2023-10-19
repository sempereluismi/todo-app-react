import { useTodos } from '../hooks/useTodos'

// eslint-disable-next-line react/prop-types
export const FilterTodos = () => {
  const { changeTodosToRender, todoFilterValue } = useTodos()

  const handleClick = (param) => {
    changeTodosToRender(param)
  }

  return (
    <section className='w-full flex items-center justify-around  bg-gray-700 text-gray-300 rounded-lg mb-4'>
      <div
        className={`py-3 w-full text-center cursor-pointer hover:bg-gray-600 transition-colors rounded-l-lg duration-200 border-r-2 border-gray-500 ${
          todoFilterValue === 'ALL' ? 'bg-gray-600' : ''
        }`}
        onClick={() => handleClick('ALL')}
      >
        <p>All Todos</p>
      </div>
      <div
        className={`py-3 w-full text-center cursor-pointer hover:bg-gray-600 transition-colors duration-200 border-r-2 border-gray-500 ${
          todoFilterValue === 'PENDING' ? 'bg-gray-600' : ''
        }`}
        onClick={() => handleClick('PENDING')}
      >
        <p>Pending Todos</p>
      </div>
      <div
        className={`py-3 w-full text-center cursor-pointer hover:bg-gray-600 transition-colors rounded-r-lg duration-200 ${
          todoFilterValue === 'FINISHED' ? 'bg-gray-600' : ''
        }`}
        onClick={() => handleClick('FINISHED')}
      >
        <p>Finished Todos</p>
      </div>
    </section>
  )
}
