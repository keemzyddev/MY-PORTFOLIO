import axios from "axios";
import { useState } from "react";
const Contact = () => {
  const [input, setInput] = useState({});

  const handleInput = (e) => {
    setInput((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://getform.io/f/134a86be-9c85-4334-a1b0-f88c541a7b46",
        input
      );
      {
        headers: {
          Accept: "application/json";
        }
      }

      window.location.replace(
        "https://getform.io/thank-you?id=134a86be-9c85-4334-a1b0-f88c541a7b46"
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white pt-10"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-5 pt-5">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get intouch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            className="flex flex-col w-full md:w-1/2"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              onChange={handleInput}
              placeholder="Enter Your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              onChange={handleInput}
              placeholder="Enter Your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter Your Message..."
              onChange={handleInput}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Send a Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
