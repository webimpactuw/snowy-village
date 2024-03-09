import { useState } from "react";

export default function EmailForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
    const sendEmail = (): void => {
      // TODO:
    };

    return <main className="flex min-h-screen flex-col items-center p-24">
      <form className="flex flex-col items-center justify-center">
        <input
          type="text"
          placeholder="Name"
          className="p-2 mb-4 border-2 rounded w-96"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
       
        <input
          type="email"
          placeholder="Email"
          className="p-2 mb-4 border-2 rounded w-96"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          placeholder="Message"
          className="p-2 mb-4 border-2 rounded h-64 w-96"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="button"
          className="bg-dark-navy text-white p-2 rounded disabled:opacity-50"
          onClick={sendEmail}
          disabled={!name || !email || !message}
        >
          Send
        </button>
      </form>
    </main>

}