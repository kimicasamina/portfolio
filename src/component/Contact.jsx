import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const form = useRef();
  const SERVICE_ID = "service_2ngevwm";
  const TEMPLATE_ID = "template_tp9a296";
  const PUBLIC_KEY = "C-3j5_DJESh58JY6s";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setStateMessage("Message sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStateMessage("Message failed!");
        }
      );
  };

  return (
    <section
      data-section
      id="contact"
      className="w-full h-screen sectionWrapper flex justify-start items-center"
    >
      <form
        action=""
        className="w-full flex flex-col gap-y-4 "
        onSubmit={sendEmail}
        ref={form}
      >
        <h1 className="mb-4 text-4xl text-green-200">> CONTACT</h1>
        <div className="w-full flex flex-col gap-y-2">
          <label for="from_name" className="font-semibold text-green-200">
            Name
          </label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            placeholder="Enter your name"
            className="p-2 border bg-green-100 outline-green-100 rounded-md"
            required
          />
        </div>
        <div className="w-full flex flex-col gap-y-2">
          <label className="font-semibold text-green-200">Email</label>
          <input
            className="p-2 border bg-green-100 outline-green-100 rounded-md"
            type="email"
            id="from_email"
            name="from_email"
            placeholder="Your email.."
            required
          />
        </div>
        <div className="w-full flex flex-col gap-y-2">
          <label className="font-semibold text-green-200">Message</label>
          <textarea
            className="p-2 border  h-44 bg-green-100 outline-green-100 rounded-md"
            name="message"
            rows="8"
            cols="30"
            placeholder="Your message.."
            required
          ></textarea>
        </div>
        {/* <button className="p-2 border bg-slate-50 text-slate-700 font-semibold rounded-lg hover:shadow-2xl ease-in-out w-full mt-2">
          SUBMIT
        </button> */}
        <input
          type="submit"
          value="Send"
          className="p-2 border  font-semibold rounded-lg hover:shadow-2xl ease-in-out w-full mt-2 cursor-pointer bg-green-100 text-black hover:bg-green-200"
          disabled={isSubmitting}
        />

        {stateMessage ? (
          <p className="w-full rounded-md bg-slate-200 text-slate-900 p-2">
            {stateMessage}
          </p>
        ) : null}
      </form>
    </section>
  );
}
