import { fetchUsers } from "@/utils/actions";
import {DeleteButton} from "./DeleteButton";
import {RemoveButton} from "./DeleteButton";
async function UsersList() {
  const users = await fetchUsers();
  return (
    <div className="w-[600px] max-w-lg flex flex-col gap-y-1 border-2 shadow rounded px-8 py-2 mx-auto">
      {users.length ? (
        <div className="max-w-lg ">
          {users.map((user) => {
            return (
              <div key={user.id} className="flex justify-between items-center rounded-sm px-2 hover:bg-blue-200">
                <h4 className="capitalize text-lg  my-2 border-b-2 pl-2 pr-4 ">
                  {user.firstName} {user.lastName}
                  
                </h4>
                <div className="flex gap-x-2">
                <DeleteButton id={user.id} />
                <RemoveButton id={user.id} />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p>No users found...</p>
      )}
    </div>
  );
}
export default UsersList;
