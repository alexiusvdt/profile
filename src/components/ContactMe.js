import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { motion as m } from 'framer-motion';
import { Alert} from 'react-bootstrap'

const StyledContactForm = styled.div`
  width: 400px;
  margin: auto;
  color: white;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;

export const ContactForm = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleAlertDismiss = () => {
    setShowAlert(false);
  }

  //persist between renders
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
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{ duration: 0.5}}
      >
      {/* centering in another div doesn't seem to help, maybe return to m.div and set absolute positioning? */}
      {/* style={{ paddingLeft: '200', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', position: 'absolute', top:'0', bottom: '0', margin:'0'}} */}
      <div >
      <h3 style={ { textAlign: "center", color: '#fff', boxSizing:"border-box"} }>Hey, drop me a line! </h3>
      <StyledContactForm>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
            <input type="text" name="user_name" />
          <label>Email</label>
            <input type="email" name="user_email" />
          <label>Message</label>
            <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
        { showAlert && (
            <Alert variant="success" dismissible onClose={handleAlertDismiss}>
            Email sent successfully!</Alert>
          )}
        </StyledContactForm>
      </div>
    </m.div>
  );
};

export default ContactMe;
