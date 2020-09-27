import React, { Component } from 'react'
import Employee10 from './Employee10'

export class App10 extends Component {
      render() {
            const employees = [
                  { Id: 101, Name: 'Sunil', Location: 'Bangalore', Salary: 12345 },
                  { Id: 102, Name: 'Mohan', Location: 'Pune', Salary: 23456 },
                  { Id: 103, Name: 'Sagar', Location: 'Vizag', Salary: 34567 }
            ];

            const listElements = employees.map((emp, index) => {
                  return (<Employee10 key={index} empData={emp}></Employee10>)
            })
            return (
                  <div>
                        {listElements}

                  </div>
            )
      }
}
export default App10
