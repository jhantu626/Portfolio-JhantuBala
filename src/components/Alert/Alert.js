import React from 'react'

export default function Alert(props) {
    let lertType=props.alert.type;
  return (
    <div>
        <div className={"alert alert-"+lertType+" container col-md-4 my-3 text-center"} role="alert">
            {props.alert.msg}
        </div>
    </div>
  )
}
