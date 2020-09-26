import React, { Component } from 'react'
import Employee from './Employee';
import session_8_emp_context from './session_8_emp_context'

//Within App component we will store this context data
//We will store State Data in cntext
// And then we will access this context data within employee aswell as salary component
//Every components compes with provider, allows consuming components to subscribe context changes
export class App8 extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  ID: 101,
                  Name: "Code Baseline",
                  Salary: 15000
            }
      }

      changeEmployeeData = () => {
            this.setState({ ID: 202 })
      }
      render() {
            return <div>
                  <h2>Welcome to App Component</h2>
                  <p>
                        Employee ID : <b>{this.state.ID}</b>
                  </p>

                  <session_8_emp_context.Provider value={this.state}>
                        <Employee></Employee>
                  </session_8_emp_context.Provider>
                  <p>
                        <button onClick={this.changeEmployeeData}>Update</button>
                  </p>
            </div>
      }
}
export default App8