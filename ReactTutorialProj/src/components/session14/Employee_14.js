import React, { Component } from 'react'
import { useFormik } from 'formik'
export const Employee_14 = () => {
      const formik = useFormik({
            initialValues: {
                  Id: "",
                  Name: "",
                  Location: "",
                  Salary: "",
                  EmailId: ''
            },
            validate: validateEmployee,
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
                              <input type="text" name="Id" id="Id" value={formik.values.Id} onChange={formik.handleChange} />
                        </p>
                        <p><label htmlFor="Id">Employee Name:</label>
                              <input type="text" name="Name" onBlur={formik.handleBlur} value={formik.values.Name} onChange={formik.handleChange} />
                              {/* This tag is used if above field is touched or not */}
                              {/* formik.handleBlur: If touched and blured control then it will validate element */}
                              {formik.touched.Name && formik.errors.Name ? <span style={{ color: 'red' }}>{formik.errors.Name}</span> : null}
                        </p>

                        <p><label htmlFor="Id">Employee Location:</label>
                              <input type="text" name="Location" onBlur={formik.handleBlur} value={formik.values.Location} onChange={formik.handleChange} />
                              {formik.touched.Location && formik.errors.Location ? <span style={{ color: 'red' }}>{formik.errors.Location}</span> : null}
                        </p>
                        <p><label htmlFor="Id">Employee Salary:</label>
                              <input type="text" name="Salary" onBlur={formik.handleBlur} value={formik.values.Salary} onChange={formik.handleChange} />
                              {formik.touched.Salary && formik.errors.Salary ? <span style={{ color: 'red' }}>{formik.errors.Salary}</span> : null}
                        </p>
                        <p><label htmlFor="Id">Email ID:</label>
                              <input type="text" name="EmailId" onBlur={formik.handleBlur} value={formik.values.EmailId} onChange={formik.handleChange} />
                              {formik.touched.EmailId && formik.errors.EmailId ? <span style={{ color: 'red' }}>{formik.errors.EmailId}</span> : null}
                        </p>
                        <button type="submit">Create</button>
                  </form>
            </div>
      )
}
export default Employee_14

const validateEmployee = empData => {
      const errors = {};

      if (!empData.Name) {
            errors.Name = 'Please Enter Employee Name';
      } else if (empData.Name.length > 20) {
            errors.Name = 'Name cannot exceed 20 characters';
      }

      if (!empData.Location) {
            errors.Location = 'Please Enter Employee Location';
      }

      if (!empData.EmailId) {
            errors.EmailId = 'Please Enter Email ID';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(empData.EmailId)) {
            errors.EmailId = 'Invalid email address';
      }

      return errors;
};
