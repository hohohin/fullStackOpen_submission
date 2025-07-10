import { useEffect, useState } from 'react'
import Search from './components/Searh'
import server from './service'
import Display from './components/Display'

function App() {
  const [search, setSearch] = useState('')
  const [countriesName,setNames] = useState([])

  const handleSearch = (event) => {
    const searching = event.target.value
    setSearch(event.target.value)
    // console.log(searching);
  }

  useEffect(()=>{
    server.getNames().then(names=>setNames(names))
  },[])


  // console.log(countriesName)
  // console.log('Name:',countriesName)

  return (
    <>
      <Search searching={search} handleSearch={handleSearch} />
      <Display search={search} countriesName={countriesName} />
    </>
  )
}

export default App
