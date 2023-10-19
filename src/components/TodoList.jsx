/* eslint-disable react/prop-types */
import { useTodos } from '../hooks/useTodos.js'
import { Todo } from './Todo.jsx'

export const TodoList = ({ todos }) => {
  const { deleteTodos, todoFilterValue } = useTodos()

  const clickButton = () => {
    deleteTodos()
  }

  return (
    <>
      <section className='w-full h-[50vh] overflow-auto text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white'>
        {todos.length > 0 && (
          <ul>
            {todos.map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
              />
            ))}
          </ul>
        )}
        {todos.length === 0 && (
          <h2 className='h-full flex items-center justify-center text-3xl'>
            THERE ARE NO {(todoFilterValue === 'ALL' ? '' : todoFilterValue)} TASK
          </h2>
        )}
      </section>

      {todos.length > 0 && (
        <section className='justify-end flex mt-6'>
          <button
            onClick={clickButton}
            type='button'
            className='text-white flex justify-end bg-gray-700 hover:bg-gray-600 transition-colors duration-200 focus:ring-4 font-medium rounded-lg text-lg px-5 py-2.5 text-center items-center'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 text-white mr-2 hover:cursor-pointer hover:text-gray-200 transition-colors duration-200'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path
                d='M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z'
                strokeWidth='0'
                fill='currentColor'
              />
              <path
                d='M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z'
                strokeWidth='0'
                fill='currentColor'
              />
            </svg>
            Delete {todoFilterValue.toLowerCase()} todos
          </button>
        </section>
      )}
    </>
  )
}
