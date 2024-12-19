import mapsImg from '@/images/maps.jpg';
import Image from 'next/image';
const url = 'https://www.course-api.com/images/tours/tour-1.jpeg';

function page({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1 className='text-4xl'>ID : {params.id}</h1>
      <section className='flex gap-x-4 mt-4'>
        {/* local image */}
        <div>
          <Image
            src={mapsImg}
            alt='maps'
            priority
            width={384}
            height={256}
            className='h-64 w-96 mb-2 mx-auto object-cover rounded'
          />
          <h2>local image</h2>
        </div>
        {/* remote image */}
        <div>
          <Image
            src={url}
            alt='tour'
            width={384}
            height={256}
            priority
            className='h-64 w-96 mb-2 mx-auto object-cover rounded'
          />
          <h2>remote image</h2>
        </div>
        <br />
        
      </section>
    </div>
  );
}
export default page;
