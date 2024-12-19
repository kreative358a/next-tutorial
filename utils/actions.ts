/* eslint-disable @typescript-eslint/no-unused-vars */
'use server';

// wykonanie logiki backendu wewnątrz akcji serwera.
// pozwoli to zaimportować, następnie odczytać plik, a także zapisać plik.
import { readFile, writeFile } from 'fs/promises';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

type User = {
  id: string;
  firstName: string;
  lastName: string;
};

// export const createUser = async (formData: FormData) => {
// export const createUser = async (prevState: any, formData: FormData) => {
export const createUser = async (prevState: unknown, formData: FormData) => {
  'use server';
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;  

  // console.log('firstName: ', firstName, '\nlastName: ', lastName);
  // // { firstName: 'peter', lastName: 'smith' }
  // const rawData = Object.fromEntries(formData)
  // console.log('rawData: ', rawData);
  // // rawData:  {
  // //   '$ACTION_ID_f7a39099e76392e49194fc79b6820f97dfb36bdf': '',
  // //   firstName: 'peter',
  // //   lastName: 'smith'
  // // }  
  
  const newUser: User = { firstName, lastName, id: Date.now().toString() };

  // await saveUser(newUser)
  // console.log({firstName, lastName});
  // // revalidatePath('/actions');
  // redirect('/actions')

  try {
    await saveUser(newUser);
    revalidatePath('/actions');

    // // some logic
    return 'user created successfully...';
  } catch (error) {
    console.log(error);
    return 'failed to create user...';
  }  
  // revalidatePath('/actions');
  // redirect('/actions')
};


// export const createUser = async (prevState: unknown, formData: FormData) => {
//   'use server';
//   // console.log(prevState);

//   await new Promise((resolve) => setTimeout(resolve, 3000));
//   const firstName = formData.get('firstName') as string;
//   const lastName = formData.get('lastName') as string;
//   const newUser: User = { firstName, lastName, id: Date.now().toString() };

//   try {
//     await saveUser(newUser);
//     revalidatePath('/actions');

//     // some logic
//     return 'user created successfully...';
//   } catch (error) {
//     console.log(error);
//     return 'failed to create user...';
//   }
// };

// Ponieważ jest to funkcja asynchroniczna, wybieramy Promise.
export const fetchUsers = async (): Promise<User[]> => {
  const result = await readFile('users.json', { encoding: 'utf8' });
  const users = result ? JSON.parse(result) : [];
  return users;
};

// export const saveUser = async (user: User) => {
export const saveUser = async (user: User) => {
  const users = await fetchUsers();
  users.push(user);
  await writeFile('users.json', JSON.stringify(users));
};

// rozwiązanie przekazujące jakąś wartość 
// z naszego komponentu do naszej akcji serwera.
export const deleteUser = async (formData: FormData) => {
  const id = formData.get('id') as string;

  const users = await fetchUsers();
  const updatedUsers = users.filter((user) => user.id !== id);
  await writeFile('users.json', JSON.stringify(updatedUsers));
  revalidatePath('/actions');
};

// rozwiązanie przekazujące jakąś wartość 
// do akcji serwera za pomocą metody bind
// dane formularza będą tutaj drugim argumentem
export const removeUser = async (id: string, formData: FormData) => {
  const name = formData.get('name') as string;
  console.log(name);

  const users = await fetchUsers();
  const updatedUsers = users.filter((user) => user.id !== id);
  await writeFile('users.json', JSON.stringify(updatedUsers));
  revalidatePath('/actions');
};
