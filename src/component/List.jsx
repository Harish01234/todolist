import React, { useEffect } from 'react';

import { usetodosStore } from '../store/todosStore';

const List = () => {
    
  
  const { todos,updateTodo,deleteTodo,setTodos } = usetodosStore();
  
  
   const remove=(todoId)=>{
    console.log(todoId);
    deleteTodo(todoId)
    
   }
    
  const toggleCompleted = (todo) => {
    const updatedTodo = { ...todo, completed: !todo.completed };
    updateTodo(updatedTodo); // Update the todo in the store
  };


  return (
    <div className="p-6 max-w-lg mx-auto bg-gray-900 rounded-lg shadow-xl mt-5">
      {todos.length > 0 ? (
        <ul className="space-y-4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`flex items-center justify-between p-4 rounded-lg border ${todo.completed ? 'bg-gray-800 border-gray-700' : 'bg-gray-700 border-gray-600'} transition-transform transform hover:scale-105 hover:shadow-lg`}
            >
              <span className={`text-lg ${todo.completed ? 'line-through text-gray-500' : 'text-gray-100'}`}>
                {todo.msg}
              </span>
              <input
                type="checkbox"
                className={`form-checkbox h-6 w-6 ${todo.completed ? 'text-green-400' : 'text-red-400'} cursor-pointer`}
                checked={todo.completed}
                onChange={()=>toggleCompleted(todo)}
              />
              <button onClick={()=>remove(todo.id)} className="py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center text-gray-500">No todos</div>
      )}
    </div>
  );
};

export default List;
