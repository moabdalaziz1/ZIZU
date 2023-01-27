import { useState, useEffect, useRef } from 'react';
import './Form.scss';

import { MdEmail, MdMessage, MdSend } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';
import { IoCheckmarkDoneSharp } from 'react-icons/io5'

import { Submit } from '../../components/index';

import emailjs from 'emailjs-com';

import { useFormik } from 'formik';
import * as Yup from 'yup';

const Form = () => {

  const [isSubmitted, setIsSubmitted] = useState(false)
  const form = useRef();
  const {
    values,
    handleChange,
    handleBlur,
    errors,
    touched,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required*'),
      email: Yup.string()
        .email('Please Enter A Valid Email')
        .required('Required*'),
      message: Yup.string().min(10).required('Required*'),
    }),
    onSubmit: (values, actions) => {
      setTimeout(() => {
        emailjs.sendForm('service_clecrzt', 'template_hrj8z3i', form.current, 'vpBQ29L6uuQMI4jJa');
        actions.resetForm();
        setIsSubmitted(true);        
      }, 500);
    },
  })

  // Displaying The Sent Message For Four seconds.
  useEffect(() => {
    if (isSubmitted) {
      setTimeout(() => {
        setIsSubmitted(false)
      }, 4000);
    }
  }, [isSubmitted]);

  return (
    <form className='form' ref={form} onSubmit={handleSubmit}> 
      <div className="form-group mb-3">
        <FaUserAlt className={`form-icon ${(errors.name && touched.name) ? 'error': ''}`} />
        <input 
          type="text" 
          className='form-control' 
          name='name' 
          placeholder='Your Full Name' 
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
      />
      {(errors.name && touched.name) && <div className="error">{errors.name}</div>}
      </div>
      <div className="form-group mb-3">
        <MdEmail className={`form-icon ${(errors.email && touched.email) ? 'error': ''}`} />
        <input 
          type="email" 
          className='form-control' 
          name='email' 
          placeholder='Your Email' 
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {(errors.email && touched.email) && <div className="error">{errors.email}</div>}
      </div>
      <div className="form-group mb-3">
      <MdMessage className={`form-icon ${(errors.message && touched.message) ? 'error': ''}`} />
      <textarea 
        name="message" 
        className='form-control' 
        rows="7" 
        placeholder='Your Message' 
        value={values.message}
        onChange={handleChange}
        onBlur={handleBlur}
      ></textarea>
      {(errors.message && touched.message) && <div className="error">{errors.message}</div>}
      </div>
      <div className='submit-group'>
        <Submit>
          {
            !isSubmitting ? 
            <span>send <MdSend /></span> : 
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          }
        </Submit>
        {
          isSubmitted && 
          <span className='submitted'>
            sent <span className='submit-icon'><IoCheckmarkDoneSharp /></span>
          </span>
        }
      </div>
  </form>
  )
}

export default Form