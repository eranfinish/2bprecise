import React from 'react'

const char = (props) =>{
//    console.log("In Char!");
return ( 
    <div className="char" onClick={
        props.click
    } 
    id={props.key}>
    { props.vchar }    
    </div>
)


}
export default char;
