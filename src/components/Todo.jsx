import { useTodos } from '../hooks/useTodos'

/* eslint-disable react/prop-types */
export const Todo = ({ todo }) => {
  const { deleteTodo, changeTodoFinshed } = useTodos()

  const classNameText = `w-full py-3 ml-2 text-xl font-medium text-gray-900 dark:text-gray-300 ${
    todo.finished ? 'line-through' : ''
  }`

  const onHandleChange = () => {
    changeTodoFinshed(todo.id)
  }

  const onClickDelete = () => {
    deleteTodo(todo.id)
  }

  return (
    <li
      className='w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'
    >
      <div className='flex items-center pl-3'>
        <input
          checked={todo.finished}
          type='checkbox'
          className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
          onChange={onHandleChange}
        />

        <label className={classNameText}>{todo.text}</label>
        <div onClick={onClickDelete}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-6 h-6 text-gray-500 dark:text-gray-400 mr-2 hover:cursor-pointer hover:text-gray-200 transition-colors duration-200'
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
        </div>
      </div>
    </li>
  )
}
