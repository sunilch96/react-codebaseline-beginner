import React, { Component } from 'react'
import Employee9 from './Employee9';
import session_9_emp_context from './session_9_emp_context'

//Within App component we will store this context data
//We will store State Data in cntext
// And then we will access this context data within employee aswell as salary component
//Every components compes with provider, allows consuming components to subscribe context changes
export class App9 extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  data: {
                        ID: 101,
                        Name: "Code Baseline",
                        Salary: 15000
                  },
                  changeEmployeeInfo: this.updateEmployeeDetails
            }
      }


      updateEmployeeDetails = () => {
            //This func to be called whwnever there is change in context obj
            this.setState({ data: { ID: 303 } })
      }

      changeEmployeeData = () => {
            this.setState({ data: { ID: 202 } })
      }
      render() {
            return <div>
                  <h2>Welcome to App Component</h2>
                  <p>
                        Employee ID : <b>{this.state.data.ID}</b>
                  </p>

                  <session_9_emp_context.Provider value={this.state}>
                        <Employee9></Employee9>
                  </session_9_emp_context.Provider>
                  <p>
                        {/* <button onClick={this.changeEmployeeData}>Update</button> */}
                  </p>
            </div>
      }
}
export default App9