import { useEffect, useState } from "react";

function ShowOne({name,getInfos}) {
    const [info,setInfo] = useState(null)

    useEffect(()=>{
        getInfos(name)
        .then(infos=>setInfo({...infos}))
        .catch(error=>console.log(error))
    },[])

    console.log(info)

    if(info){
        return(
            <>
            <h2>{info.name}</h2>
            <p>{info.capital[0]}</p>
            <p>{Object.values(info.languages)}</p>
            <img src={info.flag}></img>
            </>
        )
    }
    else{
        console.log('loading...')
    }
}

export default ShowOne