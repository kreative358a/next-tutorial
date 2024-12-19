import { 
  deleteUser, 
  removeUser 
} from '@/utils/actions';


// rozwiązanie przekazujące jakąś wartość 
// z naszego komponentu do naszej akcji serwera.
export function DeleteButton({ id }: { id: string }) {
  // const removeUserWithId = removeUser.bind(null, id);
  return (
    <form action={deleteUser}>
        {/* <form action={removeUserWithId}> */}
      {/* <input type='hidden' name='name' value='shakeAndBake' /> */}
      <input type='hidden' name='id' value={id}/>
      <button
        type='submit'
        className='bg-red-500 text-white text-xs rounded p-2'
      >
        delete
      </button>
    </form>
  );
}
// export default DeleteButton;

// function DeleteButton({ id }: { id: string }) {
export function RemoveButton({ id }: { id: string }) {
// bind dla danej funkcji tworzy funkcję powiązaną, 
// która ma to samo ciało, co funkcja oryginalna. 
// Obiekt this funkcji powiązanej jest skojarzony ze wskazanym obiektem 
// i ma wskazane parametry początkowe.  
  const removeUserWithId = removeUser.bind(null, id);
  return (
    <form action={removeUserWithId}>
        {/* <form action={removeUserWithId}> */}
      <input type='hidden' name='name' value='shakeAndBake' />
      <button
        type='submit'
        className='bg-red-500 text-white text-xs rounded p-2'
      >
        remove
      </button>
    </form>
  );
}
// export default RemoveButton;
