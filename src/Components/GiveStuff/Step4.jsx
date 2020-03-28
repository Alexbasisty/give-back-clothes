import React, { Component } from 'react';
import ImportantField from "./ImportantField";
import {Link} from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as ROUTES from "../../constants/routes";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Step1 extends Component {
  state = {
    startDate: new Date(),
    address: {},
    time: {},
  };

  handleDateChoose = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    const { startDate } = this.state;
    return (
        <>
          <ImportantField>
            Podaj adres oraz termin odbioru rzeczy.
          </ImportantField>
          <div className="step1-form">
            <h3>Krok 4/4</h3>
            <h1>Podaj adres oraz termin odbioru rzecz przez kuriera</h1>

            <section id="pick-up-datas">
              <div className="address">
                <h5>Adres odbioru:</h5>
                <Formik initialValues={{ street: '', city: '', postCode: '', phoneNumber: '' }}
                        validate={values => {
                          const errors = {};
                          if (values.street.length < 2) {
                            errors.street = 'Ulica: napisz conajmniej 2 znaki ';
                          } else if (values.city.length < 2) {
                            errors.city = 'Miasto: napisz conajmniej 2 znaki';
                          } else if (!/\d{2}-\d{3}/i.test(values.postCode)) {
                            errors.postCode = 'Kod pocztowy: format **-***'
                          } else if (values.phoneNumber.length !== 9) {
                            errors.phoneNumber = 'Telefon: musi mieć tylko 9 cyfr'
                          }
                          return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            this.setState({
                              address: values,
                            })
                        }}
                >{({  values,
                     handleBlur,
                     handleSubmit,
                   }) => (
                  <Form onSubmit={handleSubmit}>
                    <label>Ulica
                      <Field
                          onBlur={handleBlur}
                          value={values.street}
                          name="street"
                          type="text" />
                    </label>
                    <label>Miasto
                      <Field
                          onBlur={handleBlur}
                          value={values.city}
                          name="city"
                          type="text" />
                    </label>
                    <label>Kod pocztowy
                      <Field
                          onBlur={handleBlur}
                          value={values.postCode}
                          name="postCode"
                          type="text" />
                    </label>
                    <label>Numer telefonu
                      <Field
                          onBlur={handleBlur}
                          value={values.phoneNumber}
                          name="phoneNumber"
                          type="text" />
                    </label>

                    <div style={{paddingTop: '20px'}}>
                      <ErrorMessage name='street' component='i'/>
                      <ErrorMessage name='city' component='span'/>
                      <ErrorMessage name='postCode' component='span'/>
                      <ErrorMessage name='phoneNumber' component='span'/>
                    </div>
                  </Form>
                )}
                </Formik>
              </div>
              <div className="date">
                <h5>Termin odbioru:</h5>
                <form>
                  <label>Data
                    <DatePicker
                      selected={startDate}
                      onChange={this.handleDateChoose}
                    />
                  </label>
                  <label>Godzina
                    <input type="number" />
                  </label>
                  <label>Uwagi dla kurriera
                    <textarea />
                  </label>
                </form>
              </div>
            </section>
            <div className="links-section">
              <button>
                <Link to={ROUTES.STEP_2}>Wstecz</Link>
              </button>
              <button>
                <Link to={ROUTES.STEP_2}>Dalej</Link>
              </button>
            </div>
          </div>
        </>
    );
  }
}

export default Step1;