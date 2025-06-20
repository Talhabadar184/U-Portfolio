import React from "react";

function Footer() {
  return (
    <section id="contact" class="bg-black text-white py-16">
      <div class="max-w-4xl mx-auto text-center px-4">
        <h2 class="text-blue-500 text-lg font-bold uppercase mb-2">Contact</h2>
        <h1 class="text-3xl font-bold mb-4">I'd Love To Hear From You.</h1>
        <p class="text-gray-400 mb-8">
          Whether you have a question, want to discuss a potential
          collaboration, or just want to say hello, feel free to reach out.
          Please use the form below to send me a message, and I will get back to
          you as soon as possible.
        </p>
        <form class="space-y-4 max-w-lg mx-auto">
          <input
            class="w-full px-4 py-2 bg-gray-800 text-white border-none outline-none focus:ring-2 focus:ring-pink-500 rounded"
            type="text"
            name="name"
            placeholder="Name"
            required=""
            value=""
          />
          <input
            class="w-full px-4 py-2 bg-gray-800 text-white border-none outline-none focus:ring-2 focus:ring-pink-500 rounded"
            type="email"
            name="email"
            placeholder="Email"
            required=""
            value=""
          />
          <input
            class="w-full px-4 py-2 bg-gray-800 text-white border-none outline-none focus:ring-2 focus:ring-pink-500 rounded"
            type="text"
            name="subject"
            placeholder="Subject"
            required=""
            value=""
          />
          <textarea
            class="w-full h-32 px-4 py-2 bg-gray-800 text-white border-none outline-none focus:ring-2 focus:ring-pink-500 rounded"
            name="message"
            placeholder="Message | add your name email at end of message"
            required=""
          ></textarea>
          <button
            type="submit"
            class="w-full bg-black text-white font-bold py-2 px-4 rounded border border-white transition-all duration-300 hover:bg-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
      <div class="mt-16 flex flex-col md:flex-row justify-around text-center px-4">
        <div class="mb-8 md:mb-0 flex flex-col items-center">
          <div class="text-[#48CFCB] mb-2 text-3xl">
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <h4 class="text-blue-500 mb-1 font-bold uppercase">
            Where to find me
          </h4>
          <p class="text-white text-center">Lahore, Punjab, Pakistan</p>
        </div>
        <div class="mb-8 md:mb-0 flex flex-col items-center">
          <div class="text-[#48CFCB] mb-2 text-3xl">
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <h4 class="text-blue-500 mb-1 font-bold uppercase">Email me at</h4>
          <p class="text-white text-center">usamabadar.finance@gmail.com</p>
        </div>
        <div class="mb-8 md:mb-0 flex flex-col items-center">
          <div class="text-[#48CFCB] mb-2 text-3xl">
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
          <h4 class="text-blue-500 mb-1 font-bold uppercase">Call me at</h4>
          <p class="text-white text-center">Phone: (+92) 331 4052004</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
