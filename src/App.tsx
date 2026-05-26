import { TodoItem } from './components/TodoItem/TodoItem.tsx';
import { TodoForm } from './components/TodoForm/TodoForm.tsx';

import './App.css'
import type { TodoItemType } from "./shared/types.ts";
import { useState } from "react";

const mockTodos: TodoItemType[] = [{
  id: 1,
  label: 'Сдать чекпоинт по проектно-технологической практике СРОЧНО !!!',
  isChecked: false
}, {
  id: 2,
  label: 'Сдать семестровку Кириллу!',
  isChecked: false
}, {
  id: 3,
  label: 'Купить хлеб и сосиски :)',
  isChecked: true
}]

function App() {
  const [todos, setTodos] = useState<TodoItemType[]>(mockTodos);

  const handleTaskCheckedChange = (id: number) => {
    setTodos((prevState) => {
      return prevState.map((value) => {
        if (value.id === id) {
          return {
            ...value,
            isChecked: !value.isChecked
          }
        }

        return value;
      })
    });
  }
  const handleAddTodo = (text: string) => {
    const newTodo: TodoItemType = {
        id: Date.now(),
        label: text,
        isChecked: false
    };
    setTodos((prevState) => [...prevState, newTodo]);
  }



  return (
    <div className="app-container">
        <h1 className='app-title'>Мои задачи</h1>
        <TodoForm onAdd={handleAddTodo} />
        <div className="todo-list">
            {todos.map((value) => (
                <TodoItem 
                    id={value.id} 
                    key={value.id} 
                    label={value.label} 
                    done={value.isChecked} 
                    onChange={handleTaskCheckedChange} 
                />
            ))}
        </div>
    </div>
  )
}

export default App
