import React, { Component } from 'react'
export class Employee_13 extends Component {
      constructor(props) {
            super(props)
            this.state = {
                  employee: {
                        Id: "",
                        Name: "",
                        Location: "",
                        Salary: ""
                  }
            }
      }
      onChangeHandler = (e) => {
            const targetName = e.target.name;
            const targetValue = e.target.value;
            //this.setState({ Id: e.target.value })

            this.setState({ employee: { ...this.state.employee, [targetName]: targetValue } })
      }
      onCreateEmp = () => {
            console.log(this.state.employee);
      }
      render() {
            return (
                  <div>
                        <h2>Employee form.</h2>
                        <form>
                              <p>Employee ID:
                                    <input type="text"
                                          name="Id"
                                          value={this.state.employee.Id}
                                          onChange={this.onChangeHandler} />
                              </p>
                              <p>Employee Name:
                                    <input type="text"
                                          name="Name"
                                          value={this.state.employee.Name}
                                          onChange={this.onChangeHandler} />
                              </p>

                              <p>Employee Location:
                                    <input type="text"
                                          name="Location"
                                          value={this.state.employee.Location}
                                          onChange={this.onChangeHandler} />
                              </p>
                              <p>Employee Salary:
                                    <input type="text"
                                          name="Salary"
                                          value={this.state.employee.Salary}
                                          onChange={this.onChangeHandler} />
                              </p>
                        </form>
                        <button onClick={this.onCreateEmp}>Create</button>
                  </div>
            )
      }
}
export default Employee_13
