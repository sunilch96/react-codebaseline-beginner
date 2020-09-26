import React, { Component } from 'react'
import Salary from './Salary'
import session_8_emp_context from './session_8_emp_context'
export class Employee extends Component {
      //Access context obj
      //contextType is inbuild keyword
      static contextType = session_8_emp_context;
      render() {
            console.log(this.context)
            return <div>
                  <h2>Welcome to Employee Component...</h2>
                  <p>Emp Comp: Employee ID :<b>{this.context.ID}</b></p>
                  <Salary></Salary>
            </div>
      }
}

export default Employee
