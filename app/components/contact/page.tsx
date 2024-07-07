// "use client";

// import {useState} from "react";

// export default function Contact(){
//     const [fullname, setFullname] = useState('');
//     const[email, setEmail] = useState('');
//     const[message, setMessage] = useState('')
//     const [error, setError] = useState('');
//     const handleSubmit = async (e) => { e.preventDefault();

// console.log("Full Name:", fullname);
// console.log("Email:", email);
// console.log("Message:", message);


// const res = await fetch("api/contact", {
//     method: "POST",
//     headers:{
//         "content-type": "application/json",
//     },
//     body: JSON.stringify({
//         fullname, 
//         email,
//         message,
// )},
//     });
// const { msg } = await res.json();
// setError(msg);
// console.log(error)
//     };

//     return (
//         <>
//         <header><h1>Contact Us</h1>
//         <p>Please fill out the form below</p></header>
//         <div className="container  center={true} max-width={400} padding-4 margin-50 border-4">
//         <form onSubmit={handleSubmit} className="py-4 mt-4 border-t flex flex-col gap-5 max-width={200}">
//         <div>
//             <label htmlFor="fullname">Full Name</label>
//         <input onChange={(e) => setFullname(e.target.value)} type="text" value={fullname} id="fullname" placeholder="Jasmin Guy" />
//         </div>
//         <div>
//             <label htmlFor="email">Email</label>
//             <input onChange={(e) => setEmail(e.target.value)} type="text" value={email} id="email" placeholder="jasmine@gmail.com"/>
//         </div>
//         <div>
//             <label htmlFor="message">Your Message</label>
//             <textarea onChange={(e) => setMessage(e.target.value)} value={message} className="h-34" id="message" placeholder="Type your message here..."></textarea>
//         </div>
//         <button className="bg-green-700 p-3 text-white font-bold" type="submit">
//             Send
//         </button>
//         <div>
//             <div>Error message</div>
//         </div>
//         </form>
//         </div>
//                 </>
//             )}
    

