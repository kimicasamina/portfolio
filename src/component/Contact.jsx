import React from "react";

export default function Contact() {
  return (
    <section
      data-section
      id="contact"
      className="w-full h-screen sectionWrapper"
    >
      <form action="" className="w-full flex flex-col gap-y-4 ">
        <h1 className="mb-4">Contact</h1>
        <div className="w-full flex flex-col gap-y-2">
          <label htmlFor="" className="font-semibold">
            Fullname
          </label>
          <input
            type="text"
            className="p-2 border bg-slate-700 outline-slate-200"
            placeholder="Enter your name"
          />
        </div>
        <div className="w-full flex flex-col gap-y-2">
          <label htmlFor="" className="font-semibold">
            Email
          </label>
          <input
            type="text"
            className="p-2 border bg-slate-700 outline-slate-200"
            placeholder="Enter your email address"
          />
        </div>
        <div className="w-full flex flex-col gap-y-2">
          <label htmlFor="" className="font-semibold">
            Message
          </label>
          <textarea
            name=""
            className="p-2 border bg-slate-700 h-44 outline-slate-200"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <button className="p-2 border bg-slate-50 text-slate-700 font-semibold rounded-lg hover:shadow-lg w-full mt-2">
          SUBMIT
        </button>
      </form>
    </section>
  );
}
