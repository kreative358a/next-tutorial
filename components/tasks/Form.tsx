/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { type Task } from './types';

type FormProps = {
  addTask: (task: Task) => void;
};

function Form({ addTask }: FormProps) {
  const [text, setText] = useState('');
  const [newItemTime, setNewItemTime] = useState('');
  const [newItemDate, setNewItemDate] = useState('');
  const [newItemName, setNewItemName] = useState('');  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (!text) {
    if (!newItemName) {
      alert('please enter a task');
      return;
    }
    addTask({
      id: new Date().getTime().toString(),
      // description: text,
      description: newItemName,
      isCompleted: false,
    });

    setNewItemName('');
  };

  return (
    <form className='form task-form' onSubmit={handleSubmit}>
  <div className='flex'>
      <input
          type='date'
          // className='form-input'
          value={newItemDate}
          onChange={(event) => setNewItemName(`${event.target.value} `)}
          // onChange={(event) => setNewItemName(`${event.target.value}`)}
        />
  
         
        <input
          type='time'

          value={newItemTime}
          // onChange={(event) => setNewItemName(`${newItemName} ` + `${event.target.value} - `)}
          onChange={(event) => setNewItemTime(`${newItemName} ` + `${event.target.value} - `)}
          // onChange={(event) => setNewItemName(`${event.target.value}`)}
          onBlur={(event) => setNewItemName(`${newItemTime} `)}
        />    
        </div>    
         <br />             
      <input
        type='text'
        className='form-input'
        // value={text}
        // onChange={(e) => setText(e.target.value)}
        value={newItemName}
        onChange={(event) => setNewItemName(event.target.value)}        
      />
      <button type='submit' className='btn'>
        add task
      </button>
    </form>
  );
}
export default Form;

// function Form() {
//   const [text, setText] = useState('');

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!text) {
//       alert('please enter a task');
//       return;
//     }
//     // addTask({
//     //   id: new Date().getTime().toString(),
//     //   description: text,
//     //   isCompleted: false,
//     // });
    
//     setText('');
//   };

//   return (
//     <form 
//     className='form task-form' 
//     onSubmit={handleSubmit}
//     >
//       <input
//         type='text'
//         className='form-input'
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <button type='submit' className='btn'>
//         add task
//       </button>
//     </form>
//   )
// }
// export default Form
