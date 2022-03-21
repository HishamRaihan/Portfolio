import React, { useRef, useState } from 'react';
import { Form, Button, FormControl } from 'react-bootstrap'
import emailjs from '@emailjs/browser';
import './contactus.scss';

export const ContactUs = () => {
   const form = useRef()
  const [fullName, setFullName] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [messageInput, setMessageInput] = useState('')
  const [message, setMessage] = useState(false)

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
    setMessage(true)

    emailjs.sendForm('service_71kluav', 'template_ibcpdkc', form.current, 'fxwo0qwZKMcwOIE1k')
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
            <Form.Label></Form.Label>
            <FormControl 
              type='text'
              name='name'
              placeholder='Full Name'
              value={fullName}
              onChange={nameChangeHandler}
              required
            />
          </div>
          <div>
            <Form.Label></Form.Label>
            <FormControl
              type='email'
              name='email'
              placeholder='Email'
              value={emailInput}
              onChange={emailChangeHandler}
              required
            />
          </div>
          <div>
            <Form.Label></Form.Label>
            <FormControl className='textarea'
              as="textarea"
              row={7}
              name='message'
              placeholder='Message'
              value={messageInput}
              onChange={messageChangeHandler}
              required
            />
          </div>
          <Button className='btn btn-primary' type='submit'>Submit</Button>
          <div>
           {message && <span>Thanks, I will reply soon!</span>}
          </div>
        </Form>
  );
};