import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Footer from "./Footer";

const Contact = () => {

  const handleSubmit = e => {
    e.preventDefault();
    console.log(name, email, message);
  };

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ message, setMessage ] = useState('');

    return (
        <div id='contact' className="contact">
          <div className='contact-form'>
            <div />
            <div>
              <div className='title'>
                <h1>Skontaktuj się z nami</h1>
                <img src={require('../../assets/Decoration.svg')} alt='decoration'/>
              </div>
              <Formik
                  initialValues={{ name: '', email: '', message: '' }}
                  validate={values => {
                    const errors = {};
                    if (!/^[a-z]+$/i.test(values.name)) {
                      errors.name = 'Powinno być jednym wyrazem';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                      errors.email = 'Niepoprawny e-mail';
                    } else if (values.message.length < 120) {
                      errors.message = 'Wiadomość za krótka'
                    }
                    return errors;
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));

                      setSubmitting(false);
                    }, 400);
                  }}
              >
                {({ isSubmitting,
                    values,
                    handleBlur,
                    handleSubmit,
                }) => (
            <Form onSubmit={handleSubmit}>
              <div className="contact-data">
                <label>Wpisz swoje imię
                  <Field name='name' placeholder='Krzysztof' onBlur={handleBlur} value={values.name} />
                  <ErrorMessage name='name' component='span'/>
                </label>
                <label>Wpisz swój email
                  <Field name='email' placeholder='abc@xyz.pl' onBlur={handleBlur} value={values.email} />
                  <ErrorMessage name='email' component='span'/>
                </label>
              </div>
              <label className='message'>Wpisz swoją wiadomość
                <Field onBlur={handleBlur}
                  value={values.message}
                  name='message'
                  component='textarea'
                  placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                   laboris nisi ut aliquip ex ea commodo consequat.'
                />
                <ErrorMessage name='message' component='span' />
              </label>
              <button type='submit' disabled={isSubmitting}>Wyślij</button>
            </Form>
                )}
              </Formik>
            </div>
          </div>
          <div><Footer /></div>
        </div>
    );
};

export default Contact;