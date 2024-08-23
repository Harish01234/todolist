import { create } from "zustand";

export const usetodosStore=create((set)=>({

    todos:[],
    setTodos: (newTodos) => set({ todos: newTodos }),
    addTodo:(todo)=>set((state)=>({todos:[...state.todos,todo]})),
    deleteTodo:(todoId)=>set((state)=>({todos:state.todos.filter(todo=>todo.id!==todoId)})),
    updateTodo: (updatedTodo) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === updatedTodo.id ? updatedTodo : todo
          ),
        })),
}))