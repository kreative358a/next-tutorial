import Form from '@/components/Form';
import UsersList from '@/components/UsersList';


// Możemy używać akcji serwera w obu przypadkach.
// Możemy go używać zarówno w komponencie serwera, jak i komponencie klienta.
// Jedyną różnicą w komponencie serwera jest to,
// że możemy dostarczyć akcję serwera bezpośrednio wewnątrz komponentu,
// w zasadzie wewnątrz tego pliku.
// Ale wewnątrz klienta będziemy musieli, zaimportować go z pliku, 
// w którym użyliśmy serwera na górze.
function ActionsPage() {
  return (
    <div className='relative flex flex-col w-[600px] mx-auto  mt-0'>
     
      <Form />
      <UsersList />
      
    </div>
  );
}
export default ActionsPage;
