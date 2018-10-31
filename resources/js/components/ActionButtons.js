import React from 'react'

const ActionButtons = (props) => {
    console.log(props, 'test')
    return (
        <div className="float-right">
            <button className="btn btn-info ml-2 mt-2" onClick={props.view}>View</button>
            <button className="btn btn-warning ml-2 mt-2" onClick={props.edit}>Edit</button>
            <button className="btn btn-danger ml-2 mt-2">Delete</button>
        </div>
    )
}

export default ActionButtons