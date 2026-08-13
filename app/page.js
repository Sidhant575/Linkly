// import Image from "next/image";
// import localFont from "next/font/local"
// import Link from "next/link";

// const poppins = localFont({
//   src: "./fonts/Poppins-ExtraBold.ttf",
//   variable: "--font-poppins",
//   subsets: ["latin"],
// });


// export default function Home() {
//   return (
//     <main>
//       <section className="grid grid-cols-2 h-[50vh] ">
//         <div className="flex flex-col gap-4 justify-center items-center" >
//           <p className={`text-3xl font-bold ${poppins.className}`}>
//             The best URL Shortner in the Market
//           </p>
//           <p className="px-30 text-center">
//             We are the most straight forward URL shortner in the world. Most of the url shortners will track you or ask you to give your details for login. We understand your needs and hence we created this URL hortner
//           </p>
//           <div className='flex gap-3'>
//             <Link href='/generate'><button className='bg-gray-900 rounded-lg shadow-lg p-3 lg py-1 font-bold text-white'>Try Now</button></Link>
//             <Link href='/github'><button className='bg-gray-900 rounded-lg shadow-lg p-3 lg py-1 font-bold text-white'>GitHub</button></Link>

//           </div>
//         </div>
//         <div className=" flex justify-start relative">
//           <Image className="py-3" src={"/vector.svg"} alt="an image of a vector" fill={true} />
//         </div>
//       </section>
//     </main>
//   );
// }
import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[70vh]">

        {/* Left section */}
        <div className="flex flex-col gap-5 justify-center items-center px-6 sm:px-10 md:px-8 lg:px-12">

          <p
            className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center ${poppins.className}`}
          >
            The best URL Shortner in the Market
          </p>

          <p className="text-sm sm:text-base md:text-lg text-center max-w-xl">
            We are the most straight forward URL shortner in the world.
            Most of the url shortners will track you or ask you to give your
            details for login. We understand your needs and hence we created
            this URL shortner.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/shorten">
              <button className="w-full sm:w-auto bg-gray-900 rounded-lg shadow-lg px-6 py-3 font-bold text-white">
                Try Now
              </button>
            </Link>
          </div>

        </div>

        {/* Right section */}
        <div className="relative min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">

          <Image
            className="py-3"
            src="/vector.svg"
            alt="an image of a vector"
            fill={true}
            priority
          />

        </div>

      </section>
    </main>
  );
}