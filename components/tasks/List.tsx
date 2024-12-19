import { type Task } from './types';

type ListProps = {
  tasks: Task[];
  toggleTask: ({ id }: { id: string }) => void;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
};


function List({ tasks, toggleTask, setTasks }: ListProps) {

  return (
    <ul className='list'>
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            <label className="container">
            <p 
            className='task-text'
            style={{
              textDecoration: task.isCompleted && 'line-through darkred 3px' || undefined,
            }}
            >{task.description}</p>
            <input
              type='checkbox'
              checked={task.isCompleted}
              onChange={() => {
                toggleTask({ id: task.id });
              }}
              
            />
            <span className="checkmark"></span>
        </label>      
        <button
        className='btn remove-btn'
        type='button'
        onClick={() => {
          setTasks((tasks) =>
            tasks.filter((obj) => obj.id !== task.id)
          );
        }}
      >
        delete
      </button>              
          </li>
        );
      })}
    </ul>
  );
}
export default List;

// function List() {
//   return (
//     <div>List</div>
//   )
// }
// export default List
