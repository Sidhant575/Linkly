// "use client"
// import React from 'react'
// import { useState } from 'react'
// import Link from 'next/link'

// const Shorten = () => {
//     const [url, seturl] = useState("")
//     const [shorturl, setshorturl] = useState("")
//     const [generated, setgenerated] = useState("")
//     const generate = async () => {
//         const myHeaders = new Headers();
//         myHeaders.append("Content-Type", "application/json");

//         const raw = JSON.stringify({
//             "url": url,
//             "shorturl": shorturl
//         });

//         const requestOptions = {
//             method: "POST",
//             headers: myHeaders,
//             body: raw,
//             redirect: "follow"
//         };

//         fetch("/api/generate", requestOptions)
//             .then((response) => response.json())
//             .then((result) => {
//                 setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
//                 seturl("")
//                 setshorturl("")
                
//             console.log(result)
//             alert(result.message)
//         })
//             .catch((error) => console.error(error));
//     }
//     return (
//         <div className='mx-auto mt-12 max-w-lg bg-slate-800  p-16 text-white rounded-lg flec flex-col gap-4' >
//             <h1 className='font-bold text-2xl'>Generate your short URLs</h1>

//             <div className='mt-3 text-white flex flex-col gap-2' >
//                 <input type="text"
//                     value={url}
//                     className='px-4 py-2 rounded-md text-slate-300 bg-slate-700'
//                     placeholder='Enter your URL'
//                     onChange={e => {
//                         seturl(e.target.value)
//                     }} />

//                 <input type="text"
//                     value={shorturl}
//                     className='px-4 py-2 rounded-md text-slate-300 bg-slate-700'
//                     placeholder='Enter preferred short URl'
//                     onChange={e => {
//                         setshorturl(e.target.value)
//                     }} />

//                 <button onClick={generate} className='bg-gray-900 rounded-lg my-3 shadow-lg p-3 lg py-1 font-bold'>Generate</button>

//             </div>


//             {generated && <>
//             <span className='font-bold text-lg' >Your link </span>
//             <code><Link target="_blank" href={generated}>{generated}</Link>
//                 </code></>}
//         </div>
//     )
// }

// export default Shorten
"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setgenerated] = useState("")

    const generate = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                seturl("")
                setshorturl("")

                console.log(result)
                alert(result.message)
            })
            .catch((error) => console.error(error));
    }

    return (
        <div className="w-[90%] sm:w-[85%] md:w-[75%] lg:w-full max-w-lg mx-auto mt-8 sm:mt-12 bg-slate-800 p-5 sm:p-8 md:p-12 lg:p-16 text-white rounded-lg flex flex-col gap-4">

            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl text-center sm:text-left">
                Generate your short URLs
            </h1>

            <div className="mt-3 text-white flex flex-col gap-3">

                <input
                    type="text"
                    value={url}
                    className="w-full px-4 py-3 rounded-md text-slate-300 bg-slate-700 outline-none focus:ring-2 focus:ring-slate-500"
                    placeholder="Enter your URL"
                    onChange={e => {
                        seturl(e.target.value)
                    }}
                />

                <input
                    type="text"
                    value={shorturl}
                    className="w-full px-4 py-3 rounded-md text-slate-300 bg-slate-700 outline-none focus:ring-2 focus:ring-slate-500"
                    placeholder="Enter preferred short URL"
                    onChange={e => {
                        setshorturl(e.target.value)
                    }}
                />

                <button
                    onClick={generate}
                    className="w-full sm:w-auto self-center bg-gray-900 rounded-lg my-3 shadow-lg px-6 py-3 font-bold hover:bg-gray-700 transition"
                >
                    Generate
                </button>

            </div>

            {generated && (
                <div className="mt-2 flex flex-col gap-2">

                    <span className="font-bold text-base sm:text-lg">
                        Your link
                    </span>

                    <code className="break-all text-sm sm:text-base">
                        <Link
                            target="_blank"
                            href={generated}
                            className="text-blue-400 hover:underline"
                        >
                            {generated}
                        </Link>
                    </code>

                </div>
            )}

        </div>
    )
}

export default Shorten