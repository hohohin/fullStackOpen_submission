import { useEffect, useState } from 'react'
import server from './server'
import TheCountry from './components/TheCountry'

function App() {
  const [search,setSearch] = useState('')
  const [names,setNames] = useState([])
  const [showAll,setShowAll] = useState(true)
  const [which,showWhich] = useState('')

  useEffect(()=>{
    server.getAll()
    .then(infos=>{
      const namesArr = infos.map(info=>info.name.common)
      setNames(namesArr)
    })
    .catch(error=>console.log(error))
  },[])

  const handleSearch = (event) => {
    setSearch(event.target.value)
    if(showAll===false){setShowAll(true)}
  }

  const handleClick = (match) => {    
    setShowAll(false)
    showWhich(match)
  }

  function filter() {
    const matches = names.filter(name=>name.toLowerCase().includes(search))
    if(showAll){
      if (matches.length>10){
        return <p>too many matches🤯</p>
      }
      else if(matches.length>1){
        return matches.map(match=>
          <li className='matches' 
              key={match}>
              <button onClick={()=>handleClick(match)}>{match}</button>
          </li>)
      }
      else if(matches.length ===1){
        return <TheCountry name={matches[0]} />
      }
      else{
        return <p>search not found🤔</p>
      }
    }
    else return <TheCountry name={which} />
  }

  const display = search
  ? filter()
  : <p>begin your search🔍</p>

  return (
    <>
    <h1>Countries</h1>
    <div className='searchBox'>
      <input value={search} onChange={handleSearch}></input>
    </div>
    {display}
    </>
  )
}

export default App
