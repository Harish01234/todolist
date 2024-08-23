import { useState, useEffect } from 'react';

import Form from './component/Form';
import List from './component/List';

import { usetodosStore } from './store/todosStore';

function App() {

  const { todos, setTodos, addTodo, deleteTodo } = usetodosStore()

  // Load todos from localStorage when the component mounts
  useEffect(() => {
    const savedTodos = localStorage.getItem('todoslocal');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
      console.log("saved todos value is:",savedTodos);
      
    }
  }, [setTodos]);

  useEffect(() => {
    console.log('Saving todos:', todos);

    if(todos.length<=0) return 
    localStorage.setItem('todoslocal', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="bg-black text-white w-screen min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4">TODOlIST</h1>
      <Form />
      <List />
    </div>
  );
}

export default App;
