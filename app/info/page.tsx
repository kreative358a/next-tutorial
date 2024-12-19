"use client"
import { useBeforeunload } from "react-beforeunload";
import Link from "next/link";

function InfoPage() {
//   const value = true;
//   if(typeof window !== 'undefined'){
//   window.onbeforeunload = function() {
//     if (value) {
//       return "編集中です";
//     }
//   };
// }
useBeforeunload((event) => {
  event.preventDefault();
  console.log("beforeunload happened!");
});
  return (
    <div className="p-10">
      <h1 className='text-7xl'>Info Page</h1>
      <Link href='/' className='text-xl text-blue-500 inline-block mt-8'>
      home page
    </Link>    
    <br />  
    <Link href='/info/contact' className='text-xl text-blue-500 inline-block mt-2'>
      contact page
    </Link>          
    </div>
  );
}
export default InfoPage;
