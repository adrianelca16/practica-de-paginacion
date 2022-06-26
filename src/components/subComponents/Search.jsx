import React, { useState } from 'react'

const Search = ({setSearchLocation}) => {
  
  const changeLocation = e => {
    e.preventDefault()
    setSearchLocation(e.target.children[0].value)
  }

  return (
    <form onSubmit={changeLocation} className='form-search'>
        <input type="text" 
        className='input-search' 
        placeholder='type the location ID between 1 to 126'
        maxLength={3}/>
        <button className='btn-search'>Search</button>
    </form>
  )
}

export default Search