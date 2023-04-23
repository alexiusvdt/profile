/* eslint-disable */ 
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion as m } from 'framer-motion';
import { Alert } from 'react-bootstrap';

// needs a little padding between elements but this is functional
function ContactMe() {
  const [showAlert, setShowAlert] = useState(false);

  const handleAlertDismiss = () => {
    setShowAlert(false);
  };
  // persist between renders
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_PUBLIC_KEY,
    )
      .then(setShowAlert(true));
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
    // .then((result) => {
    //     console.log(result.text);
    //     console.log("message sent");
    // }, (error) => {
    //     console.log(error.text);
    // });
  };

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h3 style={{
          textAlign: 'center',
          color: '#000',
          boxSizing: 'border-box',
        }}
        >
          Hey, drop me a line!
        </h3>
        <div className="w-96 mx-auto text-white">
          <form className="flex flex-col items-start w-full text-base" ref={form} onSubmit={sendEmail}>
            <input className="w-full h-9 px-3 text-black rounded-md border border-gray-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500" type="text" placeholder="Enter your email" name="user_email"/>
            <input className="w-full h-9 px-3 text-black rounded-md border border-gray-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500" type="text" placeholder="Enter your name" name="user_name"/>
            <textarea className="w-full h-32 px-3 py-2 mt-2 text-black rounded-md border border-gray-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500" placeholder="Enter your message" name="message"></textarea>
            <label className="mt-4">Subscribe to our newsletter:</label>
            <input className="mt-4 cursor-pointer bg-orange-500 text-white py-2 px-4 rounded" type="submit" value="Send" />
          </form>
          { showAlert && (
              <Alert variant="success" dismissible onClose={handleAlertDismiss}>
              Email sent successfully!
              </Alert>
          )}
        </div>
      </div>
    </m.div>
  );
};

export default ContactMe;
