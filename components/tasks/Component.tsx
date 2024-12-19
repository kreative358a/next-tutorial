"use client"
import { useState, useEffect } from 'react';
import Form from './Form';
import List from './List';

import { type Task } from './types';
// (tasks: Task[]): void
// function LoadTasks(tasks: Task[]): void {


function updateStorage(tasks: Task[]): void {

  localStorage.setItem('tasks', JSON.stringify(tasks));

}

function Component() {
  // const [tasks, setTasks] = useState<Task[]>([]);  
  
  const [tasks, setTasks] = useState<Task[]>(() => LoadTasks());
  
  const toggleTask = ({ id }: { id: string }) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      })
    );
  }; 
  
  

  const addTask = (task: Task): void => {
    setTasks([...tasks, task]);
  };


  useEffect(() => {
    updateStorage(tasks);
  }, [tasks]);

  return (
    <section>
    <div>
      <h2>Task List</h2>
    </div>

    <Form 
    addTask={addTask} 
    />
    <List 
    tasks={tasks} 
    toggleTask={toggleTask} 
    setTasks={setTasks}
    />
        <button
        className='btn'
        type='button'
        // disabled={deleteTaskLoading}
        onClick={() => setTasks([])}
      >
        clear list
      </button>        
  </section>
  );
}
export default Component;


function LoadTasks(): Task[] | []  {
  const storedTasks = localStorage.getItem('tasks')

  return storedTasks ? JSON.parse(storedTasks) : [];
// }, [s])
// const storedTasks = localStorage.getItem('tasks');
// return storedTasks ? JSON.parse(storedTasks) : [];
}
// }