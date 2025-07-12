import DisplayOne from "./DisplayOne"

function DisplayList({countries, showAll, handleShow}) {
    if(showAll){
        if(countries.length>10){return <p>too many matches 😵‍💫</p>}
        else if(countries.length>1){
        return(
            <ul className="matchesNames">
                {countries.map(country=>
                <li key={country.name}>
                <button onClick={()=>handleShow(country.name)}>{country.flag}{country.name}</button>
                </li>)}
            </ul>
        )}
        else if(countries.length===1){
            return <DisplayOne name={countries[0].name} countries={countries}/>
        }
        else{return <p>no match🤔</p>}
    }
    else{
        return null
    }
}

export default DisplayList