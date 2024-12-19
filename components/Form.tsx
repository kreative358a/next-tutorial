/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import CSS from "csstype";
import { useFormState, useFormStatus } from "react-dom";
import { createUser } from "@/utils/actions";


// interface StyleProps {
//   color?: string;
//   margin?: string;
// }

// const Box: React.FC<StyleProps> = ({ color, margin }) => (
//   <div style={{ color, margin }}>I&apos;m a styled box!</div>
// );

// interface ButtonProps {
//   primary?: boolean;
//   children: React.ReactNode;
// }

// const Button: React.FC<ButtonProps> = ({ primary, children }) => {
//   const buttonStyle: React.CSSProperties = {
//     backgroundColor: primary ? 'blue' : 'gray',
//     color: 'white',
//   };

//   return <button style={buttonStyle}>{children}</button>;
// };

// interface ButtonStyleProps {
//   backgroundColor?: string;
//   fontSize?: string;
//   children: React.ReactNode;
// }
// // {children,}: {children: React.ReactNode;}
// const StyledButton: React.FC<ButtonStyleProps> = ({ backgroundColor, fontSize, children }) => (
//   <button style={{ backgroundColor, fontSize }}>{children}</button>
// );

const SubmitButton = () => {
  // const result = useFormStatus()
  const { pending } = useFormStatus();
  // jeśli wartość pending jest równa true, to przycisk będzie wyłączony
  return (
    <button type="submit" className={btnClassName} disabled={pending}>
      {pending ? "submitting..." : "submit"}
    </button>
    // <button type="submit" className={btnClassName} > Submit </button>
  );
};

function Form() {
  const [message, formAction] = useFormState(createUser, null);
  return (
    // <form action={formAction} className={formStyle}>
    //   {message && <p>{message}</p>}
    //   <h2 className='text-2xl capitalize mb-4'>create user</h2>
    //   <input
    //     type='text'
    //     name='firstName'
    //     defaultValue='peter'
    //     required
    //     className={inputStyle}
    //   />
    //   <input
    //     type='text'
    //     name='lastName'
    //     defaultValue='smith'
    //     required
    //     className={inputStyle}
    //   />
    //   <SubmitButton />
    // </form>
    <form action={formAction} className={formClassName}>
      {/* <form action={createUser} className={formClassName}> */}
      {message && <p>{message}</p>}
      <h2 className="text-2xl capitalize mb-4">create user</h2>
      <input
        type="text"
        name="firstName"
        defaultValue="peter"
        required={true}
        className={inputClassName}
        style={inputStyle}
      />
      <input
        type="text"
        name="lastName"
        defaultValue="smith"
        required
        className={inputClassName}
        style={myStyle}
      />
      {/* <button type="submit" className={btnClassName} > Submit </button> */}
      {/* <form action={formAction} className={formStyle}>
      {message && <p>{message}</p>}
      <h2 className='text-2xl capitalize mb-4'>create user</h2>
      <input
        type='text'
        name='firstName'
        defaultValue='peter'
        required
        className={inputStyle}
      />
      <input
        type='text'
        name='lastName'
        defaultValue='smith'
        required
        className={inputStyle}
      /> */}
      <SubmitButton />
    </form>
  );
}

const formClassName =
  "w-[600px] max-w-lg flex flex-col gap-y-4 rounded p-8 mx-auto border-2";

const inputClassName = "border shadow rounded py-2 px-3 text-gray-700";
const btnClassName =
  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize";

  const inputStyle: CSS.Properties = {
    boxShadow: "0px 0px 0px 2px rgba(120, 120, 140, 0.6)",
  };
  const myStyle: React.CSSProperties = {
    boxShadow: "0px 0px 0px 2px rgba(120, 120, 140, 0.6)",
  };  

export default Form;
