import React from 'react'
import TodoListItem from './TodoListItem'

interface ITodoList {
  todos: TodoType[];
  toggleTodo: ToggleFn
}

const TodoList: React.FC<ITodoList> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((item) => (
        <TodoListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default TodoList