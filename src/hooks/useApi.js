import axios from "axios"
import { useEffect, useState } from "react"


const useApi = (searchLocation) => {

    const [location, setLocation] = useState()
    const [isLoading, setIsLoading] = useState(true)
    let locationRandom
    
    useEffect(() => {

        if(searchLocation === undefined){
            locationRandom = Math.ceil(Math.random() * 126)

        }else{
            locationRandom = searchLocation
        }
        
        const URL = `https://rickandmortyapi.com/api/location/${locationRandom}`

        axios.get(URL)
        .then(res => {
            setLocation(res.data)
            setIsLoading(false)
        })
        .catch(err => console.log(err))

    }, [searchLocation])


  return {location,isLoading}
}

export default useApi