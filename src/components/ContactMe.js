import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

function ContactMe({ title, dark, id }) {
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
    // laterbase:
    // checkValidEmail(form.user_email.value); emailjs should validate, but maybe include a confirmation field
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
      <div className={`${dark} ? 'section-dark' : `}>
        <div className="contact-me" id={id}>
          <h1>{title}</h1>
          <div>
            {/* formerly className="text-center box-border px-10 pb-10 pt-25" */}
            <h3>I&apos;ll get back to you ASAP!</h3>
            {/* formerly w-96 mx-auto */}
            <div className="">
              <form className="form" ref={form} onSubmit={sendEmail}>
                <input className="input" type="text" placeholder="Enter your email" name="user_email" />
                <input className="input" type="text" placeholder="Enter your name" name="user_name" />
                <textarea className="textarea" placeholder="Enter your message" name="message" />
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button className="email-button" type="submit" disabled={isLoading}>{isLoading ? 'Sending...' : 'Send it!'}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactMe;
