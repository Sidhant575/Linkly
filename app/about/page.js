// import React from 'react'

// const About = () => {
//   return (
//     <main className="min-h-screen bg-slate-200 px-6 py-16">
//       <div className="max-w-4xl mx-auto">

//         <div className="bg-slate-800 rounded-xl p-10 text-white shadow-lg">
//           <h1 className="text-4xl font-bold text-center mb-6">
//             About Linkly
//           </h1>

//           <p className="text-slate-300 text-lg text-center leading-8 mb-8">
//             Linkly is a simple and straightforward URL shortener designed
//             to make long URLs shorter, cleaner and easier to share.
//           </p>

//           <div className="grid md:grid-cols-3 gap-6 mt-10">

//             <div className="bg-slate-700 rounded-lg p-6 text-center">
//               <h2 className="text-xl font-bold text-white mb-3">
//                 Simple
//               </h2>
//               <p className="text-slate-300">
//                 Create short URLs without unnecessary complications.
//               </p>
//             </div>

//             <div className="bg-slate-700 rounded-lg p-6 text-center">
//               <h2 className="text-xl font-bold text-white mb-3">
//                 Fast
//               </h2>
//               <p className="text-slate-300">
//                 Quickly generate short links whenever you need them.
//               </p>
//             </div>

//             <div className="bg-slate-700 rounded-lg p-6 text-center">
//               <h2 className="text-xl font-bold text-white mb-3">
//                 Easy to Share
//               </h2>
//               <p className="text-slate-300">
//                 Make long and complicated URLs easier to share.
//               </p>
//             </div>

//           </div>

//           <div className="mt-10 text-center">
//             <p className="text-slate-300">
//               Our goal is to provide a clean and easy-to-use URL
//               shortening experience.
//             </p>
//           </div>
//         </div>

//       </div>
//     </main>
//   )
// }

// export default About
import React from 'react'

const About = () => {
  return (
    <main className="min-h-screen bg-slate-200 px-4 sm:px-6 py-8 sm:py-12 md:py-16">

      <div className="w-full max-w-4xl mx-auto">

        <div className="bg-slate-800 rounded-xl p-5 sm:p-8 md:p-10 text-white shadow-lg">

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6">
            About Linkly
          </h1>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg text-center leading-6 sm:leading-7 md:leading-8 mb-6 sm:mb-8">
            Linkly is a simple and straightforward URL shortener designed
            to make long URLs shorter, cleaner and easier to share.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mt-6 sm:mt-10">

            {/* Simple */}
            <div className="bg-slate-700 rounded-lg p-5 sm:p-6 text-center">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                Simple
              </h2>

              <p className="text-sm sm:text-base text-slate-300">
                Create short URLs without unnecessary complications.
              </p>
            </div>

            {/* Fast */}
            <div className="bg-slate-700 rounded-lg p-5 sm:p-6 text-center">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                Fast
              </h2>

              <p className="text-sm sm:text-base text-slate-300">
                Quickly generate short links whenever you need them.
              </p>
            </div>

            {/* Easy to Share */}
            <div className="bg-slate-700 rounded-lg p-5 sm:p-6 text-center">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                Easy to Share
              </h2>

              <p className="text-sm sm:text-base text-slate-300">
                Make long and complicated URLs easier to share.
              </p>
            </div>

          </div>

          <div className="mt-7 sm:mt-10 text-center">
            <p className="text-sm sm:text-base text-slate-300">
              Our goal is to provide a clean and easy-to-use URL
              shortening experience.
            </p>
          </div>

        </div>

      </div>

    </main>
  )
}

export default About