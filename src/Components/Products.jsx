import React from 'react'
import Datetime from './Datetime'

export default function Products(props) {
  return (
    <div> 
        <div class="card">
            
         <div class="card-body">
           <h1 class="card-title">{props.name}</h1>
           <p className='p_name'>{props.type}</p>
           <p><Datetime/></p>
          
          </div>
          <img src={props.imgsrc} class="card-img-top" alt="mypics"/>
        </div>
  </div>
  )
}
