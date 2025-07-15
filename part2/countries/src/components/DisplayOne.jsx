import { useEffect, useState } from "react"
import server from "../services/server"

function DisplayOne({name}) {
    const [info,setInfo] = useState(null)

    useEffect(()=>{
        if(name){
            server.getOne(name)
            .then(c=>setInfo(c))
            .catch(e=>console.log('error:',e))
        }
    },[name])

    if(name && info){
        // console.log(info);
        return(
            <div>
            <h3>{info.flag} {info.name.common}</h3>
            <h4>🎯capital</h4>
            <p>{info.capital[0]}</p>
            <h4>💬languages</h4>
            <ul>
                {Object.values(info.languages).map(lan=><li key={lan}>{lan}</li>)}
            </ul>
            <h4>🇺🇳 Flag</h4>
            <img src={info.flags.png} />
            </div>
        )
    }
    else{
        return null
    }
}

export default DisplayOne