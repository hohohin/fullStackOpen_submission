import { useState, useEffect } from "react"
import server from "../server"

function TheCountry({name}) {
    const [country,setCountry] = useState(null)

    useEffect(()=>{
        console.log('getting the country');
        
      server.getOne(name).then(infos=>
        // console.log(infos.continents)
        setCountry({
        name:infos.name.common,
        capital:infos.capital[0],
        continents:infos.continents,
        languages:Object.values(infos.languages),
        flag:infos.flags.png
        })
      )
    },[])
    
    if(country){
        return(
            <>
            <h2>{country.name}</h2>
            <p>capital  <strong>{country.capital}</strong></p>
            <ul className="smallist">continents{country.continents.map(c=><li key={c}>{c}</li>)}</ul>
            <ul className="smallist">languages{country.languages.map(lan=><li key={lan}>{lan}</li>)}</ul>
            <img src={country.flag} />
            </>
    )}
    else{console.log('loading');
    }
}

export default TheCountry