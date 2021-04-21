import React from 'react'
import Char from '../Char/Char'


const chars = (props) =>{
    return (
        <div>{props.chars.map((val,index) => {
            return <Char 
            click = {() => props.delete(index)} 
            vchar = {val}
            index = {index}
            key = {val+index}>x</Char>
            
          })}</div>
    );
}
export default chars;