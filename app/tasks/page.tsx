import './page.css'
import dynamic from 'next/dynamic'
  //   if(typeof window !== 'undefined'){
// import Component from "../../components/tasks/Component";

const Component = dynamic(
    () => import('@/components/tasks/Component'),
    { ssr: false }
  )

function App() {
    
  return (
    <div className='max-w-[96%]'>
      <h2 className="max-[520px]:text-red-500">React & Typescript</h2>
      {/* <Component name='peter' id={123} children={2}/> */}
      {/* <Component name='peter' id={123} >
        <h2>Hello Children</h2>
        </Component>
        <Component name='peter' id={123} /> */}
      {/* <Component type="begin" text="begin" /> */}
      {/* <Component type="basic" name="Susan" />
      <Component type="advanced" name="Anna" email="anna@test.com" /> */}
      
     <Component />
    </div>
  );
}

export default App;