import React from 'react'
import {Spinner} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Loader = () => {
  return (

    
    <div className='loader'>
        <Spinner color='success'/>
        <p>Loading...</p>
    </div>
  )
}

export default Loader