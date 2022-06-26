import { useState } from 'react'
import './App.css'
import useApi from './hooks/useApi'
import {Spinner} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Loader from './components/Loader'
import DataApp from './components/DataApp'

function App() {
  
  const [searchLocation, setSearchLocation] = useState()

  const {location,isLoading} = useApi(searchLocation)
  return (
    <div className="App">
      <header className='header'>
        
      </header>
      <h1 className='title'>Rick and Morty wiki</h1>
      {
        isLoading?
        <Loader/>
        :
        <DataApp  
        location={location}
        setSearchLocation={setSearchLocation}
        />
      }
      
    </div>
  )
}

export default App
