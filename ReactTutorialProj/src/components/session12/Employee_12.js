import React, { Component } from 'react'
export class Employee_12 extends Component {
      constructor(props) {
            super(props)
            this.state = { message: "" }
      }
      onCreateEmployee = () => {
            if (this.refs.Name.value.length == 0 || this.refs.Location.value.length == 0 || this.refs.Salary.value.length == 0) {
                  this.setState({ message: 'Must fill all values' });
            }
            else {
                  let empInfo = {
                        //ID: this.refs.Id.value,
                        Name: this.refs.Name.value,
                        Location: this.refs.Location.value,
                        Salary: this.refs.Salary.value
                  };
                  console.log(empInfo);

                  fetch('http://localhost:61816/api/ReactAPI/AddEmployee', {
                        method: 'POST',
                        headers: { 'Content-type': 'application/json' },
                        body: JSON.stringify(empInfo)
                  }).then(r => r.json()).then(res => {
                        if (res) {
                              this.setState({ message: 'New Employee is Created Successfully' });
                              //Clear
                              this.refs.Name.value = "";
                              this.refs.Location.value = "";
                              this.refs.Salary.value = "";
                        }
                  });
            }
      }
      render() {
            return (
                  <div>
                        <h2>Please Enter Employee Details...</h2>
                        <p><label>Employee Name : <input type="text" ref="Name"></input></label></p>
                        <p><label>Employee Location : <input type="text" ref="Location"></input></label></p>
                        <p><label>Employee Salary : <input type="text" ref="Salary"></input></label></p>
                        <button onClick={this.onCreateEmployee}>Create</button>
                        <p>{this.state.message}</p>
                  </div>
            )
      }
}
export default Employee_12
