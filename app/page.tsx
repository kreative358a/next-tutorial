import Link from "next/dist/client/link";

function HomePage() {
  return (
    <div className="p-10">
      <h1 className="text-7xl">Home Page</h1>
      <Link href='/about' className='text-xl text-blue-500 inline-block mt-8'>
      about page
    </Link>      
    <br />  
    <Link href='/info' className='text-xl text-blue-500 inline-block mt-2'>
      info page
    </Link>    
    </div>
 
  );
}
export default HomePage;
