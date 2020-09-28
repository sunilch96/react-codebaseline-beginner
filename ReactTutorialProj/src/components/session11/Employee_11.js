import React, { Component } from 'react'

export class Employee_11 extends Component {

      constructor(props) {
            super(props);
            this.state = {
                  employees: []
            };
      }

      //Life cycle hooks(methods)
      componentDidMount() {
            //will run when component has rendered all elements
            //Window after Load
            fetch("http://localhost:61816/api/ReactAPI/EmployeeList",)
                  .then(res => res.json())
                  .then(result => {
                        this.setState({ employees: result })
                  })
      }
      render() {
            const classname = {
                  border: "1px solid black"
            };
            return (
                  <div>
                        <h2>Employees Data...</h2>
                        <table style={{ classname }}>
                              <thead>
                                    <tr>
                                          <th style={classname}>Id</th>
                                          <th style={classname}>Name</th>
                                          <th style={classname}>Location</th>
                                          <th style={classname}>Salary</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {this.state.employees.map(emp => (
                                          <tr key={emp.Id}>
                                                <td style={classname}>{emp.id}</td>
                                                <td style={classname}>{emp.name}</td>
                                                <td style={classname}>{emp.location}</td>
                                                <td style={classname}>{emp.salary}</td>
                                          </tr>
                                    ))}
                              </tbody>
                        </table>
                  </div>
            )
      }
}

export default Employee_11
