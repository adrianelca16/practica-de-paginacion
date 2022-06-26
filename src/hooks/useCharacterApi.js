import axios from "axios"
import { useEffect, useState } from "react"


const useCharacterApi = (resident) => {
    const [residentPopulation, setResidentPopulation] = useState()

  useEffect(() => {
    axios.get(resident)
    .then(res => setResidentPopulation(res.data))
    .catch(err => console.log(err))
  }, [])

  return {residentPopulation}
}

export default useCharacterApi