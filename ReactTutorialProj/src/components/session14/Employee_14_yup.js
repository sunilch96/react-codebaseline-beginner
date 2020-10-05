import React, { Component } from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
export const Employee_14_yup = () => {
      const formik = useFormik({
            initialValues: {
                  Id: "",
                  Name: "",
                  Location: "",
                  Salary: "",
                  EmailId: ''
            },
            //validationSchema this is inbuild in formik to be used for validations
            validationSchema: yup.object({
                  Name: yup.string().max(20, 'Min 20 chars')
                        .required('Please enter Emp name'),
                  Location: yup.string()
                        .required('Please Enter Employee Location'),
                  EmailId: yup.string()
                        .email('Invalid email address')
                        .required('Please Enter Email Id')
            }),
            onSubmit: values => {
                  //when form is submitted this function will be called
                  console.log(values);
            }
      });

      return (
            <div>
                  <h2>New Employee form.</h2>
                  <form onSubmit={formik.handleSubmit}>
                        <p>
                              <label htmlFor="Id">Employee ID:</label>
                              <input name="Id" {...formik.getFieldProps("Id")} onChange={formik.handleChange} />
                        </p>
                        <p><label htmlFor="Id">Employee Name:</label>
                              <input name="Name" {...formik.getFieldProps("Name")} />
                              {formik.touched.Name && formik.errors.Name ? <span style={{ color: 'red' }}>{formik.errors.Name}</span> : null}
                        </p>

                        <p><label htmlFor="Id">Employee Location:</label>
                              <input name="Location" {...formik.getFieldProps("Location")} />
                              {formik.touched.Location && formik.errors.Location ? <span style={{ color: 'red' }}>{formik.errors.Location}</span> : null}
                        </p>
                        <p><label htmlFor="Id">Employee Salary:</label>
                              <input name="Salary" {...formik.getFieldProps("Salary")} />
                              {formik.touched.Salary && formik.errors.Salary ? <span style={{ color: 'red' }}>{formik.errors.Salary}</span> : null}
                        </p>
                        <p><label htmlFor="Id">Email ID:</label>
                              <input name="EmailId" {...formik.getFieldProps("EmailId")} />
                              {formik.touched.EmailId && formik.errors.EmailId ? <span style={{ color: 'red' }}>{formik.errors.EmailId}</span> : null}
                        </p>
                        <button type="submit">Create</button>
                  </form>
            </div>
      )
}
export default Employee_14_yup

