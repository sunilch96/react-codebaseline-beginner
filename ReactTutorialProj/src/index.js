import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Employee from "./components/session7/Employee";
import App8 from "./components/session8/App8";
import App9 from "./components/session9/App9";
import App10 from "./components/session10/App10";
import Employee_11 from "./components/session11/Employee_11";
import Employee_12 from "./components/session12/Employee_12";

//12: Posting data from React to Rest API
const element_12 = <Employee_12></Employee_12>
ReactDOM.render(element_12, document.getElementById("root"));

//11: How to make REST API Calls from React App
//const element_11 = <Employee_11></Employee_11>
//ReactDOM.render(element_11, document.getElementById("root"));

//10: Iterating through list in react
//const element_10 = <App10></App10>
//ReactDOM.render(element_10, document.getElementById("root"));


//9: Interaction with react components
// const element_9 = <App9></App9>
// ReactDOM.render(element_9, document.getElementById("root"));


//8 React Component communication using context
// const element_8 = <App8></App8>
// ReactDOM.render(element_8, document.getElementById("root"));

//7 Interaction between react components
// const element_7 = <Employee Id="101" Name="Sunil"
//   Location="Pune" Salary="50000" BasicSalary="25000"
//   HRA="10000" SpecialAllowance="15000"></Employee>
// ReactDOM.render(element_7, document.getElementById("root"));


//#6.1 React States
// class MessageLength extends Component {
//   constructor() {
//     super()
//     this.state = { message: 'aa' }
//   }
//   onMessageChange(text) {
//     this.setState({ message: "Msg length is: " + text.length })
//   }
//   render() {
//     return <div>
//       <p>Enter Message: <input type="text" onChange={e => this.onMessageChange(e.target.value)}></input></p>
//       <p><label>{this.state.message}</label></p>
//     </div>
//   }
// }
// //const element = <MessageLength />
// //ReactDOM.render(element, document.getElementById("root"));

// class Student extends Component {
//   //counter = 0;
//   state = { counter: 0 }
//   addStudent = () => {
//     //this.counter = this.counter + 1;
//     //alert("Button Clicked Times: " + this.counter);

//     this.setState({ counter: this.state.counter + 1 });
//   }
//   render() {
//     return <div>
//       <h2>Welcome to Student Component...</h2>
//       <p>
//         <button onClick={this.addStudent}>Add Student</button>
//       </p>
//       {/* <p>button Clicked <b>{this.counter}</b> :times</p> */}
//       <p>button Clicked <b>{this.state.counter}</b> :times</p>
//     </div>
//   }
// }
// const element = <Student />
// ReactDOM.render(element, document.getElementById("root"));
//#6 End

//#5: React Class Coponents
// class DisplayEmpInfo extends Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (<div>
//       <p><label>Employee ID: <b>{this.props.id}</b></label> </p>
//       <p> <label>Employee Name: <b>{this.props.name}</b> </label> </p>
//       <p> <label> Employee Location: <b>{this.props.location}</b></label></p>
//       <p><label>Employee Salary: <b>{this.props.salary}</b></label></p>
//       <br></br>
//       <DeptInfo deptname={this.props.deptname} depthead={this.props.depthead}></DeptInfo>
//     </div>
//     );
//   }
// }
// class DeptInfo extends Component {
//   render() {
//     return <div>
//       <p>Dept Name:<b>{this.props.deptname}</b></p>
//       <p>Dept Head:<b>{this.props.depthead}</b></p>
//     </div>
//   }
// }
// const empElement = (<DisplayEmpInfo id="1" name="codebaseline" location="Pune" salary="34570"
//   deptname="Computers" depthead="Alex">

// </DisplayEmpInfo>
// );
// ReactDOM.render(empElement, document.getElementById("root"));
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
//   React.createElement("h2", null, "Second Div.")
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

