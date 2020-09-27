import React, { Component } from 'react'
export class Employee10 extends Component {
      constructor(props) {
            super(props)
      }
      render() {
            return (<div>
                  <p>Employee ID : <b>{this.props.empData.Id}</b></p>
                  <p>Employee Name : <b>{this.props.empData.Name}</b></p>
                  <p>Employee Location : <b>{this.props.empData.Location}</b></p>
                  <p>Employee Salary : <b>{this.props.empData.Salary}</b></p>
                  <hr></hr>
            </div>
            )
      }
}
export default Employee10

