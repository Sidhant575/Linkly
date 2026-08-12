// import React from 'react'

// const Contact = () => {
//   return (
//     <main className="min-h-screen bg-slate-200 px-6 py-16">
//       <div className="max-w-3xl mx-auto">

//         <div className="bg-slate-800 rounded-xl p-10 text-white shadow-lg">

//           <h1 className="text-4xl font-bold text-center mb-4">
//             Contact Us
//           </h1>

//           <p className="text-slate-300 text-center mb-10">
//             Have a question, suggestion or feedback? We'd love to hear
//             from you.
//           </p>

//           <form className="space-y-6">

//             <div>
//               <label className="block text-slate-200 mb-2">
//                 Your Name
//               </label>

//               <input
//                 type="text"
//                 placeholder="Enter your name"
//                 className="w-full bg-slate-700 text-white placeholder:text-slate-400
//                 rounded-lg px-4 py-3 outline-none
//                 focus:ring-2 focus:ring-slate-400"
//               />
//             </div>

//             <div>
//               <label className="block text-slate-200 mb-2">
//                 Email
//               </label>

//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full bg-slate-700 text-white placeholder:text-slate-400
//                 rounded-lg px-4 py-3 outline-none
//                 focus:ring-2 focus:ring-slate-400"
//               />
//             </div>

//             <div>
//               <label className="block text-slate-200 mb-2">
//                 Message
//               </label>

//               <textarea
//                 rows="5"
//                 placeholder="Enter your message"
//                 className="w-full bg-slate-700 text-white placeholder:text-slate-400
//                 rounded-lg px-4 py-3 outline-none resize-none
//                 focus:ring-2 focus:ring-slate-400"
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-slate-950 text-white font-bold
//               py-3 rounded-lg hover:bg-slate-900 transition"
//             >
//               Send Message
//             </button>

//           </form>

//         </div>

//       </div>
//     </main>
//   )
// }

// export default Contact
import React from 'react'

const Contact = () => {
  return (
    <main className="min-h-screen bg-slate-200 px-4 sm:px-6 py-8 sm:py-12 md:py-16">

      <div className="w-full max-w-3xl mx-auto">

        <div className="bg-slate-800 rounded-xl p-5 sm:p-8 md:p-10 text-white shadow-lg">

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">
            Contact Us
          </h1>

          <p className="text-slate-300 text-sm sm:text-base text-center mb-7 sm:mb-10 max-w-xl mx-auto">
            Have a question, suggestion or feedback? We'd love to hear
            from you.
          </p>

          <form className="space-y-5 sm:space-y-6">

            {/* Name */}
            <div>
              <label className="block text-slate-200 mb-2 text-sm sm:text-base">
                Your Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-slate-700 text-white placeholder:text-slate-400 rounded-lg px-4 py-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-slate-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-slate-200 mb-2 text-sm sm:text-base">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-slate-700 text-white placeholder:text-slate-400 rounded-lg px-4 py-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-slate-400"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-slate-200 mb-2 text-sm sm:text-base">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Enter your message"
                className="w-full bg-slate-700 text-white placeholder:text-slate-400 rounded-lg px-4 py-3 text-sm sm:text-base outline-none resize-none focus:ring-2 focus:ring-slate-400"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-slate-950 text-white font-bold py-3 rounded-lg hover:bg-slate-900 transition text-sm sm:text-base"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </main>
  )
}

export default Contact