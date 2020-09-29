import React, { Component } from 'react'
import { useFormik } from 'formik'
export const Employee_13_formik = () => {
      const formik = useFormik({
            initialValues: {
                  Id: "",
                  Name: "",
                  Location: "",
                  Salary: ""
            },
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
                              <input type="text" name="Name" value={formik.values.Name} onChange={formik.handleChange} />
                        </p>

                        <p><label htmlFor="Id">Employee Location:</label>
                              <input type="text" name="Location" value={formik.values.Location} onChange={formik.handleChange} />
                        </p>
                        <p><label htmlFor="Id">Employee Salary:</label>
                              <input type="text" name="Salary" value={formik.values.Salary} onChange={formik.handleChange} />
                        </p>
                        <button type="submit">Create</button>
                  </form>
            </div>
      )
}
export default Employee_13_formik
