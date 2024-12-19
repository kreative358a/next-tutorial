import Link from "next/link";
import Image from "next/image";
const url = "https://www.course-api.com/react-tours-project";

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

const fetchTours = async () => {
// Wywołanie zwrotne używane do inicjalizacji obietnicy. 
// Temu wywołaniu zwrotnemu przekazywane są dwa argumenty: 
// wywołanie zwrotne resolve używane do rozwiązania obietnicy z wartością 
// lub wynikiem innej obietnicy oraz wywołanie zwrotne reject używane 
// do odrzucenia obietnicy z podanym powodem lub błędem.  
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(url);
  const data: Tour[] = await response.json();
  return data;
};

async function ToursPage() {
  const data = await fetchTours();
  return (
    <section>
      <h1 className='text-3xl mb-4'>Tours</h1>
      <div className='grid lg:grid-cols-2 2xl:grid-cols-3 min-[1640px]:grid-cols-4 gap-8'>
        {data.map((tour) => {
          return (
            <Link
              key={tour.id}
              href={`/tours/${tour.id}`}
              className='hover:text-blue-500'
            >
              <div className='relative h-64 w-96 mb-2 mx-auto'>
                <Image
                  src={tour.image}
                  alt={tour.name}
                  fill
                  // sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw'
                  priority
                  // width={384}
                  // height={256}
                  className='object-cover rounded'
                />
              </div>

              <h2 className="w-96 mx-auto">{tour.name}</h2>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
export default ToursPage;

// async function ToursPage() {
//   const response = await fetch(url);
//   const data: Tour[] = await response.json();
//   console.log(data);
//   return (
//     <section>
//       <h1 className='text-3xl mb-4'>Tours</h1>
//       <div className='grid lg:grid-cols-2 2xl:grid-cols-3 min-[1640px]:grid-cols-4 gap-8'>
//         {data.map((tour) => {
//           return (
//             <Link
//               key={tour.id}
//               href={`/tours/${tour.id}`}
//               className='hover:text-blue-500'
//             >
//               <div className='relative h-64 w-96 mb-2 mx-auto'>
//                 <Image
//                   src={tour.image}
//                   alt={tour.name}
//                   fill
//                   sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw'
//                   priority
//                   className='object-cover rounded'
//                 />
              
//               </div>
//               <h2 className="w-96 mx-auto">{tour.name}</h2>

              
//             </Link>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// export default ToursPage;
