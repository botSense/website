import React, { useState } from "react";
import { AttentionSeeker, Zoom } from "react-awesome-reveal";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0d0e0e] flex justify-center items-center"
    >
      <Zoom>
        <form
          action="https://getform.io/f/8d709953-b5df-4298-bade-88f6315cea12"
          method="POST"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-8">
            <p className="text-gray-300 text-4xl font-bold inline border-b-4 border-yellow-600">
              Contact
            </p>
            <p className="text-gray-300 pt-4">
              Submit the form below or shoot a email at tbotsense@gmail.com
            </p>
          </div>
          <input
            type="text"
            className="bg-[#ccd6f6] w-full p-4"
            placeholder="Name"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="bg-[#ccd6f6] w-full mt-4 p-4"
            placeholder="Email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className="w-full p-4 mt-4 bg-[#ccd6f6]"
            placeholder="Message"
            name="message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <AttentionSeeker effect="heartBeat" delay={1000} className="flex">
            <button
              onSubmit={() => {
                setName("");
                setEmail("");
                setMessage("");
              }}
              className="mt-10 font-bold text-white border-2 hover:bg-yellow-600 hover:border-yellow-600 px-4 py-3 mx-auto items-center"
            >
              Submit Your Query
            </button>
          </AttentionSeeker>
        </form>
      </Zoom>
    </div>
  );
};

export default Contact;
