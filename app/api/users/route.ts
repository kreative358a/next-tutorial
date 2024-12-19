/* eslint-disable @typescript-eslint/no-unused-vars */
/*
## Route Handlers

- install Thunder Client

Route Handlers allow you to create custom request handlers for a given route using the Web Request and Response APIs.

- in app create folder "api"
- in there create folder "users" with route.ts file

The following HTTP methods are supported: GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS. If an unsupported method is called, Next.js will return a 405 Method Not Allowed response.

In addition to supporting native Request and Response. Next.js extends them with NextRequest and NextResponse to provide convenient helpers for advanced use cases.

app/api/users/route.ts
*/

// dużą zaletą route handlerów jest fakt, że możemy tutaj użyć logiki backendu
import { fetchUsers, saveUser } from '@/utils/actions';
import { NextRequest, NextResponse } from 'next/server';


// export const GET = async (req: Request) => {

//   // console.log('req: ', req);
//   console.log('req.url: ', req.url);  

//   const {searchParams} = new URL(req.url)
//   const id = searchParams.get('id');
//   console.log('id: ', id);

//   // console.log(req.nextUrl.searchParams.get('id'));

//   const users = await fetchUsers();
//   return Response.json({ users });
// };


export const GET = async (req: NextRequest) => {
  console.log('req.url: ', req.url);
  console.log("req.nextUrl.searchParams.get('id'): ", req.nextUrl.searchParams.get('id'));

  const users = await fetchUsers();
  return Response.json({ users });
  // return NextResponse.redirect(new URL('/', req.url)); // http://localhost:3000/
}

export const POST = async (req: Request) => {

  // const result = await req.json()
  // console.log('result: ', result);

  const user = await req.json();
  const newUser = { ...user, id: Date.now().toString() };
  await saveUser(newUser);  
  
  return Response.json({ msg: 'user created' });
};
