import Link from "next/link";
import Image from "next/image";

function ContactPage() {
  return (
    <div className="p-10">
      <h1 className="text-7xl">Contact Page</h1>
      <Link href="/" className="text-xl text-blue-500 inline-block mt-8">
        home page
      </Link>

      <div className="max-[520px]:bg-blue-400 p-6 max-w-sm mx-auto my-10 bg-white rounded-xl shadow-lg flex items-center gap-x-4">
        <div className="shrink-0">
          <Image
            className="size-12"
            src="/favicon.ico"
            alt="ChitChat Logo"
            width={40}
            height={40}
          />
        </div>
        <div>
          <div className="text-xl font-medium text-black ">ChitChat</div>
          <p className="text-slate-500 text-justify">
            You have a new message! You have a new message! You have a new
            message!
          </p>
        </div>
      </div>
      <div className="py-8 px-8 max-w-sm mx-auto space-y-2 bg-white rounded-xl shadow-lg sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:gap-x-6">
        {/* <img
          className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
          src="/img/erin-lindford.jpg"
          alt="Woman's Face"
        /> */}
        <Image
          className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
          src="/img/erin-lindford.jpg"
          alt="Woman's Face"
          width={100}
          height={200}
        />        
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">Erin Lindford</p>
            <p className="text-slate-500 font-medium">Product Engineer</p>
          </div>
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Message
          </button>
        </div>
      </div>
    </div>
  );
}
export default ContactPage;
