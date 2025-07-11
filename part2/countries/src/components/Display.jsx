import ShowOne from "./ShowOne";


function Display({search, countriesName, getInfos}) {   
    if(search){
        // console.log('searching:',search);
        const countriesToShow = countriesName.filter(name=>name.toLowerCase().includes(search))

        if(countriesToShow.length>10){
            return <p>too many matches, narrow down your keyword</p>
        }
        else if (countriesToShow.length === 1){
            return <ShowOne name={countriesToShow[0]} getInfos={getInfos}/>
        }
        else{
            return(
                <div className="result">
                    {countriesToShow.map(country=>
                    <li key={country}>
                        <button>{country}</button>
                    </li>)}
                </div>
            )
        }
    }
    else{
        return <p>👆begin your search</p>    
    }
}
export default Display