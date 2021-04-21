import React , { useState} from 'react';
import EmployeeView from '../EmployeeView/EmployeeView';
import  './employee.css';
function Employee(props) {

const [viewDetails, setViewDetails] = useState(
 getViewDetails()
);
function getViewDetails(){
  return true;
}
function viewClickedHandler(){
  setViewDetails(!viewDetails);
}
  return (
    <tr>
    <td className="fname">{props.fName}</td>
    <td className="lname">{props.lName}</td>
    <td className="position">{props.position}</td>
    <td className="btn"><button onClick = {      
      viewClickedHandler}
        >View</button></td> 
<EmployeeView 
manager={props.manager}
fName ={props.fName}
lName = {props.lName}
 Tasks = {props.Tasks}
reports = {props.reports}
position = {props.position}
subordinates = {props.Subordinates}
isVisible = {!viewDetails}
//clicked = {viewClickedHandler}
//manager = {findNameByUserName(props, props.userName)}
    >
    </EmployeeView>
    </tr>
  );
}
export default Employee;
