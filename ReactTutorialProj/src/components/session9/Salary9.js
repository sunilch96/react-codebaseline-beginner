import React, { Component } from 'react'
import session_9_emp_context from './session_9_emp_context'
export class Salary9 extends Component {
      //Access context obj
      //contextType is inbuild keyword
      static contextType = session_9_emp_context;
      render() {
            return <div>
                  <h2>Welcome to Salary Component...</h2>
                  <p>Sal Comp : Employee ID :<b>{this.context.data.ID}</b></p>
            </div>
      }
}

export default Salary9
