import React from 'react';
import Employee from '../Employee/Employee';

function Empolyees(props) {
 
    const findNameByUserName = (data, username) => {
      let el = data.users.find(el => el.Subordinates.find(s => s=== username)); // Possibly returns `undefined`
      // Possibly returns `undefined`
      console.log(el);
  if(typeof(el) === 'undefined'){
      return "";//el.fName +' '+ el.lName // so check result is truthy and extract `id`
    }
    return el.fName +' '+ el.lName;
  }
  return (
    <div>
    <table>
    <tbody>
    {props.users.map((val,index)=>{
    return <Employee
    manager = {findNameByUserName(props, val.userName)}
    fName = {val.fName}
    lName = {val.lName}
    position = {val.position}
    tasks = {val.Tasks}
    reports={val.reports}
    subordinates = {val.Subordinates}
    key = {val.userName}
    ></Employee>})}
    </tbody>
    </table>
    </div>
  );
}

export default Empolyees;
