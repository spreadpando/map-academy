import { useState } from 'react'
import styled from 'styled-components'
import fetch from 'isomorphic-unfetch'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'

const Form = styled(motion.form)`
    padding: 1rem 15px;
    label, input {
        display: block;
        margin: 10px 0;
    }
`

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit } = useForm()
  const onSubmit = async (data) => {
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data)
    })
    if (await res.status === 200) {
      setSubmitted(true)
    }
  }

  return (
    <>
      {
        submitted
          ? <p>Thanks for reaching out!</p>
          : <Form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit(onSubmit)}
          > {/* eslint-disable-line */}
            <label>
              name
            </label>
            <input type='text' id='name' name='name' ref={register({ required: true })} />
            <label>
              email
            </label>
            <input type='email' id='email' name='email' ref={register({ required: true })} />
            <label>
              comment
            </label>
            <textarea rows='4' cols='24' id='comment' name='comment' ref={register()} />
            <input type='submit' value='send' />
          </Form>//eslint-disable-line
      }
    </>
  )
}
export default ContactForm
