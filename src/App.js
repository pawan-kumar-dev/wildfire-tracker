import Axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Map from './Components/Map'

import Header from './Components/Header'
import Loading from './Components/Loading'
function App() {
  const [data, setData] = useState([])
  const [load, setLoad] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      await Axios.get(`https://eonet.sci.gsfc.nasa.gov/api/v2.1/events`).then(
        (res) => {
          setData(res.data.events)
          setLoad(false)
        }
      )
    }
    fetchData()
  }, [])
  return (
    <div className="App">
      <Header />
      {load ? <Loading /> : <Map data={data} />}
    </div>
  )
}

export default App
