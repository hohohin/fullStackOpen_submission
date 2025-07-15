import { useEffect, useState } from 'react'
import './App.css'
import server from './service/server'
import DisplayList from './components/DisplayList'
import DisplayOne from './components/DisplayOne'


function App() {
  const [search,setSearch] = useState('')
  const [countries,setCountries] = useState([])
  const [showAll,setShowAll] = useState(true)
  const [showOne,setOne] = useState('')

  useEffect(()=>{
    server.getAll()
    .then(countriesPromise=>{
      setCountries(countriesPromise)
      console.log('data loaded')
    })
  },[])

  const countriesBasic = countries.map(country=>({name: country.name.common, flag: country.flag}))
  const matches = countriesBasic.filter(c=>c.name.toLowerCase().includes(search))

  const handleSearch = (event) => {
      setSearch(event.target.value)
      setShowAll(true)
      setOne('')
  }

  const handleShow = (name) => {
    setShowAll(false)
    setOne(name)
  }

  const display = search
  ? <div>
    <DisplayList 
      countries={matches} 
      showAll={showAll} 
      handleShow={handleShow}
      setOne={setOne}/>
    <DisplayOne name={showOne} countries={countries}/>
    </div>
  : null
  
  return (
    <>
      <h1>🌍 COUNTRY INFO</h1>
      <input value={search} onChange={handleSearch} placeholder='begin your search'></input>
      {display}
    </>
  )
}

export default App
