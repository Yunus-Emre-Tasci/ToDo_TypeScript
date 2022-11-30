import axios from 'axios';
import React, { useEffect, useState } from 'react'
import InputForm from '../components/InputForm'
import TodoList from '../components/TodoList';

const url = "https://635182113e9fa1244e60855d.mockapi.io/api/todos";

// type AddFn=(text:string)=>void

const Home = () => {
  const [todos, setTodos] = useState<TodoType[]>([])

  const getTodos=async()=>{
    try {
      const { data } = await axios.get<TodoType[]>(url);
      console.log(data);
      setTodos(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTodos()
  }, [])
  
  const addTodo: AddFn = async (text) => {
    const newTodo={
      task:text,
      isDone:false
    }
    try {
      await axios.post(url, newTodo);
      getTodos();
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="main">
      <InputForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default Home