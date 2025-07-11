import axio from 'axios'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

function getAll() {
    console.log('data loaded')
    return axio.get(`${baseUrl}/all`).then(response=>response.data)
}

function getOne(name) {
    return axio.get(`${baseUrl}/name/${name}`).then(response=>response.data)
}

export default {getAll, getOne}