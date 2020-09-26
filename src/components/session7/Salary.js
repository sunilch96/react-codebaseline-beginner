import React, { Component } from 'react'

export class Salary extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  basic: this.props.BasicSalary,
                  hra: this.props.HRA,
                  sa: this.props.SpecialAllowance
            };
      }

      updateSalary = () => {
            let salary = parseInt(this.refs.BasicSalary.value) + parseInt(this.refs.HRA.value) + parseInt(this.refs.SpecialAllowance.value);
            this.props.onSalaryChanged(salary);
      }
      render() {
            return <div>
                  <h1>Salary Details...</h1>
                  <p>
                        <label>Basic Salary :<input type="text" defaultValue={this.state.basic} ref="BasicSalary" /></label>
                  </p>
                  <p>
                        <label>HRA : <input type="text" defaultValue={this.state.hra} ref="HRA" /></label>
                  </p>
                  <p>
                        <label>Special Allowance : <input type="text" defaultValue={this.state.sa} ref="SpecialAllowance" /></label>
                  </p>
                  <button onClick={this.updateSalary}>Update</button>
            </div>
      }
}

export default Salary
