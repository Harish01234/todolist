import React, { useState } from 'react';

import { usetodosStore } from '../store/todosStore';

const Form = () => {
   const {todos,addTodo} =usetodosStore()

  const [todo, setTodo] = useState({
    id: '',
    completed: false,
    msg: '',
  });

  const add = (todo) => {
    console.log(todo);
    addTodo(todo)

    console.log(todos);
    
    // You can also perform other actions here, such as adding the todo to a list
    setTodo({
      id: '',
      completed: false,
      msg: '',
    }); // Reset the todo object after submission
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    if (todo.msg.trim()) { // Check if the msg is not empty
      add(todo); // Call the add function with the current todo object
    }
  };

  return (
    <div className="w-full max-w-md p-4 bg-gray-800 rounded-lg shadow-md">
      <form className="flex items-center space-x-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write your todo..."
          value={todo.msg}
          onChange={(e) => setTodo((prev) => ({
            ...prev,
            id: Date.now(), // Generate a new ID for the todo
            msg: e.target.value,
          }))}
          className="flex-1 p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default Form;
