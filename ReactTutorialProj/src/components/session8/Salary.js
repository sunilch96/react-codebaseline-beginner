import React, { Component } from 'react'
import session_8_emp_context from './session_8_emp_context'
export class Salary extends Component {
      //Access context obj
      //contextType is inbuild keyword
      static contextType = session_8_emp_context;
      render() {
            return <div>
                  <h2>Welcome to Salary Component...</h2>
                  <p>Sal Comp : Employee ID :<b>{this.context.ID}</b></p>
            </div>
      }
}

export default Salary
