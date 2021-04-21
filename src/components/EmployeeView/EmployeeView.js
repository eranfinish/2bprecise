import React from 'react';
import  './employeeView.css';
function EmployeeView(props) {
  var vsbl = true;
    return (
      <div className='viewer' style={{
        display : props.isVisible? (vsbl ?'none':'block'):'block'
      }}>
      <div className='close' 
      onClick={() =>{vsbl = false}}>x</div>
    <div className="img">
    <div className="img-wrapper">
    <img src={require('./img/avatar.jpg')} alt=''></img>
    </div> 
    </div>
  <div className="user-details">
  <div className="name">
  <div className="hdr-name">Name:</div>
  <div  className="val-name">
  {props.fName +" "+props.lName}
  </div>
  </div> 
  
  <div className="position">
  <div className="hdr-position">Position:</div>
  <div className="val-position">
  {props.position}
  </div>
  </div> 
  <hr></hr> 
  <div className="manager">
      <div className="hdr-manager">
      Manager:
      </div>
      <div className="val-manager">
      {props.manager}
      </div>
  </div> 
  </div>  
   if(props.Tasks !== []){
     <Tasks tasks={props.Tasks}></Tasks>
   }
   if(props.subordinates !==[]){
     <Subs subs></Subs>
   }
    </div>
    );
  }
  
  export default EmployeeView;
  