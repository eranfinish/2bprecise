import React from 'react'

const validation = (props) => {
let value  = props.Change;
return (
    <div >
    {value.length>=5?"Text Is Long Enough" : value.length === 0?'':"Text Is To Short!"}
    </div>
)

}

export default validation;