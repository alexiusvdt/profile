/* eslint-disable  */
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

function ContactMe({ title, subtitle, dark, id }) {
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  // const checkValidEmail = (email) => {
  //   /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  // };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    toast.promise(
      new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      }),
      {
        loading: 'Sending mail',
        success: 'Sent successfully, thanks!',
        error: 'Failed to send',
      },
    );

    // checkValidEmail(form.user_email.value);
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_PUBLIC_KEY,
    ).then(() => {
      setIsLoading(false);
      e.target.reset();
    });
  };

  return (
    <>
    <Toaster position="top-center" />
      <div className={"section" + (dark ? " section-dark" : "")}>
          <div className="project-card-container" id={id}>
          < h1>{title}</h1>
          <div>
            <h3 className="text-center text-white box-border px-10 pb-10 pt-25">Hey, drop me a line!</h3>
            <div className="w-96 mx-auto text-white">
              <form className="flex flex-col items-start w-full text-base" ref={form} onSubmit={sendEmail}>
                <input className="w-full h-9 px-3 text-black rounded-md border border-gray-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500" type="text" placeholder="Enter your email" name="user_email" />
                <input className="w-full h-9 px-3 text-black rounded-md border border-gray-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500" type="text" placeholder="Enter your name" name="user_name" />
                <textarea className="w-full h-32 px-3 py-2 mt-2 text-black rounded-md border border-gray-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500" placeholder="Enter your message" name="message" />
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button className="mt-4 cursor-pointer bg-orange-500 text-white py-2 px-4 rounded" type="submit" disabled={isLoading}>{isLoading ? 'Sending...' : 'Send it!'}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactMe;
