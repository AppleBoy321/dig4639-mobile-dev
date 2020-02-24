import React from 'react';
import logo from './logo.svg';
import './App.css';
const todoList = [
  {
      content: 'Task 1', priority: 2, completed: true
  },
  {
      content: 'Task 2', priority: 1, completed: true
  },
  {
      content: 'Task 3', priority: 3, completed: false
  }
]

function TodoItem(props) {
  return <p>{props.content}</p>
}

function App() {
  const todoListFlitered = todoList.filter((value) => value.completed)

  let todoArray = todoListFlitered.map(
    (value) => <TodoItem content={value.content} />
  )

  return (
    todoList.filter((v) => v.completed).map(
      (v) => <TodoItem priority={v.priority} content={v.content} completed={v.completed}/>)
  );
}

export default App;
