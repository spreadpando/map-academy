import { useState } from 'react'
import styled from 'styled-components'
import fetch from 'isomorphic-unfetch'

const Form = styled('form')`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media(min-width: 1000px) {
        padding: 0 30%;
    }
`
const FormGroup = styled('div')`
    width: 100%;
    input[type='text'], input[type='email'] {
        padding: 10px;
        width: 80%;
    }
    textarea {
        resize: none;
        width: 100%;
    }
    label {
        display: inline-block;
        padding: 5px 5px;
        margin: 0;
        vertical-align: top;
    }
    margin: 1rem 0;
    input[type='submit'] {
        margin: 1rem 0;
    }
`
const Response = styled('div')`
    width: 100vw;
    height:  70vh;
    display: flex;
    justify-content: center;
    align-content: center;
`
const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    commitment: '',
    comments: ''
  })

  const submitForm = async (e, url, data) => {
    e.preventDefault()
    const response = await fetch(url, {
      method: 'POST',
      mode: 'same-origin',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    if (response.status === 200) {
      setSubmitted(true)
    }
  }

  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    const id = e.target.id
    if (name === 'commitment') {
      const radios = document.getElementsByName('commitment')
      radios.forEach((radio) => {
        if (radio.checked) {
          setFormData((prevData) => ({
            ...prevData,
            [name]: id
          }))
        }
      })
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }))
    }
  }

  return (
    <>
      {submitted ? <Response>Thanks for reaching out!</Response>
        : <Form>
          <FormGroup>
            <label htmlFor='name'>Your Name</label>
            <br />
            <input name='name' id='name' type='text' onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <label htmlFor='email'>Your Email</label>
            <br />
            <input name='email' id='email' type='email' onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <label htmlFor='commitment'>Are you interested in:</label>
            <br />
            <label htmlFor='ft'>Full Time</label>
            <input name='commitment' id='ft' type='radio' onChange={handleChange} />
            <label htmlFor='pt'>Part Time</label>
            <input name='commitment' id='pt' type='radio' onChange={handleChange} />
            <label htmlFor='dk'>Not Sure</label>
            <input name='commitment' id='dk' type='radio' onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <label htmlFor='comments'>Any Additional Comments?</label>
            <br />
            <textarea name='comments' id='comments' rows='3' onChange={handleChange} />
            <br />
            <input type='submit' id='submit' value='Contact' onClick={(e) => { submitForm(e, '/api/sendcontact', formData) }} />
          </FormGroup>
          </Form>}
    </>
  )
}
export default ContactForm
