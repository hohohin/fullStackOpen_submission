import axio from 'axios'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

function getAll(){
    return (
        axio.get(`${baseUrl}/all`)
        .then(response=>response.data)
        .catch(error=>console.log('error:',error))
    )
}

function getNames() {
    console.log("all countries's names loaded");

    return getAll()
    .then(countries=>countries.map(country=>country.name.common))
    .catch(error=>console.log('error:',error))
}

function getInfos(name){
    return axio.get(`${baseUrl}/name/${name}`)
    .then(response=>{
        const infos = {
            name:response.data.name.common,
            capital:response.data.capital,
            languages:response.data.languages,
            flag:response.data.flags.png
        }
        return infos
    })
    .catch(error=>console.log('error:',error))
}

export default {getAll, getNames, getInfos}