import React, { useRef, useState } from 'react';
import { Form, Button, FormControl } from 'react-bootstrap'
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
   const form = useRef()
  const [fullName, setFullName] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [messageInput, setMessageInput] = useState('')

  const nameChangeHandler = (event) => {
    event.preventDefault()
    setFullName(event.target.value)
    console.log(event.target.value)
  }

  const emailChangeHandler = (event) => {
    event.preventDefault()
    setEmailInput(event.target.value)
  }

  const messageChangeHandler = (event) => {
    event.preventDefault()
    setMessageInput(event.target.value)
  }
    const sendEmail = (event) => {
    event.preventDefault()

    emailjs.sendForm('service_79lyfpo', 'template_qtv7hsl', form.current, 'gmFc-xPYQOovWlFKC')
      .then((result) => {
         console.log(result.text);
      }, (error) => {
          console.log(error.text);
      })


    // const inputData = {
    //   fullName: fullName,
    //   emailInput: emailInput,
    //   messageInput: messageInput
    // }

    // console.log(inputData)

    setFullName('')
    setEmailInput('')
    setMessageInput('')
    // setSubmit(true)
  }
  return (
   <Form ref={form} onSubmit={sendEmail}>
          <div>
            <Form.Label>Full Name</Form.Label>
            <FormControl 
              type='text'
              name='name'
              value={fullName}
              onChange={nameChangeHandler}
              required
            />
          </div>
          <div>
            <Form.Label>Email</Form.Label>
            <FormControl
              type='email'
              name='email'
              value={emailInput}
              onChange={emailChangeHandler}
              required
            />
          </div>
          <div>
            <Form.Label>Message</Form.Label>
            <FormControl className='textarea'
              as="textarea"
              row={7}
              name='message'
              value={messageInput}
              onChange={messageChangeHandler}
              required
            />
          </div>
          <Button className='btn btn-primary' type='submit'>Submit</Button>
          <div>
            {/* {submit ? contactSubmissionSuccessful : ''} */}
          </div>
        </Form>
  );
};