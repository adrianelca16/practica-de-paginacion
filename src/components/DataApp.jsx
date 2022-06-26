import React, { useState } from 'react'
import Pagination from './Pagination'
import LocationData from './subComponents/LocationData'
import Resident from './subComponents/Resident'
import Search from './subComponents/Search'

const DataApp = ({location, setSearchLocation}) => {

  const [currentPage, setCurrentPage] = useState(1)

  let arrayResidents = []
  const residentPerPage = 6

  if(location?.residents.length < residentPerPage){
    arrayResidents = [...location?.residents]
  }else{
    const lastResident = currentPage * residentPerPage
    arrayResidents = location?.residents.slice(lastResident - residentPerPage, lastResident)
  }

  let arrayPages = []
  let quantityPages = Math.ceil(location?.residents.length / residentPerPage)
  const pagesPerBlock = 5
  let currentBlock = Math.ceil(currentPage / pagesPerBlock)

  if(currentBlock * pagesPerBlock >= quantityPages){
    for(let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= quantityPages; i++){
      arrayPages.push(i)
    }
  }else{
    for(let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= currentBlock * pagesPerBlock; i++){
      arrayPages.push(i)
    }
  }

  console.log(arrayPages)
  return (
    <div className='div-principal'>
        <Search setSearchLocation={setSearchLocation}/>
        <LocationData location={location}/>
        <div className='residents'>
            {arrayResidents?.map(resident => (
                <Resident key={resident}
                resident={resident}/>
                ))}
        </div>
        <Pagination 
        arrayPages={arrayPages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        quantityPages={quantityPages}/>
    </div>
  )
}

export default DataApp