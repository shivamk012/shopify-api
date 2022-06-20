import React from 'react'

export default function product(props) {
  return (
    <div className='my-3'>
        <div className="card" style={{"width": "18rem"}}>
            <img className="card-img-top" src={props.imageurl} style={{"height" : "300px"}}/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
            </div>
        </div>
    </div>
  )
}
