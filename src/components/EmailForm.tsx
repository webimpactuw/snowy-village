import { useState } from "react";
import emailjs from '@emailjs/browser';

const SERVICE_ID: string = "service_0ghknil";
const TEMPLATE_ID: string = "template_4352rfm";
const PUBLIC_KEY: string = "ikWETIT97Twiekfly";

export default function EmailForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const templateParams = {
      name: name,
      email: email,
      message: message,
    }
    
    const sendEmail = (): void => {

      console.log("name is " + templateParams.name + " and email is " + templateParams.email + " and message is " +  templateParams.message);

      // TODO:
      emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, { publicKey: PUBLIC_KEY})
            .then(
              (response) => {
                console.log('Successfully sent email', response.status, response.text);
              },
              (err) => {
                console.log('Failed to send email', err);
              }
            )
    };

    // TODO: consider getting rid of items-center. This contact form 
    // isnt fully responsive. padding is too big in mobile screen.
    return <main className="flex min-h-screen flex-col items-center">
      <form className="flex flex-col items-center justify-center w-1/2">
        <input
          type="text"
          placeholder="Name"
          className="p-2 mb-4 border-2 rounded w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
       
        <input
          type="email"
          placeholder="Email"
          className="p-2 mb-4 border-2 rounded w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          placeholder="Message"
          className="p-2 mb-4 border-2 rounded h-64 w-full"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="button"
          className=" rounded p-2 bg-slate-400 hover:bg-slate-500 active:bg-sage-green 
                     focus:outline-none focus:ring focus:ring-violet-300"
          onClick={sendEmail}
          disabled={!name || !email || !message}
        >
          Send
        </button>
      </form>
    </main>

}