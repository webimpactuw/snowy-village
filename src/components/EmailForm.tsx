import { useState } from "react";
import emailjs from "@emailjs/browser";

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
  };

  // Function: sends email. If any field is empty, refuse to send.
  const sendEmail = (): void => {
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Please fill out all text boxes.");
      console.log("Did not send because a field was non empty"); // also use regex for the email part
      return;
    }

    console.log(
      "name is " +
        templateParams.name +
        " and email is " +
        templateParams.email +
        " and message is " +
        templateParams.message
    );

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, { publicKey: PUBLIC_KEY })
      .then(
        (response) => {
          console.log(
            "Successfully sent email",
            response.status,
            response.text
          );
        },
        (err) => {
          console.log("Failed to send email", err);
        }
      );
  };

  return (
    <main className="flex flex-col items-center mt-3">
      <form className="flex flex-col items-center justify-center w-[80%] md:w-1/2 text-black">
        <input
          type="text"
          placeholder="Name"
          className="p-2 mb-4 border-2 rounded-xl w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="p-2 mb-4 border-2 rounded-xl w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          placeholder="Message"
          className="p-2 mb-4 border-2 rounded-xl h-64 w-full"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="button"
          className="bg-aquamarine-blue rounded-full text-md text-white mt-4 px-12 py-3 font-semibold flex justify-center hover:ring-aquamarine-blue hover:bg-blue-100 hover:ring-2 hover:text-aquamarine-blue"
          onClick={sendEmail}
          disabled={!name || !email || !message}
        >
          Send
        </button>
      </form>
    </main>
  );
}
