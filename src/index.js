import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//#5: React Class Coponents
class DisplayEmpInfo extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (<div>
      <p><label>Employee ID: <b>{this.props.id}</b></label> </p>
      <p> <label>Employee Name: <b>{this.props.name}</b> </label> </p>
      <p> <label> Employee Location: <b>{this.props.location}</b></label></p>
      <p><label>Employee Salary: <b>{this.props.salary}</b></label></p>
      <br></br>
      <DeptInfo deptname={this.props.deptname} depthead={this.props.depthead}></DeptInfo>
    </div>
    );
  }
}
class DeptInfo extends Component {
  render() {
    return <div>
      <p>Dept Name:<b>{this.props.deptname}</b></p>
      <p>Dept Head:<b>{this.props.depthead}</b></p>
    </div>
  }
}
const empElement = (<DisplayEmpInfo id="1" name="codebaseline" location="Pune" salary="34570"
  deptname="Computers" depthead="Alex">

</DisplayEmpInfo>
);
ReactDOM.render(empElement, document.getElementById("root"));
//end #5


//#4: React Elemets
// function DisplayEmpInfo(employee) {
//   return (<div>
//     <p><label>Employee ID: <b>{employee.id}</b></label> </p>
//     <p> <label>Employee Name: <b>{employee.name}</b> </label> </p>
//     <p> <label> Employee Location: <b>{employee.location}</b></label></p>
//     <p><label>Employee Salary: <b>{employee.salary}</b></label></p>
//     <br></br>
//     <DeptInfo deptname={employee.deptname} depthead={employee.depthead}></DeptInfo>
//   </div>
//   );
// }
// const DeptInfo = (dept) => {
//   return <div>
//     <p>Dept Name:<b>{dept.deptname}</b></p>
//     <p>Dept Head:<b>{dept.depthead}</b></p>
//   </div>
// }
// const empElement = (<DisplayEmpInfo id="1" name="codebaseline" location="Pune" salary="34570"
//   deptname="Computers" depthead="Alex">

// </DisplayEmpInfo>
// );
// ReactDOM.render(empElement, document.getElementById("root"));
//end #4


//React Element 1

//const element1 = <h1>Welcome To codebaseline tutorials..</h1>;
//ReactDOM.render(element1, document.getElementById("root"));

//const element1 = <h1>A simple header text</h1>;
//ReactDOM.render(element2, document.getElementById("root2"));

// const element3 = (
//   <div>
//     <h1>Welcome To codebaseline tutorials..</h1>
//     <h1>A simple header text</h1>
//   </div>
// );
// ReactDOM.render(element3, document.getElementById("root"));

//React Element 2
// const reactElement = React.createElement(
//   "div",
//   null,
//   React.createElement("h1", null, "This elements is created by react."),
//   React.createElement("h1", null, "Second Div.")
// );
// ReactDOM.render(reactElement, document.getElementById("root"));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

