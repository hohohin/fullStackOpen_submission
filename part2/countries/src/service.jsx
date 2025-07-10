import axio from 'axios'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'

function getAll(){
    return (
        axio.get(baseUrl)
        .then(response=>response.data)
        .catch(error=>console.log('error:',error))
    )
}

function getNames() {
    return getAll()
    .then(countries=>countries.map(country=>country.name.common))
    .catch(error=>console.log('error:',error))
}

export default {getAll,getNames}