import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useCharacterApi from '../../hooks/useCharacterApi'

const Resident = ({resident}) => {

  const {residentPopulation} = useCharacterApi(resident)

  let color
  
  if (residentPopulation?.status === 'unknown'){
    color = '#686b69'
  } else if (residentPopulation?.status === 'Alive'){
    color = '#148b42'
  }else{
    color = '#b12a08'
  }

  
  return (
    <div className='resident-card'>
      <img src={residentPopulation?.image} alt="" className='resident-img'/>
      <div className='resident-container-description'>
        <p className='resident-name'>{residentPopulation?.name}</p>
        <div className='resident-description'>
          <div className='resident-status' style={{backgroundColor: color}}></div>
          <p>{residentPopulation?.status} - {residentPopulation?.species}</p>
        </div>
        <div className='resident-container-description-details'>
          <p className='resident-subtitle'>origin</p>
          <p className='resident-description-description'>{residentPopulation?.origin.name}</p>
        </div>
        <div className='resident-container-description-details'>
          <p className='resident-subtitle'>episode where appear</p>
          <p className='resident-description-description'>{residentPopulation?.episode.length}</p>
        </div>
      </div>
    </div>
  )
}

export default Resident