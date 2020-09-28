import React, { Component } from 'react'
import Salary9 from './Salary9'
import session_9_emp_context from './session_9_emp_context'
export class Employee9 extends Component {
      //Access context obj
      //contextType is inbuild keyword
      static contextType = session_9_emp_context;
      render() {
            console.log(this.context)
            return <div>
                  <h2>Welcome to Employee Component...</h2>
                  <p>Emp Comp: Employee ID :<b>{this.context.data.ID}</b></p>
                  <p>
                        <button onClick={this.context.changeEmployeeInfo}>Update from Emp Component</button>
                  </p>
                  <Salary9></Salary9>
            </div>
      }
}

export default Employee9
