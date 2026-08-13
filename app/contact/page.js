
// import React from 'react'

// const Contact = () => {
//   return (
//     <main className="min-h-screen bg-slate-200 px-4 sm:px-6 py-8 sm:py-12 md:py-16">

//       <div className="w-full max-w-3xl mx-auto">

//         <div className="bg-slate-800 rounded-xl p-5 sm:p-8 md:p-10 text-white shadow-lg">

//           <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">
//             Contact Us
//           </h1>

//           <p className="text-slate-300 text-sm sm:text-base text-center mb-7 sm:mb-10 max-w-xl mx-auto">
//             Have a question, suggestion or feedback? We'd love to hear
//             from you.
//           </p>

//           <form className="space-y-5 sm:space-y-6">

//             {/* Name */}
//             <div>
//               <label className="block text-slate-200 mb-2 text-sm sm:text-base">
//                 Your Name
//               </label>

//               <input
//                 type="text"
//                 placeholder="Enter your name"
//                 className="w-full bg-slate-700 text-white placeholder:text-slate-400 rounded-lg px-4 py-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-slate-400"
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-slate-200 mb-2 text-sm sm:text-base">
//                 Email
//               </label>

//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full bg-slate-700 text-white placeholder:text-slate-400 rounded-lg px-4 py-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-slate-400"
//               />
//             </div>

//             {/* Message */}
//             <div>
//               <label className="block text-slate-200 mb-2 text-sm sm:text-base">
//                 Message
//               </label>

//               <textarea
//                 rows="5"
//                 placeholder="Enter your message"
//                 className="w-full bg-slate-700 text-white placeholder:text-slate-400 rounded-lg px-4 py-3 text-sm sm:text-base outline-none resize-none focus:ring-2 focus:ring-slate-400"
//               ></textarea>
//             </div>

//             {/* Button */}
//             <button
//               type="submit"
//               className="w-full bg-slate-950 text-white font-bold py-3 rounded-lg hover:bg-slate-900 transition text-sm sm:text-base"
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
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <section className="px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Contact Us
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-slate-400 text-lg">
          Have a question, suggestion, or need help with our URL shortener?
          We’d love to hear from you.
        </p>
      </section>

      {/* Contact Details */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">

          {/* Email */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center hover:border-blue-500 transition">
            <div className="text-4xl mb-4">📧</div>

            <h2 className="text-xl font-semibold">
              Email
            </h2>

            <p className="mt-2 text-slate-400">
              Reach us through email
            </p>

            <a
              href="mailto:yourname@example.com"
              className="inline-block mt-4 text-blue-400 hover:text-blue-300 break-all"
            >
              goyalsidddhant575@gmail.com
            </a>
          </div>

          {/* GitHub */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center hover:border-blue-500 transition">
            <div className="text-4xl mb-4">💻</div>

            <h2 className="text-xl font-semibold">
              GitHub
            </h2>

            <p className="mt-2 text-slate-400">
              Check out the project
            </p>

            <a
              href="https://github.com/Sidhant575"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-400 hover:text-blue-300"
            >
              View GitHub
            </a>
          </div>

          {/* Location */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center hover:border-blue-500 transition">
            <div className="text-4xl mb-4">📍</div>

            <h2 className="text-xl font-semibold">
              Location
            </h2>

            <p className="mt-2 text-slate-400">
              Based in
            </p>

            <p className="mt-4 text-blue-400">
              India
            </p>
          </div>

        </div>

        {/* About */}
        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
          <h2 className="text-2xl font-bold">
            We’re Here to Help
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-slate-400 leading-7">
            Whether you found a problem, have an idea for improving the
            service, or simply want to get in touch, feel free to reach out.
            Your feedback helps us make the URL shortener better.
          </p>
        </div>
      </section>
    </main>
  );
}