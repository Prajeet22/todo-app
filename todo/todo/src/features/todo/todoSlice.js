import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: nanoid(), text: "Hello World", completed: true }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const id = action.payload.id;
      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, text: action.payload.text } : todo
      );
    },
    toggleTodo: (state, action) => {
        const todo = state.todos.find((todo) => todo.id === action.payload);
        if (todo) {
          todo.completed = !todo.completed;
        }
      },
  },
});

export const { addTodo, removeTodo, updateTodo, toggleTodo } = todoSlice.actions;   
