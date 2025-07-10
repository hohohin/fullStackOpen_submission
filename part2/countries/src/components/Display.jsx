function Display({search, countriesName}) {
    if(search){
        console.log('searching:',search);
        const countriesToShow = countriesName.filter(name=>name.toLowerCase().includes(search))

        function showOne() {
            return (
                <p>you found the one</p>
                
            )
        }

        function showTooMany() {
            return <p>too many matches, narrow down your keyword</p>
        }

        function showSelctions() {
            return(
                <div className="result">
                    {countriesToShow.map(country=>
                    <li key={country}><button>{country}</button></li>)}
                </div>
            )
        }

        if(countriesToShow.length>10){
            return showTooMany()
        }
        else if (countriesToShow.length === 1){
            return showOne()
        }
        else return showSelctions()
    }
    else{
        return <p>👆begin your search</p>    
    }
}
export default Display